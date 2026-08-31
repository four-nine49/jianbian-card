// sync/status-placeholder.ts — 对话末尾标记 <StatusPlaceHolderImpl/>（状态栏渲染锚点）
//
// 行为对齐「状态栏数据同步」脚本：收到 AI 回复后，若该楼消息末尾没有标记，
// 追加 '\n<StatusPlaceHolderImpl/>'（refresh: 'affected' 只刷新受影响楼层）。
// 用户消息不处理；已有标记不重复追加。开关默认关（会修改消息内容）。
import { getChatMessages, setChatMessages, eventOn } from '../bridge/tavern';
import type { EventUnsub } from '../bridge/tavern';
import { saveSetting, loadSettings } from '../core/settings';

const MARKER = '<StatusPlaceHolderImpl/>';
const SYNCABLE_TYPES = ['normal', 'regenerate', 'continue', 'swipe'];

let unsub: EventUnsub | null = null;

function enabled(): boolean {
  return loadSettings().statusPlaceholderEnabled;
}

/** 给单个 AI 楼追加标记（已有标记/玩家楼跳过） */
async function appendMarkerToFloor(floorId: number): Promise<void> {
  try {
    const msgs = getChatMessages(floorId);
    const msg = msgs?.[0];
    if (!msg || msg.is_user) return;
    const text = msg.message || '';
    if (text.endsWith(MARKER)) return;
    await setChatMessages([{ message_id: floorId, message: text + '\n' + MARKER }], { refresh: 'affected' });
    console.info(`[开局框架] 已为第 ${floorId} 楼追加状态栏标记`);
  } catch (e) {
    console.error('[开局框架] 追加状态栏标记失败：', e);
  }
}

function start(): void {
  if (unsub) return;
  unsub = eventOn('message_received', (messageId: number, type: string) => {
    if (!SYNCABLE_TYPES.includes(type)) return;
    if (!enabled()) return;
    if (typeof messageId === 'number' && messageId >= 0) void appendMarkerToFloor(messageId);
  });
  console.info('[开局框架] 状态栏标记已开启（AI 回复末尾追加 <StatusPlaceHolderImpl/>）');
}

function stop(): void {
  unsub?.stop();
  unsub = null;
}

/** 工具页开关：保存设置 + 立即启/停；开启瞬间顺手给最新 AI 楼补一次标记（即时可见效果） */
export async function setStatusPlaceholder(enabled: boolean): Promise<void> {
  saveSetting('statusPlaceholderEnabled', enabled);
  if (enabled) {
    start();
    const last = getChatMessages('0-{{lastMessageId}}');
    const lastAi = [...(last || [])].reverse().find(m => !m.is_user);
    if (lastAi && !(lastAi.message || '').endsWith(MARKER)) {
      await appendMarkerToFloor(lastAi.message_id);
    }
  } else {
    stop();
  }
}

/** 初始化时按设置恢复 */
export function initStatusPlaceholderIfEnabled(): void {
  if (enabled()) start();
}
