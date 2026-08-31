// core/context.ts — SillyTavern 上下文获取（指南 6.1）
//
// 扩展运行在酒馆主页面：window.getContext / SillyTavern.getContext 均可。
// 每次从宿主重新读取；切换聊天时酒馆会替换 metadata 引用，不能长期缓存。
export function getContext(): any {
  try {
    if (typeof window !== 'undefined' && typeof (window as any).getContext === 'function') {
      return (window as any).getContext();
    }
    const st = (window as any).SillyTavern;
    if (st && typeof st.getContext === 'function') return st.getContext();
  } catch (e) {
    console.error('[开局框架] getContext 失败', e);
  }
  return null;
}
