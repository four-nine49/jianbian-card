// ui/pages/start.ts — 开局页：规则包切换/导入 + 三路径（AI对话/选模板/手动建表）+ 对话进度
import { refreshCurrent, switchTo } from '../app';
import { startGuidedDialogue, resetGuidedEngine } from '../state';
import { loadStore, clearStore, importTemplate, addSheet } from '../../store/table-store';
import { loadDialogueState, resetDialogue, STEP_NAMES } from '../../dialogue/state-machine';
import { listPackages, getActivePackage, setActivePackage, importPackage, deletePackage } from '../../dialogue/package-registry';
import standardTemplateRaw from '../../tables/standard.json?raw';

function getStandardTemplateDefs(): any[] {
  return JSON.parse(standardTemplateRaw) as any[];
}

export function renderStartPage(el: HTMLElement): void {
  const store = loadStore();
  const sheetCount = Object.keys(store.sheets).length;
  const hasData = sheetCount > 0;
  let dialogue: any = null;
  try { dialogue = loadDialogueState(); } catch { /* 忽略 */ }

  el.innerHTML = `
    <div style="padding:16px">
      <div class="of-h1">开局</div>
      <p class="of-muted" style="margin:0 0 16px">不同的角色卡用不同的「规则包」（对话规则 + 结算表格）。先选包，再开始；三种开局方式数据最终都进同一套表。</p>

      <div class="of-card">
        <div style="display:flex;align-items:center;margin-bottom:4px">
          <div class="of-h2" style="margin:0">规则包</div>
          <button class="of-btn of-btn-ghost of-btn-sm" id="of-pkg-import-toggle" style="margin-left:auto">导入规则包</button>
        </div>
        <div id="of-pkg-list"></div>
        <div id="of-pkg-import" style="display:none;margin-top:8px;border-top:1px solid #313244;padding-top:8px">
          <label class="of-label">从文件导入（.json）</label>
          <input type="file" id="of-pkg-file" accept=".json,application/json" style="font-size:12px">
          <label class="of-label" style="margin-top:10px">或粘贴规则包 JSON</label>
          <textarea class="of-textarea" id="of-pkg-paste" rows="5" placeholder='{ "id": "my-card", "name": "我的卡", "rulesText": "给 AI 的规则全文…", "tables": [ { "uid": "t1", "name": "表名", "headers": ["列1"], "sourceData": { "note": "…" } } ], "requiredKeys": ["字段1"], "seedRows": { "t1": [["值1"]] } }'></textarea>
          <button class="of-btn of-btn-sm" id="of-pkg-paste-go" style="margin-top:6px">导入</button>
          <div class="of-hint">字段说明见扩展 README 的「规则包格式」；同 id 再次导入 = 覆盖。</div>
        </div>
      </div>

      <div class="of-card" style="display:flex;align-items:center;gap:12px">
        <span style="width:8px;height:8px;border-radius:50%;background:${hasData ? '#a6e3a1' : '#6c7086'}"></span>
        <span>${hasData ? `已开局：${sheetCount} 张表` : '未开局'}</span>
        ${hasData ? '<button class="of-btn of-btn-ghost of-btn-sm" id="of-start-reset" style="margin-left:auto">重置开局</button>' : ''}
      </div>

      <div class="of-path-grid">
        <button class="of-path-card" data-path="ai"><div class="of-path-icon">🤖</div><div class="of-path-title">AI 对话引导</div><div class="of-path-desc">按当前规则包聊出开局，自动结算落地</div></button>
        <button class="of-path-card" data-path="template"><div class="of-path-icon">📦</div><div class="of-path-title">选模板开局</div><div class="of-path-desc">从样例模板里选一套，手动填数据</div></button>
        <button class="of-path-card" data-path="manual"><div class="of-path-icon">✏️</div><div class="of-path-title">手动建表</div><div class="of-path-desc">从零定义表结构和数据</div></button>
      </div>

      <div class="of-card" id="of-path-detail"></div>
    </div>
  `;

  renderPkgList(el, dialogue);

  // 导入区开合
  el.querySelector('#of-pkg-import-toggle')!.addEventListener('click', () => {
    const area = el.querySelector('#of-pkg-import') as HTMLElement;
    area.style.display = area.style.display === 'none' ? '' : 'none';
  });
  // 文件导入
  el.querySelector('#of-pkg-file')!.addEventListener('change', (e) => {
    const file = (e.target as HTMLInputElement).files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => doImportPackage(el, reader.result as string);
    reader.readAsText(file, 'utf-8');
    (e.target as HTMLInputElement).value = '';
  });
  // 粘贴导入
  el.querySelector('#of-pkg-paste-go')!.addEventListener('click', () => {
    const text = (el.querySelector('#of-pkg-paste') as HTMLTextAreaElement).value;
    if (!text.trim()) { toastr?.warning?.('请粘贴规则包 JSON'); return; }
    doImportPackage(el, text);
  });

  // 路径卡片点击
  el.querySelectorAll('[data-path]').forEach(btn => {
    btn.addEventListener('click', () => showPath(el, btn.getAttribute('data-path')!, hasData, dialogue));
  });
  // 重置
  const resetBtn = el.querySelector('#of-start-reset');
  if (resetBtn) resetBtn.addEventListener('click', () => {
    if (!confirm('重置开局将清空所有表数据，确定？')) return;
    clearStore(); refreshCurrent();
  });
}

