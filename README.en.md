# Minimalist Link in Bio // Premium Portfolio

<p align="center">
  <a href="./README.md">🇷🇺 Русский</a> | 
  <a href="./README.en.md">🇬🇧 English</a> | 
  <a href="./README.zh.md">🇨🇳 中文</a>
</p>

---

⚡️ A modern, high-performance, and responsive Link in Bio website inspired by the minimalist aesthetics of Apple interfaces and the Awwwards platform. Built on the React + Vite stack featuring custom styling and full support for micro-animations.

🔗 **Live Demo:** [View Website](https://gubanovgit-eng.github.io/link-in-bio/)

---

## ✨ Features

- 🖱️ **Fluid Custom Cursor:** An interactive custom cursor with a layer blending effect (`mix-blend-mode: difference`), which automatically disables on touch devices for a flawless UX.
- 🌓 **Advanced Theme System:** Smart dark/light theme switching that automatically detects user system preferences (`prefers-color-scheme`) and persists the state via `localStorage`.
- 🌐 **Trilingual Internationalization (i18n):** Full support for three languages (Russian, English, Chinese) with smooth, cyclic locale switching without reloading the page.
- 📹 **Dynamic Avatar Container:** An interactive circular avatar container that randomly selects and plays a media asset (smooth looped `.mp4` video or static `.jpg` image) upon page load.
- 📱 **Perfect Responsiveness:** Fully optimized layout adapting beautifully from UltraWide widescreen monitors down to legacy mobile screens as small as 320px.
- 🎨 **Modern CSS Architecture:** Pure CSS styles written using native CSS Nesting, a modular component structure, and elegant `cubic-bezier` fade-in animations.

---

## 🛠️ Tech Stack

- **Core:** React 18, Vite
- **Localization:** i18next, react-i18next, i18next-browser-languagedetector
- **Icons:** Font Awesome (@fortawesome/react-fontawesome)
- **Styling:** CSS Nesting, CSS Variables
- **Deployment:** GitHub Actions (Automated CI/CD)

---

## 📦 Quick Start

1. **Clone the repository:**
```bash
   git clone https://github.com/gubanovgit-eng/link-in-bio.git
   cd link-in-bio
```
2. **Install dependencies:**
```bash
   npm install
```
3. **Run the local development server:**
```bash
   npm run dev
```
4. **Build the project for production:**
```bash
   npm run build
```

---

## 📂 Project Structure
```text
src/
├── components/
│   ├── Avatar.jsx         # Dynamic media avatar container
│   ├── CustomCursor.jsx   # Custom desktop cursor logic
│   ├── LangToggle.jsx     # Cyclic language switcher (RU/EN/ZH)
│   ├── Links.jsx          # Social media data array and button rendering
│   └── ThemeToggle.jsx    # Theme switching logic and localStorage handling
├── App.jsx                # Main interface entry point
├── i18n.js                # Dictionaries and translation configuration
├── index.css              # Optimized styles utilizing CSS Nesting
└── main.jsx               # React application initialization

```