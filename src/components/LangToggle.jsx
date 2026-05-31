import { useTranslation } from "react-i18next";

export default function LangToggle() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    // Получаем текущий код языка (берем первые 2 буквы, например, 'ru' из 'ru-RU')
    const currentLang = i18n.language.split("-")[0];

    let nextLang = "en";
    if (currentLang === "en") nextLang = "zh";
    else if (currentLang === "zh") nextLang = "ru";
    else if (currentLang === "ru") nextLang = "en";

    i18n.changeLanguage(nextLang);
  };

  // Показываем на кнопке тот язык, на который переключится сайт при клике
  const currentLang = i18n.language.split("-")[0];
  let nextLangLabel = "EN";

  if (currentLang === "en")
    nextLangLabel = "中文"; // На кнопке будет красиво написано "Китайский"
  else if (currentLang === "zh") nextLangLabel = "RU";
  else nextLangLabel = "EN";

  return (
    <div className="lang-toggle" onClick={toggleLanguage}>
      {nextLangLabel}
    </div>
  );
}
