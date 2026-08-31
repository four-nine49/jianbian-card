// pipeline/feel-ai.ts — 感情分析AI（渐变带版）：走开局框架表格通道
//
// 数据源：开局框架表格存储里的「陆安追踪表」（单行表：长期目标/短期目标/怎么看待主角/
//   自洽/共情/解构/对主角的信任度），规则即该表 sourceData.note（0-17 变化规则）。
// 流程：读表当前行 → 提示词注入（表规则 + 当前值 + 最近正文）→ json_schema 按表头字段
//   强制输出 → 校验（数值 0-17 整数，坏值回退旧值）→ 写回表格行（updateRow）。
// 不再使用渐变带自己的 感情追踪 字段——感情数据统一走开局框架的表格通道。
import { loadStore, getSheet, updateRow } from '../../store/table-store';
import type { Sheet } from '../../store/types';
import { loadSettings } from '../core/settings';
import { recentStory, callAI } from './ai-common';
import { 抽取JSON } from './contract';

/** 感情追踪的目标表名（陆安追踪表，来自渐变带角色卡专用面板） */
export const FEEL_SHEET_NAME = '陆安追踪表';

export interface 感情结果 { ok: boolean; error?: string; 更新?: Record<string, any>; 角色: string }

/** 数值列：自洽/共情/解构/对主角的信任度（0-17 整数）；其余为文本列 */
const NUM_COLS = ['自洽', '共情', '解构', '对主角的信任度'];

function getSheetSafe(): Sheet | null {
  try {
    const store = loadStore();
    return getSheet(store, FEEL_SHEET_NAME);
  } catch { return null; }
}

/** 按表头字段生成 json_schema（数值列 → integer 0-17，文本列 → string） */
function sheetJSONSchema(sheet: Sheet) {
  const props: Record<string, any> = {};
  const required: string[] = [];
  for (const h of sheet.headers) {
    if (NUM_COLS.includes(h)) props[h] = { type: 'integer', minimum: 0, maximum: 17 };
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

/** 感情分析主入口：读表 → AI → 写回表格（单行表，row_id=1） */
export async function runFeelAI(): Promise<感情结果> {
  const sheet = getSheetSafe();
  if (!sheet) return { ok: false, error: `表格里没有「${FEEL_SHEET_NAME}」，请先在「渐变带角色卡专用」或开局框架里建表并写入初始行`, 角色: FEEL_SHEET_NAME };
  if (sheet.rows.length === 0) return { ok: false, error: `「${FEEL_SHEET_NAME}」还没有数据行`, 角色: FEEL_SHEET_NAME };

  const settings = loadSettings();
  const current = rowToObj(sheet);
  // 提示词：表规则（note）+ 当前值 + 最近正文
  const 字段说明 = sheet.sourceData.note || '（无表规则）';
  const 当前值 = sheet.headers.map(h => `- ${h}: ${current[h] ?? ''}`).join('\n');
  const vars = { 角色: FEEL_SHEET_NAME, 字段说明, 当前值, 正文: recentStory(4) };

  try {
    const raw = await callAI({ which: '感情AI', segments: settings.提示词.感情AI, vars, jsonSchema: sheetJSONSchema(sheet), generationId: `gb_feel_${Date.now()}` });
    const json = 抽取JSON(raw);
    if (!json) return { ok: false, error: '感情AI输出无法解析', 角色: FEEL_SHEET_NAME };

    // 按表头逐列取新值（数值 0-17 整数，坏值回退旧值）
    const cells: (string | null)[] = sheet.headers.map(h => {
      let v = json[h];
      if (NUM_COLS.includes(h)) {
        v = Math.round(Number(v));
        if (!Number.isFinite(v)) v = Number(current[h] ?? 0);
        v = Math.max(0, Math.min(17, v));   // 0-17 硬约束
        return String(v);
      }
      return String(v ?? current[h] ?? '');
    });

    // 写回表格第 1 行
    updateRow(`sheet_${sheet.uid}`, { rowId: 1, cells });
    console.info(`[渐变带] 感情AI已更新「${FEEL_SHEET_NAME}」：${sheet.headers.map((h, i) => `${h}=${cells[i]}`).join('，')}`);
    return { ok: true, 更新: { ...rowToObj(sheet), 依据: json['依据'] }, 角色: FEEL_SHEET_NAME };
  } catch (e: any) {
    return { ok: false, error: '感情AI调用失败：' + (e?.message ?? e), 角色: FEEL_SHEET_NAME };
  }
}