// ──────────────────────────────────────────────
// 规则包列表 / 切换 / 导入 / 删除
// ──────────────────────────────────────────────

function renderPkgList(el: HTMLElement, dialogue: any): void {
  const listEl = el.querySelector('#of-pkg-list') as HTMLElement;
  const active = getActivePackage();
  listEl.innerHTML = listPackages().map(p => {
    const isActive = p.id === active.id;
    const configured = !!p.rulesText.trim();
    return `<div data-pkg="${p.id}" style="display:flex;align-items:center;gap:10px;padding:8px;border-radius:8px;cursor:pointer;${isActive ? 'background:#313244;outline:1px solid #89b4fa' : ''}">
      <span>${isActive ? '🔵' : '⚪'}</span>
      <div style="flex:1;min-width:0">
        <div style="font-weight:600">${p.name}
          <span class="of-badge ${configured ? 'of-badge-ok' : 'of-badge-warn'}" style="margin-left:6px">${configured ? '已配置' : '未配置'}</span>
          ${p.builtin ? '<span class="of-badge of-badge-idle" style="margin-left:4px">内置</span>' : ''}
        </div>
        <div class="of-hint">${p.description || '—'}</div>
      </div>
      ${!p.builtin ? `<button class="of-btn of-btn-danger of-btn-sm" data-pkgdel="${p.id}">删</button>` : ''}
    </div>`;
  }).join('');

  // 切换
  listEl.querySelectorAll('[data-pkg]').forEach(row => {
    row.addEventListener('click', (e) => {
      if ((e.target as HTMLElement).closest('[data-pkgdel]')) return; // 删除按钮单独处理
      const id = row.getAttribute('data-pkg')!;
      const current = getActivePackage();
      if (id === current.id) return;
      setActivePackage(id);
      resetGuidedEngine(); // 引擎按新包重建
      const pkg = getActivePackage();
      if (dialogue && dialogue.status === 'in_progress') {
        toastr?.warning?.(`已切换到「${pkg.name}」。当前聊天的引导进度是上一个包的，建议点「重置引导进度」再开新局。`);
      } else {
        toastr?.success?.(`已切换规则包：${pkg.name}`);
      }
      refreshCurrent();
    });
  });
  // 删除（仅导入包）
  listEl.querySelectorAll('[data-pkgdel]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-pkgdel')!;
      if (!confirm('删除这个导入的规则包？')) return;
      const r = deletePackage(id);
      if (!r.ok) { toastr?.error?.(r.error || '删除失败'); return; }
      resetGuidedEngine();
      toastr?.success?.('已删除');
      refreshCurrent();
    });
  });
}

function doImportPackage(el: HTMLElement, text: string): void {
  let raw: unknown;
  try { raw = JSON.parse(text); } catch (e) {
    toastr?.error?.('JSON 解析失败：' + (e as Error).message);
    return;
  }
  const r = importPackage(raw);
  if (!r.ok || !r.pkg) { toastr?.error?.('规则包导入失败：' + (r.error || '未知错误')); return; }
  setActivePackage(r.pkg.id);
  resetGuidedEngine();
  toastr?.success?.(`已导入并切换规则包：${r.pkg.name}`);
  refreshCurrent();
}

// ──────────────────────────────────────────────
// 三条开局路径
// ──────────────────────────────────────────────

