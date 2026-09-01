// pipeline/feel-ai.ts — 感情分析AI（多表版）：逐张感情表走开局框架表格通道
//
// 每张感情表（FEEL_TABLES 注册）：
//   读表当前行 → 提示词注入（该表 Note 规则 + 当前值 + 最近正文，用该表自己的提示词）
//   → json_schema 按表头生成（数值列 0-17 整数）→ 校验（坏值回退旧值）→ 写回表格第 1 行。
// 提示词每表一套（settings.感情提示词[表名]），在「渐变带·感情」页编辑。
import { loadStore, getSheet, updateRow } from '../../store/table-store';
import type { Sheet } from '../../store/types';
import { recentStory, callAI } from './ai-common';
import { 抽取JSON } from './contract';
import { FEEL_TABLES, getFeelTable, getFeelPrompt } from '../feel-tables';

export interface 感情结果 { ok: boolean; error?: string; 更新?: Record<string, any>; 表: string }

function getSheetSafe(name: string): Sheet | null {
  try {
    const store = loadStore();
    return getSheet(store, name);
  } catch { return null; }
}

/** 按表头 + 数值列生成 json_schema（数值列 → integer 0-17，其余 → string） */
function sheetJSONSchema(sheet: Sheet, numCols: string[]) {
  const props: Record<string, any> = {};
  const required: string[] = [];
  for (const h of sheet.headers) {
    if (numCols.includes(h)) props[h] = { type: 'integer', minimum: 0, maximum: 17 };
    else props[h] = { type: 'string' };
    required.push(h);
  }
  props['依据'] = { type: 'string', description: '50字内的正文依据' };
  required.push('依据');
  return { name: `feel_${sheet.name}`, value: { type: 'object', properties: props, required, additionalProperties: false } };
}

/** 当前行 → { 列名: 值 } */
function rowToObj(sheet: Sheet): Record<string, string> {
  const row = sheet.rows[0] ?? [];
  const obj: Record<string, string> = {};
  sheet.headers.forEach((h, i) => { obj[h] = row[i] ?? ''; });
  return obj;
}

/** 分析一张感情表（读表 → AI → 写回表格第 1 行） */
async function runFeelForTable(tableName: string): Promise<感情结果> {
  const def = getFeelTable(tableName);
  const sheet = getSheetSafe(tableName);
  if (!sheet) return { ok: false, error: `表格里没有「${tableName}」`, 表: tableName };
  if (sheet.rows.length === 0) return { ok: false, error: `「${tableName}」还没有数据行`, 表: tableName };

  const current = rowToObj(sheet);
  const 字段说明 = (def?.note || sheet.sourceData.note || '（无表规则）');
  const 当前值 = sheet.headers.map(h => `- ${h}: ${current[h] ?? ''}`).join('\n');
  const vars = { 角色: tableName, 字段说明, 当前值, 正文: recentStory(4) };
  const segments = getFeelPrompt(tableName);
  const numCols = def?.numCols ?? [];

  try {
    const raw = await callAI({ which: '感情AI', segments, vars, jsonSchema: sheetJSONSchema(sheet, numCols), generationId: `gb_feel_${Date.now()}` });
    const json = 抽取JSON(raw);
    if (!json) return { ok: false, error: '感情AI输出无法解析', 表: tableName };

    const cells: (string | null)[] = sheet.headers.map(h => {
      let v = json[h];
      if (numCols.includes(h)) {
        v = Math.round(Number(v));
        if (!Number.isFinite(v)) v = Number(current[h] ?? 0);
        v = Math.max(0, Math.min(17, v));   // 0-17 硬约束
        return String(v);
      }
      return String(v ?? current[h] ?? '');
    });

    updateRow(`sheet_${sheet.uid}`, { rowId: 1, cells });
    console.info(`[渐变带] 感情AI已更新「${tableName}」：${sheet.headers.map((h, i) => `${h}=${cells[i]}`).join('，')}`);
    return { ok: true, 更新: { ...rowToObj(sheet), 依据: json['依据'] }, 表: tableName };
  } catch (e: any) {
    return { ok: false, error: '感情AI调用失败：' + (e?.message ?? e), 表: tableName };
  }
}

/** 逐张感情表分析（每轮调用；任一表失败不阻断其它表） */
export async function runFeelAI(): Promise<{ ok: boolean; 结果: 感情结果[] }> {
  const 结果: 感情结果[] = [];
  for (const t of FEEL_TABLES) {
    结果.push(await runFeelForTable(t.name));
  }
  return { ok: 结果.every(r => r.ok), 结果 };
}
