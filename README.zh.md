# Minimalist Link in Bio // Premium Portfolio

<p align="center">
  <a href="./README.md">🇷🇺 Русский</a> | 
  <a href="./README.en.md">🇬🇧 English</a> | 
  <a href="./README.zh.md">🇨🇳 中文</a>
</p>

---

⚡️ 一款现代、高效、高响应性的个人主页社交聚合网站（Link in Bio）。设计灵感源自 Apple 界面与 Awwwards 平台的极简主义美学。项目基于 React + Vite 架构构建，包含定制化样式，并完美支持各类微动画交互。

🔗 **线上预览:** [点击查看网站](https://gubanovgit-eng.github.io/link-in-bio/)

---

## ✨ 项目特性

- 🖱️ **Fluid Custom Cursor:** 带有图层混合模式（`mix-blend-mode: difference`）的互动式流体光标，可在触摸屏设备上自动禁用，保障完美的用户体验。
- 🌓 **Advanced Theme System:** 智能暗黑/高亮主题切换，支持自动识别用户系统偏好（`prefers-color-scheme`），并通过 `localStorage` 持久化存储主题状态。
- 🌐 **Trilingual Internationalization (i18n):** 完整支持三种语言（俄语、英语、中文），无需重新加载页面即可实现平滑、循环的语言本地化切换。
- 📹 **Dynamic Avatar Container:** 互动式圆形头像设计，在页面加载时会随机选择并播放媒体资源（流畅循环的 `.mp4` 视频或静态 `.jpg` 图片）。
- 📱 **Perfect Responsiveness:** 深度兼容各类移动端和桌面端，从 UltraWide 超宽屏显示器到 320px 的老旧手机屏幕均能完美呈现。
- 🎨 **Modern CSS Architecture:** 纯 CSS 编写，采用原生 CSS 嵌套（CSS Nesting）、模块化组件结构和优雅的贝塞尔曲线（cubic-bezier）淡入动画。

---

## 🛠️ 技术栈

- **Core:** React 18, Vite
- **Localization:** i18next, react-i18next, i18next-browser-languagedetector
- **Icons:** Font Awesome (@fortawesome/react-fontawesome)
- **Styling:** CSS Nesting, CSS Variables
- **Deployment:** GitHub Actions (Automated CI/CD)

---

## 📦 快速上手

1. **克隆仓库:**
```bash
   git clone [https://github.com/gubanovgit-eng/link-in-bio.git](https://github.com/gubanovgit-eng/link-in-bio.git)
   cd link-in-bio
   ```
2. **安装依赖:**
   ```bash
   npm install
   ```
3. **​启动本地开发服务器:**
   ```bash
   npm run dev
   ```
4. **​项目构建（打包）:**
   ```bash
   npm run build
   ```
   
---

## 📂 项目结构
   ```text
   src/
├── components/
│   ├── Avatar.jsx         # 动态媒体头像容器
│   ├── CustomCursor.jsx   # 桌面端自定义光标逻辑
│   ├── LangToggle.jsx     # 语言循环切换组件 (RU/EN/ZH)
│   ├── Links.jsx          # 社交媒体数据数组与按钮渲染
│   └── ThemeToggle.jsx    # 主题切换逻辑与 localStorage 处理
├── App.jsx                # 核心界面入口
├── i18n.js                # 翻译字典与国际化配置
├── index.css              # 基于 CSS Nesting 优化的样式表
└── main.jsx               # React 应用初始化入口

   ```