function showPath(root: HTMLElement, path: string, hasData: boolean, dialogue: any): void {
  const detail = root.querySelector('#of-path-detail') as HTMLElement;
  // 高亮选中
  root.querySelectorAll('[data-path]').forEach(b => b.classList.toggle('active', b.getAttribute('data-path') === path));

  if (path === 'ai') {
    const activePkg = getActivePackage();
    const statusText = !dialogue ? '—'
      : dialogue.status === 'settled' ? '✅ 已结算落地'
      : dialogue.status === 'in_progress' ? `进行中 · 第 ${dialogue.currentStep} 步 ${STEP_NAMES[dialogue.currentStep] ?? ''}`
      : '未开始';
    const badgeClass = !dialogue ? 'of-badge-idle' : dialogue.status === 'settled' ? 'of-badge-ok' : dialogue.status === 'in_progress' ? 'of-badge-warn' : 'of-badge-idle';
    let progressHtml = '';
    if (dialogue && dialogue.status === 'in_progress') {
      const chips = STEP_NAMES.map((s, i) =>
        `<span class="of-step-chip ${i < dialogue.currentStep ? 'of-step-done' : i === dialogue.currentStep ? 'of-step-cur' : 'of-step-todo'}">${s}</span>`
      ).join('');
      const sels = (dialogue.selections || []).filter((x: string) => x);
      progressHtml = `<div style="margin-top:8px">${chips}</div>${sels.length ? `<div style="margin-top:6px;color:#a6e3a1;font-size:12px">已选：${sels.join('；')}</div>` : ''}${dialogue.ledger ? `<div style="margin-top:4px;color:#f9e2af;font-size:12px">${dialogue.ledger}</div>` : ''}`;
    }
    detail.innerHTML = `
      <p style="margin:0 0 12px">按当前规则包「<b>${activePkg.name}</b>」引导你完成开局，结束后按该包的表格自动结算落地。</p>
      <div style="margin-bottom:12px"><span class="of-badge ${badgeClass}">${statusText}</span></div>
      ${progressHtml}
      ${dialogue && dialogue.status === 'settled' ? '<p class="of-muted" style="margin-top:8px">结算已完成，可到"表格数据"页查看。</p>' : ''}
      <div style="margin-top:12px;display:flex;gap:8px">
        <button class="of-btn" id="of-ai-go">${dialogue?.status === 'in_progress' ? '继续引导对话' : '开始引导对话'}</button>
        ${dialogue && dialogue.status !== 'idle' ? '<button class="of-btn of-btn-ghost of-btn-sm" id="of-ai-reset">重置引导进度</button>' : ''}
      </div>
    `;
    detail.querySelector('#of-ai-go')!.addEventListener('click', () => {
      if (!startGuidedDialogue()) return; // 空规则包会在这里被拦截并提示
      switchTo('chat');
    });
    const ar = detail.querySelector('#of-ai-reset');
    if (ar) ar.addEventListener('click', () => { if (confirm('重置对话引导进度？（会清空这段引导会话的历史）')) { resetDialogue(); refreshCurrent(); } });
  } else if (path === 'template') {
    const defs = getStandardTemplateDefs();
    detail.innerHTML = `
      <p class="of-muted" style="margin:0 0 10px">从样例模板里选一套导入：</p>
      <div id="of-tpl-list">
        <div class="of-card" style="cursor:pointer" id="of-tpl-standard">
          <div style="font-weight:600">标准模板</div>
          <div class="of-muted" style="font-size:12px;margin-top:4px">角色档案 / 技能 / 纪要表 / 资产 / 地区 / 系统网络 / 系统总览（${defs.length} 张表）</div>
        </div>
        <div style="margin-top:8px"><button class="of-btn of-btn-ghost of-btn-sm" id="of-tpl-paste">粘贴 JSON 导入</button></div>
        <div id="of-tpl-paste-area" style="display:none;margin-top:8px">
          <textarea class="of-textarea" id="of-tpl-paste-text" rows="8" placeholder='[ { "uid":"x","name":"表名","headers":["列1"],"sourceData":{"note":"..."}, "updateConfig":{} } ]'></textarea>
          <button class="of-btn of-btn-sm" style="margin-top:6px" id="of-tpl-paste-go">导入</button>
        </div>
      </div>
    `;
    const list = detail.querySelector('#of-tpl-list') as HTMLElement;
    list.querySelector('#of-tpl-standard')!.addEventListener('click', () => {
      if (!confirm(`将导入 ${defs.length} 张表，会清空当前所有表数据。继续？`)) return;
      importTemplate(defs); refreshCurrent();
      toastr?.success?.(`已导入模板：${defs.length} 张表`);
    });
    list.querySelector('#of-tpl-paste')!.addEventListener('click', () => {
      (list.querySelector('#of-tpl-paste-area') as HTMLElement).style.display = '';
    });
    list.querySelector('#of-tpl-paste-go')!.addEventListener('click', () => {
      const text = (list.querySelector('#of-tpl-paste-text') as HTMLTextAreaElement).value;
      if (!text.trim()) { toastr?.warning?.('请粘贴模板 JSON'); return; }
      try {
        const d = JSON.parse(text);
        if (!Array.isArray(d)) throw new Error('必须是数组');
        if (!confirm(`将导入 ${d.length} 张表，继续？`)) return;
        importTemplate(d); refreshCurrent();
        toastr?.success?.(`已导入 ${d.length} 张表`);
      } catch (e) { toastr?.error?.('JSON 解析失败：' + (e as Error).message); }
    });
  } else if (path === 'manual') {
    detail.innerHTML = `
      <p class="of-muted" style="margin:0 0 10px">从零定义一张表。建完后到"表格数据"页填数据行。可连续建多张。</p>
      <div class="of-grid2">
        <div><label class="of-label">uid（英文唯一标识）</label><input class="of-input" id="of-ns-uid" placeholder="如 inventory"></div>
        <div><label class="of-label">表名（中文）</label><input class="of-input" id="of-ns-name" placeholder="如 物品栏"></div>
      </div>
      <div style="margin-top:8px"><label class="of-label">列名（逗号分隔）</label><input class="of-input" id="of-ns-headers" placeholder="如 名称,数量,备注"></div>
      <div style="margin-top:8px"><label class="of-label">Note（给 AI 的列定义+维护规则）</label><textarea class="of-textarea" id="of-ns-note" rows="3"></textarea></div>
      <div style="margin-top:8px"><label class="of-label">Insert 触发</label><textarea class="of-textarea" id="of-ns-insert" rows="2"></textarea></div>
      <div style="margin-top:8px"><label class="of-label">Update 触发</label><textarea class="of-textarea" id="of-ns-update" rows="2"></textarea></div>
      <div style="margin-top:8px"><label class="of-label">Delete 触发</label><textarea class="of-textarea" id="of-ns-delete" rows="2"></textarea></div>
      <div style="margin-top:12px"><button class="of-btn of-btn-ok" id="of-ns-create">建表</button></div>
      <div id="of-ns-created" style="margin-top:8px;font-size:12px;color:#a6e3a1"></div>
    `;
    const created: string[] = [];
    detail.querySelector('#of-ns-create')!.addEventListener('click', () => {
      const uid = (detail.querySelector('#of-ns-uid') as HTMLInputElement).value.trim();
      const name = (detail.querySelector('#of-ns-name') as HTMLInputElement).value.trim();
      if (!uid || !name) { toastr?.warning?.('uid 和 name 必填'); return; }
      const headers = (detail.querySelector('#of-ns-headers') as HTMLInputElement).value.split(',').map(s => s.trim()).filter(Boolean);
      if (headers.length === 0) { toastr?.warning?.('至少一列'); return; }
      try {
        addSheet({
          uid, name, headers,
          purpose: '',
          scope: 'always',
          sourceData: {
            note: (detail.querySelector('#of-ns-note') as HTMLTextAreaElement).value,
            insertRule: (detail.querySelector('#of-ns-insert') as HTMLTextAreaElement).value,
            updateRule: (detail.querySelector('#of-ns-update') as HTMLTextAreaElement).value,
            deleteRule: (detail.querySelector('#of-ns-delete') as HTMLTextAreaElement).value,
          },
          updateConfig: {},
        });
        created.push(name);
        (detail.querySelector('#of-ns-created') as HTMLElement).textContent = '已建：' + created.join('、');
        // 清空输入
        ['#of-ns-uid', '#of-ns-name', '#of-ns-headers', '#of-ns-note', '#of-ns-insert', '#of-ns-update', '#of-ns-delete'].forEach(s => {
          ((detail.querySelector(s) as HTMLInputElement | HTMLTextAreaElement)).value = '';
        });
        toastr?.success?.(`已建表：${name}`);
      } catch (e) { toastr?.error?.('建表失败：' + (e as Error).message); }
    });
  }
}
