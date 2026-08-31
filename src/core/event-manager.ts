// core/event-manager.ts — 统一监听器管理（指南 7.1）
//
// 所有 addEventListener / eventSource.on 都通过这里登记，destroy() 时一次性清理，
// 避免内存泄漏。额外支持 addDisposer 登记任意清理函数（如 bridge.eventOn 的 {stop}）。
export class EventManager {
  private handlers: Array<() => void> = [];

  /** DOM 事件监听 */
  add(target: EventTarget, type: string, listener: EventListenerOrEventListenerObject, options?: AddEventListenerOptions): void {
    target.addEventListener(type, listener, options);
    this.handlers.push(() => target.removeEventListener(type, listener, options));
  }

  /** SillyTavern eventSource 监听 */
  on(eventSource: any, eventType: string, listener: (...args: any[]) => void): void {
    eventSource.on(eventType, listener);
    this.handlers.push(() => {
      try { eventSource.removeListener?.(eventType, listener); } catch { /* 忽略 */ }
    });
  }

  /** 登记任意清理函数（如 bridge.eventOn 返回的 {stop}.stop） */
  addDisposer(off: () => void): void {
    this.handlers.push(off);
  }

  dispose(): void {
    this.handlers.forEach((off) => { try { off(); } catch { /* 忽略 */ } });
    this.handlers = [];
  }
}
