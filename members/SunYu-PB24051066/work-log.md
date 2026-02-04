# 工作记录 - [孙彧]

> 📌 **说明**：请按照本模板填写你的工作记录。保持格式统一，方便检查

## 👤 个人信息

| 项目 | 内容 |
|------|------|
| **姓名** | 孙彧 |
| **学号** | PB24051066 |
| **GitHub 用户名** | fisher-yu-like |
| **Github 邮箱** | 2055798256@qq.com|

## 📅 完成记录

### 阶段一

#### 2026-1-26
- **完成任务**：学会使用git,配置环境
- **估计完成时间**：3小时
- **备注**：

#### 2026-1-27
- **完成任务**：html基本结构和简历页面
- **估计完成时间**：3小时
'
- **备注**：
  ```<!DOCTYPE html>
  <html lang="zh-CN">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width,initial-scale=1.0">
      <title>孙彧个人简历</title>
  </head>
  <body>
      <!--个人信息-->
      <header>
          <h1>孙彧</h1>
          <p>USTC学生</p>
          <img src="1.png" alt="详见image文件夹">
          <nav>
              <a href="mailto:2055798256@qq.com">邮箱</a>/*可以点开直接链接*/
              <a href="https://github.com/fisher-yu-like">Github</a>
              <a href="tel:13251775028">手机</a>
          </nav>
      </header>
      <!--主要内容-->
      <main>
          <!--个人简介-->
          <section>
              <h2>关于我</h2>
              <p>
                  我是一个品学兼优的好学生，喜欢打游戏
              </p>
          </section>

          <!--技能-->
          <section>
              <h2>技能</h2>
              <ol>
                  <li><strong>工具</strong>PS,PR,blender,AutoCAD</li>
                  <li><strong>体育活动</strong>游泳，羽毛球</li>
              </ol>
          </section>
          <!--教育经历-->
          <section>
              <h2>教育经历</h2>
              <article>
                  <h3>USTC</h3>
                  <p>能源与动力 2024--2025</p>
                  <p>自动化 2025--至今</p>
              </article>
          </section>
          <section>
              <h2>兴趣爱好</h2>
              <ul>
                  <li>听音乐</li>
                  <li>看美剧</li>
                  <li>打fps</li>
              </ul>
          </section>
          <section>
              <h2>项目经验</h2>
          </section>
          </main>
      </main>
      <!--页脚-->
      <footer>
          <p>孙彧，保留所有权利</p>
      </footer>
  </body>
  </html>
section与article不同：section是在文章内容之内的，article是独立的文章
### 阶段二
#### 2026-1-28，1-29，1-30
- **完成任务**：使用html+css书写网页版个人简历
- **估计完成时间**：8小时
- **代码如下**：
  ``` /*CSS变量统一管理颜色*/
  :root {
              --navy-blue: #003366;       /* 海军蓝 - 标题 */
              --warm-brown: #8b7355;      /* 暖棕色 - 主色 */
              --gold: #d4af37;            /* 金色 - 强调色 */
              --light-beige: #f5f1e6;     /* 浅米色 - 背景 */
              --dark-gray: #555555;       /* 深灰 - 正文 */
              --medium-beige: #e8dfca;    /* 中米色 - 边框 */
              --white: #ffffff;
              --light-brown: #b8a38d;     /* 浅棕色 - 装饰 */
          }

  * {/*通用选择器选择页面所有元素*/
      margin: 0;/*元素与元素间距离*/
      padding: 0;/*元素内容与边框之间距离*/
      box-sizing: border-box;/*让元素的宽度和高度·包含边框和内边框，而不是额外加上去*/

  }
  .parent {
    display: flex;
    justify-content: center; /* 水平 */
    align-items: center;     /* 垂直 */
    height: 100vh; /* 父容器必须有明确高度 */
  }/*flexbox父容器*/
  body {
      font-family: 'Georgia', 'Times New Roman', serif;/*字体*/
      line-height: 1.6;/*行高*/
      color: var(--dark-gray);/*文字颜色*/
      background-color: var(--light-beige);/*背景颜色*/
      padding: 30px 20px;/*内边距30px上下20px左右*/
      background-image: linear-gradient(to right, rgba(245, 241, 230, 0.9), rgba(245, 241, 230, 0.9)),
                          url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><path fill="%23b8a38d" opacity="0.05" d="M0,0 L100,0 L100,100 L0,100 Z M20,20 L80,20 L80,80 L20,80 Z"/></svg>');
  }/*ai设置的背景图片*/
  /*主要部分*/
  .resume-container {
      max-width: 800px;
      margin: 0 auto;
      background-color: var(--white);
      border-radius: 12px;
      box-shadow: 0 10px 30px rgba(139, 115, 85, 0.15);
      overflow: hidden;
      border: 1px solid var(--medium-beige);
  }

  /* 页眉部分 */
  header {
      background: linear-gradient(135deg, var(--navy-blue) 0%, #7289a1 100%);
      color: white;/*文字颜色为白色，背景为渐变型蓝色*/
      padding: 45px 40px 35px;
      text-align: center;
      position: relative;
      overflow: hidden;
  }


  .name {
      font-size: 2.8rem;
      font-weight: 300;
      margin-bottom: 8px;
      letter-spacing: 0.5px;
      color: white;
  }

  .title {
      font-size: 1.5rem;
      font-weight: 400;
      color: rgba(21, 21, 21, 0.9);
      margin-bottom: 25px;
      font-style: italic;
  }

  .summary {
      max-width: 700px;
      margin: 0 auto 25px;
      font-size: 1.05rem;
      line-height: 1.7;
      color: rgba(69, 54, 5, 0.85);
  }
  img {
      max-width: 100%;    /* 不超过容器宽度 */
      height: auto;       /* 保持宽高比 */
      display: block;     /* 去除底部空隙 */
  }

  @media (max-width: 768px) {
      .resume-content {
          grid-template-columns: 1fr;
          padding: 25px;
      }
  }/*根据设备大小调整布局*/

  .contact-info {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 25px;
      margin-top: 20px;
      background-color: rgba(255, 255, 255, 0.1);
      padding: 15px;
      border-radius: 8px;
      backdrop-filter: blur(5px);
  }
  a{
      color: #06c;
      text-decoration: none;
      transition: all 0.3s ease; 
  }
  a:hover{/*添加悬停效果*/
      color: red;
      text-decoration: underline;
      font-weight: bold;
  }


  /* 列表样式 */
  ul {
      padding-left: 20px;
      margin-top: 10px;
  }

  li {
      margin-bottom: 8px;
      position: relative;
  }

  li::marker {
      color: var(--warm-brown);
  }



  /* 页脚 */
  footer {
      text-align: center;
      padding: 25px;
      background-color: var(--navy-blue);
      color: rgba(255, 255, 255, 0.7);
      font-size: 0.9rem;
      border-top: 1px solid var(--medium-beige);
  }

  footer a {
      color: var(--gold);
      text-decoration: none;
  }

  footer a:hover {
      text-decoration: underline;
  }
  ```<!DOCTYPE html>
  <html lang="zh-CN">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width,initial-scale=1.0">
      <title>孙彧个人简历</title>
      <link rel="stylesheet" href="style.css">
  </head>
  <body>
      <div clss="resume-container">
          <!--个人信息-->
          <header>
              <h1 class="name">孙彧</h1>
              <p>USTC学生</p>
              <div class="parent">
                  <img src="1.png" alt="404 not found" width="304" height="228">
              </div>
              <nav class="contact-info">
                  <a href="mailto:2055798256@qq.com">邮箱</a>
                  <a href="https://github.com/fisher-yu-like">Github</a>
                  <a href="tel:13251775028">手机</a>
              </nav>
          </header>
          <!--主要内容-->
          <main>
              <!--个人简介-->
              <section>
                  <h2 class="title">关于我</h2>
                  <p class="summary">
                      ENFJ超级热情搞笑男
                  </p>
              </section>

              <!--技能-->
              <section>
                  <h2 class="title">技能</h2>
                  <ol>
                      <li><strong>工具</strong>   PS,PR,blender,AutoCAD</li>
                      <li><strong>体育活动</strong>   游泳，羽毛球</li>
                  </ol>
              </section>
              <!--教育经历-->
              <section>
                  <h2 class="title">教育经历</h2>
                  <article>
                      <h3 >USTC</h3>
                      <p>能源与动力 2024--2025</p>
                      <p>自动化 2025--至今</p>
                  </article>
              </section>
              <section>
                  <h2 class="title">兴趣爱好</h2>
                  <ul>
                      <li>听音乐</li>
                      <li>看美剧</li>
                      <li>打fps</li>
                  </ul>
              </section>
              <section>
                  <h2 class="title">项目经验</h2>
                  <p>wu</p>
              </section>
              </main>
          </main></div>
      <!--页脚-->
      <footer>
          <p>孙彧，保留所有权利</p>
      </footer>
  </body>
  </html>

- **备注**：在AI帮助下设计配色方案，进一步完成
### 阶段三
#### 2026-1-31，2-1
- **完成任务**：响应式布局
- **估计完成时间**：4小时
- **代码如下**：
  ```<!DOCTYPE html>
  <html lang="zh-CN">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width,initial-scale=1.0">
      <title>孙彧个人简历</title>
      <link rel="stylesheet" href="style.css">
  </head>
  <body>
      <nav class="navbar">
          <div class="nav-content">
              <a href="#" class="nav-brand">
                  <span>📱</span>
                  我的简介
              </a>
              
              <ul class="nav-menu" id="navMenu">
                  <li><a href="#" class="nav-link active">🏠 首页</a></li>
                  <li><a href="#" class="nav-link">📄 关于我</a></li>
                  <li><a href="#" class="nav-link">🛒 服务</a></li>
                  <li><a href="#" class="nav-link">📞 联系我</a></li>
                  <li><a href="#" class="nav-link">📝 qq</a></li>
              </ul>
          </div>
      </nav>
      <div clss="resume-container">
          <!--个人信息-->
          <header>
              <h1 class="name">孙彧</h1>
              <p>USTC学生</p>
              <div class="parent">
                  <img src="1.png" alt="404 not found" width="304" height="228">
              </div>
              <nav class="contact-info">
                  <a href="mailto:2055798256@qq.com">邮箱</a>
                  <a href="https://github.com/fisher-yu-like">Github</a>
                  <a href="tel:13251775028">手机</a>
              </nav>
          </header>
          <!--主要内容-->
          <main>
              <!--个人简介-->
              <section>
                  <h2 class="title">关于我</h2>
                  <p class="summary">
                      ENFJ超级热情搞笑男
                  </p>
              </section>

              <!--技能-->
              <section>
                  <h2 class="title">技能</h2>
                  <div class="skill-grid">
                      <div class="skill-item"><strong>工具：</strong>PS,PR,blender,AutoCAD</div>
                      <div class="skill-item"><strong>体育活动：</strong>游泳，羽毛球</div>
                      <div class="skill-item"><strong>数理基础：</strong>数分，线代，复变函数，概统，力学热学</div>
                  </div>
                  </div>
              </section>
              <!--教育经历-->
              <section>
                  <h2 class="title">教育经历</h2>
                  <article>
                      <h3 >USTC</h3>
                      <p>能源与动力 2024--2025</p>
                      <p>自动化 2025--至今</p>
                  </article>
              </section>
              <section>
                  <h2 class="title">兴趣爱好</h2>
                  <ul>
                      <li>听音乐</li>
                      <li>看美剧</li>
                      <li>打fps</li>
                  </ul>
              </section>
              <section>
                  <h2 class="title">项目经验</h2>
                  <p>wu</p>
              </section>
              </main>
          </main></div>
      <!--页脚-->
      <footer>
          <p>孙彧，保留所有权利</p>
      </footer>
  </body>
  </html>
  ``` /*CSS变量统一管理颜色*/
  :root {
              --navy-blue: #003366;       /* 海军蓝 - 标题 */
              --warm-brown: #8b7355;      /* 暖棕色 - 主色 */
              --gold: #d4af37;            /* 金色 - 强调色 */
              --light-beige: #f5f1e6;     /* 浅米色 - 背景 */
              --dark-gray: #555555;       /* 深灰 - 正文 */
              --medium-beige: #e8dfca;    /* 中米色 - 边框 */
              --white: #ffffff;
              --light-brown: #b8a38d;     /* 浅棕色 - 装饰 */
          }

  * {/*通用选择器选择页面所有元素*/
      margin: 0;/*元素与元素间距离*/
      padding: 0;/*元素内容与边框之间距离*/
      box-sizing: border-box;/*让元素的宽度和高度·包含边框和内边框，而不是额外加上去*/

  }
  .parent {
    display: flex;
    justify-content: center; /* 水平 */
    align-items: center;     /* 垂直 */
    height: 50vh; /* 父容器必须有明确高度 */
  }/*flexbox父容器*/
  body {
      font-family: 'Georgia', 'Times New Roman', serif;/*字体*/
      line-height: 1.6;/*行高*/
      color: var(--dark-gray);/*文字颜色*/
      background-color: var(--light-beige);/*背景颜色*/
      padding: 30px 20px;/*内边距30px上下20px左右*/
      background-image: linear-gradient(to right, rgba(245, 241, 230, 0.9), rgba(245, 241, 230, 0.9)),
                          url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><path fill="%23b8a38d" opacity="0.05" d="M0,0 L100,0 L100,100 L0,100 Z M20,20 L80,20 L80,80 L20,80 Z"/></svg>');
  }/*ai设置的背景图片*/
  /*主要部分*/
  /*手机*/
  .resume-container {
      display: flex;              /* 启用 Flexbox */
      flex-direction: row;        /* 方向：row(横) / column(竖) */
      justify-content: center;    /* 主轴对齐：center / space-between / space-around */
      align-items: center;        /* 交叉轴对齐：center / flex-start / flex-end */
      gap: 20px;                  /* 子元素间距 */
      flex-wrap: wrap;            /* 换行：wrap / nowrap */
      max-width: 100%;
      margin: 0 auto;
      background-color: var(--white);
      border-radius: 12px;
      box-shadow: 0 10px 30px rgba(139, 115, 85, 0.15);
      overflow: hidden;
      border: 1px solid var(--medium-beige);
      padding: 15px;
  }
  .item {
      flex: 1;                    /* 自动分配剩余空间 */
  }

  /* 页眉部分 */
  header {
      background: linear-gradient(135deg, var(--navy-blue) 0%, #7289a1 100%);
      color: white;/*文字颜色为白色，背景为渐变型蓝色*/
      padding: 45px 40px 35px;
      text-align: center;
      position: relative;
      overflow: hidden;
  }
  header nav{
      flex-direction: column;
      gap:10px;
  }
  .skill-grid{
      display: flex;
      flex-direction: column;
      gap:15px;
  }
  .name {
      font-size: 2.8rem;
      font-weight: 300;
      margin-bottom: 8px;
      letter-spacing: 0.5px;
      color: white;
  }

  .title {
      font-size: 1.5rem;
      font-weight: 400;
      color: rgba(21, 21, 21, 0.9);
      margin-bottom: 25px;
      font-style: italic;
  }

  .summary {
      max-width: 700px;
      margin: 0 auto 25px;
      font-size: 1.05rem;
      line-height: 1.7;
      color: rgba(69, 54, 5, 0.85);
  }
  img {
      max-width: 100%;    /* 不超过容器宽度 */
      height: auto;       /* 保持宽高比 */
      display: block;     /* 去除底部空隙 */
  }
  /* 导航栏容器 */
          .navbar {
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              padding: 1rem 2rem;
              border-radius: 12px;
              box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          }

          /* 导航内容 - 移动端纵向排列 */
          .nav-content {
              display: flex;
              flex-direction: column;
              gap: 1rem;
              align-items: flex-start;
          }

          /* 品牌Logo/名称 */
          .nav-brand {
              color: white;
              font-size: 1.5rem;
              font-weight: bold;
              text-decoration: none;
              display: flex;
              align-items: center;
              gap: 0.5rem;
          }

          /* 导航菜单项容器 */
          .nav-menu {
              display: flex;
              flex-direction: column;
              gap: 0.75rem;
              width: 100%;
              list-style: none;
          }

          /* 导航链接样式 */
          .nav-link {
              color: rgba(255, 255, 255, 0.9);
              text-decoration: none;
              padding: 0.75rem 1rem;
              border-radius: 8px;
              transition: all 0.3s ease;
              display: flex;
              align-items: center;
              gap: 0.5rem;
          }

          .nav-link:hover {
              background: rgba(255, 255, 255, 0.15);
              color: white;
              transform: translateX(5px);
          }

          .nav-link.active {
              background: rgba(255, 255, 255, 0.2);
              color: white;
              font-weight: 500;
          }

          /* 桌面端样式 - 屏幕宽度大于768px */
          @media (min-width: 768px) {
              .nav-content {
                  flex-direction: row;
                  align-items: center;
                  justify-content: space-between;
              }

              .nav-menu {
                  flex-direction: row;
                  width: auto;
                  gap: 0.5rem;
              }

              .nav-link:hover {
                  transform: translateY(-2px);
              }
          }
  @media (min-width: 768px) {
      .resume-container {
          padding: 30px;
      }
      header nav{
          flex-direction: row;
          gap:20px;
      }
      .skill-grid{
          flex-direction: row;
          flex-wrap: wrap;
      }
      .skill-item{
          flex:1 1 45%;
      }
  }/*根据设备大小调整布局*/
  @media (min-width: 1024px) {
      .resume-container {
          max-width: 900px;
          margin: 0 auto;
          padding: 60px 40px;
      }
      .skill-item{
          flex:1 1 30%;
      }
  }/*根据设备大小调整布局*/
  .contact-info {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 25px;
      margin-top: 20px;
      background-color: rgba(255, 255, 255, 0.1);
      padding: 15px;
      border-radius: 8px;
      backdrop-filter: blur(5px);
  }
  a{
      color: #06c;
      text-decoration: none;
      transition: all 0.3s ease; 
  }
  a:hover{/*添加悬停效果*/
      color: red;
      text-decoration: underline;
      font-weight: bold;
  }


  /* 列表样式 */
  ul {
      padding-left: 20px;
      margin-top: 10px;
  }

  li {
      margin-bottom: 8px;
      position: relative;
  }

  li::marker {
      color: var(--warm-brown);
  }



  /* 页脚 */
  footer {
      text-align: center;
      padding: 25px;
      background-color: var(--navy-blue);
      color: rgba(255, 255, 255, 0.7);
      font-size: 0.9rem;
      border-top: 1px solid var(--medium-beige);
  }

  footer a {
      color: var(--gold);
      text-decoration: none;
  }

  footer a:hover {
      text-decoration: underline;
  }
## 🎯 当前任务
- [√ ] 完成个人主页设计
- [√ ] 完成个人主页代码
---

## 📝 工作笔记

### 遇到的问题与解决方案

#### 问题1：
- **描述**：对于flexbox不了解
- **解决方案**：上网学习
- **参考资料**：[CORS文档](https://blog.csdn.net/black_cat7/article/details/157396300#7Flexbox_3)
#### 问题2：
- **描述**：图片无法居中
- **解决方案**：采用flexbox结构
#### 问题3
- **描述**：不会配色
- **解决方案**：采用ai配色
  


