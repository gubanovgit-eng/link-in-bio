# Minimalist Link in Bio // Premium Portfolio

⚡️ Современный, высокопроизводительный и адаптивный сайт-визитка (Link in Bio), вдохновленный минималистичной эстетикой интерфейсов Apple и платформы Awwwards. Построен на стеке React + Vite с кастомной стилизацией и полноценной поддержкой микро-анимаций.

🔗 **Живая демо-версия:** [Посмотреть сайт](https://gubanovgit-eng.github.io/link-in-bio/)

---

## ✨ Особенности проекта

- 🖱️ **Fluid Custom Cursor:** Интерактивный кастомный курсор с эффектом смешивания слоев (`mix-blend-mode: difference`), автоматически отключающийся на сенсорных устройствах для идеального UX.
- 🌓 **Advanced Theme System:** Умное переключение тем (светлая/темная) с автоматическим определением системных предпочтений пользователя (`prefers-color-scheme`) и сохранением состояния в `localStorage`.
- 🌐 **Trilingual Internationalization (i18n):** Полноценная поддержка трех языков (Русский, Английский, Китайский) с плавным циклическим переключением локалей без перезагрузки страницы.
- 📹 **Dynamic Avatar Container:** Интерактивный круглый контейнер аватара, который при загрузке страницы случайным образом выбирает и воспроизводит медиафайл (гладкое зацикленное видео .mp4 или статичное изображение .jpg).
- 📱 **Perfect Responsiveness:** Полная адаптивность от широкоформатных мониторов UltraWide до старых мобильных девайсов с экранами 320px.
- 🎨 **Modern CSS Architecture:** Стили написаны на чистом CSS с использованием нативной вложенности селекторов (CSS Nesting), модульной структуры компонентов и плавных cubic-bezier анимаций появления элементов.

---

## 🛠️ Стек технологий

- **Core:** React 18, Vite
- **Localization:** i18next, react-i18next, i18next-browser-languagedetector
- **Icons:** Font Awesome (@fortawesome/react-fontawesome)
- **Styling:** CSS Nesting, CSS Variables
- **Deployment:** GitHub Actions (Automated CI/CD)

---

## 📦 Быстрый старт

1. **Клонируйте репозиторий:**
   ```bash
   git clone https://github.com/gubanovgit-eng/link-in-bio.git
   cd link-in-bio
   ```
2. **Установите зависимости:**
   ```bash
   npm install
   ```
3. **Запустите локальный сервер для разработки:**
   ```bash
   npm run dev
   ```
4. **Сборка проекта для продакшена:**
   ```bash
   npm run build
   ```

---

## 📂 Структура проекта

```text
src/
├── components/
│   ├── Avatar.jsx         # Динамический контейнер медиа-аватара
│   ├── CustomCursor.jsx   # Логика кастомного курсора на десктопах
│   ├── LangToggle.jsx     # Циклический переключатель языков (RU/EN/ZH)
│   ├── Links.jsx          # Массив данных и рендеринг кнопок соцсетей
│   └── ThemeToggle.jsx    # Логика смены тем и работа с localStorage
├── App.jsx                # Главная точка сборки интерфейса
├── i18n.js                # Конфигурация словарей и переводов
├── index.css              # Оптимизированные стили с CSS Nesting
└── main.jsx               # Инициализация React-приложения
```
