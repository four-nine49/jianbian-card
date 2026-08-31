// fill/table-renderer.ts — 把单张表渲染成给 AI 看的文本
//
// 按 updateConfig 单表粒度控制：
//   - sendLatestRows：只发最近 N 行
//   - sendRowsTemplate：自定义行渲染模板（支持 {{row_index}} {{row_id}} {{col_0}} {{col_1}} ... {{cells}} {{row}}）
// 默认渲染格式参考 ACU：[表名] + Columns(0基编号) + Note + Insert/Update/Delete触发 + 数据行

import { Sheet, UpdateConfig } from '../store/types';
import { substituteMacros } from '../utils/macros';

export interface RenderOptions {
  /** 覆盖整份参数（a 档解析后的生效值）；prompt-builder 传入 */
  updateConfig?: UpdateConfig;
  /** 覆盖 updateConfig.sendLatestRows；调度分组时可统一传 */
  sendLatestRows?: number;
  /** 覆盖 updateConfig.sendRowsTemplate */
  sendRowsTemplate?: string;
}

export function renderSheet(sheet: Sheet, opts: RenderOptions = {}): string {
  const cfg = opts.updateConfig ?? sheet.updateConfig;
  const sendLatestRows = opts.sendLatestRows ?? cfg.sendLatestRows;
  const sendRowsTemplate = opts.sendRowsTemplate ?? cfg.sendRowsTemplate;

  let rows = sheet.rows;
  if (sendLatestRows > 0 && rows.length > sendLatestRows) {
    rows = rows.slice(-sendLatestRows);
  }

  const headers = sheet.headers;
  const colsText = headers.map((h, i) => `[${i}:${h}]`).join(', ');

  let text = `[表名: ${sheet.name}]\n`;
  text += `Columns: ${colsText}\n`;
  const sd = sheet.sourceData;
  if (sd.note) text += `Note: ${sd.note}\n`;
  if (sd.insertRule) text += `Insert触发: ${sd.insertRule}\n`;
  if (sd.updateRule) text += `Update触发: ${sd.updateRule}\n`;
  if (sd.deleteRule) text += `Delete触发: ${sd.deleteRule}\n`;

  if (rows.length === 0) {
    text += `(该表为空)\n`;
    return text;
  }

  if (sendRowsTemplate && sendRowsTemplate.trim()) {
    text += `数据：\n`;
    rows.forEach((row, i) => {
      const rowId = i + 1;
      const cells = row.map(c => substituteMacros(c ?? '')); // {{user}} 等宏 → 实际名字
      const vars: Record<string, string> = {
        row_index: String(i),
        row_id: String(rowId),
        cells: cells.join(', '),
        row: cells.join(', '),
      };
      cells.forEach((c, ci) => { vars[`col_${ci}`] = c; });
      // 也支持 {{列名}}
      headers.forEach((h, ci) => { vars[h] = cells[ci] ?? ''; });
      text += renderTemplateString(sendRowsTemplate, vars) + '\n';
    });
  } else {
    rows.forEach((row, i) => {
      text += `  [${i + 1}] ${row.map(c => substituteMacros(c ?? '')).join(', ')}\n`;
    });
  }
  return text;
}

/** 渲染多张表拼成一段文本 */
export function renderSheets(sheets: Sheet[], opts: RenderOptions = {}): string {
  return sheets.map(s => renderSheet(s, opts)).join('\n');
}

// 简易 {{var}} 替换（不引入模板引擎）
function renderTemplateString(tpl: string, vars: Record<string, string>): string {
  return tpl.replace(/\{\{\s*([\w\u4e00-\u9fa5]+)\s*\}\}/g, (m, k) =>
    Object.prototype.hasOwnProperty.call(vars, k) ? vars[k] : m);
}
