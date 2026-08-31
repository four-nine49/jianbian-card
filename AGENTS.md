# AGENTS.md — 开局框架扩展 · AI 开发文档

> 本文档写给**修改本扩展的 AI 编程助手**。目标：让 AI 不读完全部源码也能安全地
> 改老功能、加新功能。人类用户请看 `README.md`（使用说明）和 `插件介绍.md`（简介）。
> 改完任何代码后必须跑：`node build.mjs` → `tsc --noEmit` → `node smoke.mjs`（见 §10）。

---

## 0. 一句话架构

原生 TS 的 SillyTavern 扩展（无 Vue/React）。esbuild 打包成 ESM 单文件 `dist/index.js`
+ `dist/index.css`，由 `manifest.json` 声明、酒馆注入**主页面**（非 iframe）运行。
数据存两层：**表格/对话/进度**存 chat 变量（随聊天持久化），**设置**存 extensionSettings。

---

## 1. 目录地图（改哪里）

```
src/
├── index.ts               # 入口：singleton → 悬浮球保底挂载 → 窗口/面板/命令/事件
├── core/                  # 基础设施（无业务逻辑）
│   ├── version.ts         # ★ 版本号唯一来源（工具页显示用）；manifest/package.json 需同步手改
│   ├── context.ts         # getContext()（SillyTavern 上下文）
│   ├── settings.ts        # extensionSettings 读写 + OfSettingsSchema（全部设置项的 zod 定义）★
│   ├── event-manager.ts   # DOM/事件监听统一登记销毁
│   ├── geometry.ts        # clamp / constrainPosition
│   └── slash.ts           # /opening 命令（动态 import 酒馆核心，失败降级）
├── window/
│   ├── window.ts          # 窗口容器（拖拽/缩放/开关）；手机≤640px 由 CSS 强制近全屏
│   └── toggle.ts          # 🎬 悬浮球（唯一入口；拖拽/点击 5px+300ms 区分；保底自检见 index）
├── bridge/tavern.ts       # ★ TavernHelper / SillyTavern API 唯一封装层
│                          #   （getVariables/updateVariablesWith/getChatMessages/setChatMessages/
│                          #    generateRaw/eventOn/onStreamFullText/tavernHelperCall/getLastMessageId…）
│                          #   规则：任何 ST/TH API 调用必须走这里；新 API 在此加薄封装
├── store/                 # 数据层
│   ├── types.ts           # ★★ 全部 zod schema：UpdateConfig(a 档)/Sheet/TableDef/GlobalDefaults/
│   │                      #   effectiveUpdateConfig()（a 档解析，调度与提示词必须用它）/FillApiConfig 等
│   ├── table-store.ts     # 表格 CRUD（chat 变量 __of_tables__）；importTemplate 有 zod 校验，坏表跳过
│   ├── settings.ts        # 业务设置 Facade（底层是 core/settings）
│   └── prompt-defaults.ts # 填表提示词模板默认值（世界书段默认开）
├── fill/                  # 填表引擎
│   ├── trigger.ts         # 调度：MESSAGE_RECEIVED 计数→按生效频率/跳楼分组→runFill（防重入）
│   ├── prompt-builder.ts  # ★ 分组拆请求 + 占位符替换（必须用 effectiveUpdateConfig）
│   ├── table-renderer.ts  # 表→文本（sendLatestRows/行模板；单元格宏替换）
│   ├── messages-slice.ts  # 按轮取对话（1 轮=用户+AI）+ buildRawRecentText（绿灯扫描用）
│   ├── context-filter.ts  # extract/exclude 标签边界匹配（取最后一对）
│   ├── worldbook.ts       # 世界书读取（蓝灯全发/绿灯关键词/概率；EJS+宏编译；不截断）
│   └── api-call.ts        # generateRaw 封装（custom_api 组装、should_stream 开关、json_schema）
├── chat/
│   ├── chat-adapter.ts    # ChatAdapter 接口（+可选 stop/onStreamUpdate）
│   └── guided-chat-adapter.ts # 引导对话引擎：独立会话（__of_dialogue__.history），不读写酒馆楼层；
│                              # generateFromHistory 是核心；结算检测→applySettlement→自动同步楼层变量
├── dialogue/              # 规则包体系
│   ├── rule-package.ts    # ★ RulePackageSchema（规则文/表格/结算契约/种子行）
│   ├── builtin-packages.ts# 内置包列表（自定义开局 + 占位包）；加内置包改这里
│   ├── package-registry.ts# 包注册表：list/getActive/setActive/import/delete（导入包存 extensionSettings）
│   ├── state-machine.ts   # 七步进度 + 对话历史（chat 变量 __of_dialogue__）
│   ├── settlement-parser.ts # 结算块提取/解析（标记与必填键由包提供）
│   ├── apply-settlement.ts# ★ 落地：按包表格 importTemplate + 种子行；scope: always/onSeed 按需建表；
│   │                      #   SETTLEMENT_TABLE_DEFS 里混入了从 preset-data.json 引用的 7 张剑与汽水表
│   └── rules-content.ts   # 自定义开局的规则全文（system 注入）
├── preset/                # 角色卡专用开局（数据由生成器从源 HTML 提取）
│   ├── preset-data.ts/.json     # 剑与汽水 4 线（爱丽丝/沧月汐/似久/墨白）
│   ├── jianbandai-data.ts/.json # 渐变带 学院线（陆安）
│   ├── preset-apply.ts    # applyPresetTables / injectOpeningToFloor0 / 世界书按线切换（UID 分组）
│   ├── jianbandai-apply.ts# 渐变带表格写入 + 世界书 0-13 控制（全蓝灯/路线默认/恢复初始）
│   ├── preset-store.ts    # 剑与汽水向导进度（__of_preset_state__）
│   └── chat-vars.ts       # 聊天变量 get/set 通用封装
├── sync/
│   ├── message-sync.ts    # ★ 楼层变量同步：stat_data.开局框架（形状 {表名:[{列:值}]}，宏替换）；
│   │                      #   autoSyncEnabled 开关 + 开局完成时点无条件同步 + clearSyncRange 范围清除
│   └── status-placeholder.ts # <StatusPlaceHolderImpl/> 楼末追加（默认开；refresh:'affected'）
├── ui/
│   ├── app.ts             # 面板壳：PAGES 数组（加页面改这里）+ switchTo/refreshCurrent
│   ├── state.ts           # 引擎管理（getGuidedEngine/reset/startGuidedDialogue；空规则包拦截）
│   ├── styles.ts          # ★ 唯一样式源（PANEL_CSS 模板串）；build.mjs 提取为 dist/index.css；
│   │                      #   手机适配在文件末尾 @media (max-width:640px)
│   ├── recovery-button.ts # （已废弃保留文件则删）脚本按钮方案不可靠，入口只有悬浮球
│   └── pages/             # 每页一个 render 函数（start/preset-opening/jianbandai-opening/
│                          #   chat/tables/sheet-config/settings/prompt-template/tools）
└── utils/macros.ts        # substituteMacros（{{user}} 等；数据出口必须过这里）
```

