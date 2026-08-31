// ui/app.ts — 面板壳：侧栏 + 导航 + 页面分发（原生 DOM，无 vue-router）
//
// 样式不在这里注入：dist/index.css 由 manifest 的 css 字段注入主页面（指南 1.2）。
// 挂载点 = 窗口内容区（window/window.ts 的 #of-content）。
import { renderStartPage } from './pages/start';
import { renderPresetPage } from './pages/preset-opening';
import { renderJianbandaiPage } from './pages/jianbandai-opening';
import { renderGradbandPage } from './pages/gradband';
import { renderChatPage } from './pages/chat';
import { renderTablesPage } from './pages/tables';
import { renderSheetConfigPage } from './pages/sheet-config';
import { renderSettingsPage } from './pages/settings';
import { renderPromptTemplatePage } from './pages/prompt-template';
import { renderToolsPage } from './pages/tools';

export interface PageDef {
  name: string;
  label: string;
  icon: string;
  order: number;
  render: (el: HTMLElement) => void;
}

export const PAGES: PageDef[] = [
  { name: 'preset', label: '剑与汽水角色卡专用', icon: '📜', order: 3, render: renderPresetPage },
  { name: 'jianbandai', label: '渐变带角色卡专用', icon: '🌈', order: 4, render: renderJianbandaiPage },
  { name: 'gradband', label: '渐变带·自由回路', icon: '⚡', order: 6, render: renderGradbandPage },
  { name: 'start', label: '开局', icon: '🎬', order: 5, render: renderStartPage },
  { name: 'chat', label: 'AI 对话', icon: '💬', order: 10, render: renderChatPage },
  { name: 'tables', label: '表格数据', icon: '📋', order: 20, render: renderTablesPage },
  { name: 'sheetconf', label: '表结构/配置', icon: '⚙️', order: 30, render: renderSheetConfigPage },
  { name: 'settings', label: '设置', icon: '🔌', order: 40, render: renderSettingsPage },
  { name: 'prompt', label: '提示词模板', icon: '📝', order: 50, render: renderPromptTemplatePage },
  { name: 'tools', label: '工具', icon: '🧰', order: 90, render: renderToolsPage },
];

let currentName = 'start';
let contentEl: HTMLElement | null = null;
let navEl: HTMLElement | null = null;
let collapseState = false;

/** 切页前清理旧页面登记的资源（如对话页的事件订阅） */
function disposeCurrentPage(): void {
  const dispose = (contentEl as any)?._ofDispose as (() => void) | undefined;
  if (typeof dispose === 'function') {
    try { dispose(); } catch (e) { console.warn('[开局框架面板] 页面清理失败', e); }
  }
}

export function mountApp(root: HTMLElement): void {
  root.className = 'of-panel';
  root.innerHTML = `
    <nav class="of-nav" id="of-nav"></nav>
    <button class="of-collapse" id="of-collapse">◀</button>
    <div class="of-content" id="of-page"></div>
  `;

  const nav = root.querySelector('#of-nav') as HTMLElement;
  contentEl = root.querySelector('#of-page') as HTMLElement;
  navEl = nav;
  const collapseBtn = root.querySelector('#of-collapse') as HTMLElement;

  // 渲染侧栏
  function renderNav() {
    if (!navEl) return;
    navEl.innerHTML = PAGES.map(p =>
      `<button class="of-nav-btn${p.name === currentName ? ' active' : ''}" data-page="${p.name}">${p.icon} ${p.label}</button>`
    ).join('');
  }

  // 切页
  nav.addEventListener('click', (e) => {
    const btn = (e.target as HTMLElement).closest('[data-page]');
    if (!btn) return;
    switchTo(btn.getAttribute('data-page')!);
  });

  collapseBtn.addEventListener('click', () => {
    collapseState = !collapseState;
    nav.style.display = collapseState ? 'none' : '';
    collapseBtn.textContent = collapseState ? '▶' : '◀';
  });

  renderNav();
  switchTo('start');
}

export function switchTo(name: string): void {
  const def = PAGES.find(p => p.name === name);
  if (!def || !contentEl) return;
  currentName = name;
  // 更新侧栏高亮（nav 在面板根下，不在 content 内）
  navEl?.querySelectorAll('.of-nav-btn').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-page') === name);
  });
  // 渲染页面（先清理旧页面资源）
  disposeCurrentPage();
  contentEl.innerHTML = '';
  try {
    def.render(contentEl);
  } catch (e) {
    contentEl.innerHTML = `<div style="padding:16px;color:#f38ba8">页面渲染失败: ${(e as Error).message}</div>`;
    console.error(`[开局框架面板] 页面 ${name} 渲染失败`, e);
  }
}

/** 面板内刷新当前页（外部状态变化后调用） */
export function refreshCurrent(): void {
  if (!contentEl) return;
  disposeCurrentPage();
  contentEl.innerHTML = '';
  const def = PAGES.find(p => p.name === currentName);
  if (def) {
    try { def.render(contentEl); } catch (e) { console.error(e); }
  }
}
