// core/settings.ts — 扩展设置（extensionSettings 全局；提示词模板/API三态/频率/开关）
import { readExtensionSettings, writeExtensionSettings } from '../../bridge/tavern';
import { 默认感情角色 } from './schema';

export const SETTINGS_KEY = '渐变带自由回路';

/* ── API 三态：跟随酒馆 或 自定义（同开局框架）── */
export interface ApiConfig {
  mode: 'tavern' | 'custom';
  proxy_preset?: string;
  apiurl?: string;
  key?: string;
  model?: string;
  source?: string;
  temperature?: number;
  max_tokens?: number;
}
export const 跟随酒馆: ApiConfig = { mode: 'tavern' };

/* ── 提示词分段（可编辑，占位符由调用方替换）── */
export interface PromptSegment { role: 'system' | 'user' | 'assistant'; content: string; enabled: boolean; note?: string }

/* ── 感情分析角色（不写死，后续女主照加）── */
export interface FeelCharacter {
  名称: string;
  enabled: boolean;
  fields: { 名: string; 类型: string; 说明: string }[];
}

export interface Settings {
  开关: {
    自动结算: boolean;       // 数据AI + settle，每条AI回复后
    感情分析: boolean;       // 感情分析AI
    状态栏标记: boolean;     // AI回复末尾追加 <StatusPlaceHolderImpl/>
  };
  频率: { 数据AI: number; 感情AI: number };   // 每N条AI回复一次，默认1
  api: { 数据AI: ApiConfig; 法术AI: ApiConfig; 感情AI: ApiConfig };
  感情角色: FeelCharacter[];
  提示词: { 数据AI: PromptSegment[]; 法术AI: PromptSegment[]; 感情AI: PromptSegment[] };
  窗口?: { x: number; y: number; w: number; h: number };   // 管理窗口位置尺寸（拖拽/缩放后持久化）
  悬浮球?: { x: number; y: number };                        // 悬浮球位置（拖拽后持久化）
}

export const STATUS_MARKER = '<StatusPlaceHolderImpl/>';

