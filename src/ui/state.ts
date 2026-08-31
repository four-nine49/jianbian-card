// ui/state.ts — 面板状态（纯模块级对象）+ 引导对话引擎管理
//
// 引导对话是独立会话（历史存聊天变量，不读写酒馆楼层）：
// 对话页只显示这个会话的内容，与酒馆聊天记录互不相干。
// 引擎按「当前规则包」创建：规则文本、结算契约、落地表格全部来自包；
// 切换规则包 / 改对话 API 后 reset 重建。
import type { ChatMessage } from '../bridge/tavern';
import type { ChatAdapter } from '../chat/chat-adapter';
import { guidedChatAdapter } from '../chat/guided-chat-adapter';
import { loadSettings } from '../store/settings';
import { buildCustomApi } from '../fill/api-call';
import { getActivePackage } from '../dialogue/package-registry';

export interface UiState {
  messages: ChatMessage[];
  isGenerating: boolean;
  activeSheetKey: string;
}

export const uiState: UiState = {
  messages: [],
  isGenerating: false,
  activeSheetKey: '',
};

/** 从适配器读会话历史到面板状态 */
export function refreshMessages(adapter: ChatAdapter): void {
  try {
    uiState.messages = adapter.read();
  } catch (e) {
    console.warn('[开局框架面板] 读取消息失败', e);
    uiState.messages = [];
  }
}

// ──────────────────────────────────────────────
// 引擎管理
// ──────────────────────────────────────────────

let guidedEngine: ChatAdapter | null = null;

export function getGuidedEngine(): ChatAdapter {
  if (!guidedEngine) guidedEngine = createEngine();
  return guidedEngine;
}

/** 规则包 / 对话 API 改动后调用，重建引擎使新配置生效 */
export function resetGuidedEngine(): void {
  guidedEngine = null;
}

function createEngine(): ChatAdapter {
  const pkg = getActivePackage();
  const da = loadSettings().dialogueApi;
  return guidedChatAdapter({
    rulesText: pkg.rulesText,
    pkg,
    // 跟随酒馆当前 API（mode=tavern）→ 不传 custom_api；自定义 → 传独立配置
    customApi: da.mode === 'custom' ? buildCustomApi(da) : undefined,
    onSettled: (r) => { console.info('[开局对话] 已落地', r); },
    onSettleError: (e) => { console.warn('[开局对话] 结算失败', e); },
  });
}

/**
 * 进入引导对话。规则包没配置（rulesText 为空）时阻止并提示。
 * @returns 是否成功进入
 */
export function startGuidedDialogue(): boolean {
  const pkg = getActivePackage();
  if (!pkg.rulesText.trim()) {
    toastr?.warning?.(`规则包「${pkg.name}」还没有配置规则，无法开始引导。请先导入规则包或在「开局」页切换。`);
    return false;
  }
  resetGuidedEngine(); // 每次进入都按最新设置/包重建
  getGuidedEngine();
  toastr?.info?.(`已进入引导对话（规则包：${pkg.name}；独立会话，不含酒馆聊天记录）`);
  return true;
}
