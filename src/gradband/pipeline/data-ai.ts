// pipeline/data-ai.ts — 数据AI：正文 → 6.2 变更包（json_schema 强制）→ 契约校验
import { loadSettings } from '../core/settings';
import { recentStory, callAI } from './ai-common';
import { 抽取JSON, 校验变更包, type 变更包 } from './contract';
import { serialize数据AI, serialize场景, 出手单文本 } from './serialize';
import type { 游戏 } from '../core/schema';

const SCHEMA = {
  name: 'state_change_pack',
  value: {
    type: 'object',
    properties: {
      现在剧情时间: { type: 'string', description: '格式：2026年11月12日，21：12' },
      本轮使用回路: {
        type: 'array',
        items: {
          type: 'object',
          properties: { 回路: { type: 'string', description: '槽位清单里的回路 id' }, 次数: { type: 'integer', minimum: 1, description: '本回合使用次数，必须为精确数字' } },
          required: ['回路', '次数'],
          additionalProperties: false,
        },
      },
      剧情数值变更: {
        type: 'object',
        properties: {
          能量: { type: 'number' }, 精神: { type: 'number' },
          能量上限: { type: 'number' }, 精神上限: { type: 'number', description: '仅突破/觉醒类剧情允许提高' },
        },
        additionalProperties: false,
      },
      身体: {
        type: ['object', 'null'],
        properties: { 状态: { type: 'string', enum: ['正常', '轻伤', '重伤', '过载透支'] } },
        required: ['状态'],
        additionalProperties: false,
      },
      战斗中: { type: ['boolean', 'null'] },
      新增补给: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            名称: { type: 'string' },
            数量: { type: 'integer', minimum: 1 },
            效果: {
              type: 'object',
              properties: { 目标: { type: 'string', enum: ['能量', '精神'] }, 增加kJ: { type: 'number' }, 增加点: { type: 'number' } },
              required: ['目标'],
              additionalProperties: false,
            },
          },
          required: ['名称', '数量', '效果'],
          additionalProperties: false,
        },
      },
      场景变更: {
        type: ['object', 'null'],
        properties: {
          风力档: { type: 'number', description: '0/40/70/95 之一' },
          可塑无机物kJ: { type: 'number' },
          水体在场: { type: 'boolean' },
        },
        additionalProperties: false,
      },
    },
    required: ['现在剧情时间', '本轮使用回路', '剧情数值变更', '身体', '战斗中', '新增补给', '场景变更'],
    additionalProperties: false,
  },
};

export interface 数据AI结果 {
  ok: boolean;
  pack?: 变更包;
  error?: string;
  raw?: string;
  忽略的回路: { 回路: string; 次数: number; 原因: string }[];
}

/** 调用数据AI并校验。失败（API错/JSON坏/契约拒）返回 ok:false。 */
export async function runDataAI(g: 游戏): Promise<数据AI结果> {
  const settings = loadSettings();
  const segments = settings.提示词.数据AI;
  const vars = {
    状态: serialize数据AI(g),
    场景: serialize场景(g),
    出手单: g.待扣单.length ? g.待扣单.map(p => `${p.ref}《${p.名称}》`).join('\n') : '（本回合无施放）',
    正文: recentStory(4),
  };
  let raw: string;
  try {
    raw = await callAI({ which: '数据AI', segments, vars, jsonSchema: SCHEMA, generationId: `gb_data_${Date.now()}` });
  } catch (e: any) {
    return { ok: false, error: '数据AI调用失败：' + (e?.message ?? e), 忽略的回路: [] };
  }
  const json = 抽取JSON(raw);
  if (json == null) return { ok: false, error: '数据AI输出无法解析为 JSON', raw, 忽略的回路: [] };
  const verdict = 校验变更包(json, g);
  if (!verdict.ok) return { ok: false, error: verdict.error, raw, 忽略的回路: verdict.忽略的回路 };
  return { ok: true, pack: verdict.data, raw, 忽略的回路: verdict.忽略的回路 };
}
