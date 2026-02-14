# 工作记录 - 李有鑫

## 👤 个人信息

| 项目 | 内容 |
|------|------|
| **姓名** | 李有鑫 |
| **学号** | PB25061147 |
| **GitHub 用户名** | foeyt |
| **Github 邮箱** | foeyt522@gmail.com |

## 📅 完成记录

### 阶段零

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

---

## 🎯 当前任务
- [ ] 完成 HTML + CSS + JavaScript 学习
- [ ] 完成 React 学习
- [ ] 完成主页设计
- [ ] 完成主页开发

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

---

## 📎 附件

