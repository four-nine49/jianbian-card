// ui/pages/gradband.ts — 渐变带·自由回路 管理页（开局框架面板内子 tab）
//
// 沿用业务自带的 5 个 tab（总览/设置/提示词/感情角色/工具），渲染与事件逻辑
// 从原 渐变带-自由回路/src/ui/window.ts 平移；DOM id/class 维持 gbfc- 前缀，
// 样式由 gradband 的 gbfc 类提供（见 ui/styles.ts 的 gbfc 段）。
import { loadSettings, saveSettings, resetSettingsCache, 默认提示词, type Settings, type ApiConfig, type PromptSegment } from '../../gradband/core/settings';
import { loadGame, syncSnapshot, NS } from '../../gradband/core/store';
import { updateVariablesWith } from '../../bridge/tavern';
import { getLastReport, manualTurn } from '../../gradband/pipeline/scheduler';
import { injectOpeningToLatest } from '../../gradband/index';
import type { FeelCharacter } from '../../gradband/core/settings';

let curTab = 'overview';

// 状态栏/开局面板渲染的查找标记（HTML 由玩家手动导入正则；marker 需转义正则元字符）
const STATUS_MARKER_RE = `<StatusPlaceHolderImpl/>`.replace(/[/&]/g, m => '\\' + m);
const OPENING_MARKER_RE = `<渐变带开局/>`.replace(/[/&]/g, m => '\\' + m);

function esc(s: unknown): string {
  return String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c] as string));
}

function getFeelRole(i: number): FeelCharacter {
  const s = loadSettings();
  return s.感情角色[+i];
}

export function renderGradbandPage(el: HTMLElement): void {
  el.innerHTML = `<div class="gbfc-tabs" id="gbfc-tabs"></div><div class="gbfc-body" id="gbfc-body" style="padding:12px"></div>`;
  const tabBox = el.querySelector('#gbfc-tabs') as HTMLElement;
  const body = el.querySelector('#gbfc-body') as HTMLElement;
  const tabs: [string, string][] = [['overview', '总览'], ['settings', '设置'], ['prompts', '提示词'], ['feel', '感情角色'], ['tools', '工具']];
  tabBox.innerHTML = tabs.map(t => `<span class="gbfc-tab${t[0] === curTab ? ' on' : ''}" data-t="${t[0]}">${t[1]}</span>`).join('');
  tabBox.addEventListener('click', ev => {
    const t = (ev.target as HTMLElement).dataset?.t;
    if (!t) return;
    curTab = t;
    tabBox.querySelectorAll('.gbfc-tab').forEach(el2 => el2.classList.toggle('on', (el2 as HTMLElement).dataset.t === t));
    renderBody(body);
  });
  renderBody(body);
}

