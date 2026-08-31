// pipeline/spell-ai.ts — 法术AI：自由描述送审 → 通过=规范化入库素材 / 驳回=解释
// 真AI失败/未启用时降级到引擎 localJudge（离线兜底，签名兼容）。
import { loadSettings } from '../core/settings';
import { recentStory, callAI } from './ai-common';
import { 抽取JSON } from './contract';
import { serialize亲和, serialize场景, serialize库索引 } from './serialize';
import { localJudge, readableParams } from '../engine/engine';
import type { 游戏 } from '../core/schema';

const SCHEMA = {
  name: 'spell_review',
  value: {
    type: 'object',
    properties: {
      结论: { type: 'string', enum: ['通过', '驳回'] },
      规范化回路: {
        type: ['object', 'null'],
        properties: {
          名称: { type: 'string', description: '2~7字中文短名' },
          一句话效果: { type: 'string' },
          效果文字稿: { type: 'string' },
        },
        required: ['名称', '一句话效果'],
        additionalProperties: false,
      },
      解释: { type: ['string', 'null'], description: '驳回时给玩家看的解释' },
    },
    required: ['结论', '规范化回路', '解释'],
    additionalProperties: false,
  },
};

export interface 送审输入 {
  desc: string;                                        // 玩家自由描述原文
  famKey: 'pour' | 'flow' | 'struct' | 'life' | 'perce';
  params: Record<string, number>;                      // 面板当前参数向量
  effect?: string;                                     // 引擎算出的一句话效果（附给AI参考）
}

export interface 送审结果 {
  结论: '通过' | '驳回';
  规范化回路?: { 名称: string; 一句话效果: string; 效果文字稿?: string; 参数向量?: Record<string, number> };
  解释?: string;
  来源: '法术AI' | '本地兜底';
}

export async function runSpellAI(g: 游戏, input: 送审输入): Promise<送审结果> {
  const settings = loadSettings();
  const 参数可读 = readableParams(input.famKey, input.params);
  const vars = {
    描述: input.desc,
    参数: JSON.stringify({ 族: input.famKey, 参数明细: 参数可读, 引擎参考效果: input.effect ?? '' }, null, 1),
    亲和: serialize亲和(g),
    场景: serialize场景(g),
    库索引: serialize库索引(g),
  };
  if (settings.api.法术AI.mode !== 'custom' && settings.api.法术AI.mode !== 'tavern') {
    return 兜底(input);
  }
  try {
    const raw = await callAI({ which: '法术AI', segments: settings.提示词.法术AI, vars, jsonSchema: SCHEMA, generationId: `gb_spell_${Date.now()}` });
    const json = 抽取JSON(raw);
    if (json?.结论 === '通过' && json.规范化回路?.名称) {
      return { 结论: '通过', 规范化回路: json.规范化回路, 来源: '法术AI' };
    }
    if (json?.结论 === '驳回') return { 结论: '驳回', 解释: json.解释 || '（未给出理由）', 来源: '法术AI' };
    return 兜底(input);
  } catch {
    return 兜底(input);
  }
}

/** 离线兜底：引擎内置判别 mock */
function 兜底(input: 送审输入): 送审结果 {
  const res = localJudge({ desc: input.desc, fam: input.famKey, entity: null, params: input.params, effect: input.effect, scene: {} });
  if (res['结论'] === '通过') {
    const nn = res['规范化回路'];
    return { 结论: '通过', 规范化回路: { 名称: String(nn?.['名'] ?? '未名回路'), 一句话效果: String(nn?.['一句话效果'] ?? input.effect ?? ''), 效果文字稿: input.desc, 参数向量: input.params }, 来源: '本地兜底' };
  }
  return { 结论: '驳回', 解释: String(res['解释'] ?? ''), 来源: '本地兜底' };
}

/** 正文引用（法术AI提示词模板里留了 {{正文}} 占位时可用） */
export function _unusedStory(): string { return recentStory(2); }
