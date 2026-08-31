// dialogue/builtin-packages.ts — 内置规则包（随 bundle 打包，不可删除）
//
// 1. custom-opening   自定义开局（第五开线）：完整规则表 + 7 张标准表 + 结算字段→行映射
// 2. card-b-placeholder 角色卡B占位：空包，演示多包切换；配置方式见 README「规则包格式」
// 换卡 = 写一个新的规则包（代码内置或 JSON 导入），框架代码不动。
import { rulesText } from './rules-content';
import { REQUIRED_KEYS } from './settlement-parser';
import type { ResolvedPackage } from './rule-package';
import {
  SETTLEMENT_TABLE_DEFS,
  buildProfileRows, buildSkillRows, buildAssetRows, buildRegionRows, buildNetworkRows, buildOverviewRows,
} from './apply-settlement';

/** 内置包一：自定义开局（完整可用） */
export const CUSTOM_OPENING_PACKAGE: ResolvedPackage = {
  id: 'custom-opening',
  name: '自定义开局（内置）',
  description: '第五开线规则表：七步引导 + 结算落地到 13 张表（角色档案/技能/已解锁科技/权柄/系统网络/资产/地区/系统总览 + 墨白线配方/精炼/种养×3）。',
  rulesText,
  tables: SETTLEMENT_TABLE_DEFS,
  settlementStartMark: '【自定义开局结算开始】',
  settlementEndMark: '【自定义开局结算结束】',
  requiredKeys: [...REQUIRED_KEYS],
  seedRows: {},
  builtin: true,
  // 结算块字段 → 初始行（这张卡专有的映射；换卡时在各自的包里定义）
  seedDynamic: (parsed) => ({
    profile: buildProfileRows(parsed),
    skills: buildSkillRows(parsed),
    assets: buildAssetRows(parsed),
    region: buildRegionRows(parsed),
    network: buildNetworkRows(parsed),
    overview: buildOverviewRows(parsed),
  }),
};

/** 内置包二：角色卡B占位（空包，未配置——选中后无法开始引导，提示导入或改代码） */
export const PLACEHOLDER_PACKAGE: ResolvedPackage = {
  id: 'card-b-placeholder',
  name: '角色卡B（占位）',
  description: '占位包：给另一张卡预留的插槽。还没有规则和表格，无法开始引导。可改成 JSON 导入自己的包，或在本文件里填内容。',
  rulesText: '',
  tables: [],
  settlementStartMark: '【自定义开局结算开始】',
  settlementEndMark: '【自定义开局结算结束】',
  requiredKeys: [],
  seedRows: {},
  builtin: true,
};

export const BUILTIN_PACKAGES: ResolvedPackage[] = [CUSTOM_OPENING_PACKAGE, PLACEHOLDER_PACKAGE];
