// store/table-store.ts — 表格存储读写 + 面板 CRUD 接口
//
// 存储：酒馆助手 chat 变量（type:'chat'），命名空间键 NAMESPACE。
//   读 getVariables({type:'chat'})[NAMESPACE]，写 updateVariablesWith。
//   chat 变量随聊天文件持久化（chat_metadata.variables），换聊天/重启后重新打开同一聊天数据还在。
//
// 依赖（ambient，无需 import）：getVariables / replaceVariables / updateVariablesWith
//   lodash `_`。zod `z`。深拷贝用 structuredClone。
import { getVariables, updateVariablesWith } from '../bridge/tavern';

import {
  TableStore, Sheet, TableDef, SheetSourceData, FillOperation, DEFAULT_UPDATE_CONFIG,
  emptyStore,
} from './types';

const NAMESPACE = '__of_tables__';   // of = opening framework

// ──────────────────────────────────────────────
// 底层读写
// ──────────────────────────────────────────────

/** 读取整份存储（zod 校验，失败返回空 store + 告警，不抛） */
export function loadStore(): TableStore {
  try {
    const all = getVariables({ type: 'chat' });
    const raw = all && all[NAMESPACE];
    if (!raw) return emptyStore();
    const parsed = TableStore.safeParse(raw);
    if (!parsed.success) {
      console.warn('[开局框架] 表格存储校验失败，返回空 store：', parsed.error.message);
      return emptyStore();
    }
    return parsed.data;
  } catch (e) {
    console.error('[开局框架] loadStore 异常：', e);
    return emptyStore();
  }
}

/** 整体写回 */
export function saveStore(store: TableStore): void {
  updateVariablesWith(v => {
    v[NAMESPACE] = structuredClone(store);
    return v;
  }, { type: 'chat' });
}

// ──────────────────────────────────────────────
// 查询（面板只读接口）
// ──────────────────────────────────────────────

export function getAllSheets(store: TableStore = loadStore()): Sheet[] {
  return Object.values(store.sheets);
}

export function getSheet(store: TableStore, keyOrNameOrUid: string): Sheet | null {
  const s = store.sheets[keyOrNameOrUid];
  if (s) return s;
  return getAllSheets(store).find(x => x.name === keyOrNameOrUid || x.uid === keyOrNameOrUid) ?? null;
}

export function sheetKeyOf(store: TableStore, sheet: Sheet): string {
  const entry = Object.entries(store.sheets).find(([, s]) => s === sheet);
  return entry ? entry[0] : `sheet_${sheet.uid}`;
}

// ──────────────────────────────────────────────
// 应用填表操作（纯函数 + 事务性：全成才落盘）
// ──────────────────────────────────────────────

/** 纯函数：返回应用 ops 后的新 store（不改原；任一 op 失败抛错，调用方 catch 后不 save） */
export function applyOperations(store: TableStore, ops: FillOperation[]): TableStore {
  const next: TableStore = structuredClone(store);
  for (const op of ops) {
    const sheet = getSheet(next, op.sheet);
    if (!sheet) throw new Error(`操作目标表不存在：${op.sheet}`);
    const colCount = sheet.headers.length;

    if (op.type === 'insert') {
      if (!op.cells) throw new Error(`insert 缺少 cells（表 ${sheet.name}）`);
      const cells = normalizeCells(op.cells, colCount);
      sheet.rows.push(cells);
    } else if (op.type === 'update') {
      if (op.rowId == null) throw new Error(`update 缺少 rowId（表 ${sheet.name}）`);
      if (!op.cells) throw new Error(`update 缺少 cells（表 ${sheet.name}）`);
      const idx = op.rowId - 1;
      if (idx < 0 || idx >= sheet.rows.length) throw new Error(`update 行号越界：${op.rowId}（表 ${sheet.name}）`);
      sheet.rows[idx] = normalizeCells(op.cells, colCount);
    } else if (op.type === 'delete') {
      if (op.rowId == null) throw new Error(`delete 缺少 rowId（表 ${sheet.name}）`);
      const idx = op.rowId - 1;
      if (idx < 0 || idx >= sheet.rows.length) throw new Error(`delete 行号越界：${op.rowId}（表 ${sheet.name}）`);
      sheet.rows.splice(idx, 1);
    }
  }
  return next;
}

function normalizeCells(cells: (string | null)[], colCount: number): (string | null)[] {
  const out = cells.slice(0, colCount);
  while (out.length < colCount) out.push(null);
  return out;
}

// ──────────────────────────────────────────────
// 模板导入 + 初始数据写入（开局框架执行层入口）
// ──────────────────────────────────────────────

/** 用模板集合初始化空表结构（清空旧数据）。每表过 zod 校验（宽容缺 sourceData），updateConfig 与默认合并。 */
export function importTemplate(defs: TableDef[]): TableStore {
  const store = emptyStore();
  for (const raw of defs) {
    // 兼容手粘 JSON：缺 sourceData 时由 zod 默认值兜底；其余字段缺失则跳过该表并告警
    const normalized = { ...(raw as any), sourceData: (raw as any)?.sourceData ?? {} };
    const parsed = TableDef.safeParse(normalized);
    if (!parsed.success) {
      console.warn(`[开局框架] 模板表校验失败，已跳过：`, parsed.error.message, raw);
      continue;
    }
    const def = parsed.data;
    const merged = { ...DEFAULT_UPDATE_CONFIG, ...(def.updateConfig as any) };
    const sheet: Sheet = {
      uid: def.uid,
      name: def.name,
      purpose: def.purpose,
      headers: def.headers,
      rows: [],
      sourceData: def.sourceData,
      updateConfig: merged,
    };
    store.sheets[`sheet_${def.uid}`] = sheet;
  }
  saveStore(store);
  console.info(`[开局框架] 已导入模板：${Object.keys(store.sheets).length}/${defs.length} 张表`);
  return store;
}

