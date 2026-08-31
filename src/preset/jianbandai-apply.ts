// preset/jianbandai-apply.ts — 「渐变带角色卡专用」的落地动作
//
// 1. applyJianbandaiTables：写入学院线表格模板 + 陆安追踪表初始数值（存本扩展表格存储）
// 2. 世界书控制（渐变带1.0 固定 uid 0-13）：
//    - 路线确认后：陆安(13) + 地下竞技与极限运动圈(11) 设为蓝灯
//    - 「全蓝灯」：uid 1-13 全部蓝灯常驻（uid 0 总览与用户自加条目不动）
//    - 恢复初始：全部受控条目回到《渐变带1.0.json》初始灯态
import { importTemplate, seedInitialRows } from '../store/table-store';
import type { TableDef } from '../store/types';
import { substituteMacros } from '../utils/macros';
import { tavernHelperCall } from '../bridge/tavern';
import { JIANBANDAI } from './jianbandai-data';

/** 写入学院线表格模板 + 初始数值（{{user}} 等宏写入时替换成实际名字） */
export function applyJianbandaiTables(): { tables: number; rows: number } {
  importTemplate(JIANBANDAI.tables as unknown as TableDef[]);
  let rows = 0;
  for (const [tableName, rowList] of Object.entries(JIANBANDAI.seeds['男'] ?? {})) {
    try {
      const mapped = (rowList as (string | null)[][]).map(r => r.map(c => (c === null ? null : substituteMacros(c))));
      seedInitialRows(tableName, mapped);
      rows += mapped.length;
    } catch (e) {
      console.warn(`[渐变带开局] 初始行写入失败（${tableName}）：`, e);
    }
  }
  console.info(`[渐变带开局] 学院线已写入 ${JIANBANDAI.tables.length} 张表 / ${rows} 行初始数据`);
  return { tables: JIANBANDAI.tables.length, rows };
}

// ──────────────────────────────────────────────
// 世界书控制（渐变带1.0 固定 uid 0-13）
// ──────────────────────────────────────────────

const WB_BLUE_UIDS = [11, 13]; // 地下竞技与极限运动圈(11)、陆安(13)
const WB_ALL_UIDS = Array.from({ length: 14 }, (_, i) => i); // 0-13
const WB_INITIAL: Record<number, string> = {
  0: 'constant', 12: 'constant',
  1: 'selective', 2: 'selective', 3: 'selective', 4: 'selective', 5: 'selective',
  6: 'selective', 7: 'selective', 8: 'selective', 9: 'selective',
  10: 'selective', 11: 'selective', 13: 'selective',
};

interface WorldbookEntryLike {
  uid?: number;
  enabled?: boolean;
  strategy?: { type?: string; keys?: unknown };
  [k: string]: any;
}

async function collectWorldbookNames(): Promise<string[]> {
  const names: string[] = [];
  const push = (v: unknown) => { if (typeof v === 'string' && v && !names.includes(v)) names.push(v); };
  const globals = await tavernHelperCall<string[]>('getGlobalWorldbookNames');
  if (Array.isArray(globals)) globals.forEach(push);
  const chars = await tavernHelperCall<{ primary?: string | null; additional?: string[] }>('getCharWorldbookNames', 'current');
  if (chars) { push(chars.primary); if (Array.isArray(chars.additional)) chars.additional.forEach(push); }
  const chatName = await tavernHelperCall<string | null>('getChatWorldbookName', 'current');
  push(chatName);
  return names;
}

async function applyWorldbookTarget(targetByUid: Record<number, { type: string; enabled: boolean }>): Promise<{ ok: boolean; summary?: string; error?: string }> {
  let names: string[] = [];
  try { names = await collectWorldbookNames(); } catch { names = []; }
  if (names.length === 0) return { ok: false, error: '未找到任何世界书（全局/角色卡/聊天都未绑定）' };

  const summary: string[] = [];
  for (const wbName of names) {
    try {
      const entries = await tavernHelperCall<WorldbookEntryLike[]>('getWorldbook', wbName);
      if (!Array.isArray(entries)) continue;
      const target = entries.map(e => {
        const uid = e && typeof e.uid === 'number' ? e.uid : null;
        const t = uid === null ? undefined : targetByUid[uid];
        if (!t) return e; // 非受控条目（含 uid 0 总览、用户自加条目）不动
        const strat = (e.strategy && typeof e.strategy === 'object') ? e.strategy : {};
        return { ...e, strategy: { ...strat, type: t.type }, enabled: t.enabled };
      });
      await tavernHelperCall('updateWorldbookWith', wbName, () => target);
      summary.push(`${wbName}=${entries.length}条`);
    } catch (e) {
      console.warn(`[渐变带开局] 世界书 ${wbName} 应用失败：`, e);
    }
  }
  return { ok: true, summary: summary.join('，') };
}

/** 全蓝灯：uid 1-13 全部蓝灯常驻（uid 0 总览与用户自加条目不动） */
export async function applyWorldbookAcademy(): Promise<{ ok: boolean; summary?: string; error?: string }> {
  const targetByUid: Record<number, { type: string; enabled: boolean }> = {};
  for (let uid = 1; uid <= 13; uid++) targetByUid[uid] = { type: 'constant', enabled: true };
  return applyWorldbookTarget(targetByUid);
}

/** 选完路线自动：陆安(13) + 地下竞技(11) 设为蓝灯 */
export async function applyWorldbookRouteDefault(): Promise<{ ok: boolean; summary?: string; error?: string }> {
  const targetByUid: Record<number, { type: string; enabled: boolean }> = {};
  WB_BLUE_UIDS.forEach(uid => { targetByUid[uid] = { type: 'constant', enabled: true }; });
  return applyWorldbookTarget(targetByUid);
}

/** 恢复初始：全部受控条目回到《渐变带1.0.json》初始灯态 */
export async function resetWorldbookInitial(): Promise<{ ok: boolean; summary?: string; error?: string }> {
  const targetByUid: Record<number, { type: string; enabled: boolean }> = {};
  WB_ALL_UIDS.forEach(uid => {
    if (WB_INITIAL[uid]) targetByUid[uid] = { type: WB_INITIAL[uid], enabled: true };
  });
  return applyWorldbookTarget(targetByUid);
}
