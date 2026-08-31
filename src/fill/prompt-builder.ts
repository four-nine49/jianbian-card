// fill/prompt-builder.ts — 用占位符模板组装 ordered_prompts
//
// 核心：设置里的 promptTemplate.segments 是用户可自定义的提示词模板，
//   每段含占位符（{{table_data}} {{messages}} ...），这里替换为实际内容后输出 ordered_prompts。
//   段顺序即发送顺序；enabled=false 的段跳过。
//
// 分组调度：按表上的"填表分组"（updateConfig.group）拆请求——同组名的表合并成一次
//   generateRaw 调用（同一个 AI 一起填），不同组 / 留空与命名组之间互相隔离、各自单独发。
//   组内读取轮数与跳楼数取成员最大值，保证每张表都看够上下文。

import { Sheet, FrameworkSettings, GlobalDefaults, effectiveUpdateConfig } from '../store/types';
import { renderSheet } from './table-renderer';
import { buildMessagesText, MessagesTextOpts } from './messages-slice';
import { normalizeRules } from './context-filter';

export interface BuildContext {
  sheets: Sheet[];                 // 本次目标表
  settings: FrameworkSettings;
  floorInfo?: string;              // 元信息文本（层数等）
  worldbookText?: string;          // 预取的世界书内容（为空则该占位符渲染为空）
  charDescription?: string;
  personaDescription?: string;
}

export interface BuiltRequest {
  group: string;                   // 分组名（'' = 默认组）
  sheets: Sheet[];
  contextRounds: number;           // 本组实际读取的轮数（成员最大值）
  orderedPrompts: Array<{ role: 'system' | 'user' | 'assistant'; content: string }>;
}

/** 分组名展示（日志/报错用） */
export function groupLabel(group: string): string {
  return group || '默认组';
}

/** 按分组拆请求：每个组一次 API 调用 */
export function buildRequests(ctx: BuildContext): BuiltRequest[] {
  const groups = new Map<string, Sheet[]>();
  for (const s of ctx.sheets) {
    if (!s.updateConfig.enabled) continue;
    const g = (s.updateConfig.group || '').trim();
    if (!groups.has(g)) groups.set(g, []);
    groups.get(g)!.push(s);
  }

  const out: BuiltRequest[] = [];
  for (const [g, sheets] of groups) {
    out.push(buildOneRequest(g, sheets, ctx));
  }
  return out;
}

function buildOneRequest(group: string, sheets: Sheet[], ctx: BuildContext): BuiltRequest {
  const { settings, floorInfo } = ctx;
  const defaults = settings.globalDefaults;

  // 每张表的实际生效参数（a 档 = 全局默认；自定义 = 表自己的值）
  const effs = sheets.map(s => effectiveUpdateConfig(s, defaults));

  // 组内读取轮数：取成员最大值（保证每张表都看够）
  const contextRounds = Math.max(1, ...effs.map(e => e.contextRounds ?? defaults.contextRounds));

  // 表数据：逐表渲染（a 档的表按全局参数渲染 sendLatestRows / 行模板等）
  const tableDataText = sheets.map(s => renderSheet(s, { updateConfig: effectiveUpdateConfig(s, defaults) })).join('\n');
  const targetTablesText = sheets.map(s => `- ${s.name}（uid:${s.uid}，${s.rows.length} 行）`).join('\n');

  // 正文：标签过滤按各表生效值的并集（保守策略：任一表要摘的都摘）
  const extractRules = effs.flatMap(e => normalizeRules(e.extractRules, e.extractTags));
  const excludeRules = effs.flatMap(e => normalizeRules(e.excludeRules, e.excludeTags));
  const skipFloors = Math.max(0, ...effs.map(e => e.skipFloors ?? 0), defaults.skipFloors);
  const messagesText = buildMessagesText({ contextRounds, skipFloors, extractRules, excludeRules } as MessagesTextOpts);

  // 占位符字典
  const vars: Record<string, string> = {
    '{{instructions}}': settings.promptTemplate.instructions || '',
    '{{table_data}}': tableDataText,
    '{{messages}}': messagesText,
    '{{worldbook}}': ctx.worldbookText || '',
    '{{char_description}}': ctx.charDescription || '',
    '{{persona_description}}': ctx.personaDescription || '',
    '{{target_tables}}': targetTablesText,
    '{{floor_info}}': floorInfo || '',
  };

  const orderedPrompts = settings.promptTemplate.segments
    .filter(seg => seg.enabled)
    .map(seg => ({ role: seg.role, content: replacePlaceholders(seg.content, vars) }));

  return { group, sheets, contextRounds, orderedPrompts };
}

/** 替换占位符（已带 {{}} 包裹）；未匹配的保留原样，便于面板调试发现拼错 */
function replacePlaceholders(content: string, vars: Record<string, string>): string {
  return content.replace(/\{\{[^}]+\}\}/g, m => (Object.prototype.hasOwnProperty.call(vars, m) ? vars[m] : m));
}
