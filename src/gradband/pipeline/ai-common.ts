// pipeline/ai-common.ts — AI 调用公共层：API 三态 + 分段提示词组装 + json_schema 生成
import { generateRaw, substituteParams, getChatMessages } from '../../bridge/tavern';
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

/** 调一次生成（json_schema 强制结构化），返回原始文本 */
export async function callAI(opts: {
  which: '数据AI' | '法术AI' | '感情AI';
  segments: PromptSegment[];
  vars: Record<string, string>;
  jsonSchema: { name: string; value: any };
  generationId: string;
}): Promise<string> {
  const settings = loadSettings();
  const ordered = 组装提示词(opts.segments, opts.vars).map(s => ({ role: s.role, content: substituteParams(s.content) }));
  const result = await generateRaw({
    ordered_prompts: ordered,
    should_stream: false,
    should_silence: true,
    generation_id: opts.generationId,
    custom_api: customApiOf(settings.api[opts.which]),
    json_schema: opts.jsonSchema,
  });
  return typeof result === 'string' ? result : JSON.stringify(result);
}

/** 最近正文（按"轮"取，默认 4 轮；剥掉状态栏标记与 HTML 码块） */
export function recentStory(maxRounds = 4): string {
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
  return rounds.join('\n\n') || '（暂无正文）';
}
