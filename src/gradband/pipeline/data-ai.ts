// pipeline/data-ai.ts — 数据AI：正文 → 6.2 变更包（json_schema 强制）→ 契约校验
import { loadSettings } from '../core/settings';
import { recentStoryLayered, callAI } from './ai-common';
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
          爆发线: { type: 'number', description: '只能为正（提高），仅训练/战斗类剧情，一次 1~5' },
          持续线: { type: 'number', description: '只能为正（提高），仅训练/战斗类剧情，一次 1~5' },
        },
        additionalProperties: false,
      },
      身体: {
        type: ['object', 'null'],
        properties: { 状态: { type: 'string', enum: ['正常', '轻伤', '重伤', '过载透支'] } },
        required: ['状态'],
        additionalProperties: false,
      },
      战斗中: { type: ['boolean', 'null'], description: '仅当存在有敌意的生物时才算 true：追击/被追击、遭遇战都算；正常切磋/训练对练不算；无战斗场面输出 null' },
      新增补给: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            名称: { type: 'string', description: '只允许 4 类：魔素晶体 / 魔素导液 / 快速生化止血喷雾 / 仿生神经桥接贴片' },
            数量: { type: 'integer', minimum: 1 },
            纯度: { type: 'number', minimum: 0, maximum: 99.99, description: '仅魔素晶体/魔素导液需要（0-99.99%，<80民用/80-99管控/≥99战略）；创伤补给严禁填' },
            克数: { type: 'number', minimum: 0, description: '仅魔素晶体需要：单颗克重 g（如 2.0）；创伤补给严禁填。正文无数字时按来源场景推断：地摊/民用 1.0~3.0g（缺省2.0）；军用 0.5~1.5g（缺省1.0）；绝密设施 0.01~0.1g 微量（严禁整克）' },
            容量ml: { type: 'number', minimum: 0, description: '仅魔素导液需要：单安瓿容量 ml（如 13）；创伤补给严禁填。正文无数字时按来源场景推断：地摊/民用 20~50ml（缺省30）；军用 5~15ml（缺省10）；绝密设施 1.0~3.0ml 微量冷萃' },
          },
          required: ['名称', '数量'],
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
      剧情获得: {
        type: 'array',
        description: '本回合正文中主角获得/学会的新法术（每回合最多1条）。仅当正文明确出现获得/学会/被授予新回路时才报，否则输出空数组 []。你不懂引擎参数，所以参数由脚本按"族"取默认值，你只给 种类/族/一句话效果。',
        items: {
          type: 'object',
          properties: {
            种类: { type: 'string', enum: ['fixed', 'free'], description: 'fixed=剧情直接给的固化技（永久）；free=未固化技（挂自由回路库）' },
            族: { type: 'string', enum: ['pour', 'flow', 'struct', 'life', 'perce'], description: '该法术属于五系中的哪一系' },
            一句话效果: { type: 'string', description: '用一句话概括这个法术的作用效果（作为回路的一句话效果）' },
            次数: { type: 'integer', minimum: 0, maximum: 10, description: '仅种类=free 有意义（初始已用次数 0~9）；种类=fixed 填 10 表示永久（脚本会忽略）' },
          },
          required: ['种类', '族', '一句话效果'],
          additionalProperties: false,
        },
      },
    },
    required: ['现在剧情时间', '本轮使用回路', '剧情数值变更', '身体', '战斗中', '新增补给', '场景变更', '剧情获得'],
    additionalProperties: false,
  },
};

export interface 数据AI结果 {
  ok: boolean;
  pack?: 变更包;
  error?: string;
  raw?: string;
  忽略的回路: { 回路: string; 次数: number; 原因: string }[];
  忽略的剧情: string[];
}

/** 调用数据AI并校验。失败（API错/JSON坏/契约拒）返回 ok:false。 */
export async function runDataAI(g: 游戏): Promise<数据AI结果> {
  const settings = loadSettings();
  const segments = settings.提示词.数据AI;
  // 分层正文：前文背景（上一轮及更早，仅作因果参考，防回声结算）+ 本轮待结算正文（最新一轮，唯一提取源）
  const 正文L = recentStoryLayered(4);
  const 正文 = '【前文背景（仅供参考因果，严禁在此提取结算项目）】\n'
    + (正文L.bg || '（无）')
    + '\n【本轮待结算正文（必须且仅在此范围内提取动作与事件！）】\n'
    + 正文L.latest;
  const vars = {
    状态: serialize数据AI(g),
    场景: serialize场景(g),
    出手单: g.待扣单.length ? g.待扣单.map(p => `${p.ref}《${p.名称}》`).join('\n') : '（本回合无施放）',
    正文,
  };
  let raw: string;
  try {
    raw = await callAI({ which: '数据AI', segments, vars, jsonSchema: SCHEMA, generationId: `gb_data_${Date.now()}` });
  } catch (e: any) {
    return { ok: false, error: '数据AI调用失败：' + (e?.message ?? e), 忽略的回路: [], 忽略的剧情: [] };
  }
  const json = 抽取JSON(raw);
  if (json == null) return { ok: false, error: '数据AI输出无法解析为 JSON', raw, 忽略的回路: [], 忽略的剧情: [] };
  const verdict = 校验变更包(json, g);
  if (!verdict.ok) return { ok: false, error: verdict.error, raw, 忽略的回路: verdict.忽略的回路, 忽略的剧情: verdict.忽略的剧情 };
  return { ok: true, pack: verdict.data, raw, 忽略的回路: verdict.忽略的回路, 忽略的剧情: verdict.忽略的剧情 };
}
