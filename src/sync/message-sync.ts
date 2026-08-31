// sync/message-sync.ts — 表格数据同步到消息楼层变量
//
// 对齐「状态栏数据同步」脚本的做法：把表格快照写进楼层变量的 stat_data.开局框架，
// 形如 { 表名: [{列名: 值, ...}, ...] }，供状态栏/前端界面从消息变量读取。
// 与参考脚本的区别：数据源是本扩展自己的表格存储（不依赖外部数据库扩展）；
// 所有表都同步（不设排除）；自动同步在收到 AI 回复/填表完成后触发（带开关）。
import { getVariables, updateVariablesWith, eventOn, getLastMessageId } from '../bridge/tavern';
import type { EventUnsub } from '../bridge/tavern';
import { loadStore, getAllSheets } from '../store/table-store';
import type { Sheet } from '../store/types';
import { loadSettings, saveSetting } from '../core/settings';
import { substituteMacros } from '../utils/macros';

/** 楼层变量里的挂载路径：stat_data.开局框架 */
const STAT_KEY = 'stat_data';
const SYNC_NS = '开局框架';

const SYNCABLE_TYPES = ['normal', 'regenerate', 'continue', 'swipe'];
let lastAutoSyncAt = 0;
let autoSyncEvent: EventUnsub | null = null;

/** 单张表 → 行对象数组（第一行表头作键；单元格里的 {{user}} 等宏替换成实际名字） */
function sheetToRowObjects(sheet: Sheet): Record<string, string>[] {
  return sheet.rows.map(row => {
    const obj: Record<string, string> = {};
    sheet.headers.forEach((h, i) => { obj[h] = substituteMacros(row[i] ?? ''); });
    return obj;
  });
}

/** 构建同步快照：所有表（无排除）。没有表 / 全是空表结构时也返回（空对象数组也同步，让前端知道表还在） */
export function buildSyncPayload(): Record<string, Record<string, string>[]> {
  const store = loadStore();
  const payload: Record<string, Record<string, string>[]> = {};
  for (const sheet of getAllSheets(store)) {
    payload[sheet.name] = sheetToRowObjects(sheet);
  }
  return payload;
}

/** 把快照写入指定楼层变量（覆盖该楼的上一次同步） */
export async function syncToFloor(floorId: number): Promise<{ ok: boolean; tables: number; error?: string }> {
  if (floorId < 0) return { ok: false, tables: 0, error: '当前没有聊天消息' };
  try {
    const payload = buildSyncPayload();
    const tables = Object.keys(payload).length;
    await updateVariablesWith(v => {
      const vars = (v ?? {}) as Record<string, any>;
      const stat = (vars[STAT_KEY] && typeof vars[STAT_KEY] === 'object') ? vars[STAT_KEY] : {};
      stat[SYNC_NS] = payload;
      vars[STAT_KEY] = stat;
      return vars;
    }, { type: 'message', message_id: floorId });
    return { ok: true, tables };
  } catch (e) {
    console.error('[数据同步] 写入楼层变量失败：', e);
    return { ok: false, tables: 0, error: (e as Error).message };
  }
}

/** 同步到最新楼 */
export async function syncToLastFloor(): Promise<{ ok: boolean; tables: number; floor?: number; error?: string }> {
  const floor = getLastMessageId();
  const r = await syncToFloor(floor);
  if (r.ok) {
    console.info(`[数据同步] 已将 ${r.tables} 张表写入第 ${floor} 楼变量（stat_data.${SYNC_NS}）`);
    return { ...r, floor };
  }
  return r;
}

/** 清除 [fromFloor, toFloor] 楼层变量里的同步数据（只动 stat_data.开局框架，不碰其它变量） */
export async function clearSyncRange(fromFloor: number, toFloor: number): Promise<{ cleared: number; scanned: number }> {
  const lo = Math.max(0, Math.min(fromFloor, toFloor));
  const hi = Math.min(getLastMessageId(), Math.max(fromFloor, toFloor));
  let cleared = 0;
  let scanned = 0;
  for (let i = lo; i <= hi; i++) {
    scanned++;
    try {
      const vars = getVariables({ type: 'message', message_id: i });
      const stat = vars?.[STAT_KEY];
      if (!stat || typeof stat !== 'object' || !(SYNC_NS in stat)) continue;
      await updateVariablesWith(v => {
        const next = (v ?? {}) as Record<string, any>;
        const st = next[STAT_KEY];
        if (st && typeof st === 'object' && SYNC_NS in st) {
          delete st[SYNC_NS];
          if (Object.keys(st).length === 0) delete next[STAT_KEY]; // stat_data 空了就整个移除
        }
        return next;
      }, { type: 'message', message_id: i });
      cleared++;
    } catch (e) {
      console.warn(`[数据同步] 清除第 ${i} 楼失败：`, e);
    }
  }
  console.info(`[数据同步] 清除完成：扫描 ${scanned} 楼，清除 ${cleared} 楼的同步数据`);
  return { cleared, scanned };
}

// ──────────────────────────────────────────────
// 自动同步
// ──────────────────────────────────────────────

function autoSyncEnabled(): boolean {
  return loadSettings().autoSyncEnabled;
}

/** 收到 AI 回复后自动同步到该楼（简单节流 1.5s，防连发） */
function startAutoSync(): void {
  if (autoSyncEvent) return;
  autoSyncEvent = eventOn('message_received', (messageId: number, type: string) => {
    if (!SYNCABLE_TYPES.includes(type)) return;
    if (!autoSyncEnabled()) return;
    const now = Date.now();
    if (now - lastAutoSyncAt < 1500) return;
    lastAutoSyncAt = now;
    void syncToFloor(typeof messageId === 'number' ? messageId : getLastMessageId());
  });
  console.info('[数据同步] 自动同步已开启（收到 AI 回复后写入该楼变量）');
}

function stopAutoSync(): void {
  autoSyncEvent?.stop();
  autoSyncEvent = null;
}

/** 工具页开关：保存设置并立即启/停监听 */
export function setAutoSync(enabled: boolean): void {
  saveSetting('autoSyncEnabled', enabled);
  if (enabled) startAutoSync(); else stopAutoSync();
}

/** 初始化时按设置恢复自动同步 */
export function initAutoSyncIfEnabled(): void {
  if (autoSyncEnabled()) startAutoSync();
}

/** 填表完成后调用：自动同步开着就刷新最新楼（此时表格数据刚更新，比消息事件时机更准） */
export async function maybeAutoSyncAfterFill(): Promise<void> {
  if (!autoSyncEnabled()) return;
  await syncToLastFloor();
}