function renderBody(body: HTMLElement): void {
  const s = loadSettings();
  let html = '';
  if (curTab === 'overview') {
    html += '<h4>存档状态</h4>';
    const g = loadGame();
    if (!g) html += '<div class="gbfc-hint">未开局。到最新楼注入开局面板，完成角色创建。</div>';
    else {
      html += `<div class="gbfc-hint">剧情时间：${esc(g.主角.剧情时间.label)}　能量 ${Math.round(g.主角.能量kJ.当前)}/${g.主角.能量kJ.上限}kJ　精神 ${Math.round(g.主角.精神点.当前)}/${g.主角.精神点.上限}</div>`;
      html += `<div class="gbfc-hint">回路库 ${g.回路库.length} 条（固定 ${g.回路库.filter(c => c.type === 'fixed').length} / 自由 ${g.回路库.filter(c => c.type === 'free').length}）　补给 ${g.补给物品.length} 种　待扣单 ${g.待扣单.length} 条</div>`;
    }
    const rep = getLastReport();
    if (rep) html += `<h4>最近回合报告</h4><div class="gbfc-log">${esc([...rep.log, ...(rep.notices.length ? ['【提示】' + rep.notices.join('\n')] : []), ...(rep.error ? ['【错误】' + rep.error] : [])].join('\n'))}</div>`;
    html += '<h4>快捷操作</h4>';
    html += '<button class="gbfc-btn" id="gbInjectOpening">注入开局面板到最新楼</button>';
    html += '<button class="gbfc-btn" id="gbManualTurn">手动结算一次</button>';
    html += '<button class="gbfc-btn" id="gbSync">手动同步快照</button>';
  } else if (curTab === 'settings') {
    html += '<h4>开关</h4>';
    (Object.keys(s.开关) as (keyof Settings['开关'])[]).forEach(k => {
      html += `<label><input type="checkbox" data-sw="${k}" ${s.开关[k] ? 'checked' : ''}> ${k}</label>`;
    });
    html += '<h4>结算频率（每 N 条 AI 回复一次）</h4>';
    html += `<label>数据AI <input type="number" min="1" step="1" data-freq="数据AI" value="${s.频率.数据AI}"></label>`;
    html += `<label>感情AI <input type="number" min="1" step="1" data-freq="感情AI" value="${s.频率.感情AI}"></label>`;
    html += '<h4>API（三态：跟随酒馆 / 自定义）</h4>';
    (['数据AI', '法术AI', '感情AI'] as const).forEach(w => {
      const cfg = s.api[w];
      html += `<div class="gbfc-card"><b>${w}</b><div class="gbfc-row">
        <span class="gbfc-seg ${cfg.mode === 'tavern' ? 'on' : ''}" data-apimode="${w}|tavern">跟随酒馆</span>
        <span class="gbfc-seg ${cfg.mode === 'custom' ? 'on' : ''}" data-apimode="${w}|custom">自定义</span></div>`;
      if (cfg.mode === 'custom') {
        html += `<label>apiurl <input type="text" data-api="${w}|apiurl" value="${esc(cfg.apiurl || '')}"></label>`;
        html += `<label>key <input type="text" data-api="${w}|key" value="${esc(cfg.key || '')}"></label>`;
        html += `<label>model <input type="text" data-api="${w}|model" value="${esc(cfg.model || '')}"></label>`;
        html += `<label>代理预设（可选，填了可省 apiurl/key）<input type="text" data-api="${w}|proxy_preset" value="${esc(cfg.proxy_preset || '')}"></label>`;
        html += `<div class="gbfc-row">temperature <input type="number" step="0.1" style="width:70px" data-api="${w}|temperature" value="${cfg.temperature ?? 0.6}"> max_tokens <input type="number" step="128" style="width:90px" data-api="${w}|max_tokens" value="${cfg.max_tokens ?? 2048}"></div>`;
      }
      html += '</div>';
    });
  } else if (curTab === 'prompts') {
    (['数据AI', '法术AI', '感情AI'] as const).forEach(w => {
      html += `<h4>${w} 提示词（占位符：数据 {{状态}} {{正文}} {{出手单}} {{场景}}；法术 {{描述}} {{参数}} {{亲和}} {{库索引}} {{场景}}；感情 {{角色}} {{字段说明}} {{当前值}} {{正文}}）</h4>`;
      s.提示词[w].forEach((seg, i) => {
        html += `<div class="gbfc-card"><div class="gbfc-row">
          <label style="margin:0"><input type="checkbox" data-pen="${w}|${i}" ${seg.enabled ? 'checked' : ''}> 启用</label>
          <span class="gbfc-hint">${esc(seg.note || seg.role)}</span>
          <span class="gbfc-seg" data-pdel="${w}|${i}">删除</span></div>
          <textarea data-prompt="${w}|${i}">${esc(seg.content)}</textarea></div>`;
      });
      html += `<button class="gbfc-btn" data-padd="${w}">＋新增分段</button>`;
      html += `<button class="gbfc-btn" data-preset="${w}">恢复默认</button>`;
    });
  } else if (curTab === 'feel') {
    html += '<h4>感情分析角色（可添加，不写死）</h4>';
    s.感情角色.forEach((ch, i) => {
      html += `<div class="gbfc-card"><div class="gbfc-row">
        <input type="text" style="width:120px" data-fch="名称|${i}" value="${esc(ch.名称)}">
        <label style="margin:0"><input type="checkbox" data-fch="enabled|${i}" ${ch.enabled ? 'checked' : ''}> 启用</label>
        <span class="gbfc-seg" data-fdel="${i}">删除</span></div>`;
      html += `<textarea data-fch="fields|${i}" rows="${Math.max(3, ch.fields.length)}">${esc(ch.fields.map(f => `${f.名}|${f.类型}|${f.说明}`).join('\n'))}</textarea>`;
      html += '<div class="gbfc-hint">字段每行一条：名称|number或string|说明</div></div>';
    });
    html += '<button class="gbfc-btn" id="gbFeelAdd">＋新增角色（为以后的女主预留）</button>';
  } else if (curTab === 'tools') {
    html += '<h4>工具</h4>';
    html += '<button class="gbfc-btn" id="gbInjectOpening2">注入开局面板标记到最新楼</button>';
    html += '<button class="gbfc-btn" id="gbManualTurn2">手动结算一次（数据AI+感情AI+落盘）</button>';
    html += '<button class="gbfc-btn" id="gbSync2">手动同步快照到最新楼</button>';
    html += '<button class="gbfc-btn" id="gbWipe">重置本局存档（危险）</button>';
    html += '<h4>状态栏 / 开局面板 HTML 模板</h4>';
    html += `<div class="gbfc-hint">构建产物 dist/状态栏面板.html、dist/开局界面.html 已内联引擎。请手动导入酒馆正则：<br>
      状态栏：查找 <code>${esc(STATUS_MARKER_RE)}</code> → 替换为「状态栏面板.html」全文<br>
      开局面板：查找 <code>${esc(OPENING_MARKER_RE)}</code> → 替换为「开局界面.html」全文<br>
      这两处正则需在酒馆「正则」页手动创建（本扩展不再自动注入）。</div>`;
    const rep = getLastReport();
    if (rep) html += `<div class="gbfc-log">${esc([...rep.log, ...(rep.error ? ['【错误】' + rep.error] : [])].join('\n'))}</div>`;
  }
  body.innerHTML = html;
  bindBody(body);
}

