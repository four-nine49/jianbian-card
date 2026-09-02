// pipeline/settle.ts — 回合结算（§3.1-⑥，固定顺序 a→h，一步不许换）
//
// a 扣费   逐条执行待扣单（失手不退——施法即承诺）
// b 计次   数据AI报来的自由回路 uses += 次数（fixed 不计数）
// c 时间账 Δt=④报时间−上次结算 → §5.9 恢复 → 上次结算前移
// d 状态   （临时状态已从数据模型移除，此步为空，保留顺序位）
// e 剧情   身体/战斗旗/数值特例/场景变更 逐项套用
// f 补给   新增补给（校验只加、效果钳制）——使用/删减永远走面板，AI 无权
// g 钳制   数值 0~上限
// h 转正   uses≥10 → 复制入固定库(来源=转正)、删自由条目、槽位空出并提示
import { 补给白名单, type 游戏, type 回路, type 补给 } from '../core/schema';
import { 按纯度算效果, 补给档位, 晶体克数缺省, 导液容量缺省 } from '../core/presets';
import { TUNE, quote, initParams, branchOf, readableParams, budgetFrom, readableBudget, anchorOf, syncParams, compileOrder, FAMKEY, settleCircuitLibrary } from '../engine/engine';
import { 解析剧情时间, 格式化剧情时间 } from '../core/time';
import type { 变更包 } from './contract';

export interface 结算报告 {
  log: string[];
  notices: string[];         // 需要弹给玩家看的（转正、忽略条目、钳制等）
  promoted: { 新id: string; 名称: string }[];
}

/** 中文亲和表 → 引擎 ctx 亲和（{族,分支} → {fam,br}） */
export function affinityEngine(g: 游戏): { main: { fam: string; br: string }[]; subs: { fam: string; br: string }[] } {
  const map = (b: { 族: string; 分支: string }) => ({ fam: (FAMKEY as any)[b.族] ?? b.族, br: b.分支 });
  return {
    main: (Array.isArray(g.亲和.主分支) ? g.亲和.主分支 : []).map(map),
    subs: (g.亲和.次分支 || []).map(map),
  };
}

/** 引擎 ctx 组装（结算/报价/送审共用） */
export function engineCtx(g: 游戏, opts?: { noTuned?: boolean }) {
  return {
    aff: affinityEngine(g),
    scene: { wind: g.场景.风力档, mat: g.场景.可塑无机物kJ, water: g.场景.水体在场 },
    char: { burstKW: g.主角.爆发线kW, sustainKW: g.主角.持续线kW, speed: 1, eCur: g.主角.能量kJ.当前, mCur: g.主角.精神点.当前, mMax: g.主角.精神点.上限, body: g.主角.身体状态 },
    tuned: opts?.noTuned ? [] : collectTuned(g),
  };
}

function nextId(g: 游戏, prefix: 'fx' | 'fr'): string {
  let n = 1;
  const ids = new Set(g.回路库.map(c => c.id));
  while (ids.has(`${prefix}-${String(n).padStart(2, '0')}`)) n++;
  return `${prefix}-${String(n).padStart(2, '0')}`;
}

/** 由（族 + 参数向量）构建一条回路记录：现算 基线账单/参数明细/微调预算 */
export function 构建回路记录(opts: {
  id: string; 名称: string; type: 'fixed' | 'free'; famKey: 回路['famKey'];
  params: Record<string, number>; e: number; g: 游戏;
  来源: 回路['来源']; 审核存档?: 回路['审核存档']; 一句话效果?: string;
  审核状态?: 回路['审核状态'];
}): 回路 {
  const { id, 名称, type, famKey, params, e, g, 来源 } = opts;
  const c = Object.assign(initParams(famKey), params);
  const ctx = engineCtx(g, { noTuned: true });
  const q = quote({ fam: famKey, e, c }, ctx);
  const branch = branchOf(famKey, syncParams(famKey, c));
  const budget = type === 'fixed' ? budgetFrom(famKey, syncParams(famKey, c), q.E_out) : null;
  return {
    id, 名称, type,
    族: ({ pour: '倾泻', flow: '波动', struct: '结构', life: '生机', perce: '感知' } as const)[famKey],
    famKey, 分支: branch,
    实体: famKey === 'flow' ? String(q.r.entity ?? null) : null,
    参数向量: c as Record<string, number>,
    注册e: e,
    参数明细: readableParams(famKey, c),
    微调预算: budget,
    微调预算明细: readableBudget(budget),
    基线账单: { 输出kJ: q.E_out, 计费kJ: q.bill, 精神: q.mind, 一句话效果: opts.一句话效果 ?? String(q.r.effect ?? '') },
    uses: type === 'free' ? 0 : null,
    来源,
    审核存档: opts.审核存档 ?? null,
    审核状态: opts.审核状态 ?? '免审',
  };
}

