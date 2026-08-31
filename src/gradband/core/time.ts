// core/time.ts — 剧情时间解析/格式化
//
// 存档只存 label（如 "2026年11月12日，21：12"），分钟数由脚本解析后内部持有。
// 解析规则：YYYY年M月D日，HH：MM；全角标点（，：）与半角（,、:）均可，容忍空格。
// 解析失败返回 null（契约校验=整包打回）。

export function 解析剧情时间(label: string): number | null {
  if (typeof label !== 'string') return null;
  const s = label.replace(/[，,]/g, ',').replace(/[：:]/g, ':').replace(/\s+/g, '').trim();
  const m = s.match(/^(\d{1,4})年(\d{1,2})月(\d{1,2})日,(\d{1,2}):(\d{2})$/);
  if (!m) return null;
  const y = +m[1], mo = +m[2], d = +m[3], h = +m[4], mi = +m[5];
  if (mo < 1 || mo > 12 || d < 1 || d > 31 || h > 23 || mi > 59) return null;
  const t = Date.UTC(y, mo - 1, d, h, mi);
  if (Number.isNaN(t)) return null;
  return Math.round(t / 60000);
}

/** 分钟数 → "2026年11月12日，21：12"（全角标点，和存档格式一致） */
export function 格式化剧情时间(minutes: number): string {
  const d = new Date(minutes * 60000);
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${d.getUTCFullYear()}年${d.getUTCMonth() + 1}月${d.getUTCDate()}日，${pad(d.getUTCHours())}：${pad(d.getUTCMinutes())}`;
}