function bindBody(body: HTMLElement): void {
  body.querySelectorAll('input[data-sw]').forEach(el => {
    (el as HTMLInputElement).addEventListener('change', () => {
      const s = loadSettings();
      (s.开关 as any)[(el as HTMLElement).dataset.sw!] = (el as HTMLInputElement).checked;
      saveSettings(s);
    });
  });
  body.querySelectorAll('input[data-freq]').forEach(el => {
    (el as HTMLInputElement).addEventListener('change', () => {
      const s = loadSettings();
      const which = (el as HTMLElement).dataset.freq as '数据AI' | '感情AI';
      s.频率[which] = Math.max(1, Math.round(+(el as HTMLInputElement).value || 1));
      saveSettings(s);
    });
  });
  body.querySelectorAll('.gbfc-seg[data-apimode]').forEach(el => {
    el.addEventListener('click', () => {
      const [w, mode] = (el as HTMLElement).dataset.apimode!.split('|');
      const s = loadSettings();
      s.api[w as '数据AI'].mode = mode as ApiConfig['mode'];
      saveSettings(s); renderBody(body);
    });
  });
  body.querySelectorAll('input[data-api]').forEach(el => {
    (el as HTMLInputElement).addEventListener('change', () => {
      const [w, k] = (el as HTMLElement).dataset.api!.split('|');
      const s = loadSettings();
      const cfg = s.api[w as '数据AI'] as any;
      const v = (el as HTMLInputElement).value;
      cfg[k] = ['temperature', 'max_tokens'].includes(k) ? +v : v;
      saveSettings(s);
    });
  });
  body.querySelectorAll('input[data-pen],textarea[data-prompt]').forEach(el => {
    (el as HTMLInputElement).addEventListener('change', () => {
      const key = (el as HTMLElement).dataset.pen ?? (el as HTMLElement).dataset.prompt;
      const parts = key!.split('|');
      const w = parts[0] as '数据AI'; const i = +parts[1];
      const s = loadSettings();
      const seg: PromptSegment = s.提示词[w][i];
      if ((el as HTMLElement).dataset.pen) seg.enabled = (el as HTMLInputElement).checked;
      else seg.content = (el as HTMLTextAreaElement).value;
      saveSettings(s);
    });
  });
  body.querySelectorAll('.gbfc-seg[data-pdel]').forEach(el => {
    el.addEventListener('click', () => {
      const [w, i] = (el as HTMLElement).dataset.pdel!.split('|');
      const s = loadSettings();
      s.提示词[w as '数据AI'].splice(+i, 1);
      saveSettings(s); renderBody(body);
    });
  });
  body.querySelectorAll('button[data-padd]').forEach(el => {
    el.addEventListener('click', () => {
      const w = (el as HTMLElement).dataset.padd as '数据AI';
      const s = loadSettings();
      s.提示词[w].push({ role: 'system', content: '（新分段，占位符见页首说明）', enabled: true, note: '自定义' });
      saveSettings(s); renderBody(body);
    });
  });
  body.querySelectorAll('button[data-preset]').forEach(el => {
    el.addEventListener('click', () => {
      const w = (el as HTMLElement).dataset.preset as '数据AI';
      const s = loadSettings();
      s.提示词[w] = 默认提示词()[w];
      saveSettings(s); renderBody(body);
    });
  });
  body.querySelectorAll('input[data-fch],textarea[data-fch]').forEach(el => {
    (el as HTMLInputElement).addEventListener('change', () => {
      const [k, i] = (el as HTMLElement).dataset.fch!.split('|');
      const s = loadSettings();
      const ch = s.感情角色[+i];
      if (k === '名称') ch.名称 = (el as HTMLInputElement).value.trim() || ch.名称;
      else if (k === 'enabled') ch.enabled = (el as HTMLInputElement).checked;
      else if (k === 'fields') {
        ch.fields = (el as HTMLTextAreaElement).value.split('\n').filter(l => l.trim()).map(l => {
          const [名, 类型, 说明] = l.split('|');
          return { 名: (名 || '').trim(), 类型: (类型 || 'string').trim(), 说明: (说明 || '').trim() };
        });
      }
      saveSettings(s);
    });
  });
  body.querySelectorAll('.gbfc-seg[data-fdel]').forEach(el => {
    el.addEventListener('click', () => {
      const s = loadSettings();
      s.感情角色.splice(+(el as HTMLElement).dataset.fdel!, 1);
      saveSettings(s); renderBody(body);
    });
  });
  const addFeel = body.querySelector('#gbFeelAdd');
  addFeel?.addEventListener('click', () => {
    const s = loadSettings();
    s.感情角色.push({ 名称: '新角色', enabled: true, fields: [{ 名: '好感度', 类型: 'number', 说明: '0-100 整数' }] });
    saveSettings(s); renderBody(body);
  });
  const wire = (id: string, fn: () => void) => body.querySelector(id)?.addEventListener('click', fn);
  wire('#gbInjectOpening', () => void injectOpeningToLatest());
  wire('#gbInjectOpening2', () => void injectOpeningToLatest());
  wire('#gbSync', () => void syncSnapshot());
  wire('#gbSync2', () => void syncSnapshot());
  const turn = async () => { const r = await manualTurn(); renderBody(body); };
  wire('#gbManualTurn', () => void turn());
  wire('#gbManualTurn2', () => void turn());
  wire('#gbWipe', async () => {
    if (!confirm('确定重置本局存档？（聊天变量中的渐变带数据将删除）')) return;
    await updateVariablesWith(v => { delete v[NS]; return v; }, { type: 'chat' });
    renderBody(body);
  });
}