/** ⑥ 结算主函数（就地把 g 改掉；调用方负责落盘与快照） */
export function settle(g: 游戏, pack: 变更包): 结算报告 {
  const log: string[] = [];
  const notices: string[] = [];
  const promoted: { 新id: string; 名称: string }[] = [];
  const 主角 = g.主角;

  /* ── a 扣费：先补挂数据AI 额外施放的待扣单，再逐条执行（失手不退） ── */
  // 补挂：正文AI 自由施放、未挂待扣单的回路（数据AI 报"本轮使用回路"）→ quote 补挂待扣单，避免免费施放
  if (pack.本轮使用回路.length) {
    const ctx = engineCtx(g);
    for (const u of pack.本轮使用回路) {
      if (g.待扣单.some(p => p.ref === u.回路)) continue;   // 已挂待扣单（手操/施放），不重复
      const c = g.回路库.find(x => x.id === u.回路);
      if (!c) continue;
      for (let k = 0; k < u.次数; k++) {
        const q = quote({ fam: c.famKey, e: c.注册e ?? 0, c: c.参数向量 as Record<string, number> }, ctx);
        g.待扣单.push({
          ref: c.id, 名称: c.名称 + '（补扣）',
          bill: q.bill, mind: q.mind, tell: q.tell, risk: q.risk,
          锚点: anchorOf(q.E_out), order: compileOrder(q), famKey: c.famKey,
        });
      }
      log.push(`⑥a 补挂待扣：《${c.名称}》×${u.次数}（正文AI 额外施放）`);
    }
  }
  if (g.待扣单.length) {
    for (const p of g.待扣单) {
      主角.能量kJ.当前 -= p.bill;
      主角.精神点.当前 -= p.mind;
      log.push(`⑥a 扣费《${p.名称}》能量−${p.bill}kJ（${p.锚点}）精神−${p.mind}`);
    }
    g.待扣单 = [];
    log.push('⑥a 待扣单已清空（施法即承诺）');
  } else {
    log.push('⑥a 无待扣单');
  }

  /* ── b 计次：数据AI 报告的自由回路使用 ── */
  if (pack.本轮使用回路.length) {
    for (const u of pack.本轮使用回路) {
      const c = g.回路库.find(x => x.id === u.回路);
      if (!c) { log.push(`⑥b ${u.回路} 不在库，忽略`); continue; }
      if (c.type !== 'free') { log.push(`⑥b ${c.名称} 是固定回路，不计数`); continue; }
      c.uses = (c.uses ?? 0) + u.次数;
      log.push(`⑥b 《${c.名称}》uses +${u.次数} → ${c.uses}/${TUNE.promoteN}`);
    }
  } else {
    log.push('⑥b 本轮无回路使用报告');
  }

  /* ── c 时间账：Δt 恢复（按结算前的战斗/身体状态） ── */
  const nowMin = 解析剧情时间(pack.现在剧情时间)!;
  const dt = nowMin - 主角.上次结算min;
  if (dt > 0) {
    let eMul = 1, mMul = 1;
    if (主角.战斗中) { eMul = 0; mMul = 0; }
    else if (主角.身体状态 === '重伤') { eMul = TUNE.injuryRegenMul; mMul = TUNE.injuryRegenMul; }
    const dE = Math.round(TUNE.regenE_kJ_h / 60 * dt * eMul);
    const dM = Math.round(TUNE.regenMind_h / 60 * dt * mMul * 10) / 10;
    主角.能量kJ.当前 += dE;
    主角.精神点.当前 += dM;
    log.push(`⑥c Δt=${dt}min（${dt >= 60 ? (dt / 60).toFixed(1) + 'h' : dt + '分'}）非战斗恢复：能量+${dE}kJ 精神+${dM}${主角.战斗中 ? '（战斗中×0，实际未恢复）' : ''}`);
  } else {
    log.push(`⑥c Δt=${dt}min，无恢复`);
  }
  主角.上次结算min = nowMin;
  主角.剧情时间.label = 格式化剧情时间(nowMin);

  /* ── d 状态：临时状态已从数据模型移除（顺序位保留） ── */

  /* ── e 剧情变更 ── */
  if (pack.身体) { log.push(`⑥e 身体：${主角.身体状态} → ${pack.身体.状态}`); 主角.身体状态 = pack.身体.状态; }
  if (pack.战斗中 != null) { log.push(`⑥e 战斗旗：${主角.战斗中} → ${pack.战斗中}`); 主角.战斗中 = pack.战斗中; }
  const num = pack.剧情数值变更;
  if (num && Object.keys(num).length) {
    if (typeof num.能量 === 'number') { 主角.能量kJ.当前 += num.能量; log.push(`⑥e 剧情特例：能量 ${num.能量 > 0 ? '+' : ''}${num.能量}kJ`); }
    if (typeof num.精神 === 'number') { 主角.精神点.当前 += num.精神; log.push(`⑥e 剧情特例：精神 ${num.精神 > 0 ? '+' : ''}${num.精神}`); }
    if (typeof num.能量上限 === 'number') { 主角.能量kJ.上限 = Math.max(1, 主角.能量kJ.上限 + num.能量上限); log.push(`⑥e 能量上限 → ${主角.能量kJ.上限}kJ`); }
    if (typeof num.精神上限 === 'number') { 主角.精神点.上限 = Math.max(1, 主角.精神点.上限 + num.精神上限); log.push(`⑥e 精神上限 → ${主角.精神点.上限}`); notices.push(`精神上限变为 ${主角.精神点.上限}`); }
    // 爆发线/持续线：只能提高（训练/战斗才可，且一次一点）；负值忽略
    if (typeof num.爆发线 === 'number' && num.爆发线 > 0) { 主角.爆发线kW = Math.round(主角.爆发线kW + num.爆发线); log.push(`⑥e 爆发线 → ${主角.爆发线kW}kW`); notices.push(`爆发线提升至 ${主角.爆发线kW}kW`); }
    if (typeof num.持续线 === 'number' && num.持续线 > 0) { 主角.持续线kW = Math.round(主角.持续线kW + num.持续线); log.push(`⑥e 持续线 → ${主角.持续线kW}kW`); notices.push(`持续线提升至 ${主角.持续线kW}kW`); }
  }
  if (pack.场景变更) {
    const s = pack.场景变更;
    if (typeof s.风力档 === 'number') { g.场景.风力档 = Math.min(95, Math.max(0, s.风力档)); log.push(`⑥e 场景：风力档 → ${g.场景.风力档}`); }
    if (typeof s.可塑无机物kJ === 'number') { g.场景.可塑无机物kJ = Math.max(0, s.可塑无机物kJ); log.push(`⑥e 场景：可塑无机物 → ${g.场景.可塑无机物kJ}kJ`); }
    if (typeof s.水体在场 === 'boolean') { g.场景.水体在场 = s.水体在场; log.push(`⑥e 场景：水体 → ${s.水体在场 ? '有' : '无'}`); }
  }

  /* ── f 补给：新增（白名单过滤；晶体/导液=库存型，创伤补给=一补给一牌） ── */
  for (const item of pack.新增补给) {
    if (!补给白名单.includes(item.名称)) { notices.push(`补给《${item.名称}》不在白名单（只收 魔素晶体/魔素导液/快速生化止血喷雾/仿生神经桥接贴片），忽略`); continue; }
    // 晶体/导液 → 库存型：整条入库（数量=N，随带 纯度+克数/容量ml），桌面滑杆面板按公式算总量使用，不再拆成一补给一牌
    if (item.名称 === '魔素晶体' || item.名称 === '魔素导液') {
      const base: Record<string, any> = { 名称: item.名称, 数量: Math.max(1, item.数量), 纯度: item.纯度 };
      if (item.名称 === '魔素晶体') base.克数 = item.克数 ?? 晶体克数缺省(item.纯度);
      else base.容量ml = item.容量ml ?? 导液容量缺省(item.纯度);
      g.补给物品.push(base as unknown as 补给);
      log.push(`⑥f 新增补给《${item.名称}》(${补给档位(item.纯度)} ${item.纯度 != null ? item.纯度 + '%' : ''}${base.克数 != null ? '·' + base.克数 + 'g' : (base.容量ml != null ? '·' + base.容量ml + 'ml' : '')})×${item.数量}（库存·桌面滑杆使用）`);
      continue;
    }
    const eff = 按纯度算效果(item.名称, item.纯度);
    if (!eff) { notices.push(`补给《${item.名称}》效果无法解析，忽略`); continue; }
    // 一补给一牌：报的数量 N → N 条独立记录（数量 1，uid 区分；同名补给各自成牌）
    for (let k = 0; k < item.数量; k++) {
      g.补给物品.push({
        名称: item.名称, 数量: 1, 纯度: item.纯度, 效果: { ...eff } as any,
        uid: `${item.名称}${item.纯度 != null ? '-' + item.纯度 : ''}#${Date.now().toString(36)}${k}`,
      } as 补给);
    }
    log.push(`⑥f 新增补给《${item.名称}》(${补给档位(item.纯度)}${item.纯度 != null ? ' ' + item.纯度 + '%' : ''})×${item.数量}（一补给一牌）`);
  }
  if (!pack.新增补给.length) log.push('⑥f 无新增补给');

  /* ── g 钳制 0~上限 ── */
  const eBefore = 主角.能量kJ.当前, mBefore = 主角.精神点.当前;
  主角.能量kJ.当前 = Math.min(主角.能量kJ.上限, Math.max(0, 主角.能量kJ.当前));
  主角.精神点.当前 = Math.min(主角.精神点.上限, Math.max(0, 主角.精神点.当前));
  if (eBefore !== 主角.能量kJ.当前) log.push(`⑥g 能量钳制 ${Math.round(eBefore)} → ${Math.round(主角.能量kJ.当前)}`);
  if (mBefore !== 主角.精神点.当前) log.push(`⑥g 精神钳制 ${Math.round(mBefore * 10) / 10} → ${主角.精神点.当前}`);
  if (eBefore > 主角.能量kJ.上限) notices.push('储量透支——过载灼伤烧在接触处');

  /* ── h 转正：uses≥10 → 复制入固定库、删自由条目、槽位空出 ── */
  for (const c of [...g.回路库]) {
    if (c.type === 'free' && (c.uses ?? 0) >= TUNE.promoteN) {
      const newId = nextId(g, 'fx');
      const copy: 回路 = {
        ...c,
        id: newId, type: 'fixed', 来源: '转正', uses: null, 审核状态: '免审',
        微调预算: budgetFrom(c.famKey, syncParams(c.famKey, c.参数向量 as Record<string, number>), c.基线账单.输出kJ),
      };
      copy.微调预算明细 = readableBudget(copy.微调预算);
      g.回路库.push(copy);
      g.回路库 = g.回路库.filter(x => x.id !== c.id);
      g.槽位.自由槽 = g.槽位.自由槽.map(id => (id === c.id ? null : id));
      g.槽位.固定槽 = g.槽位.固定槽.map(id => (id === c.id ? null : id));
      promoted.push({ 新id: newId, 名称: c.名称 });
      notices.push(`《${c.名称}》已转正为固定回路（${newId}），原自由槽已空出`);
      log.push(`⑥h 转正：《${c.名称}》(fr) → ${newId}(fx)，自由槽空出`);
    }
  }
  if (!promoted.length) log.push('⑥h 无转正');

  /* ── i 剧情授技：数据AI 报的"剧情获得" → 先入牌库（待送审，参数取族默认占位，等用户送审后法术AI 填参） ── */
  for (const item of pack.剧情获得) {
    const 名称 = (item.一句话效果 || '').slice(0, 6) || '未名回路';
    const c = 构建回路记录({
      id: nextId(g, item.种类 === 'fixed' ? 'fx' : 'fr'),
      名称,
      type: item.种类,
      famKey: item.族,
      params: initParams(item.族),
      e: 0,
      g,
      来源: '剧情授技',
      一句话效果: item.一句话效果,
      审核状态: '待送审',
    });
    if (item.种类 === 'free') c.uses = Math.min(9, Math.max(0, item.次数 ?? 0));
    g.回路库.push(c);
    const 库名 = item.种类 === 'fixed' ? '固定' : '自由';
    log.push(`⑥i 剧情授技：《${c.名称}》(${c.族}·${c.分支}) 入${库名}库（待送审，参数默认），uses=${c.uses ?? '永久'}`);
    notices.push(`剧情获得回路《${c.名称}》已入${库名}库，待送审（牌库/侧栏有红点提示）`);
  }
  if (!pack.剧情获得.length) log.push('⑥i 无剧情获得');

  /* ── j 过载率/过载风险：每轮重算各回路（引擎 settleCircuitLibrary 批量重算） ── */
  const ctx = engineCtx(g);
  g.回路库 = settleCircuitLibrary(g.回路库, ctx) as typeof g.回路库;
  log.push(`⑥j 过载率/过载风险已重算 ${g.回路库.length} 条`);

  return { log, notices, promoted };
}

