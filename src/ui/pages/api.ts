// ui/pages/api.ts — API 设置页：三个后台 AI 的 API 配置集中一页
// ① 填表 API（开局框架·标准表格自动填表）② 数据AI（渐变带·自动结算）③ 法术AI（渐变带·回路送审）
// 从 settings.ts（填表段）与 gradband.ts 设置 tab（数据AI/法术AI 段）平移而来；默认 温度 0.8 / max_tokens 5000。
import { loadSettings, saveSettingsPatch } from '../../core/settings';
import { loadSettings as loadGbSettings, saveSettings as saveGbSettings, type ApiConfig } from '../../gradband/core/settings';

function esc(s: unknown): string {
  return String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c] as string));
}

export function renderApiPage(el: HTMLElement): void {
  const fw = loadSettings();
  const api_ = fw.fillApi;
  const gb = loadGbSettings();

  const gbSection = (which: '数据AI' | '法术AI', cfg: ApiConfig, idp: string, desc: string) => `
    <div class="of-h2" style="color:#89b4fa;margin-top:20px">${which}<span class="of-muted" style="font-size:12px;font-weight:400">（渐变带）</span></div>
    <div class="of-hint">${desc}</div>
    <select class="of-select" id="${idp}-mode" style="margin-top:8px;max-width:280px">
      <option value="tavern" ${cfg.mode === 'tavern' ? 'selected' : ''}>跟随酒馆当前 API</option>
      <option value="custom" ${cfg.mode !== 'tavern' ? 'selected' : ''}>自定义 API（独立配置）</option>
    </select>
    <div id="${idp}-custom" style="display:${cfg.mode !== 'tavern' ? '' : 'none'};margin-top:8px">
      <label class="of-label">代理预设（优先用）</label><input class="of-input" id="${idp}-proxy" value="${esc(cfg.proxy_preset || '')}" placeholder="酒馆「代理」功能里保存的预设名">
      <div class="of-hint">填了它，下面的 URL / Key 都不用再填。</div>
      <label class="of-label" style="margin-top:12px">API URL（不用代理时直连地址）</label><input class="of-input" id="${idp}-url" value="${esc(cfg.apiurl || '')}" placeholder="如 https://api.deepseek.com/v1">
      <label class="of-label" style="margin-top:12px">API Key</label><input class="of-input" type="password" id="${idp}-key" value="${esc(cfg.key || '')}">
      <label class="of-label" style="margin-top:12px">模型</label><input class="of-input" id="${idp}-model" value="${esc(cfg.model || '')}" placeholder="模型名">
      <div class="of-grid3" style="margin-top:12px">
        <div>
          <label class="of-label">温度</label><input class="of-input" type="number" step="0.1" id="${idp}-temp" value="${cfg.temperature ?? 0.8}">
          <div class="of-hint">0～1，默认 0.8；只输出 JSON，不需要太发散</div>
        </div>
        <div>
          <label class="of-label">最大回复长度</label><input class="of-input" type="number" id="${idp}-max" value="${cfg.max_tokens ?? 5000}">
          <div class="of-hint">AI 单次回复的上限，默认 5000</div>
        </div>
      </div>
    </div>
    <button class="of-btn" id="${idp}-save" style="margin-top:12px">保存</button>`;

  el.innerHTML = `<div style="padding:16px;max-width:680px">
    <div class="of-h2" style="color:#89b4fa">API 设置</div>
    <div class="of-hint">三个后台 AI 集中在这页配置。每个都可以「跟随酒馆当前 API」（什么都不配），也可以「自定义」单独配一个；保存后立即生效。</div>

    <div class="of-h2" style="color:#89b4fa;margin-top:20px">填表 API<span class="of-muted" style="font-size:12px;font-weight:400">（开局框架·标准表格）</span></div>
    <div class="of-hint">标准表格自动填表用的 AI（如陆安追踪表）。可以「跟随酒馆当前 API」什么都不配，也可以「自定义」单独配一个（推荐：不占用正文模型，选便宜快速的即可）。</div>
    <select class="of-select" id="of-a-mode" style="margin-top:8px;max-width:280px">
      <option value="custom" ${api_.mode === 'custom' ? 'selected' : ''}>自定义 API（独立配置）</option>
      <option value="tavern" ${api_.mode === 'tavern' ? 'selected' : ''}>跟随酒馆当前 API</option>
    </select>
    <label style="display:flex;align-items:center;gap:8px;margin-top:10px"><input type="checkbox" id="of-a-stream" ${api_.stream !== false ? 'checked' : ''}> 填表请求使用流式传输</label>
    <div class="of-hint">走反代建议开：非流式请求更容易被反代识别。开启不影响填表结果——解析仍用完整返回；填表的流式内容不会显示在对话页。</div>
    <div id="of-a-custom" style="display:${api_.mode === 'tavern' ? 'none' : ''};margin-top:8px">
      <label class="of-label">代理预设（优先用）</label><input class="of-input" id="of-a-proxy" value="${api_.proxyPreset || ''}" placeholder="酒馆「代理」功能里保存的预设名">
      <div class="of-hint">酒馆顶栏插头图标里配好的代理预设名。填了它，下面的 URL / Key 都不用再填。</div>
      <label class="of-label" style="margin-top:12px">API URL（不用代理时直连地址）</label><input class="of-input" id="of-a-url" value="${api_.apiUrl || ''}" placeholder="如 https://api.deepseek.com/v1">
      <div class="of-hint">OpenAI 兼容格式 的接口地址，仅当上面代理预设留空时生效。</div>
      <label class="of-label" style="margin-top:12px">API Key</label><input class="of-input" type="password" id="of-a-key" value="${api_.apiKey || ''}" placeholder="对应接口的密钥">
      <label class="of-label" style="margin-top:12px">模型</label><input class="of-input" id="of-a-model" value="${api_.model || ''}" placeholder="如 deepseek-chat、gpt-4o-mini">
      <div class="of-hint">专门负责填表的模型。选便宜快速的即可。</div>
      <div class="of-grid3" style="margin-top:12px">
        <div>
          <label class="of-label">温度</label><input class="of-input" type="number" step="0.1" id="of-a-temp" value="${api_.temperature}">
          <div class="of-hint">0～1，越高越发散，默认 0.8</div>
        </div>
        <div>
          <label class="of-label">最大回复长度</label><input class="of-input" type="number" id="of-a-max" value="${api_.maxTokens}">
          <div class="of-hint">AI 单次填表回复的上限，默认 5000</div>
        </div>
        <div>
          <label class="of-label">接口类型</label><input class="of-input" id="of-a-src" value="${api_.source || ''}" placeholder="保持 openai">
          <div class="of-hint">OpenAI 兼容接口就保持默认，不用改</div>
        </div>
      </div>
    </div>
    <button class="of-btn" id="of-a-save" style="margin-top:12px">保存</button>
    <div class="of-hint">切到「跟随酒馆」时已填的自定义配置会保留，切回来还在。</div>

    ${gbSection('数据AI', gb.api['数据AI'], 'of-api-data', '渐变带回合管线里，把最新正文翻译成「状态变更包」再交给脚本结算的 AI。')}
    ${gbSection('法术AI', gb.api['法术AI'], 'of-api-spell', '审核玩家自创/剧情获得的新回路物理可行性、并替剧情回路填参数的 AI（送审）。')}
  </div>`;

  // ── 填表 API ──
  const aModeSel = el.querySelector('#of-a-mode') as HTMLSelectElement;
  aModeSel.addEventListener('change', () => {
    (el.querySelector('#of-a-custom') as HTMLElement).style.display = aModeSel.value === 'custom' ? '' : 'none';
  });
  el.querySelector('#of-a-save')!.addEventListener('click', () => {
    const mode = aModeSel.value === 'tavern' ? 'tavern' : 'custom';
    const stream = (el.querySelector('#of-a-stream') as HTMLInputElement).checked;
    if (mode === 'custom') {
      saveSettingsPatch({
        fillApi: {
          ...api_,
          mode,
          stream,
          proxyPreset: (el.querySelector('#of-a-proxy') as HTMLInputElement).value,
          apiUrl: (el.querySelector('#of-a-url') as HTMLInputElement).value,
          apiKey: (el.querySelector('#of-a-key') as HTMLInputElement).value,
          model: (el.querySelector('#of-a-model') as HTMLInputElement).value,
          temperature: parseFloat((el.querySelector('#of-a-temp') as HTMLInputElement).value) || 0.8,
          maxTokens: parseInt((el.querySelector('#of-a-max') as HTMLInputElement).value, 10) || 5000,
          source: (el.querySelector('#of-a-src') as HTMLInputElement).value || 'openai',
        },
      });
    } else {
      saveSettingsPatch({ fillApi: { ...api_, mode, stream } });
    }
    toastr?.success?.(mode === 'tavern' ? '填表已切换为跟随酒馆当前 API' : '已保存填表 API 配置（自定义）');
  });

  // ── 渐变带 数据AI / 法术AI ──
  const bindGb = (which: '数据AI' | '法术AI', idp: string) => {
    const modeSel = el.querySelector(`#${idp}-mode`) as HTMLSelectElement;
    modeSel.addEventListener('change', () => {
      (el.querySelector(`#${idp}-custom`) as HTMLElement).style.display = modeSel.value === 'custom' ? '' : 'none';
    });
    el.querySelector(`#${idp}-save`)!.addEventListener('click', () => {
      const mode = modeSel.value === 'custom' ? 'custom' : 'tavern';
      const s = loadGbSettings();
      if (mode === 'custom') {
        s.api[which] = {
          ...s.api[which],
          mode,
          proxy_preset: (el.querySelector(`#${idp}-proxy`) as HTMLInputElement).value,
          apiurl: (el.querySelector(`#${idp}-url`) as HTMLInputElement).value,
          key: (el.querySelector(`#${idp}-key`) as HTMLInputElement).value,
          model: (el.querySelector(`#${idp}-model`) as HTMLInputElement).value,
          temperature: parseFloat((el.querySelector(`#${idp}-temp`) as HTMLInputElement).value) || 0.8,
          max_tokens: parseInt((el.querySelector(`#${idp}-max`) as HTMLInputElement).value, 10) || 5000,
        };
      } else {
        s.api[which] = { ...s.api[which], mode };
      }
      saveGbSettings(s);
      toastr?.success?.(mode === 'custom' ? `已保存${which} API（自定义）` : `${which}已切换为跟随酒馆当前 API`);
    });
  };
  bindGb('数据AI', 'of-api-data');
  bindGb('法术AI', 'of-api-spell');
}
