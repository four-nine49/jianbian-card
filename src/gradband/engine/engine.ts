// engine/engine.ts — 引擎包装：UMD 脚本以副作用引入（挂到 window/globalThis），这里转成具名导出。
// 引擎本体一行不改；业务代码一律从本模块导入，不要直接 import circuit-engine.js 的具名（UMD 无导出）。
import './circuit-engine.js';

// UMD 可能挂 window 或 globalThis（浏览器两者相等；Node/某些宿主不等），两侧都找
const E: any = (globalThis as any).CircuitEngine ?? (typeof window !== 'undefined' ? (window as any).CircuitEngine : undefined);

if (!E) throw new Error('[渐变带] CircuitEngine 未加载');

export const VERSION: string = E.VERSION;
// 主流程
export const quote = E.quote.bind(E);
export const calcCircuit = E.calcCircuit.bind(E);
export const localJudge = E.localJudge.bind(E);
export const compileOrder = E.compileOrder.bind(E);
export const buildCastOut = E.buildCastOut.bind(E);
export const makePending = E.makePending.bind(E);
export const settleCircuitLibrary = E.settleCircuitLibrary.bind(E);
// 参数与向量
export const initParams = E.initParams.bind(E);
export const syncParams = E.syncParams.bind(E);
export const branchOf = E.branchOf.bind(E);
export const curKey = E.curKey.bind(E);
export const tierOf = E.tierOf.bind(E);
export const gateOf = E.gateOf.bind(E);
export const injuryMod = E.injuryMod.bind(E);
export const unfOf = E.unfOf.bind(E);
export const findTuned = E.findTuned.bind(E);
// 可读翻译件
export const readableParams = E.readableParams.bind(E);
export const budgetFrom = E.budgetFrom.bind(E);
export const readableBudget = E.readableBudget.bind(E);
// 常量
export const TUNE = E.TUNE;
export const TREE = E.TREE;
export const FAMKEY = E.FAMKEY;
export const FAMS = E.FAMS;
export const SUBS = E.SUBS;
export const SUBKEYS = E.SUBKEYS;
export const MODES = E.MODES;
export const WINDS = E.WINDS;
export const MATS = E.MATS;
export const ANCH = E.ANCH;
// 数值工具
export const anchorOf = E.anchorOf.bind(E);
export const sliderToKJ = E.sliderToKJ.bind(E);
export const kjToSlider = E.kjToSlider.bind(E);
export const logv = E.logv.bind(E);
export const logTo = E.logTo.bind(E);
export const pwS = E.pwS.bind(E);
export const massKg = E.massKg.bind(E);
export const exp10 = E.exp10.bind(E);