/** 默认提示词模板。占位符：{{状态}} {{正文}} {{出手单}} {{场景}} {{角色}} {{字段说明}} {{当前值}} {{描述}} {{参数}} {{亲和}} {{库索引}} */
export function 默认提示词() {
  const 数据AI: PromptSegment[] = [
    { role: 'system', enabled: true, note: '任务与铁律', content: `你是跑团系统的"数据AI"。你的唯一职责：阅读最新一轮正文，把它翻译成结构化状态变更包（JSON）。
铁律：
1. 你不做任何算术。施法消耗、自然恢复由本地脚本结算，你永远不要在"剧情数值变更"里报它们。
2. "剧情数值变更"只用于剧情特例（例如：被灌了魔素、NPC 强行喂了药剂、剧情奖励/损失），没有特殊剧情就输出空对象 {}。"精神上限"只在高强度突破/觉醒类剧情里才允许提高，一般剧情禁止动它。
3. 你只能报告事实，不能发明账单：只允许报告【槽位清单】里存在的回路 id。
4. 只输出 JSON，字段以下方 schema 为准，禁止新增任何字段（出现"删除物品/修改回路参数/修改亲和"等字段会被整包拒绝）。
5. "现在剧情时间"格式固定为"2026年11月12日，21：12"（年月日，时：分），从正文推断剧情当前时间；若正文未提及时间推进，就沿用【当前状态】里的剧情时间。
6. "新增补给"只允许恢复类补给品（如魔素晶体、药剂），必须自带明确效果与数值；剧情道具、武器、任务物品一律不要报。` },
    { role: 'system', enabled: true, note: '状态注入（脚本生成）', content: '【当前状态】\n{{状态}}' },
    { role: 'system', enabled: true, note: '场景（脚本生成）', content: '【场景】\n{{场景}}' },
    { role: 'system', enabled: true, note: '本回合出手单（脚本生成）', content: '【本回合出手单（回路id供你引用）】\n{{出手单}}' },
    { role: 'system', enabled: true, note: '最近正文（脚本生成）', content: '【最近正文】\n{{正文}}' },
    { role: 'user', enabled: true, note: '收尾指令', content: '请按 schema 输出本轮状态变更包 JSON。没有发生的字段输出空值（[]/{}/null），不要编造。' },
  ];
  const 法术AI: PromptSegment[] = [
    { role: 'system', enabled: true, note: '任务与铁律', content: `你是跑团系统的"法术AI"，负责审核玩家自创的施法回路是否合理。
审核的是物理可行性，不是亲和（亲和只影响价格，脚本管）。
通过标准：描述的作用对象+作用方式在世界观内可实现、参数向量与描述自洽。
驳回标准（举例）：媒介波没有介质（真空喊话）、明显违背物理常识、描述与参数对不上。
输出二选一（JSON）：
- 通过：{"结论":"通过","规范化回路":{"名称","一句话效果","效果文字稿"}}
- 驳回：{"结论":"驳回","解释":"通俗说明为什么不合理，直接展示给玩家"}
你不计费、不改任何状态表；名称必须是 2~7 字的中文短名。` },
    { role: 'system', enabled: true, note: '世界规则摘要', content: `世界规则摘要：五族（倾泻/波动/结构/生机/感知）按回路作用方式划分。波动系按物理本质分实体波（电磁波/引力波）、媒介波（声波/流体/地震，依赖介质）、场（电磁场/引力场/核力场）。核力场=强/弱相互作用，理论禁区级，能不驳就驳。结构系需要现场有无机物基底；生机系作用于有机体；感知系只读不写。` },
    { role: 'system', enabled: true, note: '玩家输入（脚本生成）', content: '【玩家描述】\n{{描述}}\n\n【构筑参数】\n{{参数}}\n\n【主角亲和分支（仅参考，不参与审核）】\n{{亲和}}\n\n【场景】\n{{场景}}\n\n【已有回路（查重用，重名/明显重复应要求改名）】\n{{库索引}}' },
    { role: 'user', enabled: true, note: '收尾指令', content: '请输出审核结果 JSON。' },
  ];
  const 感情AI: PromptSegment[] = [
    { role: 'system', enabled: true, note: '任务与铁律', content: `你是跑团系统的"感情分析AI"。你只负责跟踪一个角色的内心状态变化，阅读最新正文，输出该角色各追踪字段的最新值（JSON）。
规则：
1. 数值字段必须是整数，且只在有明确剧情依据时才变动（一般每次 ±1~3，重大事件可更大）。
2. 文本字段用一句话概括当前状态。
3. 没有变化的字段原样输出旧值；字段必须齐全，禁止增删字段。
4. 另给一个"依据"字段，引用正文依据（50字内）。` },
    { role: 'system', enabled: true, note: '角色与字段（脚本生成）', content: '【跟踪角色】{{角色}}\n\n【字段说明】\n{{字段说明}}\n\n【当前值】\n{{当前值}}' },
    { role: 'system', enabled: true, note: '最近正文（脚本生成）', content: '【最近正文】\n{{正文}}' },
    { role: 'user', enabled: true, note: '收尾指令', content: '请输出该角色的字段更新 JSON（含所有字段 + "依据"）。' },
  ];
  return { 数据AI, 法术AI, 感情AI };
}

export function 默认设置(): Settings {
  return {
    开关: { 自动结算: true, 感情分析: true, 状态栏标记: true },
    频率: { 数据AI: 1, 感情AI: 1 },
    api: { 数据AI: { mode: 'tavern' }, 法术AI: { mode: 'tavern' }, 感情AI: { mode: 'tavern' } },
    感情角色: JSON.parse(JSON.stringify(默认感情角色)),
    提示词: 默认提示词(),
  };
}

let cache: Settings | null = null;

export function loadSettings(): Settings {
  if (cache) return cache;
  const def = 默认设置();
  const raw = readExtensionSettings<Partial<Settings>>(SETTINGS_KEY, {});
  cache = {
    开关: { ...def.开关, ...(raw.开关 || {}) },
    频率: { ...def.频率, ...(raw.频率 || {}) },
    api: { ...def.api, ...(raw.api || {}) },
    感情角色: raw.感情角色?.length ? raw.感情角色 : def.感情角色,
    提示词: { ...def.提示词, ...(raw.提示词 || {}) },
    窗口: raw.窗口,
    悬浮球: raw.悬浮球,
  };
  return cache;
}

export function saveSettings(s: Settings): void {
  cache = s;
  writeExtensionSettings(SETTINGS_KEY, s);
}

export function resetSettingsCache(): void { cache = null; }
