// window/toggle.ts — 悬浮按钮（指南 四）
//
// 固定在视口上的小圆钮：可拖拽移动、点击开关窗口。
// 用「移动阈值 + 时间阈值」区分拖拽和点击（5px / 300ms，指南 4.2）。
import { constrainPosition, clamp } from '../core/geometry';
import { loadSettings, saveSetting } from '../core/settings';
import { createRoot } from './window';

const TOGGLE_ID = 'of-toggle';
const DRAG_THRESHOLD = 5;   // 移动超过 5px 视为拖拽
const CLICK_TIME = 300;     // 300ms 内未移动视为点击

export function createToggle({ onToggle }: { onToggle?: () => void } = {}): HTMLElement {
  let btn = document.getElementById(TOGGLE_ID);
  if (btn) return btn;

  const root = createRoot();
  btn = document.createElement('div');
  btn.id = TOGGLE_ID;
  btn.className = 'of-toggle';
  btn.title = '拖拽移动 / 点击打开';
  btn.innerHTML = '<span class="of-toggle-icon">🎬</span>';

  // 从设置读取上次位置；手机/窄屏默认贴右、边距收窄
  const settings = loadSettings();
  const size = clamp(settings.toggleSize, 32, 72);
  const vw = window.innerWidth;
  const isSmall = vw <= 640;
  const defaultX = Math.max(10, vw - size - (isSmall ? 12 : 40));
  const defaultY = isSmall ? Math.round(window.innerHeight * 0.32) : 60;
  const pos = constrainPosition(
    settings.toggleX ?? defaultX,
    settings.toggleY ?? defaultY,
    size, size,
  );

  btn.style.width = size + 'px';
  btn.style.height = size + 'px';
  btn.style.left = pos.x + 'px';
  btn.style.top = pos.y + 'px';

  root.appendChild(btn);
  bindToggleDraggable(btn, onToggle);
  applyToggleVisibility(btn, settings.floatingToggleEnabled);

  // 转屏 / 视口变化：把球拉回可视区（只绑一次）
  const host = window as any;
  if (!host.__ofToggleResizeBound) {
    host.__ofToggleResizeBound = true;
    window.addEventListener('resize', () => {
      const el = document.getElementById(TOGGLE_ID);
      if (!el) return;
      const s = el.offsetWidth || 44;
      const p = constrainPosition(parseInt(el.style.left, 10) || 0, parseInt(el.style.top, 10) || 0, s, s);
      el.style.left = p.x + 'px';
      el.style.top = p.y + 'px';
    });
  }
  return btn;
}

// ──────────────────────────────────────────────
// 拖拽 + 点击（核心算法，指南 4.2）
// ──────────────────────────────────────────────

function bindToggleDraggable(btn: HTMLElement, onToggle?: () => void): void {
  let hasMoved = false;
  let startX = 0, startY = 0, offsetX = 0, offsetY = 0;
  let pointerId: number | null = null;
  let startTime = 0;

  btn.addEventListener('pointerdown', (e) => {
    startTime = Date.now();
    hasMoved = false;
    pointerId = e.pointerId;

    const rect = btn.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;
    startX = e.clientX;
    startY = e.clientY;

    btn.setPointerCapture(e.pointerId);
    btn.classList.add('dragging');
    e.preventDefault();
  });

  btn.addEventListener('pointermove', (e) => {
    if (e.pointerId !== pointerId) return;

    // 超过阈值才标记为拖拽
    if (Math.abs(e.clientX - startX) > DRAG_THRESHOLD
      || Math.abs(e.clientY - startY) > DRAG_THRESHOLD) {
      hasMoved = true;
    }
    if (!hasMoved) return;

    const pos = constrainPosition(
      e.clientX - offsetX,
      e.clientY - offsetY,
      btn.offsetWidth,
      btn.offsetHeight,
    );
    btn.style.left = pos.x + 'px';
    btn.style.top = pos.y + 'px';
    e.preventDefault();
  });

  const onUp = (e: PointerEvent) => {
    if (e.pointerId !== pointerId) return;
    try { btn.releasePointerCapture(e.pointerId); } catch { /* 忽略 */ }
    btn.classList.remove('dragging');

    // 拖拽结束持久化位置
    if (hasMoved) {
      saveSetting('toggleX', parseInt(btn.style.left, 10));
      saveSetting('toggleY', parseInt(btn.style.top, 10));
    }

    // 未移动且时间短 → 视为点击，触发开关
    if (!hasMoved && Date.now() - startTime < CLICK_TIME && typeof onToggle === 'function') {
      onToggle();
    }

    hasMoved = false;
    pointerId = null;
  };

  btn.addEventListener('pointerup', onUp);
  btn.addEventListener('pointercancel', onUp);
  btn.addEventListener('contextmenu', (e) => e.preventDefault());
}

// ──────────────────────────────────────────────
// 悬浮窗显示开关（指南 4.4）
// ──────────────────────────────────────────────

/** 按 floatingToggleEnabled 设置显示/隐藏悬浮按钮 */
export function applyToggleVisibility(btn?: HTMLElement | null, enabled?: boolean): void {
  const el = btn ?? document.getElementById(TOGGLE_ID);
  if (!el) return;
  const shouldHide = enabled === false;
  el.hidden = shouldHide;
  el.style.display = shouldHide ? 'none' : '';
}

/** 设置页切换后调用：保存设置 + 立即生效 */
export function setToggleVisible(enabled: boolean): void {
  saveSetting('floatingToggleEnabled', enabled);
  applyToggleVisibility(null, enabled);
}

export function destroyToggle(): void {
  document.getElementById(TOGGLE_ID)?.remove();
}
