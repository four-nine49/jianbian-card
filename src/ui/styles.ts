// ui/styles.ts — 全部样式（CSS 字符串；构建时提取为 dist/index.css，由 manifest 的 css 字段注入主页面）
//
// 命名空间隔离（指南 八）：所有 class 用 of- 独占前缀。
// 分层（指南 八.5）：窗口 z-index 9999，悬浮按钮 z-index 10000。
export const PANEL_CSS = `
.of-root{all:initial}
.of-root *{box-sizing:border-box}

/* ── 窗口（指南 三）── */
.of-window{position:fixed;z-index:9999;display:none;flex-direction:column;background:#1e1e2e;border:1px solid #444;border-radius:12px;box-shadow:0 20px 50px rgba(0,0,0,.4);overflow:hidden;font-family:system-ui,sans-serif;color:#cdd6f4;font-size:13px}
.of-window.visible{display:flex}
.of-window.dragging,.of-window.resizing{user-select:none}
.of-window-titlebar{display:flex;align-items:center;gap:8px;height:36px;padding:0 10px;background:#181825;border-bottom:1px solid #313244;cursor:grab;user-select:none;touch-action:none;flex-shrink:0}
.of-window.dragging .of-window-titlebar{cursor:grabbing}
.of-window-title{flex:1;font-weight:700;font-size:13px;color:#cdd6f4;pointer-events:none;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.of-window-close{width:24px;height:24px;border:none;border-radius:6px;background:#313244;color:#cdd6f4;cursor:pointer;font-size:13px;line-height:1;flex-shrink:0}
.of-window-close:hover{background:#f38ba8;color:#1e1e2e}
.of-window-content{flex:1;min-height:0;overflow:hidden}
.of-window-resize{position:absolute;touch-action:none;z-index:2}
.of-window-resize[data-dir="se"]{right:0;bottom:0;width:16px;height:16px;cursor:nwse-resize}
.of-window-resize[data-dir="e"]{right:0;top:36px;bottom:0;width:6px;cursor:ew-resize}
.of-window-resize[data-dir="s"]{left:0;right:0;bottom:0;height:6px;cursor:ns-resize}

/* ── 悬浮按钮（指南 四）── */
.of-toggle{position:fixed;z-index:10000;display:flex;align-items:center;justify-content:center;width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,#89b4fa,#b4befe);color:#1e1e2e;font-size:19px;cursor:grab;user-select:none;touch-action:none;box-shadow:0 4px 15px rgba(0,0,0,.35)}
.of-toggle.dragging{cursor:grabbing;opacity:.8}
.of-toggle-icon{pointer-events:none;line-height:1}

/* ── 面板壳（侧栏 + 页面，挂在窗口内容区里）── */
.of-panel{display:flex;height:100%;min-height:0}
/* ── 顶部模式切换器（剑与汽水 / 渐变带）── */
.of-modepicker{position:absolute;top:6px;right:8px;display:flex;gap:4px;z-index:5}
.of-modebtn{padding:3px 10px;border:none;border-radius:12px;background:#313244;color:#6c7086;font-size:11px;cursor:pointer;font-family:inherit}
.of-modebtn:hover{color:#cdd6f4}
.of-modebtn.on{background:#89b4fa;color:#1e1e2e;font-weight:600}
.of-nav{width:180px;flex-shrink:0;border-right:1px solid #313244;overflow-y:auto;padding:8px 0}
.of-nav-btn{display:block;width:100%;text-align:left;padding:8px 12px;border:none;background:none;color:#cdd6f4;cursor:pointer;font-size:13px;font-family:inherit}
.of-nav-btn:hover{background:#313244}
.of-nav-btn.active{background:#89b4fa;color:#1e1e2e;font-weight:600}
.of-collapse{width:20px;flex-shrink:0;background:#313244;color:#cdd6f4;border:none;cursor:pointer;font-size:12px}
.of-collapse:hover{background:#45475a}
.of-content{flex:1;overflow:auto}
.of-content::-webkit-scrollbar{width:8px;height:8px}
.of-content::-webkit-scrollbar-thumb{background:#45475a;border-radius:4px}
.of-content::-webkit-scrollbar-track{background:transparent}

/* ── 通用控件 ── */
.of-h1{font-size:16px;font-weight:700;color:#cdd6f4;margin:0 0 6px}
.of-h2{font-size:15px;font-weight:600;color:#cdd6f4;margin:0 0 8px}
.of-muted{color:#6c7086}
.of-card{background:#181825;border-radius:8px;padding:12px;margin-bottom:12px}
.of-row{display:flex;gap:8px;align-items:center}
.of-col{display:flex;flex-direction:column;gap:8px}
.of-btn{padding:6px 14px;border:none;border-radius:6px;background:#89b4fa;color:#1e1e2e;font-weight:600;cursor:pointer;font-family:inherit;font-size:13px}
.of-btn:hover{background:#74a0e8}
.of-btn:disabled{opacity:.4;cursor:not-allowed}
.of-btn-ghost{background:#313244;color:#cdd6f4;font-weight:400}
.of-btn-ghost:hover{background:#45475a}
.of-btn-sm{padding:2px 8px;font-size:12px}
.of-btn-danger{background:#f38ba8;color:#1e1e2e}
.of-btn-danger:hover{background:#eba3b8}
.of-btn-ok{background:#a6e3a1;color:#1e1e2e}
.of-input,.of-select,.of-textarea{background:#313244;border:1px solid #313244;border-radius:6px;padding:6px 8px;color:#cdd6f4;font-family:inherit;font-size:13px;outline:none;width:100%;box-sizing:border-box}
.of-input:focus,.of-select:focus,.of-textarea:focus{border-color:#89b4fa}
.of-textarea{resize:vertical;font-family:ui-monospace,monospace;font-size:12px}
.of-label{display:block;color:#89b4fa;font-size:13px;margin-bottom:4px}
.of-hint{font-size:11px;color:#6c7086;margin-top:2px;line-height:1.5}
.of-grid3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px}
.of-grid2{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.of-table{width:100%;border-collapse:collapse;font-size:13px}
.of-table th{background:#313244;color:#89b4fa;text-align:left;padding:6px 8px;font-weight:600}
.of-table td{padding:4px 8px;border-bottom:1px solid #313244}
.of-table tr:hover td{background:#2a2a3d}
.of-table input{background:#1e1e2e;border:1px solid transparent;border-radius:4px;padding:3px 6px;color:#cdd6f4;font-family:inherit;font-size:13px;width:100%;box-sizing:border-box}
.of-table input:focus{border-color:#89b4fa}
.of-badge{display:inline-block;padding:2px 8px;border-radius:10px;font-size:11px}
.of-badge-ok{background:#a6e3a1;color:#1e1e2e}
.of-badge-warn{background:#f9e2af;color:#1e1e2e}
.of-badge-idle{background:#313244;color:#6c7086}

/* ── 开局页路径卡片 ── */
.of-path-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin-bottom:16px}
.of-path-card{padding:16px;border-radius:10px;background:#313244;cursor:pointer;text-align:left;border:2px solid transparent;font-family:inherit}
.of-path-card:hover{background:#45475a}
.of-path-card.active{border-color:#89b4fa;background:#313244}
.of-path-icon{font-size:24px;margin-bottom:4px}
.of-path-title{font-weight:600;color:#cdd6f4}
.of-path-desc{font-size:12px;color:#6c7086;margin-top:4px}

/* ── 标签页 ── */
.of-tabs{display:flex;gap:4px;margin-bottom:8px}
.of-tab{padding:2px 10px;border-radius:6px;font-size:12px;cursor:pointer;background:#313244;color:#cdd6f4;border:none;font-family:inherit}
.of-tab.active{background:#89b4fa;color:#1e1e2e}

/* ── 对话页消息气泡 ── */
.of-msg{border-radius:8px;padding:8px 10px;margin-bottom:8px;font-size:13px;white-space:pre-wrap;word-break:break-word}
.of-msg-user{background:#313244;margin-left:32px}
.of-msg-ai{background:#45475a;margin-right:32px}
.of-msg-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:4px}
.of-msg-name{font-size:11px;color:#89b4fa}
.of-msg-actions{display:flex;gap:4px}

/* ── 流式生成中的气泡 ── */
.of-streaming{opacity:.92}
.of-streaming .of-stream-text::after{content:'▌';color:#89b4fa;animation:of-blink 1s steps(2,start) infinite}
@keyframes of-blink{to{visibility:hidden}}

/* ── 对话进度步骤条 ── */
.of-step-chip{display:inline-block;padding:2px 8px;border-radius:4px;font-size:11px;margin:2px}
.of-step-done{background:#a6e3a1;color:#1e1e2e}
.of-step-cur{background:#f9e2af;color:#1e1e2e}
.of-step-todo{background:#313244;color:#6c7086}

/* ── 表格页左右分栏 ── */
.of-sidelist{width:160px;flex-shrink:0;border-right:1px solid #313244;overflow-y:auto}
.of-sidelist-btn{display:block;width:100%;text-align:left;padding:8px 12px;border:none;background:none;color:#cdd6f4;cursor:pointer;font-size:13px;font-family:inherit;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.of-sidelist-btn:hover{background:#313244}
.of-sidelist-btn.active{background:#89b4fa;color:#1e1e2e}
.of-sidelist-add{padding:8px 12px;color:#a6e3a1;font-size:12px;cursor:pointer}
.of-split{display:flex;height:100%}

/* ── 手机 / 窄屏适配（≤640px）──
   面板近全屏（!important 覆盖内联定位，拖拽在手机上无意义）、侧栏变顶部横排、卡片单列 */
@media (max-width: 640px){
  .of-window{left:4px !important;top:4px !important;width:calc(100vw - 8px) !important;height:calc(100vh - 8px) !important;height:calc(100dvh - 8px) !important;border-radius:10px}
  .of-window-titlebar{touch-action:pan-y}
  .of-panel{flex-direction:column}
  .of-modepicker{position:static;order:-1;justify-content:center;padding:4px 0;border-bottom:1px solid #313244}
  .of-nav{width:100%;display:flex;flex-direction:row;overflow-x:auto;overflow-y:hidden;padding:4px;border-right:none;border-bottom:1px solid #313244;flex:0 0 auto}
  .of-nav-btn{width:auto;white-space:nowrap;padding:8px 10px;flex:0 0 auto}
  .of-collapse{display:none}
  .of-content{flex:1;min-height:0}
  .of-path-grid{grid-template-columns:1fr}
  .of-grid3{grid-template-columns:1fr 1fr}
  .of-grid2{grid-template-columns:1fr}
  .of-sidelist{width:110px}
  .of-msg-user{margin-left:12px}
  .of-msg-ai{margin-right:12px}
}

/* ── 渐变带·自由回路 管理页（gbfc- 命名空间，取自原项目 styles.ts）── */
.gbfc-tabs{display:flex;gap:4px;border-bottom:1px solid #243040;padding:0 8px}
.gbfc-tab{padding:6px 12px;font-size:13px;color:#9fb3c8;cursor:pointer;border-bottom:2px solid transparent}
.gbfc-tab.on{color:#4fc3f7;border-bottom-color:#4fc3f7;font-weight:600}
.gbfc-body{font-size:13px;color:#c9d6e2;overflow-y:auto}
.gbfc-body h4{margin:12px 0 6px;color:#4fc3f7;font-size:13px}
.gbfc-card{background:#141c24;border:1px solid #243040;border-radius:8px;padding:10px;margin:8px 0}
.gbfc-row{display:flex;align-items:center;gap:8px;margin:4px 0;flex-wrap:wrap}
.gbfc-hint{color:#7f93a7;font-size:12px;line-height:1.6}
.gbfc-log{background:#0c1116;border:1px solid #243040;border-radius:8px;padding:8px;font:12px/1.6 ui-monospace,monospace;white-space:pre-wrap;color:#c9d6e2}
.gbfc-btn{padding:6px 14px;border-radius:6px;border:1px solid #2d3f52;background:#16232f;color:#c9d6e2;font-size:13px;cursor:pointer;font-family:inherit}
.gbfc-btn:hover{background:#1e3242;border-color:#4fc3f7}
.gbfc-seg{display:inline-block;padding:3px 10px;border-radius:12px;border:1px solid #2d3f52;color:#9fb3c8;font-size:12px;cursor:pointer}
.gbfc-seg.on{background:#4fc3f7;color:#0c1116;border-color:#4fc3f7;font-weight:600}
.gbfc-body label{display:flex;align-items:center;gap:6px;font-size:13px;color:#c9d6e2;margin:4px 0}
.gbfc-body input[type=text],.gbfc-body input[type=number],.gbfc-body textarea{background:#0c1116;border:1px solid #243040;border-radius:6px;color:#c9d6e2;padding:4px 8px;font:12px/1.5 ui-monospace,monospace;width:auto;box-sizing:border-box}
.gbfc-body textarea{width:100%;resize:vertical;min-height:60px}
`;
