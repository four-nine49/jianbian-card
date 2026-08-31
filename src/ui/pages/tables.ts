// ui/pages/tables.ts — 表格数据看/改（表选择 + 单表编辑）
import { refreshCurrent } from '../app';
import { loadStore, getAllSheets, updateCell, deleteRow, insertRow } from '../../store/table-store';

export function renderTablesPage(el: HTMLElement): void {
  const store = loadStore();
  const sheets = getAllSheets(store);
  let activeKey = sheets.length > 0 ? `sheet_${sheets[0].uid}` : '';

  el.innerHTML = `<div class="of-split"><div class="of-sidelist" id="of-tbl-list"></div><div style="flex:1;overflow:auto;padding:12px" id="of-tbl-edit"></div></div>`;

  const listEl = el.querySelector('#of-tbl-list') as HTMLElement;
  const editEl = el.querySelector('#of-tbl-edit') as HTMLElement;

  function renderList() {
    if (sheets.length === 0) {
      listEl.innerHTML = '<div style="padding:12px;color:#6c7086;font-size:12px">（无表。到"表结构/配置"页导入模板或新增表。）</div>';
      return;
    }
    listEl.innerHTML = sheets.map(s =>
      `<button class="of-sidelist-btn${`sheet_${s.uid}` === activeKey ? ' active' : ''}" data-key="sheet_${s.uid}">${s.name}</button>`
    ).join('');
  }

  function renderEdit() {
    const sheet = store.sheets[activeKey];
    if (!sheet) { editEl.innerHTML = '<p class="of-muted">选择左侧一张表查看 / 修改数据。</p>'; return; }
    const headers = sheet.headers;
    const rows = sheet.rows;
    let tableHtml = `<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px"><div class="of-h2" style="margin:0">${sheet.name}<span class="of-muted" style="font-size:12px;margin-left:8px">uid: ${sheet.uid} · ${rows.length} 行</span></div><button class="of-btn of-btn-ghost of-btn-sm" id="of-tbl-refresh">刷新</button></div>`;
    if (sheet.purpose) tableHtml += `<div class="of-hint" style="margin-bottom:10px">作用：${sheet.purpose}</div>`;
    tableHtml += '<div style="overflow-x:auto"><table class="of-table"><thead><tr><th style="width:40px">#</th>';
    headers.forEach((h: string) => { tableHtml += `<th>${h}</th>`; });
    tableHtml += '<th style="width:50px"></th></tr></thead><tbody>';
    rows.forEach((row: any[], ri: number) => {
      tableHtml += `<tr><td style="color:#6c7086">${ri + 1}</td>`;
      row.forEach((cell, ci) => {
        tableHtml += `<td><input data-row="${ri + 1}" data-col="${ci}" value="${(cell ?? '').toString().replace(/"/g, '&quot;')}"></td>`;
      });
      tableHtml += `<td style="text-align:center"><button class="of-btn of-btn-danger of-btn-sm" data-delrow="${ri + 1}">删</button></td></tr>`;
    });
    // 新增行
    tableHtml += `<tr><td style="color:#6c7086">+</td>`;
    headers.forEach((h: string, i: number) => {
      tableHtml += `<td><input data-newcol="${i}" placeholder="${h}"></td>`;
    });
    tableHtml += `<td style="text-align:center"><button class="of-btn of-btn-ok of-btn-sm" id="of-tbl-addrow">加</button></td></tr>`;
    tableHtml += '</tbody></table></div>';
    editEl.innerHTML = tableHtml;

    // 单元格编辑
    editEl.querySelectorAll('[data-row]').forEach(inp => {
      inp.addEventListener('change', () => {
        const r = parseInt(inp.getAttribute('data-row')!, 10);
        const c = parseInt(inp.getAttribute('data-col')!, 10);
        updateCell(activeKey, { rowId: r, colIndex: c, value: (inp as HTMLInputElement).value });
      });
    });
    // 删行
    editEl.querySelectorAll('[data-delrow]').forEach(btn => {
      btn.addEventListener('click', () => {
        const r = parseInt(btn.getAttribute('data-delrow')!, 10);
        if (!confirm(`删除第 ${r} 行？`)) return;
        deleteRow(activeKey, r);
        refreshCurrent();
      });
    });
    // 加行
    const addBtn = editEl.querySelector('#of-tbl-addrow');
    if (addBtn) addBtn.addEventListener('click', () => {
      const newCols: string[] = [];
      editEl.querySelectorAll('[data-newcol]').forEach(inp => {
        newCols.push((inp as HTMLInputElement).value);
      });
      if (newCols.every(c => !c)) { toastr?.warning?.('行内容为空'); return; }
      insertRow(activeKey, newCols.map(c => c || null));
      refreshCurrent();
    });
    // 刷新
    const refBtn = editEl.querySelector('#of-tbl-refresh');
    if (refBtn) refBtn.addEventListener('click', () => refreshCurrent());
  }

  listEl.addEventListener('click', (e) => {
    const btn = (e.target as HTMLElement).closest('[data-key]');
    if (!btn) return;
    activeKey = btn.getAttribute('data-key')!;
    renderList(); renderEdit();
  });

  renderList(); renderEdit();
}
