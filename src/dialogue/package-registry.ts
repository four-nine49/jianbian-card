// dialogue/package-registry.ts — 规则包注册表：列表 / 切换 / 导入 / 删除
//
// 内置包在代码里（builtin-packages.ts，不可删除）；用户导入的包存 extensionSettings
// 的 rulePackages（原始对象数组，读取时逐个 safeParse，坏包跳过）。
// 当前激活包 id 存 activeRulePackageId。
import { loadSettings as loadOfSettings, saveSetting } from '../core/settings';
import { DEFAULT_ACTIVE_PACKAGE_ID, RulePackageSchema } from './rule-package';
import type { ResolvedPackage, RulePackage } from './rule-package';
import { BUILTIN_PACKAGES } from './builtin-packages';

/** 读取用户导入的包（逐个校验，坏的跳过并告警） */
function loadImported(): RulePackage[] {
  const rawList = loadOfSettings().rulePackages;
  const out: RulePackage[] = [];
  for (const raw of rawList) {
    const parsed = RulePackageSchema.safeParse(raw);
    if (parsed.success) out.push({ ...parsed.data, builtin: false });
    else console.warn('[规则包] 忽略损坏的导入包：', parsed.error.message);
  }
  return out;
}

/** 全部包：内置在前，导入的在后 */
export function listPackages(): ResolvedPackage[] {
  return [...BUILTIN_PACKAGES, ...loadImported()];
}

/** 当前激活的包（激活 id 失效时回落到内置第一个） */
export function getActivePackage(): ResolvedPackage {
  const id = loadOfSettings().activeRulePackageId;
  const all = listPackages();
  return all.find(p => p.id === id) ?? BUILTIN_PACKAGES[0];
}

/** 切换激活包 */
export function setActivePackage(id: string): boolean {
  if (!listPackages().some(p => p.id === id)) {
    console.warn('[规则包] 切换失败，包不存在：', id);
    return false;
  }
  saveSetting('activeRulePackageId', id);
  return true;
}

export interface ImportResult { ok: boolean; pkg?: RulePackage; error?: string }

/** 导入/覆盖一个规则包（JSON 对象；同 id 覆盖） */
export function importPackage(raw: unknown): ImportResult {
  const parsed = RulePackageSchema.safeParse(raw);
  if (!parsed.success) {
    const first = parsed.error.issues[0];
    return { ok: false, error: `${first?.path?.join('.') || '根'}: ${first?.message || parsed.error.message}` };
  }
  const data = parsed.data;
  if (!data.rulesText.trim() && data.tables.length === 0) {
    return { ok: false, error: '规则包内容为空（rulesText 和 tables 都没填）' };
  }
  const pkg: RulePackage = { ...data, builtin: false };
  const existing = loadImported();
  const idx = existing.findIndex(p => p.id === pkg.id);
  if (idx >= 0) existing[idx] = pkg; else existing.push(pkg);
  saveSetting('rulePackages', existing);
  return { ok: true, pkg };
}

/** 删除导入的包（内置包拒绝）；删的是激活包则回落默认 */
export function deletePackage(id: string): { ok: boolean; error?: string } {
  if (BUILTIN_PACKAGES.some(p => p.id === id)) {
    return { ok: false, error: '内置规则包不能删除' };
  }
  saveSetting('rulePackages', loadImported().filter(p => p.id !== id));
  if (loadOfSettings().activeRulePackageId === id) {
    saveSetting('activeRulePackageId', DEFAULT_ACTIVE_PACKAGE_ID);
  }
  return { ok: true };
}
