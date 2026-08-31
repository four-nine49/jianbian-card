// utils/macros.ts — ST 宏替换（{{user}} {{char}} 等）
//
// 数据存储里保存的是字面量宏（如角色档案的 名字='{{user}}'）；
// 宏替换只发生在酒馆渲染提示词/消息的管线里。凡是我们把数据"送出去给人看/给 AI 看"
// 的出口（表格数据页、楼层变量同步、填表提示词、预设初始数据写入）都应先过这里。
export function substituteMacros(text: string): string {
  if (!text || !text.includes('{{')) return text;
  try {
    const ctx = SillyTavern?.getContext?.();
    const fn = ctx?.substituteParams;
    if (typeof fn === 'function') return fn.call(ctx, text);
  } catch { /* 忽略：拿不到就原样返回 */ }
  return text;
}
