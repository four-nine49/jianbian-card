// pipeline/serialize.ts — 三视角序列化（§3.3 可见性矩阵的实现）
//
// 正文AI：槽内摘要（名+一句效果+锚点）+ 身体状态文本 + 剧情时间 + 出手单 —— 永不见 JSON 明细/库/账本/数值
// 数据AI：主角数值（无上次结算min）+ 槽位展开（含参数明细/微调预算明细/基线账单）+ 补给 + 场景
// 法术AI：亲和分支名 + 场景子集 + 全库索引（查重用）
import type { 游戏, 回路 } from '../core/schema';
import { anchorOf } from '../engine/engine';

/** 槽位 → 展开条目（join 回路库，null 占位保留） */
export function 槽位展开(g: 游戏): { 固定槽: (回路 | null)[]; 自由槽: (回路 | null)[] } {
  const byId = new Map(g.回路库.map(c => [c.id, c]));
  const pick = (id: string | null) => (id ? byId.get(id) ?? null : null);
  return {
    固定槽: g.槽位.固定槽.map(pick),
    自由槽: g.槽位.自由槽.map(pick),
  };
}

function 摘要(c: 回路): string {
  const anchor = anchorOf(c.基线账单.输出kJ);
  return `${c.名称}（${c.族}·${c.分支}）：${c.基线账单.一句话效果}，量级${anchor}`;
}

/** 正文AI 视角（进世界书 EJS 的字段，由扩展写入快照.正文AI注入，也可以直接由 EJS 读快照渲染） */
export function serialize正文AI(g: 游戏, recentOrders?: string[]): string {
  const L: string[] = [];
  const slots = 槽位展开(g);
  const all = [...slots.固定槽, ...slots.自由槽].filter(Boolean) as 回路[];
  L.push('【已装备回路（主角只能用这些）】');
  all.forEach((c, i) => L.push(`${i + 1}. ${摘要(c)}`));
  if (!all.length) L.push('（暂无装备回路）');
  L.push('');
  L.push(`【主角状态】身体：${g.主角.身体状态}；${g.主角.战斗中 ? '战斗中' : '非战斗'}；剧情时间：${g.主角.剧情时间.label}`);
  L.push('（主角能量/精神的具体数值对正文不可见，只以"伤势/负荷体感"定性描写）');
  if (recentOrders?.length) {
    L.push('');
    L.push('【本回合出手单】');
    recentOrders.forEach(o => L.push(o));
  }
  return L.join('\n');
}

/** 数据AI 视角：槽位展开成完整条目（回路库本体不下发） */
export function serialize数据AI(g: 游戏): string {
  const slots = 槽位展开(g);
  const view = (c: 回路 | null, i: number, kind: string) => c == null ? null : {
    序号: i, 类型: kind, id: c.id, 名称: c.名称, 族: c.族, 分支: c.分支,
    参数: c.参数明细,
    微调预算: c.微调预算明细 ?? undefined,
    基线: c.基线账单,
    使用次数: c.uses ?? undefined,
  };
  const payload = {
    主角: {
      能量kJ: g.主角.能量kJ, 精神点: g.主角.精神点,
      爆发线kW: g.主角.爆发线kW, 持续线kW: g.主角.持续线kW,
      战斗中: g.主角.战斗中, 身体状态: g.主角.身体状态, 剧情时间: g.主角.剧情时间.label,
    },
    槽位清单: {
      固定槽: slots.固定槽.map((c, i) => view(c, i + 1, 'fixed')).filter(Boolean),
      自由槽: slots.自由槽.map((c, i) => view(c, i + 1, 'free')).filter(Boolean),
    },
    补给物品: g.补给物品,
    场景: g.场景,
  };
  return JSON.stringify(payload, null, 1);
}

/** 法术AI 视角：全库索引（id+名+参数明细，查重用） */
export function serialize库索引(g: 游戏): string {
  if (!g.回路库.length) return '（库为空）';
  return g.回路库.map(c => `${c.id}《${c.名称}》：${c.基线账单.一句话效果}`).join('\n');
}

/** 亲和分支名（给法术AI的门控标签） */
export function serialize亲和(g: 游戏): string {
  const fmt = (b: { 族: string; 分支: string }) => `${b.族}·${b.分支}`;
  return `主分支：${g.亲和.主分支.map(fmt).join('、') || '无'}；次分支：${g.亲和.次分支.map(fmt).join('、') || '无'}`;
}

/** 场景子集 */
export function serialize场景(g: 游戏): string {
  const wind = ['静风', '和风', '劲风', '风暴'][Math.min(3, Math.max(0, Math.round(g.场景.风力档 / 33)))] ?? '和风';
  return `风力：${g.场景.风力档}（${wind}）；可塑无机物：${g.场景.可塑无机物kJ}kJ；水体在场：${g.场景.水体在场 ? '有' : '无'}`;
}

/** 待扣单出手单文本（正文AI 注入用） */
export function 出手单文本(g: 游戏): string[] {
  return g.待扣单.map(p => p.order);
}
