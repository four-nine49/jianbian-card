// core/geometry.ts — 位置约束工具（指南 3.4）
//
// 窗口和悬浮窗都不能被拖出视口外。
export function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(value, max));
}

export function constrainPosition(x: number, y: number, width: number, height: number): { x: number; y: number } {
  return {
    x: Math.max(0, Math.min(x, Math.max(0, window.innerWidth - width))),
    y: Math.max(0, Math.min(y, Math.max(0, window.innerHeight - height))),
  };
}
