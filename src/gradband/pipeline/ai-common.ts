// pipeline/ai-common.ts — AI 调用公共层：API 三态 + 分段提示词组装 + json_schema 生成
// 生成调用复用开局框架的 callGenerate（generateRaw 封装：stream 开关/错误处理/tool_calls 兜底）
import { substituteParams, getChatMessages } from '../../bridge/tavern';
import { callGenerate } from '../../fill/api-call';
import type { ApiConfig, PromptSegment } from '../core/settings';
import { loadSettings } from '../core/settings';

export function 组装提示词(segments: PromptSegment[], vars: Record<string, string>): { role: string; content: string }[] {
  return segments
    .filter(s => s.enabled)
    .map(s => {
      let content = s.content;
      for (const [k, v] of Object.entries(vars)) content = content.split(`{{${k}}}`).join(v);
      return { role: s.role, content };
    });
}

export function customApiOf(cfg: ApiConfig): any | undefined {
  if (!cfg || cfg.mode !== 'custom') return undefined;
  const api: any = {};
  if (cfg.proxy_preset) api.proxy_preset = cfg.proxy_preset;
  if (cfg.apiurl) api.apiurl = cfg.apiurl;
  if (cfg.key) api.key = cfg.key;
  if (cfg.model) api.model = cfg.model;
  if (cfg.source) api.source = cfg.source;
  if (typeof cfg.temperature === 'number') api.temperature = cfg.temperature;
  if (typeof cfg.max_tokens === 'number') api.max_tokens = cfg.max_tokens;
  return Object.keys(api).length ? api : undefined;
}

/** 调一次生成（json_schema 强制结构化），返回原始文本；失败抛错（调用方 try/catch 处理） */
export async function callAI(opts: {
  which: '数据AI' | '法术AI' | '感情AI';
  segments: PromptSegment[];
  vars: Record<string, string>;
  jsonSchema: { name: string; value: any };
  generationId: string;
}): Promise<string> {
  const settings = loadSettings();
  const ordered = 组装提示词(opts.segments, opts.vars).map(s => ({ role: s.role, content: substituteParams(s.content) }));
  const r = await callGenerate({
    orderedPrompts: ordered,
    jsonSchema: opts.jsonSchema,
    customApi: customApiOf(settings.api[opts.which]),
    generationId: opts.generationId,
  });
  if (!r.ok || !r.text) throw new Error(r.error || 'AI 返回为空');
  return r.text;
}

/** 按"轮"取最近正文（默认 4 轮；剥掉状态栏标记与 HTML 码块），返回按时间正序的轮数组 */
function recentRounds(maxRounds: number): string[] {
  const msgs = getChatMessages('0-{{lastMessageId}}') || [];
  const rounds: string[] = [];
  let count = 0;
  for (let i = msgs.length - 1; i >= 0 && count < maxRounds; i--) {
    const m = msgs[i];
    const text = (m.message || '').replace(/<StatusPlaceHolderImpl\/>/g, '').replace(/```[\s\S]*?```/g, '').trim();
    if (!text) continue;
    rounds.unshift((m.is_user ? '【玩家】' : '【AI】') + text.slice(0, 3000));
    if (!m.is_user) count++;   // 一个 AI 楼算一轮结束
  }
  return rounds;
}

/** 最近正文（平铺，感情AI 等仍用此格式） */
export function recentStory(maxRounds = 4): string {
  return recentRounds(maxRounds).join('\n\n') || '（暂无正文）';
}

/**
 * 分层正文（数据AI 用）：前文背景 + 本轮待结算正文。
 * 理由：只给 1 轮会丢玩家施法意图（跨回合生效）；无差别给多轮会导致"历史重复清算/回声结算"（前几轮动作被重复提取）。
 * 解法：背景轮仅供理解意图/因果/时间差，最新一轮单独标记为唯一提取源（配合提示词"事件范围铁律"）。
 */
export function recentStoryLayered(maxRounds = 4): { bg: string; latest: string } {
  const rounds = recentRounds(maxRounds);
  const latest = rounds.pop() || '';   // 最新一轮（含最新玩家动作 + AI 判定）
  return { bg: rounds.join('\n\n'), latest };
}
