// core/store.ts — chat 变量存储（唯一真值源）+ message 快照同步
//
// 存档：chat 变量 `渐变带` 键 = 整个游戏对象
// 快照：message 变量 stat_data.渐变带 = 剥掉 上次结算min 的同一对象
//       （状态栏/面板 HTML 与世界书 EJS 只读快照，永不直接读写 chat 变量）
import { getVariables, updateVariablesWith, getLastMessageId } from '../../bridge/tavern';
import { 游戏Schema, 默认游戏, type 游戏 } from './schema';

export const NS = '渐变带';

export function loadGame(): 游戏 | null {
  try {
    const raw = getVariables({ type: 'chat' })?.[NS];
    if (!raw) return null;
    const parsed = 游戏Schema.safeParse(raw);
    if (parsed.success) return parsed.data;
    console.warn('[渐变带] 存档校验失败，忽略坏数据', parsed.error?.issues?.slice(0, 3));
    return null;
  } catch { return null; }
}

export async function saveGame(game: 游戏): Promise<boolean> {
  const clean = 游戏Schema.parse(game);   // 校验+剥 proxy
  await updateVariablesWith(v => { v[NS] = clean; return v; }, { type: 'chat' });
  return true;
}

export async function ensureGame(): Promise<游戏> {
  let g = loadGame();
  if (!g) { g = 默认游戏(); await saveGame(g); }
  return g;
}

/** 读写一条龙：读取 → 内存副本上改 → 落盘（事务性，改完即存） */
export async function mutateGame<T>(fn: (g: 游戏) => T | Promise<T>): Promise<T | null> {
  const g = loadGame();
  if (!g) return null;
  const result = await fn(g);
  await saveGame(g);
  return result;
}

/** 快照同步到最新楼 stat_data.渐变带（剥 上次结算min） */
export async function syncSnapshot(game?: 游戏): Promise<boolean> {
  const g = game ?? loadGame();
  if (!g) return false;
  const snap: Record<string, any> = { ...g } as any;
  delete (snap as any).主角.上次结算min;
  const mid = getLastMessageId();
  if (mid < 0) return false;
  await updateVariablesWith(v => {
    v.stat_data ??= {};
    v.stat_data[NS] = snap;
    return v;
  }, { type: 'message', message_id: mid });
  return true;
}
