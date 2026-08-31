// fill/response-parser.ts — 解析填表返回（strict JSON）+ 应用
//
// generateRaw + json_schema 强制返回 JSON 字符串；这里 JSON.parse + zod 校验。
// 校验失败返回 { ok:false, error }，由调用方决定是否走重试/修复。

import { FillOpsResult, FillOperation } from '../store/types';
import { loadStore, saveStore, applyOperations, getSheet } from '../store/table-store';

export interface ParseResult {
  ok: boolean;
  operations?: FillOperation[];
  error?: string;
  raw?: string;
}

/** 解析 AI 返回文本为操作列表 */
export function parseFillResponse(raw: string): ParseResult {
  if (!raw || !raw.trim()) return { ok: false, error: '返回为空', raw };

  // 兜底：模型偶尔仍带代码块围栏，剥一下
  let text = raw.trim();
  text = stripCodeFence(text);

  let obj: any;
  try {
    obj = JSON.parse(text);
  } catch (e) {
    // 二次兜底：从文本里抠第一个 {...} 块
    const m = text.match(/\{[\s\S]*\}/);
    if (m) {
      try { obj = JSON.parse(m[0]); } catch (e2) {
        return { ok: false, error: `JSON.parse 失败：${(e2 as Error).message}`, raw };
      }
    } else {
      return { ok: false, error: `JSON.parse 失败：${(e as Error).message}`, raw };
    }
  }

  const parsed = FillOpsResult.safeParse(obj);
  if (!parsed.success) {
    return { ok: false, error: `结构校验失败：${parsed.error.message}`, raw };
  }
  return { ok: true, operations: parsed.data.operations };
}

function stripCodeFence(text: string): string {
  // ```json ... ``` 或 ``` ... ```
  const m = text.match(/^```(?:json)?\s*\n?([\s\S]*?)\n?```\s*$/i);
  return m ? m[1].trim() : text;
}

/** 校验操作引用的表是否存在（应用前的预检） */
export function preflightOperations(ops: FillOperation[]): string[] {
  const store = loadStore();
  const errors: string[] = [];
  for (const op of ops) {
    const sheet = getSheet(store, op.sheet);
    if (!sheet) errors.push(`表不存在：${op.sheet}`);
    else {
      if (op.type === 'update' || op.type === 'delete') {
        if (op.rowId == null) errors.push(`${op.type} 缺 rowId（${sheet.name}）`);
        else if (op.rowId < 1 || op.rowId > sheet.rows.length) errors.push(`${op.type} 行号越界 ${op.rowId}（${sheet.name}）`);
      }
      if ((op.type === 'insert' || op.type === 'update') && !op.cells) {
        errors.push(`${op.type} 缺 cells（${sheet.name}）`);
      }
    }
  }
  return errors;
}

/** 解析 + 预检 + 应用 + 落盘（一条龙）。返回 { ok, applied, error } */
export function applyFillResponse(raw: string): { ok: boolean; applied: number; error?: string } {
  const parsed = parseFillResponse(raw);
  if (!parsed.ok || !parsed.operations) return { ok: false, applied: 0, error: parsed.error };

  if (parsed.operations.length === 0) {
    console.info('[开局框架] AI 返回空操作，无需更新');
    return { ok: true, applied: 0 };
  }

  const preErrs = preflightOperations(parsed.operations);
  if (preErrs.length > 0) return { ok: false, applied: 0, error: `预检失败：${preErrs.join('; ')}` };

  const store = loadStore();
  try {
    const next = applyOperations(store, parsed.operations);
    saveStore(next);
    console.info(`[开局框架] 已应用 ${parsed.operations.length} 条操作`);
    return { ok: true, applied: parsed.operations.length };
  } catch (e) {
    return { ok: false, applied: 0, error: `应用失败：${(e as Error).message}` };
  }
}
