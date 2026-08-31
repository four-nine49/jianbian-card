// pipeline/feel-ai.ts — 感情分析AI：按角色跟踪内心状态字段（可配置，不写死——后续女主照加）
import { loadSettings, type FeelCharacter } from '../core/settings';
import { recentStory, callAI } from './ai-common';
import { 抽取JSON } from './contract';
import type { 游戏 } from '../core/schema';

export function 角色JSONSchema(ch: FeelCharacter) {
  const props: Record<string, any> = {};
  const required: string[] = [];
  for (const f of ch.fields) {
    props[f.名] = f.类型 === 'number' ? { type: 'integer' } : { type: 'string' };
    required.push(f.名);
  }
  props['依据'] = { type: 'string', description: '50字内的正文依据' };
  required.push('依据');
  return {
    name: `feel_${ch.名称}`,
    value: { type: 'object', properties: props, required, additionalProperties: false },
  };
}

export interface 感情结果 { ok: boolean; error?: string; 更新?: Record<string, any>; 角色: string }

export async function runFeelAI(g: 游戏, ch: FeelCharacter): Promise<感情结果> {
  const settings = loadSettings();
  const current = g.感情追踪?.[ch.名称] ?? {};
  const 字段说明 = ch.fields.map(f => `- ${f.名}（${f.类型 === 'number' ? '整数' : '一句话'}）：${f.说明}`).join('\n');
  const 当前值 = ch.fields.map(f => `- ${f.名}: ${current[f.名] ?? (f.类型 === 'number' ? 0 : '')}`).join('\n');
  const vars = { 角色: ch.名称, 字段说明, 当前值, 正文: recentStory(4) };
  try {
    const raw = await callAI({ which: '感情AI', segments: settings.提示词.感情AI, vars, jsonSchema: 角色JSONSchema(ch), generationId: `gb_feel_${Date.now()}` });
    const json = 抽取JSON(raw);
    if (!json) return { ok: false, error: '感情AI输出无法解析', 角色: ch.名称 };
    const 更新: Record<string, any> = {};
    for (const f of ch.fields) {
      let v = json[f.名];
      if (f.类型 === 'number') {
        v = Math.round(Number(v));
        if (!Number.isFinite(v)) v = Number(current[f.名] ?? 0);   // 坏值回退旧值
      } else {
        v = String(v ?? current[f.名] ?? '');
      }
      更新[f.名] = v;
    }
    g.感情追踪 ??= {};
    g.感情追踪[ch.名称] = { ...(g.感情追踪[ch.名称] ?? {}), ...更新 };
    return { ok: true, 更新: { ...更新, 依据: json['依据'] }, 角色: ch.名称 };
  } catch (e: any) {
    return { ok: false, error: '感情AI调用失败：' + (e?.message ?? e), 角色: ch.名称 };
  }
}
