// gradband/ops-table.ts — 操作表（完全脚本控制，AI 不看；世界书 EJS 读取除外）
//
// 玩家在状态栏勾选「手操：本轮用什么回路、用几次」，点「确认操作」后：
//   1. 把所选回路按次数挂待扣单（施法即承诺）
//   2. 立即扣费（能量/精神）落盘到 chat 变量 `渐变带`
//   3. 清空操作表（每轮开始 runTurn 也会自动清空上一轮残留）
//
// ★ 存储：chat 变量 `渐变带` 的 `操作表` 字段（{手操, 回路[], 次数[]}）。
//   状态栏 HTML 是正则注入的独立脚本，读不到扩展 bundle 的表格存储，只能读写酒馆变量；
//   存在 chat 变量里，状态栏和扩展 bundle 都能读写同一份（与游戏存档同键，天然随聊天走）。
import { loadGame, saveGame, NS } from './core/store';
import { getVariables, updateVariablesWith } from '../bridge/tavern';
import { engineCtx } from './pipeline/settle';
import { quote, initParams } from './engine/engine';

export const OPS_KEY = '操作表';

export interface OpsState {
  manual: boolean;      // 本轮手操
  circuits: string[];   // 回路 id 列表
  counts: number[];     // 对应次数（默认 1）
}

/** 读操作表（不存在返回空状态） */
export function getOps(): OpsState {
  try {
    const raw = getVariables({ type: 'chat' })?.[NS]?.[OPS_KEY];
    if (!raw || typeof raw !== 'object') return { manual: false, circuits: [], counts: [] };
    return {
      manual: !!(raw as any).manual,
      circuits: Array.isArray((raw as any).circuits) ? (raw as any).circuits.map(String) : [],
      counts: Array.isArray((raw as any).counts) ? (raw as any).counts.map((n: any) => Number(n)).filter((n: number) => !isNaN(n) && n > 0) : [],
    };
  } catch { return { manual: false, circuits: [], counts: [] }; }
}

/** 写操作表（状态栏勾选后保存） */
export function setOps(ops: OpsState): void {
  updateVariablesWith(v => {
    const g = (v[NS] = v[NS] || {});
    g[OPS_KEY] = { manual: ops.manual, circuits: ops.circuits, counts: ops.counts };
    return v;
  }, { type: 'chat' });
}

/** 清空操作表（每轮 runTurn 开头调用；也用于确认扣费后） */
export function clearOps(): void {
  updateVariablesWith(v => {
    const g = v[NS];
    if (g) g[OPS_KEY] = { manual: false, circuits: [], counts: [] };
    return v;
  }, { type: 'chat' });
}

/**
 * 确认操作：手操回路按次数计费并立即扣除（能量/精神），**不挂待扣单**——
 * 待扣单只留给 AI 报的回路（settle ⑥a 统一扣）。→ 落盘 → 清空操作表。
 */
export async function confirmOps(): Promise<{ ok: boolean; error?: string; 明细?: string[] }> {
  const ops = getOps();
  if (!ops.manual || ops.circuits.length === 0) return { ok: true, error: '未开启手操或未选回路' };

  const g = loadGame();
  if (!g) return { ok: false, error: '未初始化存档（先完成开局）' };

  const 明细: string[] = [];
  const ctx = engineCtx(g);
  let totalBill = 0, totalMind = 0;

  for (let i = 0; i < ops.circuits.length; i++) {
    const id = ops.circuits[i];
    const count = ops.counts[i] || 1;
    const circuit = g.回路库.find(c => c.id === id);
    if (!circuit) { 明细.push(`回路 ${id} 不在库，忽略`); continue; }
    for (let k = 0; k < count; k++) {
      const q = quote({ fam: circuit.famKey, e: 0, c: Object.assign(initParams(circuit.famKey), circuit.参数向量) }, ctx);
      if (!q) continue;
      totalBill += q.bill; totalMind += q.mind;
      if (k === 0) 明细.push(`${circuit.名称}×${count}`);
    }
  }

  // 只扣费，不挂待扣单（手操消耗当场结清；待扣单留给 AI 报的回路）
  g.主角.能量kJ.当前 = Math.max(0, g.主角.能量kJ.当前 - totalBill);
  g.主角.精神点.当前 = Math.max(0, g.主角.精神点.当前 - totalMind);
  await saveGame(g);
  clearOps();
  console.info(`[渐变带] 手操确认：${明细.join('，') || '无'} 能量−${totalBill}kJ 精神−${totalMind}（当场扣费，未挂待扣单）`);
  return { ok: true, 明细 };
}
