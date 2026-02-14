# 工作记录 - 李有鑫

## 👤 个人信息

| 项目 | 内容 |
|------|------|
| **姓名** | 李有鑫 |
| **学号** | PB25061147 |
| **GitHub 用户名** | foeyt |
| **Github 邮箱** | foeyt522@gmail.com |

## 📅 完成记录

### 阶段一

#### 2026-1-25
- **完成任务**：测试 Git 与 GitHub；完成开发环境部署，基础 HTML 页面。
- **估计完成时间**：1 小时
- **相关链接**：
  - [GitHub 仓库](https://github.com/foeyt/iGEM-Web)
  - [GitHub Pages 链接](https://foeyt.github.io/iGEM-Web/)

- **备注**：样式处理使用 Gemini 协助美化，GitHub Actions 的配置 yml 文件使用 Gemini 生成。

#### 2026-1-29

- **完成任务：** 进行了 CSS 样式的部分设计，未完成内容写作。
- **估计完成时间：** 3 小时
- **相关链接：**
  - [GitHub 仓库](https://github.com/foeyt/iGEM-Web)
  - [GitHub Pages 链接](https://foeyt.github.io/iGEM-Web/)
- **备注：** 使用 Kimi 协助查询资料。

#### 2026-1-30

- **完成任务：** 重构了 CSS 设计，加入了 JS 互动逻辑，滚动式设计。
- **估计完成时间：** 5 小时
- **相关链接：**
  - [GitHub 仓库](https://github.com/foeyt/iGEM-Web)
  - [GitHub Pages 链接](https://foeyt.github.io/iGEM-Web/)
- **备注：** 使用 Kimi 协助配色与动画设计，同时完善交互逻辑和修改 Bug。

#### 2026-1-31

- **完成任务：** 重新对个人建立内容进行完善，寻找合适的 Hero Background 和 Banner 处理，为桌面端增加看板娘。
- **估计完成时间：** 1 小时
- **相关链接：**
  - [GitHub 仓库](https://github.com/foeyt/iGEM-Web)
  - [GitHub Pages 链接](https://foeyt.github.io/iGEM-Web/)
  - [Wallhaven 上找到的 Hero Background](https://whvn.cc/k882rq)
  - [看板娘 JS 脚本](https://github.com/foeyt/live2d-widget)
- **备注：** 未来可能需要对内容表述专业化，毕竟这是个简历。

### 阶段二

#### 2026-2-10

- **完成任务：** 为仓库建立了一个较为完善的 README，去除了部分冗余代码和修复了一些问题。
- **估计完成时间：** 40 分钟
- **相关链接：**
  - [GitHub 仓库](https://github.com/foeyt/iGEM-Web)
  - [GitHub Pages 链接](https://foeyt.github.io/iGEM-Web/)
- **备注：**这几天在忙着学驾照考科目二，落了几天，抽空完善了一下。

#### 2026-2-11

- **完成任务：** 重新温习了一下 Javascript，理解了 AI 生成代码的逻辑，开始学习 React。
- **估计完成时间：** 1.5 小时
- **相关链接：** 无
- **备注：** 无

#### 2026-2-12

- **完成任务：** 更新了电脑上的 npm，利用 create-react-app 生成 react 项目，学习 JSX 语法与 React 基础。
- **估计完成时间：** 2 小时
- **相关链接**：无
- **备注：** 2026-2-13 同样进行学习。

#### 2026-2-14

- **完成任务：** 利用 AI 协助开发 React 页面，只用到了 React 基础，比如 JSX，State 这些，没有用到 Hook 等。
- **估计完成时间：** 6 小时
- **相关链接：**
  - [GitHub 仓库](https://github.com/foeyt/igem-web-react/tree/master)
  - [GitHub Pages 页面](https://foeyt.github.io/igem-web-react/)
- **备注：** Grok 绘制了 Logo，Kimi 进行了配色方案与动画设计，我自己进行了逻辑处理并由 Kimi 协助完成开发。

---

## 🎯 当前任务
- [x] 完成 HTML + CSS + JavaScript 学习
- [x] 完成 React 学习
- [x] 完成主页设计
- [x] 完成主页开发
- [ ] 完善内容表述
- [ ] 利用 GitTalk 添加评论功能
- [ ] 优化看板娘实现更多功能
- [ ] 考虑更加好看的设计
- [ ] 完善页面性能
- [ ] 尝试利用 Vue 再构建一个

---

## 📝 工作笔记

### 遇到的问题与解决方案

#### JS 互动逻辑无法正常加载

- **原因分析**：我在 `<head>` 中就引入了 app.js，这使得 HTML DOM 未成功加载就开始执行 JS 脚本。
- **解决方案**：修改在 `<body>` 的最后引入 app.js，同时利用匿名函数创建一个独立的作用域，避免污染原来的 HTML 页面，开启严格模式。

#### 有些样式不能正常执行，移动端没有适配

- **原因分析：** 可能是 CSS 加载的问题，我清除了浏览器 CSS 缓存后就可以正常实现；还有的是显示层级的问题。移动端的看板娘和 banner/avatar 会遮挡文字内容。
- **解决方案：** 增加 `!important` 规则来增加权重，利用 `@media` 适配移动端。

#### 移动端滑动方向与页面滚动方向相反

- **原因分析：** `handleSwap()` 函数中的 `diff` 符号判断写反了。
- **解决方案**：调换了 `diff` 的符号判断逻辑。

#### 鼠标动效性能消耗太大

- **原因分析：** 粒子效果太复杂，经过开发者模式分析认为是 CPU 占用有点高，可能是随机方式与粒子生成等有关。
- **解决方案：** 这个问题我没有想到或者找到什么好方法，尝试调整了下参数使粒子效果数量减少了而已，可以略微减少性能开销，后续需要搜索资料优化随机算法。

#### Hero 变 Banner 的显示问题

- **原因分析：** 首先是 React 中的图片素材应该放在 `/public/` 下，这样才能读取，齐次是显示问题，`hero-top.jpeg` 与 `hero-bottom.jpeg` 两张图片不能正确显示，只能显示两道黑框，疑似是 CSS 中的问题。
- **解决方案**：将图片素材放在 `/public/` 目录下，调整了 CwSS 的 `height` 使其显示在有内容的部分而非是没有内容的部分。

#### Spark.js 与 SparkParticle.js 的 Bug

- **原因分析：** 此部分利用 AI 协助时，AI 误将两个文件代码混淆，导致无法通过 ESLint 审查，产生 undef 错误。

- **解决方案：** 向 AI 明确了两个文件的功能：

  - **`Spark.js`**：只负责渲染单个火花粒子，接收 `x`, `y`, `color`, `onComplete` 属性
  - **`SparkParticles.js`**：管理所有火花的状态、生成逻辑和事件监听，包含 `lastSparkTime` 等变量

  这样进行修改，将负责管理火花状态的代码全部从 `Spark.js` 中移除，避免了混淆。

#### gh-pages 与 react-scripts 的依赖冲突

- **原因分析：** 我后面使用 gh-pages 进行部署时其与 react-scripts 产生安全性问题，提示 `npm audix fix --force`。
- **解决方案：** 直接不管了，这个问题没啥大不了的，也就是本地预览没法看了，到用的时候把 gh-pages 卸了到时候再装回来就行了。

---

## 📎 附件

- [个人博客(可直通两个简历)](https://foeyt.github.io/)
