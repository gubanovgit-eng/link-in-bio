import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import CustomCursor from "./components/CustomCursor";
import ThemeToggle from "./components/ThemeToggle";
import LangToggle from "./components/LangToggle";
import Avatar from "./components/Avatar";
import Links from "./components/Links";
import Preloader from "./components/Preloader";
import "./index.css";

export default function App() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <AnimatePresence mode="wait">
        {!isLoaded && (
          <Preloader key="preloader" onComplete={() => setIsLoaded(true)} />
        )}
      </AnimatePresence>

      <CustomCursor />
      <ThemeToggle />
      <LangToggle />

      <motion.div
        className="app-wrapper"
        initial={{ opacity: 0, y: 20 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh"
        }}
      >
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
      </motion.div>
    </>
  );
}
