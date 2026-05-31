import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  ru: {
    translation: {
      name: "Никита Губанов",
      bio: "Цифровой создатель и дизайнер. Делюсь своим путём в мире технологий и дизайна.",
      links: {
        contact: "Связаться",
        website: "Сайт"
      },
      footer: "Все права защищены."
    }
  },
  en: {
    translation: {
      name: "Nikita Gubanov",
      bio: "Digital creator and designer. Sharing my journey in the world of technology and design.",
      links: {
        contact: "Contact",
        website: "Website"
      },
      footer: "All rights reserved."
    }
  },
  zh: {
    translation: {
      name: "尼基塔·古巴诺夫",
      bio: "数字创作者与设计师。在这里分享我在技术与设计领域的探索探索之路。",
      links: {
        contact: "联系我",
        website: "网站"
      },
      footer: "版权所有。"
    }
  }
};

i18n
  .use(LanguageDetector) // Автоопределение языка
  .use(initReactI18next) // Интеграция с React
  .init({
    resources,
    fallbackLng: 'en', // Язык по умолчанию, если язык браузера не ru/en
    interpolation: {
      escapeValue: false // React уже защищает от XSS
    }
  });

export default i18n;