// dialogue/settlement-parser.ts — 结算块文本 → 结构化解析
//
// 依据《自定义开局AI规则表》第 8 节输出格式：
//   【自定义开局结算开始】 ... 键: 值（每行一个键） ... 【自定义开局结算结束】
//   值内部：分号 `;` 分字段、竖线 `|` 分列、双分号 `;;` 分条目。
//
// 解析策略：先取块 → 拆行分键值 → 把 `;`/`|`/`;;` 结构解析成通用结构化对象，
//   具体字段语义在 apply-settlement.ts 里按表映射（第一版内置映射）。

export interface ParsedSettlement {
  /** 原始块文本 */
  raw: string;
  /** 键 → 原始值（未拆结构） */
  fields: Record<string, string>;
  /** 键 → 结构化值（已按 ;|;; 拆开） */
  parsed: Record<string, SettlementValue>;
}

export type SettlementValue =
  | { kind: 'scalar'; value: string }
  | { kind: 'list'; items: SettlementItem[] }        // ;; 分条目
  | { kind: 'pairs'; pairs: Record<string, string> }; // ; 分字段

export interface SettlementItem {
  cols: string[];              // | 分列
  original: string;
}

export const SETTLEMENT_START_MARK = '【自定义开局结算开始】';
export const SETTLEMENT_END_MARK = '【自定义开局结算结束】';

/** 结算契约（由规则包提供；缺省用内置开局包的标记 + 必填键） */
export interface SettlementContract {
  startMark?: string;
  endMark?: string;
  requiredKeys?: string[];
}

/** 从一段 AI 回复里提取结算块（找不到返回 null）；标记可由规则包覆盖 */
export function extractSettlementBlock(
  text: string,
  startMark: string = SETTLEMENT_START_MARK,
  endMark: string = SETTLEMENT_END_MARK,
): string | null {
  if (!text || !startMark || !endMark) return null;
  const start = text.indexOf(startMark);
  if (start === -1) return null;
  const end = text.indexOf(endMark, start + startMark.length);
  if (end === -1) return null;
  return text.slice(start, end + endMark.length);
}

/** 是否存在结算块开始标记（用于初步判断）；标记可由规则包覆盖 */
export function hasSettlementStart(text: string, startMark: string = SETTLEMENT_START_MARK): boolean {
  return !!text && !!startMark && text.includes(startMark);
}

/** 解析字段值为结构化值 */
function parseValue(value: string): SettlementValue {
  const v = value.trim();
  if (!v || v === '无') return { kind: 'scalar', value: v };

  // 双分号分条目（列表类：技能/资产/地区/网络等），条目内再按 | 分列
  if (v.includes(';;')) {
    const items = v.split(';;').map(s => s.trim()).filter(Boolean).map(s => ({
      cols: s.split('|').map(c => c.trim()),
      original: s,
    }));
    return { kind: 'list', items };
  }
  // 分号分字段（对象类：主角/女主/总览/金手指等）
  if (v.includes(';')) {
    const pairs: Record<string, string> = {};
    v.split(';').map(s => s.trim()).filter(Boolean).forEach(seg => {
      const eq = seg.indexOf('=');
      if (eq > 0) pairs[seg.slice(0, eq).trim()] = seg.slice(eq + 1).trim();
      else { pairs[seg] = ''; }
    });
    return { kind: 'pairs', pairs };
  }
  // 单列值（模式/点数等）
  if (v.includes('|')) {
    const items = v.split('|').map(s => s.trim());
    return { kind: 'list', items: [{ cols: items, original: v }] };
  }
  return { kind: 'scalar', value: v };
}

/** 解析结算块全文 → ParsedSettlement */
export function parseSettlementBlock(block: string): ParsedSettlement {
  const fields: Record<string, string> = {};
  const parsed: Record<string, SettlementValue> = {};

  // 去掉块标记，按行拆
  const inner = block
    .replace(SETTLEMENT_START_MARK, '')
    .replace(SETTLEMENT_END_MARK, '')
    .trim();
  const lines = inner.split('\n').map(l => l.trim()).filter(Boolean);

  for (const line of lines) {
    // 键: 值 —— 冒号后第一个空格前为键
    const idx = line.indexOf(':');
    if (idx <= 0) continue;
    const key = line.slice(0, idx).trim();
    const value = line.slice(idx + 1).trim();
    if (!key || !value) continue;
    fields[key] = value;
    parsed[key] = parseValue(value);
  }

  return { raw: block, fields, parsed };
}

/** 解析结果汇总：ok + 缺失字段 */
export interface SettlementParseResult {
  ok: boolean;
  settlement?: ParsedSettlement;
  missingKeys: string[];
  error?: string;
}

/** 第 8 节要求的必填键 */
export const REQUIRED_KEYS = [
  '模式', '点数', '魔法', '主角', '女主', '主角技能', '女主技能',
  '资产', '地区', '网络', '总览', '金手指', '开场白',
];

/** 解析 + 校验；标记与必填键由规则包提供（缺省 = 内置开局包契约） */
export function parseAndValidate(text: string, contract: SettlementContract = {}): SettlementParseResult {
  const startMark = contract.startMark ?? SETTLEMENT_START_MARK;
  const endMark = contract.endMark ?? SETTLEMENT_END_MARK;
  const requiredKeys = contract.requiredKeys ?? REQUIRED_KEYS;

  const block = extractSettlementBlock(text, startMark, endMark);
  if (!block) {
    return { ok: false, missingKeys: [], error: `未找到结算块标记（${startMark}…${endMark}）` };
  }
  const settlement = parseSettlementBlock(block);
  const missing = requiredKeys.filter(k => !Object.prototype.hasOwnProperty.call(settlement.fields, k));
  if (missing.length > 0) {
    return { ok: false, settlement, missingKeys: missing, error: `结算块缺少字段：${missing.join('、')}` };
  }
  return { ok: true, settlement, missingKeys: [] };
}