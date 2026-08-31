/* =====================================================================
 * 渐变带 · 自由回路核算引擎 v2.1（纯函数版）
 * ---------------------------------------------------------------------
 * 基于《自由回路引擎v2.js》2.0.0，本版改动（其余公式体一字未动）：
 *   1. tierOf 支持多主分支（aff.main 为数组；兼容旧的单对象入参）
 *   2. 核力场(2-2) 解锁：按"方案A"占位公式计费（【可调】见 2-2 分支）
 *      —— 衰变加速 E=400kJ/g；结合能释放 E=8×10⁴kJ/g；精神 mm=5
 *   3. 新增可读翻译件生成：readableParams / budgetFrom / readableBudget
 *      —— 参数向量与微调预算给 AI/面板看时必须是全中文可读形态
 *   4. localJudge 不再驳回核力场（放开限制）
 * 职责：构筑核算（报价）+ 判别mock + 出手单/cast_out 编译。
 * 原则：纯函数——不碰 DOM、不读写全局、不做IO。一切上下文走 ctx 入参。
 *      "数字只被脚本改"——本引擎就是那个脚本。AI 不得自行算术。
 * 移植：浏览器 window.CircuitEngine / Node require / 酒馆脚本 eval 均可。
 * ===================================================================== */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.CircuitEngine = factory();
})(typeof window !== 'undefined' ? window : globalThis, function () {
  'use strict';

  /* ================= 数值工具与常量表 ================= */
  // 场景档位对照（UI用，引擎只认 ctx.scene 里的原始数值）
  const WINDS = [{ t: '静风', v: 0 }, { t: '和风', v: 40 }, { t: '劲风', v: 70 }, { t: '风暴', v: 95 }];
  const MATS = [{ t: '无(只有空气)', v: 0 }, { t: '砖石混凝', v: 3000 }, { t: '矿区岩层', v: 20000 }];
  const ANCH = [[100, '一记重拳'], [1e3, '≈手枪弹'], [1e4, '≈步枪弹击穿力'], [1e5, '≈轿车60码撞击'], [1e6, '≈1/4公斤TNT'], [1e7, '≈2.4公斤TNT'], [1e8, '≈24公斤TNT'], [1e9, '≈半吨TNT'], [1e12, '≈战术核弹头'], [1e15, '≈战役级天灾'], [Infinity, '≈全球核弹头总和·宇宙级BOSS']];
  function anchorOf(kJ) { const J = kJ * 1000; for (const [l, n] of ANCH) if (J <= l) return n; return '???'; }
  const logv = (v, a, b) => a * Math.pow(b / a, v / 100);   // 滑杆0-100 → 对数量程
  const logTo = (x, a, b) => Math.round(100 * Math.log(x / a) / Math.log(b / a)); // 反查
  const exp10 = v => '10^' + (Math.round(Math.log10(v) * 10) / 10);
  function pwS(v) { return +(0.005 * Math.pow(1000, v / 100)); }            // 倾泻脉宽滑杆→秒
  function massKg(v) { return 0.05 * Math.pow(40000, v / 100); }            // 结构体量滑杆→kg
  function sliderToKJ(v) { return +(0.5 * Math.pow(1000, v / 100)); }       // E滑杆→kJ
  function kjToSlider(kj) { return Math.round(Math.log(kj / 0.5) / Math.log(1000) * 100); }

  // 可调参数集中营（世界书/数值策划改这里，其余代码零改动）
  const TUNE = {
    regenE_kJ_h: 200,     // 非战斗能量恢复 kJ/剧情小时（⑥c）
    regenMind_h: 3,       // 精神恢复 点/剧情小时
    promoteN: 10,         // 自由回路转正次数阈值（⑥h）
    injuryRegenMul: 0.5,  // 重伤恢复倍率；战斗中恒为0
    supplyMaxKJ: 5000,    // 单件补给效果上限（钳制，防数据AI灌贴）
    supplyMaxPoint: 50    // 精神类补给上限（点）
  };

  /* ================= 亲和门控（§5.1 分支表） ================= */
  const TREE = { 倾泻: ['光', '电', '热'], 波动: ['实体波', '媒介波', '电磁场', '引力场', '核力场'], 结构: ['晶体', '金属', '土石', '合金'], 生机: ['植物', '动物(含人体)', '微生物'], 感知: ['五感延伸', '读心干扰', '信息伪造'] };
  const FAMKEY = { pour: '倾泻', flow: '波动', struct: '结构', life: '生机', perce: '感知' };
  // v2.1：主分支为数组（1~17 任选，可跨族）。兼容旧的单对象入参。
  // tier：main=任一主分支精确命中 | mid=与任一主/次分支同族或次分支精确命中 | far=全陌
  function tierOf(aff, famKey, br) {
    const fam = FAMKEY[famKey];
    const mains = Array.isArray(aff.main) ? aff.main : (aff.main ? [aff.main] : []);
    const subs = aff.subs || [];
    if (mains.some(m => m && m.fam === fam && m.br === br)) return 'main';
    if (mains.some(m => m && m.fam === fam)) return 'mid';
    if (subs.some(s => s && s.fam === fam && s.br === br)) return 'mid';
    if (subs.some(s => s && s.fam === fam)) return 'mid';
    return 'far';
  }
  function gateOf(aff, famKey, br) {
    const t = tierOf(aff, famKey, br);
    return t === 'main' ? { m: 1, e: 1, n: '主分支', c: 'g', t }
      : t === 'mid' ? { m: 2, e: 1.5, n: '中档·次/同族', c: 'y', t }
        : { m: 4, e: 4, n: '全陌', c: 'r', t };
  }

  /* ================= 波动系实体：插槽=物理量，E=公式导出 ================= */
  const MODES = [{ n: '实体波' }, { n: '媒介波' }, { n: '场' }];
  const SUBS = {
    '0-0': { n: '电磁波 · 调频/调幅/调相', mm: 1, d: 0.3, ctrls: [
      { k: 'band', label: '频段（调频=换光子）', type: 'seg', opts: ['无线电·μeV·通信', '微波·10μeV·加热', '可见/紫外·eV·激光', 'X射线·100keV·穿甲', 'γ·MeV·核级'], def: 2 },
      { k: 'eknob', label: '调什么', type: 'seg', opts: ['调振幅·功率输出', '调相位·干涉重排'], def: 0 },
      { k: 'pkw', label: '输出功率', type: 'range', min: 0, max: 100, step: 1, def: 40, show: c => c.eknob === 0, fmt: v => logv(v, 0.1, 1000).toFixed(1) + ' kW' },
      { k: 'ecov', label: '相位覆盖面积', type: 'range', min: 1, max: 50, step: 1, def: 2, show: c => c.eknob === 1, fmt: v => v + ' m²' },
      { k: 'et', label: '作用时长', type: 'range', min: 0.1, max: 10, step: 0.1, def: 1, fmt: v => v + ' s' }] },
    '0-1': { n: '引力波 · 时空涟漪', mm: 4, d: 0.9, ctrls: [
      { k: 'gwh', label: '应变振幅 h', type: 'range', min: 0, max: 100, step: 1, def: 20, fmt: v => { const h = 1e-21 * Math.pow(10, 15 * v / 100); return 'h=' + exp10(h) + (h < 1e-12 ? '·仅干涉仪可测' : h < 1e-8 ? '·仪器强信号' : '·肉眼可见'); } }] },
    '1-0': { n: '声波 · 声压/空化/相位', mm: 1, d: 0.2, ctrls: [
      { k: 'sknob', label: '调什么', type: 'seg', opts: ['调声压·明攻', '超声空化·水下', '调相位·静默区'], def: 0 },
      { k: 'db', label: '声压级', type: 'range', min: 60, max: 210, step: 5, def: 160, show: c => c.sknob === 0, fmt: v => v + ' dB' },
      { k: 'svol', label: '空化水量', type: 'range', min: 0, max: 100, step: 1, def: 50, show: c => c.sknob === 1, fmt: v => logv(v, 0.1, 1000).toFixed(1) + ' L' },
      { k: 'scov', label: '静默区半径', type: 'range', min: 1, max: 20, step: 1, def: 3, show: c => c.sknob === 2, fmt: v => 'r=' + v + ' m' },
      { k: 'st', label: '作用时长', type: 'range', min: 0.05, max: 5, step: 0.05, def: 0.1, fmt: v => v + ' s' }] },
    '1-1': { n: '流体 · 风刃/液压', mm: 1, d: 0, ctrls: [
      { k: 'fmed', label: '介质', type: 'seg', opts: ['空气·风刃系', '水/液压·流体系'], def: 0 },
      { k: 'fa', label: '刃口/过流面积', type: 'range', min: 0, max: 100, step: 1, def: 33, show: c => c.fmed === 0, fmt: v => logv(v, 0.005, 5).toFixed(3) + ' m²' },
      { k: 'fv', label: '风速', type: 'range', min: 0, max: 100, step: 1, def: 70, show: c => c.fmed === 0, fmt: v => Math.round(logv(v, 30, 1200)) + ' m/s' },
      { k: 'fh', label: '波高', type: 'range', min: 0.05, max: 30, step: 0.05, def: 0.3, show: c => c.fmed === 1, fmt: v => 'h=' + v + ' m' },
      { k: 'fA', label: '作用面积', type: 'range', min: 0, max: 100, step: 1, def: 50, show: c => c.fmed === 1, fmt: v => Math.round(logv(v, 1, 10000)) + ' m²' },
      { k: 'fbuild', label: '波形成形时长', type: 'range', min: 1, max: 60, step: 1, def: 20, show: c => c.fmed === 1, fmt: v => v + ' s' }] },
    '1-2': { n: '固体机械波 · 地震', mm: 1.3, d: 0.4, ctrls: [
      { k: 'ml', label: '局部震级 ML', type: 'range', min: 0.5, max: 9, step: 0.1, def: 1.5, fmt: v => 'ML' + v + '（' + anchorOf(Math.pow(10, 1.5 * v + 4.8) / 1000) + '）' },
      { k: 'sfoc', label: '震源', type: 'seg', opts: ['浅源·地表破坏', '深源·远传衰减'], def: 0 }] },
    '2-0': { n: '静电场/磁场 · B²/2μ₀·V', mm: 1.2, d: 0.3, ctrls: [
      { k: 'mb', label: '磁通量 B', type: 'range', min: 0, max: 100, step: 1, def: 61, fmt: v => logv(v, 0.01, 20).toFixed(2) + ' T' },
      { k: 'mv', label: '场体积 V', type: 'range', min: 0, max: 100, step: 1, def: 50, fmt: v => logv(v, 0.01, 100).toFixed(2) + ' m³' },
      { k: 'mT', label: '用途', type: 'seg', opts: ['吸拂·铁磁物件', '磁约束·带电粒子/等离子体', '偏转·精密微操'], def: 0 },
      { k: 'mset', label: '场建立时长', type: 'range', min: 1, max: 60, step: 1, def: 20, fmt: v => v + ' s' }] },
    '2-1': { n: '引力场 · 悬浮与撕裂', mm: 2, d: 0.9, ctrls: [
      { k: 'gk', label: '调什么', type: 'seg', opts: ['调g·宏观搬物(便宜!)', '调梯度·潮汐撕裂'], def: 0 },
      { k: 'gm', label: '质量', type: 'range', min: 0, max: 100, step: 1, def: 60, show: c => c.gk === 0, fmt: v => logv(v, 0.1, 2000).toFixed(1) + ' kg' },
      { k: 'gh', label: '抬升高度/力臂', type: 'range', min: 0.1, max: 20, step: 0.1, def: 1, show: c => c.gk === 0, fmt: v => v + ' m' },
      { k: 'gg', label: '头脚引力差', type: 'range', min: 1.1, max: 10, step: 0.1, def: 2, show: c => c.gk === 1, fmt: v => '×' + v + '（' + anchorOf(6.25e7 * Math.pow(v - 1, 2) * 1000) + '）' }] },
    /* v2.1 核力场：解除锁定，方案A占位公式【可调】 */
    '2-2': { n: '核力场 · 强/弱相互作用', mm: 5, d: 1.2, ctrls: [
      { k: 'nmode', label: '操纵模式', type: 'seg', opts: ['衰变加速·放射性操纵', '结合能释放·核素点燃'], def: 0 },
      { k: 'nmass', label: '核素质量', type: 'range', min: 0, max: 100, step: 1, def: 10, fmt: v => { const g = 0.1 * Math.pow(10000, v / 100); return g < 1 ? (g * 1000).toFixed(0) + ' mg' : g.toFixed(1) + ' g'; } },
      { k: 'nctl', label: '释放方式', type: 'seg', opts: ['全域·原地释放', '定向·方向性引导'], def: 0 }] }
  };
  const SUBKEYS = [['0-0', '0-1'], ['1-0', '1-1', '1-2'], ['2-0', '2-1', '2-2']];
  function curKey(c) { const ks = SUBKEYS[c.mode]; return ks[Math.min(c.sub, ks.length - 1)]; }

  /* ================= 五族插槽定义 ================= */
  const FAMS = {
    pour: { name: '倾泻系', sub: '热/电/光 · 出"口"即直线', baseMind: 2, baseTime: .25, tell: 3,
      ctrls: [
        { k: 'phase', label: '相态形态(=分支)', type: 'seg', opts: ['光辐射·光', '电子流·电磁', '热膨胀·爆轰·热'], def: 0 },
        { k: 'pw', label: '释放脉宽 t', type: 'range', min: 0, max: 100, step: 1, def: 55, fmt: v => pwS(v).toFixed(2) + ' s' },
        { k: 'th', label: '准直发散角 θ', type: 'range', min: 0, max: 100, step: 1, def: 25, fmt: v => (v < 15 ? '针状·单点穿甲' : v < 60 ? '收窄束' : '扇形·面爆燃') + '（' + v + ' 档）' }] },
    flow: { name: '波动系', sub: '插槽=物理量，E=公式导出', baseMind: 2, baseTime: .30, tell: 2, derived: true,
      ctrls: [
        { k: 'mode', label: '作用模态(=分支组)', type: 'seg', opts: ['实体波·无需介质', '媒介波·依赖介质', '场·势能梯度'], def: 1 },
        { k: 'sub', label: '操纵实体', type: 'seg', def: 1 },
        { k: 'br', label: '介质借用率', type: 'range', min: 0, max: 100, step: 5, def: 70, show: c => c.mode === 1, fmt: v => v + ' %' }] },
    struct: { name: '结构系', sub: '分子重排 · 不可逆零维持', baseMind: 2, baseTime: .5, tell: 2,
      ctrls: [
        { k: 'base', label: '无机物基底(=分支)', type: 'seg', opts: ['随身钢材→金属', '地面存量→土石', '空气粉尘→土石·能量×3'], def: 1 },
        { k: 'latt', label: '晶格重排方向', type: 'range', min: 0, max: 100, step: 1, def: 80, fmt: v => (v > 70 ? '共价相·脆硬' : v > 30 ? '混相' : '金属相·延韧') + '（' + v + ' 档）' },
        { k: 'mass', label: '重排体量', type: 'range', min: 0, max: 100, step: 1, def: 55, fmt: v => massKg(v).toFixed(1) + ' kg' },
        { k: 'rate', label: '重排速率', type: 'range', min: 0.5, max: 10, step: 0.5, def: 3, fmt: v => v + ' 档' },
        { k: 'stress', label: '魔素应力', type: 'seg', opts: ['固化·零维持费', '应力·按秒计费'], def: 0 },
        { k: 'stressT', label: '应力时长', type: 'range', min: 1, max: 30, step: 1, def: 10, show: c => c.stress === 1, fmt: v => v + ' s' }] },
    life: { name: '生机系', sub: '催化剂不是锤子', baseMind: 3, baseTime: .4, tell: 1,
      ctrls: [
        { k: 'targ', label: '对象(=分支)', type: 'seg', opts: ['植物', '动物(含人体)', '微生物'], def: 1 },
        { k: 'pen', label: '渗透速率', type: 'range', min: 0, max: 100, step: 5, def: 40, fmt: v => v + ' %' },
        { k: 'inten', label: '增殖烈度', type: 'seg', opts: ['修复增殖(愈合)', '增生催长', '失控增殖(伤人)'], def: 0 },
        { k: 'form2', label: '剂型相态', type: 'seg', opts: ['接触', '注液', '气雾'], def: 1 },
        { k: 'sel', label: '目标选择性', type: 'seg', opts: ['仅自身', '指定个体', '指定物种', '无差别'], def: 1 },
        { k: 'lat', label: '潜伏期', type: 'range', min: 0, max: 600, step: 10, def: 0, fmt: v => v + ' min' },
        { k: 'cat', label: '催化时长', type: 'range', min: 0.5, max: 20, step: 0.5, def: 3, fmt: v => v + ' min' }] },
    perce: { name: '感知系', sub: '只读不写 · 精神是主账单', baseMind: 4, baseTime: .3, tell: 1, relCap: .5,
      ctrls: [
        { k: 'rad', label: '扫描半径', type: 'range', min: 1, max: 200, step: 1, def: 30, fmt: v => v + ' m' },
        { k: 'res', label: '信噪/分辨率', type: 'seg', opts: ['广域', '标准', '锐分(被察觉+8%)'], def: 1 },
        { k: 'pert', label: '信息扰动深度(=分支)', type: 'seg', opts: ['噪声干扰→读心干扰', '幻觉碎片→信息伪造', '深幻→信息伪造'], def: 0 },
        { k: 'dwell', label: '驻留形态', type: 'seg', opts: ['瞬时扫', '待机雷达', '触发告警'], def: 0 },
        { k: 'dwellSec', label: '驻留时长', type: 'range', min: 5, max: 60, step: 5, def: 20, show: c => c.dwell >= 1, fmt: v => v + ' s' }] }
  };

  /* 参数初始化/补齐（UI 与存档加载后都过一遍） */
  function initParams(fam) {
    const c = {}; for (const ctl of FAMS[fam].ctrls) c[ctl.k] = ctl.def;
    return syncParams(fam, c);
  }
  function syncParams(fam, cIn) {
    if (fam !== 'flow') return Object.assign({}, cIn);
    const c = Object.assign({}, cIn);
    for (const ctl of (SUBS[curKey(c)] || { ctrls: [] }).ctrls) if (!(ctl.k in c)) c[ctl.k] = ctl.def;
    return c;
  }

  /* 构筑向量 → 亲和分支名（门控查树） */
  function branchOf(fam, c) {
    if (fam === 'pour') return ['光', '电', '热'][c.phase];
    if (fam === 'flow') { const k = curKey(c);
      if (k[0] === '0') return '实体波';
      if (k[0] === '1') return '媒介波';
      return { '2-0': '电磁场', '2-1': '引力场', '2-2': '核力场' }[k];
    }
    if (fam === 'struct') return ['金属', '土石', '土石'][c.base];
    if (fam === 'life') return ['植物', '动物(含人体)', '微生物'][c.targ];
    return ['读心干扰', '信息伪造', '信息伪造'][c.pert];
  }

  /* ================= v2.1 新增：可读翻译件（AI/面板只看这个） =================
   * 参数向量是引擎原生英文键，AI 看不懂缩写——发给 AI 前必须翻译成全中文。 */
  function readableParams(fam, c) {
    const cc = syncParams(fam, c);
    const out = {};
    const put = ctl => {
      if (ctl.show && !ctl.show(cc)) return;
      const v = cc[ctl.k];
      if (ctl.type === 'seg') out[ctl.label] = (ctl.opts && ctl.opts[v] != null) ? ctl.opts[v] : String(v);
      else out[ctl.label] = ctl.fmt ? ctl.fmt(v) : String(v);
    };
    for (const ctl of FAMS[fam].ctrls) {
      if (ctl.k === 'sub') { out[ctl.label] = (SUBS[curKey(cc)] || {}).n || String(cc.sub); continue; }
      put(ctl);
    }
    if (fam === 'flow') for (const ctl of (SUBS[curKey(cc)] || { ctrls: [] }).ctrls) put(ctl);
    return out;
  }
  /* 微调预算生成（公式已锁死，仅波动·流体·空气适用微调机制）：
   *   借用率下限 = 注册值−15，风速上限 = 注册值+2，输出区间 = 基线输出×0.2 ~ ×1.8 */
  function budgetFrom(fam, c, E_out) {
    if (fam !== 'flow' || curKey(c) !== '1-1' || c.fmed !== 0) return null;
    return {
      br_min: Math.max(0, c.br - 15),
      fv_max: Math.min(100, c.fv + 2),
      E_min: Math.max(0.1, Math.round(E_out * 0.2 * 10) / 10),
      E_max: Math.round(E_out * 1.8 * 10) / 10
    };
  }
  function readableBudget(b) {
    if (!b) return null;
    return {
      '介质借用率下限': b.br_min + ' %',
      '风速上限档': b.fv_max + '（约 ' + Math.round(logv(b.fv_max, 30, 1200)) + ' m/s）',
      '输出下限kJ': b.E_min,
      '输出上限kJ': b.E_max
    };
  }

  /* ================= 核心：单回路核算（§5.4 公式库） =================
   * 入参 {fam, e, c}：fam=族id；e=E滑杆0-100（flow系忽略，E由公式导出）；
   *                  c=参数向量（initParams补齐过的）
   * ctx  = {aff:{main:[..]|{..},subs:[...]}, scene:{wind,mat,water}, char:{...}}
   * 返回 r：{out(输出kJ) bill(门控后账单) mind(门控后精神·未含陌生/伤势) relT(作用时长s)
   *          readyT(导引耗时s) tell(征状基准) branch g(门控) chips lines effect ...}
   * ================================================================== */
  function calcCircuit(req, ctx) {
    const fam = req.fam; const e = req.e;
    const c = syncParams(fam, req.c);
    const F = FAMS[fam];
    const scene = ctx.scene || { wind: 40, mat: 3000, water: false };
    const speed = (ctx.char && ctx.char.speed) || 1;
    const br = branchOf(fam, c), g = gateOf(ctx.aff, fam, br);
    const o = { fam, F, g, branch: br, c, chips: [], lines: [] };
    o.out = F.relCap ? Math.min(sliderToKJ(e), F.relCap) : sliderToKJ(e);
    let mind = F.baseMind; o.tell = F.tell;

    if (fam === 'pour') {
      const t = pwS(c.pw); o.t = t; o.relT = Math.max(0.005, t);
      mind += (100 - c.th) * 0.03 + (t < 0.15 ? 1.5 : 0) + Math.max(0, (t - 0.3)) * 2;
      o.bill = o.out * g.e;
      o.lines.push([['光辐射·无质量直线', '电子流·寻最低阻', '热膨胀·冲击波'][c.phase], '出手即承诺']);
      o.lines.push(['脉宽', o.relT.toFixed(3) + 's → P=E/t']);
      o.lines.push(['发散角', c.th < 15 ? '针状·单点穿甲' : c.th < 60 ? '收窄束' : '扇形·面爆燃（摊薄）']);
      if (o.relT <= 0.01 && o.out >= 50) o.chips.push({ t: '超短脉冲高能·通径瞬时击穿反噬自身', w: 12, l: 'r' });
      if (c.phase === 0) o.tell += 1;
      o.effect = [['光辐射', '电子流', '热爆轰'][c.phase], c.th < 15 ? '针状穿甲' : c.th < 60 ? '收窄束' : '扇形爆燃'].join('·');
    }
    else if (fam === 'flow') {
      const key = curKey(c), def = SUBS[key] || SUBS['2-2'];
      let E = 0, sv = 1, spec = '', ampF = 1;
      mind *= def.mm;
      if (c.mode === 1) {
        let supply = scene.wind + 15, amp = 1.5;
        if (key === '1-0') { supply = Math.max(scene.wind, 80) + 15; amp = 1.5; }
        if (key === '1-1') { supply = c.fmed === 1 ? 90 : scene.wind + 15; amp = c.fmed === 1 ? 1.3 : 2; }
        if (key === '1-2') { supply = 85; amp = 20; }
        const brEff = Math.min(c.br, supply);
        sv = 1 - 0.5 * brEff / 100; ampF = 1 + (amp - 1) * brEff / 100;
        o.lines.push(['介质借用', '有效' + brEff + '%/供给' + supply + '% · 放大×' + ampF.toFixed(2) + '·折价×' + sv.toFixed(2)]);
        if (c.br > supply) o.chips.push({ t: '断流风险·借用超现场介质供给', w: 14, l: 'o' });
      }
      if (key === '0-0') {
        const bandE = [1, 1, 1.2, 1.6, 2.5][c.band]; mind += c.band * 0.8;
        if (c.eknob === 0) { const P = logv(c.pkw, 0.1, 1000); E = P * c.et * bandE; o.relT = c.et;
          spec = ['无线电', '微波', '激光', 'X射线', 'γ射线'][c.band] + ' ' + P.toFixed(1) + 'kW×' + c.et + 's';
          o.lines.push(['公式', 'E=P×t×频段税', E.toFixed(1) + 'kJ']);
          if (c.band >= 3) { o.lines.push(['高光子税', '穿透≠杀伤，剂量与残留由裁判判']); o.chips.push({ t: 'X/γ残留=专业设备可探测的证据链', w: 6, l: 'y' }); }
        } else { E = c.ecov * 0.55 * c.et; o.relT = c.et; spec = '相位干涉·' + c.ecov + 'm²×' + c.et + 's';
          mind += 0.5 + c.ecov * 0.25; o.tell = 1;
          o.lines.push(['公式', 'E=0.55kW/m²×t（相消只重排去向）', E.toFixed(1) + 'kJ']);
          o.lines.push(['干涉去向', '能量挪到旁边——旁边站了谁？裁判判']);
        }
      }
      else if (key === '0-1') {
        const h = 1e-21 * Math.pow(10, 15 * c.gwh / 100); const raw = 1e14 * Math.pow(h / 1e-6, 2);
        E = Math.max(500, raw); o.relT = 1; mind += 6; o.tell = 5; spec = '应变h=' + exp10(h);
        o.lines.push(['四极矩公式', 'E≈1e14kJ×(h/10⁻⁶)²' + (raw < 500 ? ' → 触到基建下限' : ''), anchorOf(E)]);
        o.chips.push({ t: '引力操纵·战略级征状（军方监控阵列会看向这里）', w: 15, l: 'r' });
        if (h < 1e-12) o.chips.push({ t: '涟漪活人毫无知觉——只有干涉仪知道你出手了', w: 8, l: 'o' });
        else if (h >= 1e-7) o.chips.push({ t: '肉眼可见空间抖动=国家级事件', w: 30, l: 'r' });
        o.effect = spec + (h < 1e-12 ? '（实战意义≈0）' : '');
      }
      else if (key === '1-0') {
        if (c.sknob === 0) { const I = 1e4 * Math.pow(10, (c.db - 200) / 10); E = I * 0.5 * c.st / 1000; o.relT = Math.max(0.05, c.st);
          spec = c.db + 'dB声压×' + c.st + 's'; mind += (c.db - 120) / 40;
          o.lines.push(['公式', 'E=I×0.5m²(胸腔)×t', E < 1 ? (E * 1000).toFixed(0) + 'J' : E.toFixed(1) + 'kJ']);
          if (c.db >= 190) { o.lines.push(['共振条款', '体表无伤、内脏出血——死法认定由裁判判']); o.tell = 3; }
        } else if (c.sknob === 1) { const L = logv(c.svol, 0.1, 1000); E = 100 * L * c.st / 1000; o.relT = Math.max(0.1, c.st);
          spec = '超声空化' + L.toFixed(1) + 'L×' + c.st + 's'; mind += 1;
          o.lines.push(['公式', 'E=100W/L×t（气泡溃灭微射流）', E.toFixed(2) + 'kJ']);
          o.chips.push({ t: '需液相介质：水体在场或人体70%水自带', w: scene.water ? 4 : 6, l: 'o' });
        } else { E = c.scov * 0.05 * c.st; o.relT = Math.max(0.1, c.st); spec = '静默区r=' + c.scov + 'm×' + c.st + 's';
          mind += 0.5 + c.scov * 0.3; o.tell = 1;
          o.lines.push(['公式', 'E=反向相位叠加0.05kW/m（消音不消能量）', E.toFixed(2) + 'kJ']);
        }
      }
      else if (key === '1-1') {
        if (c.fmed === 0) { const A = logv(c.fa, 0.005, 5), v = logv(c.fv, 30, 1200);
          E = 0.5 * 1.2 * A * v * v / 1000 * (v / 340); o.relT = 0.3; spec = '风刃 A=' + A.toFixed(3) + 'm² v=' + v.toFixed(0) + 'm/s';
          o.lines.push(['公式', 'E=½ρ空气Av²×激波系数(v/340)', E.toFixed(1) + 'kJ']);
          if (v > 340) o.chips.push({ t: '跨音速·激波爆鸣=自带开团广播', w: 6, l: 'o' });
          mind += 0.025 * c.fv;
        } else { const A = logv(c.fA, 1, 10000); E = 4.9 * A * c.fh * c.fh; o.relT = c.fbuild; mind += 1.5;
          spec = '浪高' + c.fh + 'm×' + A.toFixed(0) + 'm²·成形' + c.fbuild + 's';
          o.lines.push(['公式', 'E=½ρ水gAh²', anchorOf(E)]);
          if (!scene.water) o.chips.push({ t: '现场无水柱！先声明水源（管道/雨/泳池）否则空转', w: 12, l: 'r' });
          if (E > 1000) o.chips.push({ t: '兆焦水体位移=市政级事故现场', w: 12, l: 'r' });
        }
      }
      else if (key === '1-2') {
        E = Math.pow(10, 1.5 * c.ml + 4.8) / 1000 * (c.sfoc === 1 ? 0.6 : 1); o.relT = 2;
        spec = 'ML' + c.ml + (c.sfoc === 1 ? '·深源远传' : '·浅源地表破坏');
        o.lines.push(['古登堡公式', 'log₁₀E(J)=1.5ML+4.8', anchorOf(E)]);
        mind += 2.5 + c.ml * 1.5; o.tell = Math.min(5, Math.round(2 + c.ml));
        o.lines.push(['引信条款', '总释放大地出，你只付点火费——后续自然滑移由裁判判']);
        if (c.ml >= 2.5) o.chips.push({ t: '城市逃逸阈值以上——十分钟后到场的将是军队', w: 25, l: 'r' });
        if (c.ml >= 4.5) o.chips.push({ t: 'ML4.5+=1/30广岛·压箱底大招', w: 30, l: 'r' });
      }
      else if (key === '2-0') {
        const B = logv(c.mb, 0.01, 20), V = logv(c.mv, 0.01, 100);
        E = B * B * 397.9 * V; o.relT = c.mset;
        spec = B.toFixed(2) + 'T×' + V.toFixed(2) + 'm³·' + ['吸拂', '磁约束', '偏转微操'][c.mT];
        o.lines.push(['磁场能公式', 'E=B²/2μ₀·V（B平方·V线性）', anchorOf(E)]);
        if (B >= 8) o.chips.push({ t: '10T实验室级：铁磁物全压饼（植入物？裁判判）', w: 15, l: 'r' });
        if (c.mT === 1) { mind += 1.5; } if (c.mT === 2) mind += 2.5;
      }
      else if (key === '2-1') {
        if (c.gk === 0) { const m = logv(c.gm, 0.1, 2000); E = m * 9.8 * c.gh / 1000; o.relT = 1; mind += 2.5; o.tell = 2;
          spec = '悬浮' + m.toFixed(1) + 'kg×' + c.gh + 'm';
          o.lines.push(['公式', 'E=mgh（把枪从手里提走只要几焦）', E.toFixed(2) + 'kJ']);
        } else { E = 6.25e7 * Math.pow(c.gg - 1, 2); o.relT = 1; mind += 8; o.tell = 5; spec = '头脚引力差×' + c.gg;
          o.lines.push(['曲率代价', '梯度×5≈1TJ——"不如扔板砖"是公式结论']);
          o.chips.push({ t: '潮汐撕裂≈战术核弹能耗+战略征状', w: 30, l: 'r' });
        }
      }
      else if (key === '2-2') {
        /* v2.1 核力场 · 方案A占位公式【可调】：
         *   结合能释放：E = 质量 × 8×10⁴ kJ/g（铀核裂变量级；0.1g→8e3kJ≈2kgTNT，1kg→8e7kJ≈战术核弹）
         *   衰变加速：  E = 质量 × 400 kJ/g（跨越衰变势垒的活化能，效果=放射性污染缓发） */
        const gm = 0.1 * Math.pow(10000, c.nmass / 100); // 0.1g ~ 1000g
        o.nmass_g = gm;
        if (c.nmode === 1) {
          E = gm * 8e4; o.relT = 3;
          spec = '核素点燃' + (gm < 1 ? (gm * 1000).toFixed(0) + 'mg' : gm.toFixed(1) + 'g');
          o.lines.push(['结合能公式', 'E≈8×10⁴kJ/g（铀核裂变量级）', anchorOf(E)]);
          mind += 8;
          o.chips.push({ t: '核爆征状·使用即国家级事件，全球监控阵列看向这里', w: 30, l: 'r' });
          if (E >= 1e7) o.chips.push({ t: '战术核弹当量门槛·压箱底同归于尽招', w: 15, l: 'r' });
        } else {
          E = gm * 400; o.relT = 10;
          spec = '衰变加速' + (gm < 1 ? (gm * 1000).toFixed(0) + 'mg' : gm.toFixed(1) + 'g');
          o.lines.push(['活化能公式', 'E=400kJ/g·跨越衰变势垒', E.toFixed(0) + 'kJ']);
          mind += 6;
          o.chips.push({ t: '放射性污染·缓发杀伤，剂量账单由裁判记', w: 20, l: 'r' });
        }
        if (c.nctl === 1) { mind += 2; o.lines.push(['定向引导', '方向性释放·减少误伤，代价是精度负荷']); }
        else o.chips.push({ t: '全域原地释放·风向与人群都站在这笔账里', w: 10, l: 'r' });
        o.tell = 5;
        o.effect = spec;
      }
      else { E = 0; o.relT = 1; mind = 99; spec = '未解锁'; }
      o.out = Math.round(E * 100) / 100; o.bill = o.out / ampF * sv * g.e; o.effect = spec;
      o.entity = key;
      o.lines.unshift([MODES[c.mode].n + '→' + def.n + '·分支[' + br + ']', '']);
    }
    else if (fam === 'struct') {
      const kg = massKg(c.mass), cap = [50, scene.mat, 5][c.base], dust = c.base === 2 ? 3 : 1;
      o.kg = kg; o.dem = kg * 0.6 * dust; o.fill = o.out / o.dem;
      o.qual = Math.min(1.2, 0.5 + 0.08 * c.rate);
      const hard = c.latt / 100; o.hard = hard;
      o.pool = kg * 0.4 * (0.6 + 0.4 * hard) * o.qual * (c.stress ? 1.5 : 1);
      o.relT = c.rate;
      mind += 0.2 * c.rate + kg / 60 + (c.rate < 1 ? 2 : 0) + (c.stress ? c.stressT * 1 : 0);
      o.lines.push(['基底', ['随身钢材→金属', '地面存量→土石', '空气粉尘→土石·能量×3'][c.base], '上限' + cap + 'kg']);
      o.lines.push(['晶格', (hard > 0.7 ? '共价相·脆硬' : hard > 0.3 ? '混相' : '金属相·延韧') + ' 质量系数' + o.qual.toFixed(2)]);
      o.lines.push(['体量', kg.toFixed(1) + 'kg 需' + o.dem.toFixed(0) + 'kJ 充足率' + (o.fill * 100).toFixed(0) + '%']);
      if (o.fill < 0.8) o.chips.push({ t: '注入不足·出半成品', w: 10, l: 'o' });
      if (kg > cap) o.chips.push({ t: '无料可塑·超基底存量', w: 12, l: 'r' });
      if (hard > 0.7) o.chips.push({ t: '共价相·池烧穿即脆断', w: 0, l: 'y' });
      o.lines.push(['维持', '固化=零维持费；破坏=对波烧池']);
      o.bill = (Math.max(o.out, o.dem * o.qual) + (c.stress ? 0.1 * o.pool * c.stressT : 0)) * g.e;
      o.effect = kg.toFixed(0) + 'kg·' + (hard > 0.7 ? '共价' : hard > 0.3 ? '混' : '金属') + '相' + (c.stress ? '·应力硬化' : '');
    }
    else if (fam === 'life') {
      mind += c.pen / 25 + c.cat * 1.5;
      mind *= [0.8, 1.5, 2.5, 1.0][c.sel]; mind -= Math.min(3, c.lat / 200);
      o.relT = Math.max(0.2, 0.3 + c.cat * 0.05);
      if (c.pen > 70) o.chips.push({ t: '急渗拒斥·目标组织排异', w: 8, l: 'o' });
      if (c.form2 === 2) { o.tell += 1; o.chips.push({ t: '气雾回吹·扩散方向交给风', w: 8, l: 'o' }); }
      if (c.sel === 3) o.chips.push({ t: '无差别·生态事故风险(剧情代价裁判判)', w: 20, l: 'r' });
      if (c.inten === 2) o.chips.push({ t: '失控增殖·命中即伦理账单', w: 6, l: 'r' });
      o.lines.push(['对象', '[' + ['植物', '动物(含人体)', '微生物'][c.targ] + '] 愈毒同杆两端']);
      o.bill = o.out * (1 + 0.4 * c.pen / 100) * g.e;
      o.effect = ['愈合', '增生', '伤人'][c.inten] + '·' + ['接触', '注液', '气雾'][c.form2] + '·' + ['植物', '动物', '微生物'][c.targ];
    }
    else {
      mind += (c.rad * c.rad) / 400 * 3; mind *= [1, 1.5, 2.5][c.res];
      if (c.dwell === 1) mind += 2 * c.dwellSec;
      if (c.dwell === 2) mind += 2 + 0.3 * c.dwellSec;
      o.relT = c.dwell >= 1 ? c.dwellSec : 0.1;
      if (c.res === 2) o.chips.push({ t: '被察觉风险·强精神目标可反感知', w: 8, l: 'o' });
      o.lines.push(['主账单', '能量折算≤' + F.relCap + 'kJ，账全在精神']);
      o.bill = o.out * g.e;
      o.effect = '半径' + c.rad + 'm·' + ['广域', '标准', '锐分'][c.res];
    }
    o.readyT = Math.max(0.15, (F.baseTime + (fam === 'struct' ? c.rate : 0)) / speed);
    o.mind = mind * g.m;
    o.lines.unshift([F.name + '·分支[' + br + ']→' + g.n, '精神×' + g.m + ' 能量×' + g.e]);
    return o;
  }

  /* ================= 陌生系数（§5.7 前半） ================= */
  function unfOf(fam, cIn, r) {
    const c = syncParams(fam, cIn); let d = 0, parts = [];
    if (fam === 'flow') {
      const key = curKey(c);
      if (SUBS[key] && SUBS[key].d) { d += SUBS[key].d; parts.push(SUBS[key].n.split(' ')[0]); }
      if (key === '1-1' && c.fmed === 0) {
        if (c.br < 65) { d += (65 - c.br) / 100; parts.push('借用偏离熟路'); }
        d += Math.max(0, c.fv - 72) * 0.003;
      }
      if (key === '0-0' && c.eknob === 1) { d += 0.25; parts.push('调相·精密活'); }
      if (key === '2-0' && c.mT === 2) { d += 0.2; parts.push('偏转微操'); }
      if (key === '1-0' && c.sknob === 2) { d += 0.2; parts.push('声相位'); }
    } else if (fam === 'struct') { d += 0.45; parts.push('结构·陌生场'); if (c.base === 2) { d += 0.3; parts.push('粉尘'); } if (c.stress) { d += 0.2; parts.push('应力'); } }
    else if (fam === 'pour') { d += 0.8; parts.push('倾泻·全新地形'); }
    else if (fam === 'life') { d += 0.7; parts.push('生机·全新地形'); }
    else { d += 0.6; parts.push('感知·全新地形'); }
    if (r.g.t === 'far' && !parts.length) { parts.push('全陌族'); d = Math.max(d, 0.5); }
    return { d: Math.min(d, 4), unf: 1 + 0.25 * Math.min(d, 4), parts };
  }

  /* ================= 微调对表（§5.7 后半） =================
   * tuned = 已装槽的固定回路 [{id,名,params,budget}]（宿主过滤后传入）
   * 命中条件：波动·流体·空气 且 借用率/风速/输出落进预算区间 → 精神×0.3、免临时上浮 */
  function findTuned(ctx, r, cIn) {
    if (!ctx.tuned || !ctx.tuned.length) return null;
    if (r.fam !== 'flow') return null;
    const c = syncParams('flow', cIn);
    if (curKey(c) !== '1-1' || c.fmed !== 0) return null;
    for (const m of ctx.tuned) {
      if (!m.budget || !m.params || m.params.fmed !== 0) continue;
      const b = m.budget;
      if (c.br >= (b.br_min ?? 85) && c.fv <= (b.fv_max ?? 72) && r.out >= (b.E_min ?? 1) && r.out <= (b.E_max ?? 9)) return m;
    }
    return null;
  }

  /* ================= 伤势上浮（§5.1 v2） ================= */
  function injuryMod(body) {
    const sev = { '正常': 0, '轻伤': 1, '重伤': 2, '过载透支': 3 }[body || '正常'];
    return { mM: 1 + 0.25 * sev, eM: 1 + 0.15 * sev, sev };
  }

  /* ================= 总装：报价（§3.1-②A 的完整一次执行） ================= */
  function quote(req, ctx) {
    const r = calcCircuit(req, ctx);
    const ch = ctx.char || {};
    const im = injuryMod(ch.body);
    const U = unfOf(req.fam, r.c, r);
    const tuned = findTuned(ctx, r, r.c);
    let mind = Math.max(0.5, r.mind * U.unf * im.mM);
    let bill = r.bill * im.eM;
    if (tuned) mind = Math.max(0.5, mind * 0.3);
    mind = +mind.toFixed(1); bill = Math.round(bill * 10) / 10;
    const exhaust = bill > (ch.eCur ?? Infinity);
    const power = bill / r.relT;
    const burst = ch.burstKW ?? 300, sus = ch.sustainKW ?? 50;
    const overBurst = power > burst, overSustain = r.relT >= 1 && power > sus;
    const mMax = ch.mMax ?? 90, mCur = ch.mCur ?? 90;
    const frac = mind / mMax;
    const zone = frac < 1 / 3 ? { n: '绿·轻度', c: 'g' } : frac < 2 / 3 ? { n: '黄·中度', c: 'y' } : frac < 0.9 ? { n: '红·重荷', c: 'r' } : { n: '紫·断线区', c: 'p' };
    let tell = Math.max(1, Math.min(5, Math.round(r.tell + (r.g.t === 'far' ? 1 : 0))));
    let risk = 5; const chips = r.chips.slice();
    for (const cc of chips) risk += cc.w;
    if (r.g.t === 'far') risk += 15;
    risk += (U.unf - 1) * 25;
    if (im.sev) chips.push({ t: '伤势[' + (ch.body || '正常') + '] 精神×' + im.mM.toFixed(2) + ' 能量×' + im.eM.toFixed(2), w: im.sev * 5, l: 'y' });
    if (overSustain) { risk += 8; chips.push({ t: '超持续线·' + power.toFixed(0) + 'kW>' + sus + ' → 冲刺数秒后段衰减', w: 0, l: 'o' }); }
    if (overBurst) { risk += 30; chips.push({ t: '超爆发上限' + burst + 'kW·断线', w: 0, l: 'r' }); }
    if (frac >= 2 / 3) { risk += 10; chips.push({ t: '负荷区≥⅔·手抖冷汗视线发毛', w: 0, l: 'r' }); }
    if (mind > mCur) { risk += 25; chips.push({ t: '精神余量不足·失败形态由裁判挑', w: 0, l: 'r' }); }
    if (exhaust) { risk += 20; chips.push({ t: '储量透支·过载灼伤烧在接触处', w: 0, l: 'r' }); }
    risk = Math.min(85, Math.round(risk));
    return { r, E_out: r.out, bill, mind, relT: r.relT, readyT: r.readyT, power, tell, risk, zone,
      unf: U, chips, tunedHit: tuned ? tuned.id : null, tunedName: tuned ? (tuned['名'] || tuned.name) : null,
      exhaust, overBurst, overSustain };
  }

  /* ================= 判别（§3.2 · mock实现） =================
   * v2.1：核力场解除驳回。正式管线：宿主把 callSpellAI 换成真法术AI，本函数降级为兜底。 */
  function localJudge(pk) {
    const d = (pk.desc || '').trim();
    const scene = pk.scene || {};
    if (d.length < 8) return { 结论: '驳回', 解释: '描述太短，抽不出"作用对象+作用方式"两要素。格式参考：用磁场把三米外手枪隔空捞过来' };
    if (/真空/.test(d) && /声|喊|尖叫|噪音/.test(d)) return { 结论: '驳回', 解释: '媒介波必须有介质：真空没有可供集体运动的分子，你的声波没有承载物。改实体波，或者先找空气。' };
    if (/引力波/.test(d) && /(撕|震|砸|撞)/.test(d)) return { 结论: '驳回', 解释: 'h<10⁻¹²的引力波对宏观目标实战意义≈0（四极矩公式摆着）。想"撕"——去引力场·梯度插槽，那是另一笔核弹账。' };
    if (/水浪|海啸|水流|液压/.test(d) && !scene.water) return { 结论: '驳回', 解释: '场景判定：现场无水柱可用。声明水源（消防栓/泳池/暴雨）后重提。' };
    if (/地震|板块|震级/.test(d) && (scene.mat ?? 3000) <= 0) return { 结论: '驳回', 解释: '固体机械波需要岩层耦合，你现在悬空/薄沥青。先落地。' };
    return { 结论: '通过', 规范化回路: { 名: d.slice(0, 7) + '·自拟', 族: pk.fam, 实体: pk.entity || null, 参数向量: pk.params, 一句话效果: pk.effect } };
  }

  /* ================= 编译：出手单文本（喂正文AI的唯一形态） ================= */
  function compileOrder(q) {
    const r = q.r, L = [];
    L.push('【出手单｜主角·' + (q.tunedHit ? '固定招微调(' + q.tunedName + ')' : '自由回路·临时构建') + '】');
    L.push('[ ' + r.F.name + '·分支[' + r.branch + ']·' + r.g.n + ' 精神×' + r.g.m + ' 能量×' + r.g.e + ' ]');
    L.push(' 能量 ' + r.out.toFixed(r.out < 10 ? 2 : 1) + 'kJ（' + anchorOf(r.out) + '）→ 计费 ' + q.bill.toFixed(1) + 'kJ，回合末从储量扣');
    L.push(' · 效果：' + (r.effect || '—'));
    if (r.fam === 'struct') L.push(' · 固化=零维持；池' + r.pool.toFixed(0) + 'kJ');
    L.push(' · 就绪 ' + r.readyT.toFixed(2) + 's · 作用 ' + r.relT.toFixed(2) + 's · 征状Lv' + q.tell);
    L.push(' · 精神 ' + q.mind.toFixed(1) + '（' + q.zone.n + '）· 风险 ' + q.risk + '%');
    const fail = { pour: '粒子走直线，弹道改不了也撤不了单。', flow: '相消不消灭能量，挪走的在别处结账；地震的后续滑移账看裁判。',
      struct: '重排期被打断=晶界缺陷。', life: '起效前是段没人看见的时间；气雾方向交给风。', perce: '读人时也被人读；写型被打断即反噬。' }[r.fam];
    L.push(' 裁判备注：' + fail);
    L.push('（本单=编译产物；数字对外只到锚点级）');
    return L.join('\n');
  }

  /* ================= 编译：cast_out JSON（喂数据AI/留档） ================= */
  function buildCastOut(q, timeLabel) {
    const r = q.r;
    return {
      schema: 'cast_out/1', time: timeLabel || null, fam: r.fam, branch: r.branch,
      entity: r.fam === 'flow' ? (r.entity || null) : null, params: r.c,
      energy: { E_kJ: r.out, bill_kJ: q.bill, anchor: anchorOf(r.out), derived: !!r.F.derived },
      power: { relT_s: r.relT, P_kW: +(q.bill / r.relT).toFixed(1) },
      mind: { cost: q.mind, unf: +q.unf.unf.toFixed(2) },
      tell_lv: q.tell, risk_pct: q.risk, chips: q.chips.map(c => c.t),
      tuned_via: q.tunedHit || null,
      hooks: r.lines.filter(l => /裁判|由裁|滑移|旁边/.test(String(l[1]))).map(l => String(l[1]))
    };
  }

  /* ================= 待扣单生成（②A→⑥a 的载体） ================= */
  function makePending(q, opts) {
    const o = opts || {};
    return {
      ref: q.tunedHit || 'tmp·现搭',
      名: o.name || (String(q.r.effect).slice(0, 10) + (q.tunedHit ? '·微调' : '·现构')),
      bill: q.bill, mind: q.mind, tell: q.tell, risk: q.risk,
      order: compileOrder(q)
    };
  }

  return {
    // 主流程
    quote, calcCircuit, localJudge, compileOrder, buildCastOut, makePending,
    // 参数与向量
    initParams, syncParams, branchOf, curKey, tierOf, gateOf, injuryMod, unfOf, findTuned,
    // v2.1 可读翻译件
    readableParams, budgetFrom, readableBudget,
    // 常量（UI/校验可用）
    TUNE, TREE, FAMKEY, FAMS, SUBS, SUBKEYS, MODES, WINDS, MATS, ANCH,
    // 数值工具
    anchorOf, sliderToKJ, kjToSlider, logv, logTo, pwS, massKg, exp10,
    VERSION: '2.1.0'
  };
});
