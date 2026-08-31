// preset/chat-vars.ts — 聊天变量通用读写（各开局向导的进度存储用）
import { getVariables, updateVariablesWith } from '../bridge/tavern';

/** 读聊天变量（不存在/异常返回 null） */
export function getChatVar<T = any>(ns: string): T | null {
  try {
    const raw = getVariables({ type: 'chat' })?.[ns];
    if (raw === undefined || raw === null) return null;
    return raw as T;
  } catch {
    return null;
  }
}

/** 写聊天变量（传 null 删除该键） */
export function setChatVar(ns: string, value: unknown): void {
  updateVariablesWith(v => {
    if (value === null || value === undefined) delete v[ns];
    else v[ns] = value;
    return v;
  }, { type: 'chat' });
}
