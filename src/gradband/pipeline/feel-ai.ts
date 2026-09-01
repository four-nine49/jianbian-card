// pipeline/feel-ai.ts — 标准AI（感情分析）：所有标准表走开局框架表格通道 + 剑与汽水模板
//
// 标准表 = __of_tables__ 里 type==='standard' 的表（感情表 + 玩家自建表；特殊表六表引擎
// 在 chat 变量 `渐变带`，天然隔离，标准AI看不到）。
// 每张标准表：读表当前行 → 用剑与汽水「提示词模板」页的共用模板（{{instructions}}/
//   {{table_data}}/{{messages}}/{{target_tables}}）→ json_schema 按表头 → 写回第 1 行。
import { loadStore, getSheet, getAllSheets, updateRow } from '../../store/table-store';
import type { Sheet } from '../../store/types';
import { loadSettings as loadFrameworkSettings } from '../../store/settings';
import { recentStory, callAI } from './ai-common';
import { 抽取JSON } from './contract';
import { FEEL_TABLES } from '../feel-tables';

export interface 感情结果 { ok: boolean; error?: string; 更新?: Record<string, any>; 表: string }

function getSheetSafe(name: string): Sheet | null {
  try {
    const store = loadStore();
    return getSheet(store, name);
  } catch { return null; }
}

/** 当前所有标准表（感情表 + 玩家自建表；特殊表不在 __of_tables__，天然排除） */
export function standardFeelTables(): string[] {
  try {
    const store = loadStore();
    return getAllSheets(store).filter(s => (s.type ?? 'standard') === 'standard').map(s => s.name);
  } catch { return []; }
}

/** 该表的数值列（0-17 整数）：感情表按注册 numCols；自建表无数值列约定则全当文本 */
function numColsOf(sheet: Sheet): string[] {
  const def = FEEL_TABLES.find(t => t.name === sheet.name);
  return def?.numCols ?? [];
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

/** 组装剑与汽水模板的 ordered_prompts（占位符替换，逻辑同 prompt-builder） */
function buildOrdered(sheet: Sheet, tableData: string): Array<{ role: string; content: string }> {
  const fw = loadFrameworkSettings();
  const vars: Record<string, string> = {
    '{{instructions}}': fw.promptTemplate.instructions || '',
    '{{target_tables}}': `- ${sheet.name}（${sheet.rows.length} 行）`,
    '{{table_data}}': tableData,
    '{{messages}}': recentStory(4),
    '{{floor_info}}': `标准AI感情分析 · 表 ${sheet.name}`,
    '{{worldbook}}': '',
    '{{char_description}}': '',
    '{{persona_description}}': '',
  };
  return fw.promptTemplate.segments
    .filter(seg => seg.enabled)
    .map(seg => {
      let content = seg.content;
      for (const [k, v] of Object.entries(vars)) content = content.split(k).join(v);
      return { role: seg.role, content };
    });
}

/** 分析一张标准表（读表 → AI → 写回表格第 1 行） */
async function runFeelForTable(tableName: string): Promise<感情结果> {
  const sheet = getSheetSafe(tableName);
  if (!sheet) return { ok: false, error: `表格里没有「${tableName}」`, 表: tableName };
  if (sheet.rows.length === 0) return { ok: false, error: `「${tableName}」还没有数据行`, 表: tableName };

  const current = rowToObj(sheet);
  // {{table_data}} = 列定义+规则+当前行（剑与汽水渲染风格）
  const 字段说明 = sheet.sourceData.note || '（无表规则）';
  const tableData = `[表名: ${sheet.name}]\nColumns: ${sheet.headers.map((h, i) => `[${i}:${h}]`).join(', ')}\nNote: ${字段说明}\n数据:\n  [1] ${sheet.headers.map(h => current[h] ?? '').join(', ')}`;
  const ordered = buildOrdered(sheet, tableData);
  const numCols = numColsOf(sheet);

  try {
    const raw = await callAI({ which: '感情AI', segments: ordered as any, vars: {}, jsonSchema: sheetJSONSchema(sheet, numCols), generationId: `gb_feel_${Date.now()}` });
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
    console.info(`[渐变带] 标准AI已更新「${tableName}」：${sheet.headers.map((h, i) => `${h}=${cells[i]}`).join('，')}`);
    return { ok: true, 更新: { ...rowToObj(sheet), 依据: json['依据'] }, 表: tableName };
  } catch (e: any) {
    return { ok: false, error: '标准AI调用失败：' + (e?.message ?? e), 表: tableName };
  }
}

/** 逐张标准表分析（每轮调用；任一表失败不阻断其它表） */
export async function runFeelAI(): Promise<{ ok: boolean; 结果: 感情结果[] }> {
  const 结果: 感情结果[] = [];
  for (const name of standardFeelTables()) {
    结果.push(await runFeelForTable(name));
  }
  return { ok: 结果.every(r => r.ok), 结果 };
}