/** 写入初始数据行（开局框架执行层解析结算块后调用） */
export function seedInitialRows(sheetKey: string, rows: (string | null)[][]): void {
  const store = loadStore();
  const sheet = store.sheets[sheetKey] ?? getSheet(store, sheetKey);
  if (!sheet) throw new Error(`seedInitialRows 目标表不存在：${sheetKey}`);
  const colCount = sheet.headers.length;
  sheet.rows = rows.map(r => normalizeCells(r, colCount));
  saveStore(store);
}

// ──────────────────────────────────────────────
// 面板 CRUD 接口（可视化面板将调用这些）
//   全部"读-改-写"一条龙，面板只需调一次。
// ──────────────────────────────────────────────

export interface CellUpdate { rowId: number; colIndex: number; value: string | null; }
export interface RowUpdate { rowId: number; cells: (string | null)[]; }

/** 改单个单元格 */
export function updateCell(sheetKey: string, u: CellUpdate): void {
  const store = loadStore();
  const sheet = store.sheets[sheetKey] ?? getSheet(store, sheetKey);
  if (!sheet) throw new Error(`表不存在：${sheetKey}`);
  const idx = u.rowId - 1;
  if (idx < 0 || idx >= sheet.rows.length) throw new Error(`行号越界：${u.rowId}`);
  if (u.colIndex < 0 || u.colIndex >= sheet.headers.length) throw new Error(`列号越界：${u.colIndex}`);
  sheet.rows[idx][u.colIndex] = u.value;
  saveStore(store);
}

/** 改整行 */
export function updateRow(sheetKey: string, u: RowUpdate): void {
  const store = loadStore();
  const sheet = store.sheets[sheetKey] ?? getSheet(store, sheetKey);
  if (!sheet) throw new Error(`表不存在：${sheetKey}`);
  const idx = u.rowId - 1;
  if (idx < 0 || idx >= sheet.rows.length) throw new Error(`行号越界：${u.rowId}`);
  sheet.rows[idx] = normalizeCells(u.cells, sheet.headers.length);
  saveStore(store);
}

/** 插入行（rowId 可省，追加到末尾） */
export function insertRow(sheetKey: string, cells: (string | null)[], atRowId?: number): void {
  const store = loadStore();
  const sheet = store.sheets[sheetKey] ?? getSheet(store, sheetKey);
  if (!sheet) throw new Error(`表不存在：${sheetKey}`);
  const row = normalizeCells(cells, sheet.headers.length);
  if (atRowId == null) sheet.rows.push(row);
  else sheet.rows.splice(atRowId - 1, 0, row);
  saveStore(store);
}

/** 删除行 */
export function deleteRow(sheetKey: string, rowId: number): void {
  const store = loadStore();
  const sheet = store.sheets[sheetKey] ?? getSheet(store, sheetKey);
  if (!sheet) throw new Error(`表不存在：${sheetKey}`);
  const idx = rowId - 1;
  if (idx < 0 || idx >= sheet.rows.length) throw new Error(`行号越界：${rowId}`);
  sheet.rows.splice(idx, 1);
  saveStore(store);
}

/** 改表元信息（name/headers/purpose 作用注释） */
export function updateSheetMeta(sheetKey: string, meta: { name?: string; headers?: string[]; purpose?: string }): void {
  const store = loadStore();
  const sheet = store.sheets[sheetKey] ?? getSheet(store, sheetKey);
  if (!sheet) throw new Error(`表不存在：${sheetKey}`);
  if (meta.name != null) sheet.name = meta.name;
  if (meta.purpose != null) sheet.purpose = meta.purpose;
  if (meta.headers != null) {
    sheet.headers = meta.headers;
    // 行宽对齐新列数
    sheet.rows = sheet.rows.map(r => normalizeCells(r, meta.headers!.length));
  }
  saveStore(store);
}

/** 改表源数据（给 AI 的说明书） */
export function updateSheetSourceData(sheetKey: string, src: Partial<Sheet['sourceData']>): void {
  const store = loadStore();
  const sheet = store.sheets[sheetKey] ?? getSheet(store, sheetKey);
  if (!sheet) throw new Error(`表不存在：${sheetKey}`);
  sheet.sourceData = { ...sheet.sourceData, ...src };
  saveStore(store);
}

/** 改单表填表参数（updateConfig 单字段或整体） */
export function updateSheetConfig(sheetKey: string, patch: Partial<Sheet['updateConfig']>): void {
  const store = loadStore();
  const sheet = store.sheets[sheetKey] ?? getSheet(store, sheetKey);
  if (!sheet) throw new Error(`表不存在：${sheetKey}`);
  sheet.updateConfig = { ...sheet.updateConfig, ...patch };
  saveStore(store);
}

/** 新增一张空表（面板里"加表"用） */
export function addSheet(def: TableDef): string {
  const store = loadStore();
  const key = `sheet_${def.uid}`;
  if (store.sheets[key]) throw new Error(`表 uid 已存在：${def.uid}`);
  const merged = { ...DEFAULT_UPDATE_CONFIG, ...(def.updateConfig as any) };
  store.sheets[key] = {
    uid: def.uid, name: def.name, purpose: def.purpose ?? '', headers: def.headers, rows: [],
    sourceData: SheetSourceData.parse(def.sourceData ?? {}),
    updateConfig: merged,
  };
  saveStore(store);
  return key;
}

/** 删除一张表 */
export function removeSheet(sheetKey: string): void {
  const store = loadStore();
  delete store.sheets[sheetKey];
  saveStore(store);
}

/** 清空整个存储（重开一局） */
export function clearStore(): void {
  saveStore(emptyStore());
}
