// ui/pages/sheet-config.ts — 表结构/配置（元信息/源数据/填表参数 三 tab，全字段带中文解释）
import { refreshCurrent } from '../app';
import { loadStore, getAllSheets, updateSheetMeta, updateSheetSourceData, updateSheetConfig, removeSheet, importTemplate } from '../../store/table-store';
import { loadSettings } from '../../core/settings';
import standardTemplateRaw from '../../tables/standard.json?raw';

export function renderSheetConfigPage(el: HTMLElement): void {
  const store = loadStore();
  const sheets = getAllSheets(store);
  let activeKey = sheets.length > 0 ? `sheet_${sheets[0].uid}` : '';
  let tab: 'meta' | 'source' | 'config' = 'meta';

  el.innerHTML = `<div class="of-split"><div class="of-sidelist" id="of-cfg-list"></div><div style="flex:1;overflow:auto;padding:12px" id="of-cfg-edit"></div></div>`;
  const listEl = el.querySelector('#of-cfg-list') as HTMLElement;
  const editEl = el.querySelector('#of-cfg-edit') as HTMLElement;

  function renderList() {
    let html = sheets.map(s =>
      `<button class="of-sidelist-btn${`sheet_${s.uid}` === activeKey ? ' active' : ''}" data-key="sheet_${s.uid}">${s.name}${s.updateConfig.group ? `<span style="color:#6c7086">（${s.updateConfig.group}）</span>` : ''}</button>`
    ).join('');
    html += '<div style="border-top:1px solid #313244;margin-top:8px;padding-top:8px"><div class="of-sidelist-add" id="of-cfg-import">导入样例模板</div></div>';
    listEl.innerHTML = html;
  }

  function renderEdit() {
    const s = store.sheets[activeKey];
    if (!s) {
      editEl.innerHTML = '<p class="of-muted">选择左侧一张表，或导入样例模板。</p>';
      return;
    }
    const tabs = ['meta', 'source', 'config'].map(t =>
      `<button class="of-tab${tab === t ? ' active' : ''}" data-tab="${t}">${t === 'meta' ? '元信息' : t === 'source' ? '源数据' : '填表参数'}</button>`
    ).join('');
    editEl.innerHTML = `<div style="display:flex;align-items:center;gap:8px;margin-bottom:12px"><div class="of-h2">${s.name}</div><div class="of-tabs">${tabs}</div><button class="of-btn of-btn-danger of-btn-sm" id="of-cfg-del" style="margin-left:auto">删除此表</button></div><div id="of-cfg-body"></div>`;
    renderBody(s);
  }

  function renderBody(s: any) {
    const body = editEl.querySelector('#of-cfg-body') as HTMLElement;
    if (tab === 'meta') {
      body.innerHTML = `<div style="max-width:520px">
        <label class="of-label">表名</label><input class="of-input" id="of-m-name" value="${s.name}">
        <div class="of-hint">显示在左侧列表和发给 AI 的表数据里，用中文。</div>
        <label class="of-label" style="margin-top:12px">作用（注释）</label><textarea class="of-textarea" id="of-m-purpose" rows="2">${s.purpose || ''}</textarea>
        <div class="of-hint">这张表是干嘛的、什么时候需要——给自己和其它用户看的说明，不发给 AI。</div>
        <label class="of-label" style="margin-top:12px">列名（逗号分隔）</label><input class="of-input" id="of-m-headers" value="${s.headers.join(', ')}">
        <div class="of-hint">这张表有哪些列。改列数后已有行会自动对齐（多截少补空）。</div>
        <button class="of-btn" id="of-m-save" style="margin-top:12px">保存</button>
      </div>`;
      body.querySelector('#of-m-save')!.addEventListener('click', () => {
        const name = (body.querySelector('#of-m-name') as HTMLInputElement).value;
        const headers = (body.querySelector('#of-m-headers') as HTMLInputElement).value.split(',').map(x => x.trim()).filter(Boolean);
        const purpose = (body.querySelector('#of-m-purpose') as HTMLTextAreaElement).value;
        updateSheetMeta(activeKey, { name, headers, purpose });
        toastr?.success?.('已保存'); refreshCurrent();
      });
    } else if (tab === 'source') {
      const sd = s.sourceData;
      body.innerHTML = `<div style="max-width:640px">
        <div class="of-hint" style="margin-bottom:8px">这一页全是写给填表 AI 看的说明书，每次填表都会随表数据一起发给它。</div>
        <label class="of-label">Note（列定义 + 维护规则）</label><textarea class="of-textarea" id="of-s-note" rows="5">${sd.note || ''}</textarea>
        <div class="of-hint">每列填什么、格式/取值范围是什么。写清楚 AI 才不会乱填。</div>
        <label class="of-label" style="margin-top:12px">Insert 触发（什么时候加一行）</label><textarea class="of-textarea" id="of-s-insert" rows="3">${sd.insertRule || ''}</textarea>
        <label class="of-label" style="margin-top:12px">Update 触发（什么时候改一行）</label><textarea class="of-textarea" id="of-s-update" rows="3">${sd.updateRule || ''}</textarea>
        <label class="of-label" style="margin-top:12px">Delete 触发（什么时候删一行）</label><textarea class="of-textarea" id="of-s-delete" rows="3">${sd.deleteRule || ''}</textarea>
        <div class="of-hint">不想让 AI 做某类操作就写「禁止。」</div>
        <button class="of-btn" id="of-s-save" style="margin-top:12px">保存</button>
      </div>`;
      body.querySelector('#of-s-save')!.addEventListener('click', () => {
        updateSheetSourceData(activeKey, {
          note: (body.querySelector('#of-s-note') as HTMLTextAreaElement).value,
          insertRule: (body.querySelector('#of-s-insert') as HTMLTextAreaElement).value,
          updateRule: (body.querySelector('#of-s-update') as HTMLTextAreaElement).value,
          deleteRule: (body.querySelector('#of-s-delete') as HTMLTextAreaElement).value,
        });
        toastr?.success?.('已保存');
      });
    } else {
      const c = s.updateConfig;
      const useGlobal = c.useGlobal !== false; // a 档
      const g = loadSettings().globalDefaults;
      body.innerHTML = `<div style="max-width:560px;font-size:13px">
        <label style="display:flex;align-items:center;gap:8px"><input type="checkbox" id="of-c-enabled" ${c.enabled ? 'checked' : ''}> 参与自动填表</label>
        <div class="of-hint">关掉后这张表不参与自动填表（表格数据页仍可手动编辑）。</div>

        <label class="of-label" style="margin-top:14px">参数来源</label>
        <select class="of-select" id="of-c-src" style="max-width:280px">
          <option value="a" ${useGlobal ? 'selected' : ''}>a（跟随全局，推荐）</option>
          <option value="custom" ${useGlobal ? '' : 'selected'}>自定义（单独调这张表）</option>
        </select>
        <div class="of-hint">a 档当前生效值：读取 <b>${g.contextRounds}</b> 轮 · 每 <b>${g.updateFrequency}</b> 条 AI 回复填一次 · 跳过 <b>${g.skipFloors}</b> 楼 · 只发最近 <b>${g.sendLatestRows}</b> 行 · 提取 <b>${g.extractTags || '无'}</b>（在「设置」页改全局默认）。</div>

        <label class="of-label" style="margin-top:14px">填表分组</label><input class="of-input" id="of-c-group" value="${(c.group || '').replace(/"/g, '&quot;')}" placeholder="留空 = 默认组">
        <div class="of-hint">组名相同的表会合并成<b>一次</b>请求，由同一个 AI 一起填；不同组名的表各自单独发一次请求。重要/复杂的表（如纪要表）单独起个组名，就能不和别的表混在一起。</div>

        <div id="of-c-customfields" style="display:${useGlobal ? 'none' : ''}">
          <label class="of-label" style="margin-top:14px">读取对话轮数</label><input class="of-input" type="number" id="of-c-rounds" value="${c.contextRounds}">
          <div class="of-hint">AI 填这张表时能往回看几轮对话。1 轮 = 你发一句 + AI 回一句。</div>

          <label class="of-label" style="margin-top:14px">填表频率（每 N 条 AI 回复填一次）</label><input class="of-input" type="number" id="of-c-freq" value="${c.updateFrequency}">
          <div class="of-hint">填 1 = 每条 AI 回复都填；填 2 = 隔一条填一次；填 999 = 基本不自动填。</div>

          <label class="of-label" style="margin-top:14px">跳过最近楼层</label><input class="of-input" type="number" id="of-c-skip" value="${c.skipFloors}">
          <div class="of-hint">最近 N 条消息不参与本次填表（比如刚生成还没读完）。</div>

          <label class="of-label" style="margin-top:14px">只发最近 N 行（-1 = 全部行）</label><input class="of-input" type="number" id="of-c-latest" value="${c.sendLatestRows}">
          <div class="of-hint">行数很多的表（如纪要表）可以只发最近 10 行，省 token。</div>

          <label class="of-label" style="margin-top:14px">自定义行渲染模板（高级，可留空）</label><textarea class="of-textarea" id="of-c-tpl" rows="2">${c.sendRowsTemplate || ''}</textarea>
          <div class="of-hint">留空用默认格式（行号 + 逗号分隔）。可用变量：{{row_id}} {{cells}} {{col_0}} {{列名}}。</div>

          <label class="of-label" style="margin-top:14px">正文提取标签</label><textarea class="of-textarea" id="of-c-ex" rows="2">${c.extractTags || ''}</textarea>
          <div class="of-hint">只把「开始|结束」之间的正文发给这张表，一对写一行。留空 = 全部正文。例：正文被 <code>&lt;content&gt;…&lt;/content&gt;</code> 包着，就填 <code>&lt;content&gt;|&lt;/content&gt;</code>（会自动取最后一对）。</div>

          <label class="of-label" style="margin-top:14px">正文排除标签</label><textarea class="of-textarea" id="of-c-exc" rows="2">${c.excludeTags || ''}</textarea>
          <div class="of-hint">把「开始|结束」之间的内容从正文里删掉再发（如思考过程、OOC）。</div>
        </div>

        <button class="of-btn" id="of-c-save" style="margin-top:14px">保存</button>
      </div>`;
      body.querySelector('#of-c-save')!.addEventListener('click', () => {
        const src = (body.querySelector('#of-c-src') as HTMLSelectElement).value;
        const base: any = {
          enabled: (body.querySelector('#of-c-enabled') as HTMLInputElement).checked,
          group: (body.querySelector('#of-c-group') as HTMLInputElement).value.trim(),
        };
        if (src === 'a') {
          updateSheetConfig(activeKey, { ...base, useGlobal: true });
        } else {
          updateSheetConfig(activeKey, {
            ...base,
            useGlobal: false,
            contextRounds: parseInt((body.querySelector('#of-c-rounds') as HTMLInputElement).value, 10),
            updateFrequency: parseInt((body.querySelector('#of-c-freq') as HTMLInputElement).value, 10),
            skipFloors: parseInt((body.querySelector('#of-c-skip') as HTMLInputElement).value, 10),
            sendLatestRows: parseInt((body.querySelector('#of-c-latest') as HTMLInputElement).value, 10),
            sendRowsTemplate: (body.querySelector('#of-c-tpl') as HTMLTextAreaElement).value,
            extractTags: (body.querySelector('#of-c-ex') as HTMLTextAreaElement).value,
            excludeTags: (body.querySelector('#of-c-exc') as HTMLTextAreaElement).value,
          });
        }
        toastr?.success?.('已保存');
        renderList();
      });
      const srcSel = body.querySelector('#of-c-src') as HTMLSelectElement;
      srcSel.addEventListener('change', () => {
        (body.querySelector('#of-c-customfields') as HTMLElement).style.display = srcSel.value === 'a' ? 'none' : '';
      });
    }
  }

  listEl.addEventListener('click', (e) => {
    const btn = (e.target as HTMLElement).closest('[data-key]');
    if (btn) { activeKey = btn.getAttribute('data-key')!; tab = 'meta'; renderList(); renderEdit(); return; }
    if ((e.target as HTMLElement).id === 'of-cfg-import') {
      if (!confirm('导入样例模板会清空当前所有表数据，继续？')) return;
      importTemplate(JSON.parse(standardTemplateRaw)); refreshCurrent();
      toastr?.success?.('已导入样例模板');
    }
  });
  editEl.addEventListener('click', (e) => {
    const tabBtn = (e.target as HTMLElement).closest('[data-tab]');
    if (tabBtn) { tab = tabBtn.getAttribute('data-tab')! as any; renderEdit(); return; }
    if ((e.target as HTMLElement).id === 'of-cfg-del') {
      if (!confirm('删除整张表？数据一并清除。')) return;
      removeSheet(activeKey); refreshCurrent();
    }
  });

  renderList(); renderEdit();
}