/** 面板"使用补给"：加数值/重置伤势、扣数量、归零删条（与 AI 无关的脚本动作） */
export function 使用补给(g: 游戏, 名称: string, log: string[] = []): boolean {
  const item = g.补给物品.find(i => i.名称 === 名称);
  if (!item || item.数量 <= 0) return false;
  const eff = item.效果;
  if (!eff) return false;   // 新库存型（晶体/导液走桌面补给匣滑杆），无卡片效果不可走此函数
  if (eff.目标 === '能量') { g.主角.能量kJ.当前 = Math.min(g.主角.能量kJ.上限, g.主角.能量kJ.当前 + (eff.增加kJ ?? 0)); log.push(`②C 使用《${名称}》：能量+${eff.增加kJ}kJ`); }
  else if (eff.目标 === '精神') { g.主角.精神点.当前 = Math.min(g.主角.精神点.上限, g.主角.精神点.当前 + (eff.增加点 ?? 0)); log.push(`②C 使用《${名称}》：精神+${eff.增加点}`); }
  else {
    // 创伤治疗：只能减轻（重伤/过载透支/轻伤 → 目标状态；正常或更轻则不变）
    const 顺序 = ['正常', '轻伤', '重伤', '过载透支'];
    const 当前 = 顺序.indexOf(g.主角.身体状态);
    const 目标 = 顺序.indexOf(eff.身体状态 ?? '正常');
    if (目标 < 当前) { log.push(`②C 使用《${名称}》：身体 ${g.主角.身体状态} → ${eff.身体状态}`); g.主角.身体状态 = (eff.身体状态 ?? '正常') as 游戏['主角']['身体状态']; }
    else { log.push(`②C 使用《${名称}》：伤势不重于此档，无效（${g.主角.身体状态}）`); }
  }
  item.数量 -= 1;
  if (item.数量 <= 0) { g.补给物品 = g.补给物品.filter(i => i !== item); log.push(`②C 《${名称}》归零删除`); }
  else { log.push(`②C 《${名称}》剩余 ${item.数量}`); }
  return true;
}