---

## 2. 两条数据通道（改数据相关功能前必读）

| 通道 | 存哪 | 什么时候清 | 用于 |
|---|---|---|---|
| **chat 变量**（TavernHelper） | `__of_tables__`（表格）/ `__of_dialogue__`（引导会话+七步进度）/ `__of_preset_state__`（剑与汽水向导进度）/ `__of_jianbandai_state__`（渐变带向导进度） | 换聊天自动隔离；「重置开局/清除进度」手动清 | 表格数据、引导对话、向导进度 |
| **extensionSettings**（SillyTavern） | `opening-framework` 命名空间 | 跟着酒馆设置走 | 全部设置（OfSettingsSchema）、导入的规则包 |

**规则**：
- 表格/对话/进度一律 chat 变量（换聊天各自独立）；设置一律 extensionSettings。
- chat 变量必须轻量校验后使用（参考 `state-machine.loadDialogueState` 的 sanitize 模式）。
- `z.record` 等写法注意 zod v3 兼容；schema 改动必须向后兼容（旧数据要能 parse 通过或 .catch 兜底）。

## 3. 填表数据流（改填表相关必读）

```
MESSAGE_RECEIVED(AI回复) → trigger 计数 → 逐表 effectiveUpdateConfig() 判定到期
  → buildRequests：按 group 分组 → 每组一次 generateRaw
     组内 contextRounds/skipFloors 取成员最大值
     ordered_prompts = promptTemplate.segments（占位符替换；{{worldbook}} 段启用才预取世界书）
  → api-call（json_schema 强制 JSON；should_stream 由 fillApi.stream 控制）
  → response-parser（JSON.parse+zod；预检表/行存在）→ applyOperations（纯函数，事务性落盘）
  → maybeAutoSyncAfterFill()（自动同步开着 → syncToLastFloor）
```

