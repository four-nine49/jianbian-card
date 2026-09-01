# 渐变带·自由回路 — 状态栏 HTML 适配指南（给编写状态栏的 AI）

> 这份文档给**编写状态栏面板 HTML** 的 AI。你手头只有口述需求、写出来的数据是编的——
> 读这份文档后，把**编的数据换成真实来源**，把**猜的接口换成真实 API**。
> 参考实现：`src/渐变带-面板版/src/gradband/assets/statusbar.html`（完整可用版本，可直接照抄/参考）。

---

## 0. 状态栏 HTML 是什么、怎么跑

- 状态栏面板是一个**独立 HTML 文件**（`statusbar.html`），由用户在酒馆「正则」页手动导入：
  - 查找标记：`<StatusPlaceHolderImpl/>`（AI 回复末尾出现时，正则把它替换成这段 HTML）
  - 替换内容：`dist/状态栏面板.html` 的全文（构建时引擎已内联进去）
- 这段 HTML **跑在酒馆主页面**，是独立脚本，**不是扩展 bundle 的一部分**——它只能：
  - 读/写**酒馆变量**（`getVariables` / `updateVariablesWith`）
  - 用**全局引擎** `window.CircuitEngine`（简称 `E`）
  - **不能** import 扩展模块、不能读扩展内存态——所以所有数据必须从酒馆变量来

---

## 1. 数据从哪来（把编的数据换成这个）

### 1.1 主数据源：chat 变量 `渐变带`（六表引擎对象）

```js
// 读当前存档（唯一真值源；随聊天持久化）
function readChat() {
  var v = getVariables({ type: 'chat' });
  return v ? v['渐变带'] || null : null;
}
```

对象结构（字段全来自 `src/gradband/core/schema.ts`）：

```js
{
  主角: {
    能量kJ:   { 当前: 数值, 上限: 数值 },      // 能量（kJ）
    精神点:  { 当前: 数值, 上限: 数值 },      // 精神
    爆发线kW: 数值, 持续线kW: 数值,
    战斗中: true/false,
    身体状态: '正常'|'轻伤'|'重伤'|'过载透支',
    剧情时间: { label: '2026年11月12日，21：12' },
    上次结算min: 数值                          // 内部用，别展示
  },
  补给物品: [ { 名称, 数量, 效果: { 目标:'能量'|'精神', 增加kJ?, 增加点? } } ],
  回路库: [ {
    id, 名称, type: 'fixed'|'free', 族, famKey, 分支, 实体,
    参数向量: {...}, 参数明细: {...},          // 参数（引擎键 / 中文可读）
    微调预算: {...}|null, 微调预算明细: {...}|null,
    基线账单: { 输出kJ, 计费kJ, 精神, 一句话效果 },
    uses: 数值|null, 来源, 审核存档: {...}|null
  } ],
  槽位: { 固定槽: [id|null×10], 自由槽: [id|null×3] },
  待扣单: [ { ref, 名称, bill, mind, tell, risk, 锚点, order, famKey } ],
  场景: { 风力档, 可塑无机物kJ, 水体在场 },
  感情追踪: { 角色名: {字段:值} }              // 旧字段，标准AI已改走表格（见 §5）
}
```

### 1.2 快照（状态栏快速读取，可选）

```js
function readSnapshot() {
  // 从最近几楼 stat_data.渐变带 读快照（比 chat 变量轻，但可能滞后一轮）
  var v = getVariables({ type: 'message', message_id: getLastMessageId() });
  return v && v.stat_data && v.stat_data['渐变带'];
}
```

### 1.3 写回（玩家操作后必须走这个，否则不落盘）

```js
function writeGame(mut) {
  updateVariablesWith(function (v) {
    var g = v['渐变带'];
    if (g) mut(g);                 // mut 里改 g 的字段
    return v;
  }, { type: 'chat' });
  // 300ms 后同步快照到最新楼（让其它界面也读到）
  setTimeout(function () {
    var g = readChat(); if (!g) return;
    var snap = JSON.parse(JSON.stringify(g));
    if (snap['主角']) delete snap['主角']['上次结算min'];
    updateVariablesWith(function (v) {
      v.stat_data = v.stat_data || {};
      v.stat_data['渐变带'] = snap;
      return v;
    }, { type: 'message', message_id: getLastMessageId() });
  }, 300);
}
```

