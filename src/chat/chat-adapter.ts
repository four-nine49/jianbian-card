// chat/chat-adapter.ts — 引导对话适配器接口
//
// 唯一实现是 chat/guided-chat-adapter.ts（独立会话引擎，历史存聊天变量，
// 不读写酒馆楼层）。UI 只依赖本接口，将来换引擎不用改面板。
import type { ChatMessage } from '../bridge/tavern';

export interface ChatAdapter {
  read(): ChatMessage[];                         // 读会话历史
  delete(messageId: number): Promise<void>;      // 删除一条消息
  reroll(messageId: number): Promise<void>;      // 重新生成（仅限最后一条 AI 回复）
  sendMessage(text: string): Promise<void>;      // 玩家发送
  onMessagesChanged(cb: () => void): () => void; // 监听会话变化
  stop?(): boolean;                              // 停止当前生成（流式时可用）
  onStreamUpdate?(cb: (partial: string) => void): () => void; // 订阅流式生成的当前文本
}
