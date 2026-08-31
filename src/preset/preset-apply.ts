// preset/preset-apply.ts — 「原预设开局」的两个落地动作
//
// 1. applyPresetTables：写入某条线的表格模板 + 初始数据
//    ★ 全部存本扩展的表格存储（chat 变量 __of_tables__），不写外部数据库脚本。
// 2. injectOpeningToFloor0：把开场白直接写入第 0 楼（setChatMessages）。
// 3. applyPresetWorldbook：按线切换世界书（UID 分组：蓝灯开/绿灯开/蓝灯关），
//    逻辑与原 star.txt 的 applyCharacterWorldbook 一致（剑与汽水5.0世界书固定 uid）。
import { importTemplate, seedInitialRows } from '../store/table-store';
import type { TableDef } from '../store/types';
import { getChatMessages, setChatMessages, tavernHelperCall } from '../bridge/tavern';
import { substituteMacros } from '../utils/macros';
import { PRESET_LINES } from './preset-data';

/** 写入某条线的表格模板 + 该性别初始数据 */
export function applyPresetTables(character: string, gender: string): { tables: number; rows: number } {
  const line = PRESET_LINES[character];
  if (!line) throw new Error(`未知角色线：${character}`);
  importTemplate(line.tables as unknown as TableDef[]);

  const seeds = line.seeds[gender === '女' ? '女' : '男'] ?? {};
  let seededRows = 0;
  for (const [tableName, rowList] of Object.entries(seeds)) {
    try {
      // 初始数据里的 {{user}} 等宏在写入时就替换成实际名字（存储/面板/同步/填表全程所见即所得）
      const rows = (rowList as (string | null)[][]).map(r => r.map(c => (c === null ? null : substituteMacros(c))));
      seedInitialRows(tableName, rows);
      seededRows += rows.length;
    } catch (e) {
      console.warn(`[原预设开局] 初始行写入失败（${tableName}）：`, e);
    }
  }
  console.info(`[原预设开局] ${character}（${gender}）已写入 ${line.tables.length} 张表 / ${seededRows} 行初始数据`);
  return { tables: line.tables.length, rows: seededRows };
}

/** 开场白直接写入第 0 楼 */
export async function injectOpeningToFloor0(opening: string): Promise<void> {
  const text = (opening || '').trim();
  if (!text) throw new Error('开场白为空');
  const msgs = getChatMessages(0);
  if (!msgs || msgs.length === 0) throw new Error('当前聊天没有第 0 楼（开场白楼层），请先有开场白楼层再注入');
  await setChatMessages([{ message_id: 0, message: text }], { refresh: 'affected' });
}

// ──────────────────────────────────────────────
// 世界书切换（原 applyCharacterWorldbook 移植）
// 灯与开关语义：
//   蓝灯（constant）：脚本按线直接设置 enabled，状态稳定
//   绿灯（selective）：脚本设类型 + 初始启用，关键词由 agent 维护
// 每次全量按线重置所有受控条目（类型, enabled），可重复执行不累积错误状态。
// ──────────────────────────────────────────────

// 受控条目 uid（剑与汽水5.0世界书固定 uid）
const WORLDVIEW_UIDS = [6];        // 世界观：始终蓝灯常驻
const REGION_UIDS = [27];          // 地区状态：始终蓝灯常驻
const ROLE_ENTRY_UIDS = [20, 21, 29, 30, 31, 32, 33, 34];
const ROLE_DYNAMICS: Record<string, number[]> = {
  爱丽丝: [20, 21],
  沧月汐: [29, 30],
  似久: [32, 33],
  墨白: [31, 34],
};
const SYSTEM_BLUE_UIDS = [14, 22];     // 系统/动态系统：系统线蓝灯开
const SYSTEM_GREEN_UIDS = [9, 13, 23, 24]; // 权柄演变/系统算力规则/技术传播/系统知识库：系统线绿灯开
const FRAMEWORK_UIDS = [26];           // 框架状态：系统线蓝灯开，墨白线关
const MOBAI_ONLY_UIDS = [35, 36, 37, 38, 39]; // 墨白线特有：探查/种养/精炼师相关
const ALL_CONTROLLED_UIDS = [...WORLDVIEW_UIDS, ...REGION_UIDS, ...ROLE_ENTRY_UIDS,
  ...SYSTEM_BLUE_UIDS, ...SYSTEM_GREEN_UIDS, ...FRAMEWORK_UIDS, ...MOBAI_ONLY_UIDS];

async function collectWorldbookNames(): Promise<string[]> {
  const names: string[] = [];
  const push = (v: unknown) => { if (typeof v === 'string' && v && !names.includes(v)) names.push(v); };
  const globals = await tavernHelperCall<string[]>('getGlobalWorldbookNames');
  if (Array.isArray(globals)) globals.forEach(push);
  const chars = await tavernHelperCall<{ primary?: string | null; additional?: string[] }>('getCharWorldbookNames', 'current');
  if (chars) { push(chars.primary); if (Array.isArray(chars.additional)) chars.additional.forEach(push); }
  const chatName = await tavernHelperCall<string | null>('getChatWorldbookName', 'current');
  push(chatName);
  return names;
}

interface WorldbookEntryLike {
  uid?: number;
  enabled?: boolean;
  strategy?: { type?: string; keys?: unknown };
  [k: string]: any;
}

/** 按角色线切换世界书条目（返回摘要文本） */
export async function applyPresetWorldbook(character: string): Promise<{ ok: boolean; summary?: string; error?: string }> {
  const ownRoleUids = ROLE_DYNAMICS[character] ?? [];
  const isMobai = character === '墨白';

  let names: string[] = [];
  try { names = await collectWorldbookNames(); } catch { names = []; }
  if (names.length === 0) return { ok: false, error: '未找到任何世界书（全局/角色卡/聊天都未绑定）' };

  const summary: string[] = [];
  for (const wbName of names) {
    try {
      const entries = await tavernHelperCall<WorldbookEntryLike[]>('getWorldbook', wbName);
      if (!Array.isArray(entries)) continue;

      const target = entries.map(e => {
        const uid = e && typeof e.uid === 'number' ? e.uid : null;
        if (uid === null || !ALL_CONTROLLED_UIDS.includes(uid)) return e;
        const strat = (e.strategy && typeof e.strategy === 'object') ? e.strategy : {};
        const blueOn =
          WORLDVIEW_UIDS.includes(uid) ||
          REGION_UIDS.includes(uid) ||
          ownRoleUids.includes(uid) ||
          (!isMobai && (FRAMEWORK_UIDS.includes(uid) || SYSTEM_BLUE_UIDS.includes(uid)));
        if (blueOn) {
          return { ...e, strategy: { ...strat, type: 'constant' }, enabled: true };
        }
        const greenOn =
          (isMobai && MOBAI_ONLY_UIDS.includes(uid)) ||
          (!isMobai && SYSTEM_GREEN_UIDS.includes(uid));
        if (greenOn) {
          return { ...e, strategy: { ...strat, type: 'selective' }, enabled: true };
        }
        return { ...e, strategy: { ...strat, type: 'constant' }, enabled: false };
      });

      await tavernHelperCall('updateWorldbookWith', wbName, () => target);
      summary.push(`${wbName}=${entries.length}条`);
    } catch (e) {
      console.warn(`[原预设开局] 切换世界书 ${wbName} 失败：`, e);
    }
  }
  return { ok: true, summary: summary.join('，') };
}
