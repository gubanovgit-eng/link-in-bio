import { useTranslation } from "react-i18next";
import CustomCursor from "./components/CustomCursor";
import ThemeToggle from "./components/ThemeToggle";
import LangToggle from "./components/LangToggle";
import Avatar from "./components/Avatar";
import Links from "./components/Links";
import "./index.css";

export default function App() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <>
      <CustomCursor />
      <ThemeToggle />
      <LangToggle />

      <div className="container">
        <section className="profile-section">
          <Avatar />
          <h1 className="name">{t("name")}</h1>
          <p className="bio">{t("bio")}</p>
        </section>

        <Links />
      </div>

      <footer className="footer">
        &copy; {currentYear} {t("name")}. {t("footer")}
      </footer>
    </>
  );
}