**铁律**：玩家任何操作（施放/装槽/使用补给/调场景/确认手操）都要走 `writeGame` 改 `g`，然后 `render()` 刷新 UI。不改 writeGame = 数据丢失。

---

## 2. 引擎怎么用（`E = window.CircuitEngine`）

HTML 头部已内联引擎源码（`/*@ENGINE@*/` 被替换），直接 `var E = window.CircuitEngine || globalThis.CircuitEngine;` 即可用。

### 2.1 核心函数（状态栏会用到的）

| 函数 | 作用 |
|---|---|
| `E.quote({fam, e, c}, ctx)` | **核算施法**：返回 `{ bill(能量账单kJ), mind(精神), tell(征状), risk(过载%), E_out, power, zone, tunedHit, chips, r:{lines} }` |
| `E.initParams(famKey)` | 初始化一族参数的默认向量 |
| `E.syncParams(famKey, c)` | 参数向量同步/规范化 |
| `E.branchOf(famKey, c)` | 参数 → 分支 |
| `E.curKey(famKey)` | 当前族键 |
| `E.anchorOf(E_out)` | 能量输出 → 锚点名（如"微光/轰鸣"）|
| `E.compileOrder(q)` | 施法顺序文本 |
| `E.readableParams(famKey, c)` | 参数 → 中文可读 |
| `E.readableBudget(famKey, c, E_out)` | 微调预算 → 中文可读 |
| `E.budgetFrom(famKey, c, E_out)` | 预算对象 |
| `E.sliderToKJ / E.kjToSlider` | 滑杆 kJ 互转 |
| 常量 | `E.WINDS`(风力档) `E.MATS`(基底) `E.SUBS`/`E.SUBKEYS`(子键) `E.FAMS`(族) |

### 2.2 ctx（quote 的环境参数，必须传）

```js
var ctx = {
  aff: affinityOf(g),          // 亲和（五族亲和值；参考 statusbar 的 affinityOf）
  scene: { wind: g.场景.风力档, mat: g.场景.可塑无机物kJ, water: g.场景.水体在场 },
  char: { burstKW: g.主角.爆发线kW, sustainKW: g.主角.持续线kW, speed: 1,
          eCur: g.主角.能量kJ.当前, mCur: g.主角.精神点.当前, mMax: g.主角.精神点.上限,
          body: g.主角.身体状态 },
  tuned: tunedList(g)          // 已装槽且带预算的固定回路列表（参考 statusbar 的 tunedList）
};
```

### 2.3 施放回路（挂待扣单给 AI 结算，参考 statusbar 的 doCast）

```js
var q = E.quote({ fam: c.famKey, e: c.注册e || 0, c: c.参数向量 }, ctx);
g.待扣单.push({
  ref: c.id, 名称: c.名称,
  bill: q.bill, mind: q.mind, tell: q.tell, risk: q.risk,
  锚点: E.anchorOf(q.E_out), order: E.compileOrder(q), famKey: c.famKey
});
writeGame(function (gg) { gg.待扣单.push(...); });
```

> 施法挂待扣单 → **下一轮 AI 回复后 settle ⑥a 统一扣费**（施法即承诺，失手不退）。这是设计，不是 bug。

---

## 3. 玩家操作 → 数据映射（把口述需求落成字段）

