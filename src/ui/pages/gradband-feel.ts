// ui/pages/gradband-feel.ts — 渐变带·感情（多感情表管理，样式同剑与汽水表格页）
//
// 左侧：感情表列表（FEEL_TABLES 注册；以后加角色在此扩展）
// 右侧：选中表 = 数据编辑（行 CRUD，同剑与汽水「表格数据」页）+ 提示词编辑（每表一套，
//       同剑与汽水「提示词模板」页：段增删/排序/ON-OFF/恢复默认）。
import { refreshCurrent } from '../app';
import { loadStore, getAllSheets, updateCell, updateRow, deleteRow, insertRow } from '../../store/table-store';
import type { Sheet } from '../../store/types';
import { FEEL_TABLES, getFeelPrompt, setFeelPrompt, 默认感情提示词 } from '../../gradband/feel-tables';
import type { PromptSegment } from '../../gradband/core/settings';

let activeName = FEEL_TABLES[0]?.name ?? '';

function esc(s: unknown): string {
  return String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c] as string));
}

function getSheetByName(name: string): Sheet | null {
  const store = loadStore();
  return getAllSheets(store).find(s => s.name === name) ?? null;
}

export function renderGradbandFeelPage(el: HTMLElement): void {
  const sheets = FEEL_TABLES.map(t => getSheetByName(t.name)).filter((s): s is Sheet => !!s);
  if (!FEEL_TABLES.some(t => t.name === activeName)) activeName = FEEL_TABLES[0]?.name ?? '';

  el.innerHTML = `<div style="padding:12px">
    <div class="of-h1">渐变带 · 感情</div>
    <div class="of-hint" style="margin-bottom:10px">感情追踪表（每张表 = 一个角色的心理追踪；数值规则在该表 Note 里，感情AI每轮按正文更新）。左选表，右改数据与提示词。以后加角色：在「渐变带角色卡专用」建新感情表即可。</div>
    <div class="of-split">
      <div class="of-sidelist" id="gf-list" style="width:150px"></div>
      <div style="flex:1;overflow:auto;padding:0 12px" id="gf-body"></div>
    </div>
  </div>`;

  const listEl = el.querySelector('#gf-list') as HTMLElement;
  const bodyEl = el.querySelector('#gf-body') as HTMLElement;

  function renderList() {
    listEl.innerHTML = FEEL_TABLES.map(t =>
      `<button class="of-sidelist-btn${t.name === activeName ? ' active' : ''}" data-name="${t.name}">${t.name}</button>`
    ).join('');
    listEl.innerHTML += `<div style="border-top:1px solid #313244;margin-top:8px;padding-top:6px;font-size:11px;color:#6c7086">多表扩展：在 FEEL_TABLES 注册 + 建表即出现。</div>`;
  }

  function renderBody() {
    const sheet = getSheetByName(activeName);
    const def = FEEL_TABLES.find(t => t.name === activeName);
    if (!sheet || !def) {
      bodyEl.innerHTML = `<p class="of-muted">表「${activeName}」尚未创建——先到「渐变带角色卡专用」走开局，或手动建同名表。</p>`;
      return;
    }
    const sheet0: Sheet = sheet;   // 收窄为非空，供嵌套闭包用
    const def0 = def;
    const segs = getFeelPrompt(activeName).map(x => ({ ...x }));
    bodyEl.innerHTML = `
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px">
        <div class="of-h2" style="margin:0">${esc(sheet0.name)}</div>
        <span class="of-muted" style="font-size:12px">${sheet0.rows.length} 行 · 数值规则见表 Note</span>
      </div>
      <div class="of-tabs" id="gf-tabs">
        <button class="of-tab active" data-tab="data">数据</button>
        <button class="of-tab" data-tab="note">规则(Note)</button>
        <button class="of-tab" data-tab="prompt">提示词</button>
      </div>
      <div id="gf-tabbody"></div>
    `;
    let tab = 'data';
    const tabBody = bodyEl.querySelector('#gf-tabbody') as HTMLElement;

    function renderTab() {
      if (tab === 'data') renderData(tabBody, sheet0);
      else if (tab === 'note') renderNote(tabBody, sheet0, def0);
      else renderPrompt(tabBody, segs);
    }
    bodyEl.querySelector('#gf-tabs')!.addEventListener('click', (e) => {
      const b = (e.target as HTMLElement).closest('[data-tab]');
      if (!b) return;
      tab = b.getAttribute('data-tab')!;
      bodyEl.querySelectorAll('#gf-tabs .of-tab').forEach(x => x.classList.toggle('active', x.getAttribute('data-tab') === tab));
      renderTab();
    });
    renderTab();
  }

  // ── 数据 tab（同剑与汽水表格页：行编辑/删/加）──
  function renderData(box: HTMLElement, sheet: Sheet) {
    const key = `sheet_${sheet.uid}`;
    let h = '<div style="overflow-x:auto"><table class="of-table"><thead><tr><th style="width:36px">#</th>';
    sheet.headers.forEach(col => { h += `<th>${esc(col)}</th>`; });
    h += '<th style="width:46px"></th></tr></thead><tbody>';
    sheet.rows.forEach((row, ri) => {
      h += `<tr><td style="color:#6c7086">${ri + 1}</td>`;
      row.forEach((cell, ci) => {
        h += `<td><input data-row="${ri + 1}" data-col="${ci}" value="${esc(cell ?? '')}"></td>`;
      });
      h += `<td style="text-align:center"><button class="of-btn of-btn-danger of-btn-sm" data-del="${ri + 1}">删</button></td></tr>`;
    });
    h += `<tr><td style="color:#6c7086">+</td>${sheet.headers.map(col => `<td><input data-new="${esc(col)}" placeholder="${esc(col)}"></td>`).join('')}<td style="text-align:center"><button class="of-btn of-btn-ok of-btn-sm" id="gf-addrow">加</button></td></tr>`;
    h += '</tbody></table></div>';
    h += '<div class="of-hint" style="margin-top:6px">感情AI每轮按表规则更新第 1 行；多行 = 多个追踪对象（单行表默认只有 1 行）。</div>';
    box.innerHTML = h;

    box.querySelectorAll('[data-row]').forEach(inp => {
      inp.addEventListener('change', () => {
        const r = parseInt(inp.getAttribute('data-row')!, 10);
        const c = parseInt(inp.getAttribute('data-col')!, 10);
        updateCell(key, { rowId: r, colIndex: c, value: (inp as HTMLInputElement).value });
        toastr?.success?.('已保存');
      });
    });
    box.querySelectorAll('[data-del]').forEach(btn => {
      btn.addEventListener('click', () => {
        const r = parseInt(btn.getAttribute('data-del')!, 10);
        if (!confirm(`删除第 ${r} 行？`)) return;
        deleteRow(key, r);
        refreshCurrent();
      });
    });
    const add = box.querySelector('#gf-addrow');
    if (add) add.addEventListener('click', () => {
      const cells = sheet.headers.map(col => {
        const inp = box.querySelector(`[data-new="${esc(col)}"]`) as HTMLInputElement | null;
        return inp?.value || null;
      });
      if (cells.every(c => !c)) { toastr?.warning?.('行内容为空'); return; }
      insertRow(key, cells);
      refreshCurrent();
    });
  }

  // ── Note tab（表规则只读 + 编辑入口到表结构页）──
  function renderNote(box: HTMLElement, sheet: Sheet, def: (typeof FEEL_TABLES)[number]) {
    box.innerHTML = `<div class="of-card" style="white-space:pre-wrap;font-size:12px;line-height:1.7;max-height:60vh;overflow-y:auto">${esc(def.note || sheet.sourceData.note || '（无规则）')}</div>
      <div class="of-hint" style="margin-top:6px">此规则注入感情AI提示词（{{字段说明}}）。修改请到「表结构/配置」页编辑该表 Note。</div>`;
  }

  // ── 提示词 tab（每表一套，同剑与汽水提示词页段编辑）──
  function renderPrompt(box: HTMLElement, segs: PromptSegment[]) {
    box.innerHTML = `<div class="of-hint" style="margin-bottom:8px">这套提示词只用于「${esc(activeName)}」表的感情分析。占位符：<code>{{角色}} {{字段说明}} {{当前值}} {{正文}}</code>。ON/OFF 控段、↑↓ 排序、可删可加、可恢复默认。</div>
      <div id="gf-psegs"></div>
      <div style="margin-top:8px;display:flex;gap:8px">
        <button class="of-btn of-btn-ok of-btn-sm" id="gf-padd">＋ 添加一段</button>
        <button class="of-btn of-btn-ghost of-btn-sm" id="gf-preset">恢复默认</button>
      </div>`;
    const segsEl = box.querySelector('#gf-psegs') as HTMLElement;
    function renderSegs() {
      segsEl.innerHTML = segs.map((seg, i) => `
        <div class="of-card" style="margin-bottom:8px">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">
            <select class="of-select" data-role="${i}" style="width:96px">
              <option value="system" ${seg.role === 'system' ? 'selected' : ''}>system</option>
              <option value="user" ${seg.role === 'user' ? 'selected' : ''}>user</option>
              <option value="assistant" ${seg.role === 'assistant' ? 'selected' : ''}>assistant</option>
            </select>
            <input class="of-input" data-note="${i}" value="${esc(seg.note || '')}" placeholder="备注" style="flex:1">
            <button class="of-btn of-btn-ghost of-btn-sm" data-up="${i}">↑</button>
            <button class="of-btn of-btn-ghost of-btn-sm" data-down="${i}">↓</button>
            <button class="of-btn of-btn-sm ${seg.enabled ? 'of-btn-ok' : 'of-btn-ghost'}" data-toggle="${i}">${seg.enabled ? 'ON' : 'OFF'}</button>
            <button class="of-btn of-btn-danger of-btn-sm" data-delseg="${i}">删</button>
          </div>
          <textarea class="of-textarea" data-content="${i}" rows="3">${esc(seg.content)}</textarea>
        </div>`).join('');
    }
    renderSegs();
    function save() {
      setFeelPrompt(activeName, segs);
      toastr?.success?.('已保存');
    }
    segsEl.addEventListener('click', (e) => {
      const t = e.target as HTMLElement;
      const up = t.closest('[data-up]'); const down = t.closest('[data-down]');
      const tog = t.closest('[data-toggle]'); const del = t.closest('[data-delseg]');
      if (up) { const i = parseInt(up.getAttribute('data-up')!, 10); if (i > 0) { [segs[i - 1], segs[i]] = [segs[i], segs[i - 1]]; save(); renderSegs(); } }
      if (down) { const i = parseInt(down.getAttribute('data-down')!, 10); if (i < segs.length - 1) { [segs[i + 1], segs[i]] = [segs[i], segs[i + 1]]; save(); renderSegs(); } }
      if (tog) { const i = parseInt(tog.getAttribute('data-toggle')!, 10); segs[i].enabled = !segs[i].enabled; save(); renderSegs(); }
      if (del) { const i = parseInt(del.getAttribute('data-delseg')!, 10); segs.splice(i, 1); save(); renderSegs(); }
    });
    segsEl.addEventListener('change', (e) => {
      const t = e.target as HTMLElement;
      const roleSel = t.closest('[data-role]'); const noteInp = t.closest('[data-note]');
      if (roleSel) { segs[parseInt(roleSel.getAttribute('data-role')!, 10)].role = (roleSel as HTMLSelectElement).value as any; save(); }
      if (noteInp) { segs[parseInt(noteInp.getAttribute('data-note')!, 10)].note = (noteInp as HTMLInputElement).value; save(); }
    });
    segsEl.querySelectorAll('[data-content]').forEach(ta => {
      ta.addEventListener('blur', () => { segs[parseInt(ta.getAttribute('data-content')!, 10)].content = (ta as HTMLTextAreaElement).value; save(); });
    });
    box.querySelector('#gf-padd')!.addEventListener('click', () => { segs.push({ role: 'system', content: '（新分段，占位符见页首说明）', enabled: true, note: '自定义' }); save(); renderSegs(); });
    box.querySelector('#gf-preset')!.addEventListener('click', () => {
      if (!confirm(`恢复「${activeName}」默认提示词？`)) return;
      segs.splice(0, segs.length, ...默认感情提示词(activeName).map(x => ({ ...x })));
      save(); renderSegs();
    });
  }

  listEl.addEventListener('click', (e) => {
    const b = (e.target as HTMLElement).closest('[data-name]');
    if (!b) return;
    activeName = b.getAttribute('data-name')!;
    renderList(); renderBody();
  });

  renderList();
  renderBody();
}
