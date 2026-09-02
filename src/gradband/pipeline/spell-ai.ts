// pipeline/spell-ai.ts — 法术AI：自由描述送审 → 通过=规范化入库素材 / 驳回=解释
// 真AI失败/未启用时降级到引擎 localJudge（离线兜底，签名兼容）。
import { loadSettings } from '../core/settings';
import { recentStory, callAI } from './ai-common';
import { 抽取JSON } from './contract';
import { serialize亲和, serialize场景 } from './serialize';
import { localJudge, readableParams, FAMS, SUBS, SUBKEYS, curKey, syncParams, initParams } from '../engine/engine';
import type { 游戏 } from '../core/schema';
import type { PromptSegment } from '../core/settings';

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

/* ═══════════════════ 剧情获得送审（法术AI 据"一句话效果"填参数向量） ═══════════════════ */

/** 某族参数模板（给法术AI 填参数用）：顶层参数 + （flow）子实体参数 + 默认参数 */
export function 参数模板JSON(famKey: string): string {
  const F: any = (FAMS as any)[famKey];
  const 顶层: any[] = [];
  for (const ctl of F.ctrls) {
    顶层.push({ key: ctl.k, label: ctl.label, type: ctl.type, opts: ctl.opts ?? null, min: ctl.min ?? null, max: ctl.max ?? null, def: ctl.def });
  }
  if (famKey !== 'flow') {
    return JSON.stringify({ 族: famKey, 默认参数: initParams(famKey), 参数: 顶层 }, null, 1);
  }
  const 子实体: any[] = [];
  for (const key of (SUBKEYS as any).flat()) {
    const s: any = (SUBS as any)[key];
    if (!s) continue;
    子实体.push({ key, 名称: s.n, 参数: s.ctrls.map((c: any) => ({ key: c.k, label: c.label, type: c.type, opts: c.opts ?? null, min: c.min ?? null, max: c.max ?? null, def: c.def })) });
  }
  return JSON.stringify({
    族: famKey,
    说明: 'flow 系需先定 mode(作用模态：实体波/媒介波/场) 与 sub(操纵实体)，再填对应子实体的参数。',
    默认参数: initParams(famKey),
    顶层参数: 顶层,
    子实体参数: 子实体,
  }, null, 1);
}

/** 钳制参数向量到引擎合法范围（seg 钳到 opts 下标，range 钳到 min/max），删非法键 */
export function 钳制参数(famKey: string, cIn: Record<string, any>): Record<string, number> {
  const merged: Record<string, any> = { ...(syncParams(famKey, cIn) as any) };
  const 合法键 = new Set<string>();
  const clamp = (ctl: any) => {
    合法键.add(ctl.k);
    if (ctl.type === 'seg') merged[ctl.k] = Math.max(0, Math.min((ctl.opts?.length ?? 1) - 1, Math.round(Number(merged[ctl.k]) || 0)));
    else if (ctl.type === 'range') merged[ctl.k] = Math.max(ctl.min ?? 0, Math.min(ctl.max ?? 100, Number(merged[ctl.k]) || ctl.def || 0));
  };
  const F: any = (FAMS as any)[famKey];
  for (const ctl of F.ctrls) clamp(ctl);
  if (famKey === 'flow') {
    const key = (curKey as any)(merged) || '1-1';
    for (const ctl of ((SUBS as any)[key] || {}).ctrls || []) clamp(ctl);
  }
  const out: Record<string, number> = {};
  for (const [k, v] of Object.entries(merged)) if (合法键.has(k)) out[k] = Number(v);
  return out;
}

export interface 剧情送审结果 {
  ok: boolean;
  参数向量?: Record<string, number>;
  名称?: string;
  一句话效果?: string;
  解释?: string;
}

/** 剧情获得回路送审：法术AI 审核物理可行性 + 填参数向量；失败/未启用降级本地兜底（默认参数） */
export async function 送审剧情获得(g: 游戏, item: { 族: string; 一句话效果: string }): Promise<剧情送审结果> {
  const settings = loadSettings();
  const famKey = item.族 as 'pour' | 'flow' | 'struct' | 'life' | 'perce';
  const 模板 = 参数模板JSON(famKey);
  const 兜底 = localJudge({ desc: item.一句话效果, fam: famKey, entity: null, params: initParams(famKey), effect: item.一句话效果, scene: {} });

  if (settings.api.法术AI.mode !== 'custom' && settings.api.法术AI.mode !== 'tavern') {
    if (兜底['结论'] === '通过') {
      return { ok: true, 参数向量: initParams(famKey) as Record<string, number>, 名称: String(兜底['规范化回路']?.['名'] ?? (item.一句话效果.slice(0, 6) || '未名回路')), 一句话效果: item.一句话效果 };
    }
    return { ok: false, 解释: String(兜底['解释'] ?? '') };
  }

  const SCHEMA = {
    name: 'grant_review',
    value: {
      type: 'object',
      properties: {
        结论: { type: 'string', enum: ['通过', '驳回'] },
        规范化回路: {
          type: ['object', 'null'],
          properties: {
            名称: { type: 'string', description: '2~7字中文短名' },
            一句话效果: { type: 'string' },
            参数向量: { type: 'object', description: '该族参数键值（数值）；只填你判断的关键键，缺省键脚本用默认' },
          },
          required: ['名称', '一句话效果', '参数向量'],
          additionalProperties: false,
        },
        解释: { type: ['string', 'null'] },
      },
      required: ['结论', '规范化回路', '解释'],
      additionalProperties: false,
    },
  };

  const segs: PromptSegment[] = [
    ...settings.提示词.法术AI,
    { role: 'user', enabled: true, note: '剧情获得填参指令', content: '【剧情获得回路：据"一句话效果"审核物理可行性，并填出该族合理的参数向量】\n{{描述}}\n\n【该族参数模板】\n{{参数}}\n\n【亲和（仅参考）】\n{{亲和}}\n\n【场景】\n{{场景}}\n\n请只输出审核结果 JSON；若通过，规范化回路必须含"参数向量"（没把握的键可省略，脚本用默认补齐）。' },
  ];
  const vars = {
    描述: item.一句话效果,
    参数: 模板,
    亲和: serialize亲和(g),
    场景: serialize场景(g),
  };

  try {
    const raw = await callAI({ which: '法术AI', segments: segs, vars, jsonSchema: SCHEMA, generationId: `gb_grant_${Date.now()}` });
    const json = 抽取JSON(raw);
    if (json?.结论 === '通过' && json.规范化回路?.参数向量) {
      const params = 钳制参数(famKey, json.规范化回路.参数向量 as Record<string, any>);
      return { ok: true, 参数向量: params, 名称: String(json.规范化回路.名称 || ''), 一句话效果: String(json.规范化回路.一句话效果 || item.一句话效果) };
    }
    return { ok: false, 解释: json?.解释 || '法术AI 未给出可解析结论' };
  } catch {
    if (兜底['结论'] === '通过') {
      return { ok: true, 参数向量: initParams(famKey) as Record<string, number>, 名称: String(兜底['规范化回路']?.['名'] ?? (item.一句话效果.slice(0, 6) || '未名回路')), 一句话效果: item.一句话效果 };
    }
    return { ok: false, 解释: '法术AI 不可用，本地兜底驳回：' + String(兜底['解释'] ?? '') };
  }
}