| 口述需求 | 改哪些字段（writeGame 里） |
|---|---|
| 使用补给 | `g.补给物品[i].数量 -= 1`；若 `效果.目标==='能量'` → `g.主角.能量kJ.当前 += 效果.增加kJ`；精神同理；数量≤0 移除该补给 |
| 装槽/换槽 | `g.槽位.固定槽[空位] = id` 或 `g.槽位.自由槽[空位] = id`；换出 → 置 null。战斗中固定槽上锁 |
| 施放回路 | `g.待扣单.push({...})`（见 §2.3）|
| 调亲和 | `g.亲和[族][分支] = 值`（架构支持多主分支）|
| 应用场景 | `g.场景.风力档 / 可塑无机物kJ / 水体在场` |
| 应用身体状态 | `g.主角.身体状态`、`g.主角.战斗中` |
| **手操（操作表）** | 见 §4 |
| 送审/录入回路 | 调 `E.quote` 核算 → 构造回路对象 `g.回路库.push(...)`（参考 statusbar doJudge；或走开局框架面板）|

---

## 4. 手操（操作表）—— 新增 tab 的接口

- 存储：chat 变量 `渐变带.操作表` = `{ manual: true/false, circuits: [id], counts: [n] }`
- 状态栏「手操」tab：勾选回路 + 次数 → 实时 `writeGame` 存操作表；「确认操作」按钮：
  1. 读操作表
  2. 对每个回路 `E.quote` 算费，累加 totalBill/totalMind
  3. **只扣** `g.主角.能量kJ.当前 -= totalBill`、`g.主角.精神点.当前 -= totalMind`（**不挂待扣单**——手操当场结清）
  4. 清空操作表 `{manual:false, circuits:[], counts:[]}`
- 每轮自动清空（扩展侧 runTurn 开头 clearOps；状态栏里每次 render 也可重置）

---

## 5. 感情数据（标准 AI 已改走表格，别用旧的 感情追踪）

- 感情数据在**开局框架表格** `__of_tables__`（type=standard 的表，如陆安追踪表），由标准 AI 每轮更新——**不在 chat 变量 `渐变带.感情追踪`**（那是旧字段，别读它展示）
- 状态栏若展示感情，应读表格（但状态栏是独立脚本读不到扩展表格存储）→ 实际做法：感情数据已在 `stat_data.渐变带` 快照的 `感情追踪` 里同步过（syncSnapshot 会带），或由扩展把感情表快照同步到楼层变量。**默认状态栏不展示感情**，需要再加。

---

## 6. 现有参考实现（直接抄）

`src/渐变带-面板版/src/gradband/assets/statusbar.html`（592+ 行）是**完整可用**版本，包含：
- 面板结构（收起/展开、tab：槽位/构筑/回路库/补给/手操/管线）
- 全部页面渲染函数（pageSlots/pageBuild/pageLib/pageSup/pageOps/pageLog）
- 事件绑定（bind：data-cast/data-mount/data-unmount/data-use/手操/场景/状态/送审）
- writeGame/readChat/readSnapshot/ctx/affinityOf/tunedList 等辅助
- 样式（深色主题，`E.` 引擎渲染核算面板 meters）

**你要做的**：照它的接口契约，把你口述版本里**编造的数据字段**换成 §1 的真实字段，**猜的引擎调用**换成 §2 的真实函数，**漏掉的写回**补上 writeGame。

---

## 7. 改完怎么生效

1. 改 `src/gradband/assets/statusbar.html`（源文件）
2. 跑 `cd src/渐变带-面板版 && node build.mjs` → 重新生成 `dist/状态栏面板.html`（引擎已内联）
3. 用户把新的 `dist/状态栏面板.html` 全文**重新导入**酒馆正则（替换 `replace_string`）
4. 刷新酒馆页面生效

---

## 8. 常见坑

- **别用编的字段**：`主角.能量` 不对，是 `主角.能量kJ.当前`；回路没有 `damage` 字段，用 `基线账单.计费kJ/一句话效果`
- **别直接改 chat 变量**：必须走 `updateVariablesWith`（不能 `v['渐变带'].能量 = ...` 后丢引用）
- **quote 必须传 ctx**：缺 ctx 会拿默认值，数值全错
- **手操确认只扣费不挂单**：这是用户明确要求，别改
- **状态栏是独立脚本**：没有 `import`、没有扩展的 API，只有酒馆变量 + `window.CircuitEngine`