**a 档规则（v1.9+）**：`UpdateConfig.useGlobal=true`（默认）时，
`effectiveUpdateConfig(sheet, globalDefaults)` 返回的参数全部来自全局默认
（contextRounds/updateFrequency/skipFloors/sendLatestRows/extractTags/excludeTags；
structured rules 清空）；只有 `group` 永远单表。**任何新填表逻辑都不得直接读
`sheet.updateConfig`，必须走 `effectiveUpdateConfig`。**

全局默认（v1.9+）：频率 3、提取 `<content>|</content>`、世界书段默认开。

## 4. 引导对话（独立会话）

- 历史存 `__of_dialogue__.history`（sanitize 后使用，上限 200 条），**不读写酒馆楼层**——
  这是刻意的隔离（用户要求引导不掺正文聊天）。
- 发送流程：玩家消息入历史 → `generateFromHistory()`：
  `rulesText（当前包） + buildProgressHint() + 最近 maxHistoryEntries 条` → generateRaw
  （`should_stream: true` + `generation_id`；`onStreamFullText` 按 id 过滤推流式气泡）
  → AI 回复入历史 → `analyzeReply`（台账行/步骤推进/结算检测）。
- 失败回滚：生成抛错时 pop 掉玩家消息（主动 stop 除外，保留消息不报错）。
- 结算落地后：`applySettlement`（按当前包表格）+ `syncToLastFloor()`（无条件）。

## 5. 规则包体系（换卡 = 换包）

- `RulePackageSchema`：id/name/description/rulesText/tables/settlementStartMark/
  settlementEndMark/requiredKeys/seedRows/builtin。
- 内置包在 `builtin-packages.ts`（代码级，可带 `seedDynamic` 动态种子——从结算字段算行；
  导入 JSON 包只有静态 `seedRows`）。
- 引擎三样东西全部来自当前激活包：规则文本、结算契约（标记+必填键）、落地表格。
- 未配置包（rulesText 空）→ `startGuidedDialogue` 拦截并提示。

## 6. 角色卡专用面板（preset 体系，加新卡照此模式）

源 HTML → 生成器提取 → JSON → 运行时模块 → 面板页。**不要手抄数据**，照生成器模式写：

1. 生成器：`scripts/gen-xxx-data.mjs`——从源 HTML 的 `<script>` 切数据段
   （PRESET_OPENINGS/ROUTE_INFO/TABLE_STRUCTS/buildXxxData），`new Function` 沙箱求值，
   转成本扩展格式（**去 row_id 列**；sourceData 拆成 note/insertRule/updateRule/deleteRule；
   结算/纪要表按需排除；输出 `src/preset/xxx-data.json`）。
2. 运行时：`preset/xxx-data.ts`（加载 JSON）+ `preset/xxx-apply.ts`
   （applyXxxTables：importTemplate + seedInitialRows + **宏替换**；世界书 UID 分组控制）。