/** 面板"施放·挂待扣单"（②A）：重跑公式 → 生成账单 → 暂存待扣单 → 出手单文本 */
export function 施放挂单(g: 游戏, circuit: 回路, opts?: { e?: number; c?: Record<string, number>; 名称?: string }): { order: string; bill: number; mind: number; tell: number; risk: number; 锚点: string; tunedHit: string | null; tunedName: string | null } {
  const isTuned = circuit.type === 'fixed';
  const e = opts?.e ?? (isTuned ? 0 : 0);
  // 微调：现构参数落在已装固定回路预算内 → 按固定招基线。面板现构时传 e/c。
  const params = Object.assign(initParams(circuit.famKey), opts?.c ?? circuit.参数向量);
  const ctx = engineCtx(g);
  const q = quote({ fam: circuit.famKey, e, c: params }, ctx);
  const pending: any = {
    ref: q.tunedHit || (isTuned ? circuit.id : 'tmp·现搭'),
    名称: opts?.名称 ?? (circuit.名称 + (isTuned ? '' : '·现构')),
    bill: q.bill, mind: q.mind, tell: q.tell, risk: q.risk,
    锚点: anchorOf(q.E_out),
    order: compileOrder(q),
    famKey: circuit.famKey,
  };
  g.待扣单.push(pending);
  return { order: pending.order, bill: q.bill, mind: q.mind, tell: q.tell, risk: q.risk, 锚点: pending.锚点, tunedHit: q.tunedHit, tunedName: q.tunedName };
}

/** 已装槽且带预算的固定回路 → ctx.tuned（微调对表） */
export function collectTuned(g: 游戏): { id: string; 名: string; params: Record<string, number>; budget: { br_min: number; fv_max: number; E_min: number; E_max: number } }[] {
  const out: any[] = [];
  for (const id of g.槽位.固定槽) {
    if (!id) continue;
    const c = g.回路库.find(x => x.id === id);
    if (c && c.type === 'fixed' && c.微调预算) {
      out.push({ id: c.id, 名: c.名称, params: c.参数向量 as Record<string, number>, budget: c.微调预算 });
    }
  }
  return out;
}
