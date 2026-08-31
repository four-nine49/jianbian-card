// fill/context-filter.ts — 正文提取/排除标签
//
// 机制：边界字符串匹配（照抄 ACU applyContextTagFilters，非正则）。
// - extract：从文本里找【最后一对】 start..end，取出该区间；多规则拼一起。
// - exclude：从文本里移除【最后一对】 start..end 区间。
// 规则来源：每表 updateConfig 的 extractRules/excludeRules（{start,end}[]）
//   或简写 extractTags/excludeTags（"start|end" 多对换行分隔）。

type Rule = { start: string; end: string };

/** 把简写 "开始|结束" 多对换行，解析成 Rule[]；也接受已结构化的 rules */
export function normalizeRules(rulesInput: unknown, tagsInput: string = ''): Rule[] {
  const out: Rule[] = [];
  if (Array.isArray(rulesInput)) {
    for (const r of rulesInput as any) {
      if (r && typeof r.start === 'string' && typeof r.end === 'string') out.push({ start: r.start, end: r.end });
    }
  }
  const tags = String(tagsInput || '').trim();
  if (tags) {
    tags.split('\n').forEach(line => {
      const idx = line.indexOf('|');
      if (idx > 0) out.push({ start: line.slice(0, idx).trim(), end: line.slice(idx + 1).trim() });
    });
  }
  return out;
}

function extractLastBoundary(text: string, start: string, end: string): string | null {
  if (!text || !start || !end) return null;
  const lower = text.toLowerCase();
  const ls = start.toLowerCase();
  const le = end.toLowerCase();
  const endIdx = lower.lastIndexOf(le);
  if (endIdx === -1) return null;
  const startIdx = lower.lastIndexOf(ls, Math.max(0, endIdx - 1));
  if (startIdx === -1) return null;
  const rangeEnd = endIdx + end.length;
  if (rangeEnd <= startIdx) return null;
  return text.slice(startIdx, rangeEnd);
}

function removeLastBoundary(text: string, start: string, end: string): string {
  if (!text || !start || !end) return text;
  const lower = text.toLowerCase();
  const ls = start.toLowerCase();
  const le = end.toLowerCase();
  const endIdx = lower.lastIndexOf(le);
  if (endIdx === -1) return text;
  const startIdx = lower.lastIndexOf(ls, Math.max(0, endIdx - 1));
  if (startIdx === -1) return text;
  const rangeEnd = endIdx + end.length;
  if (rangeEnd <= startIdx) return text;
  return (text.slice(0, startIdx) + text.slice(rangeEnd)).replace(/\n{3,}/g, '\n\n').trim();
}

export function applyExtractRules(text: string, rules: Rule[]): string {
  if (!text || rules.length === 0) return text;
  const parts: string[] = [];
  for (const r of rules) {
    const m = extractLastBoundary(text, r.start, r.end);
    if (m !== null) parts.push(m);
  }
  return parts.length > 0 ? parts.join('\n\n') : text;
}

export function applyExcludeRules(text: string, rules: Rule[]): string {
  let result = String(text ?? '');
  for (const r of rules) result = removeLastBoundary(result, r.start, r.end);
  return result;
}

/** 正文标签过滤主入口：先 extract 再 exclude */
export function applyContextTagFilters(
  text: string,
  opts: { extractRules?: Rule[]; extractTags?: string; excludeRules?: Rule[]; excludeTags?: string } = {},
): string {
  let result = String(text ?? '');
  const extractRules = normalizeRules(opts.extractRules, opts.extractTags);
  result = applyExtractRules(result, extractRules);
  const excludeRules = normalizeRules(opts.excludeRules, opts.excludeTags);
  result = applyExcludeRules(result, excludeRules);
  return result;
}