3. 面板页：`ui/pages/xxx-opening.ts`——向导步骤、进度存 chat 变量
   （参考 `chat-vars.ts`）、完成时**无条件 `syncToLastFloor()`**、注入第 0 楼走
   `injectOpeningToFloor0`。
4. 注册：`ui/app.ts` 的 `PAGES` 数组加一条。

## 7. 状态栏三件套（改状态栏相关必读）

1. **楼层变量**：`sync/message-sync.ts` → `stat_data.开局框架`，形状
   `{表名:[{列名:值}...]}`（表头作键；**单元格宏替换**后写入）。自动同步开关
   `autoSyncEnabled`（默认开）+ 开局完成时点无条件同步 + `clearSyncRange(lo,hi)` 清除。
2. **楼末标记**：`sync/status-placeholder.ts` → `<StatusPlaceHolderImpl/>`（默认开；
   已有不重复加；用户楼不处理；`refresh:'affected'`）。
3. 前端界面从楼层变量读数即可（参考脚本读 `stat_data.数据库` 的方式，键名不同）。

## 8. UI 约定（指南强制）

- **命名空间**：DOM id / CSS class / CSS 变量一律 `of-` 前缀。
- **样式**：只写 `ui/styles.ts` 的 PANEL_CSS（构建提取为 index.css，manifest 注入）；
  手机适配（≤640px）在文件末尾的 media query 里（面板近全屏、侧栏横排、网格降列）。
- **窗口/悬浮球**：位置尺寸持久化到 extensionSettings；悬浮球是唯一入口，
  有三层保底（最先挂 / 3 秒自检补挂 / 失败重试一次）——改 index.ts 时不要破坏。
- **z-index**：窗口 9999、悬浮球 10000。
- **页面生命周期**：页面事件订阅挂到 `(el as any)._ofDispose`，app.ts 切页时统一调用。
- **宏**：数据出口（同步/渲染/种子写入）必须过 `utils/macros.substituteMacros`。

## 9. 版本与发布流程（每次改完）

1. 改 `core/version.ts` + `manifest.json` + `package.json`（三处同步，当前 1.10.0）。
2. `node build.mjs` → `tsc --noEmit`（`pnpm run check`）→ `node smoke.mjs`。
3. 改了 manifest 版本号 → `node package-loader.mjs` 重新生成脚本版 json
   （回退版本号自动嵌入；自检必须全 ✅）。
4. 用户侧发布：`git add -A && git commit && git push` + `git tag vX.Y.Z && git push origin vX.Y.Z`
   （push 更扩展版，tag 更脚本版；tag 撞名先 `git tag` 查占用）。

## 10. 构建与验证命令

```bash
pnpm install --ignore-workspace   # 首次（仓库根有 workspace）
node build.mjs                    # 产 dist/index.js + dist/index.css（css 从 styles.ts 提取）
node node_modules/typescript/bin/tsc --noEmit   # 类型检查（必须 0 错误）
node smoke.mjs                    # 冒烟：shim DOM 跑通 init/destroy（改 smoke shim 需谨慎，
                                  #   它模拟的 document/window 很最小，用到的浏览器 API 要补进 shim）
node package-loader.mjs           # 生成酒馆助手脚本 json（24 项自检）
```

## 11. 已知限制 / 设计取舍（别"修复"它们）

- 脚本按钮（appendInexistentScriptButtons）在主页面调用无效——入口**只有悬浮球**，
  不要再加输入栏按钮。
- 引导对话刻意不含世界书/酒馆楼层（规则包设计）；填表才带世界书。
- `onSeed` 表开局没建，后续填表引用会整体失败——包作者慎用（README 有说明）。
- 结算契约/动态种子目前仅代码内置包可用；导入 JSON 包只有静态种子行。
- reroll 只支持最后一条 AI 回复（酒馆 regenerate 语义）。
- smoke.mjs 的 shim 是刻意的最小实现，跑不过先查是不是用了 shim 没有的 API。
