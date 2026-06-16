import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { linksData } from "../data/links";

export default function Links() {
  const { t } = useTranslation();

  const handleLinkClick = (id) => {
    // Внедрение аналитики (например, Google Analytics или Yandex Metrika)
    console.log(`Click tracked: ${id}`);
    // Пример для GA: window.gtag('event', 'click', { 'event_category': 'links', 'event_label': id });
  };

  return (
    <div className="links-container">
      {linksData.map((link, index) => {
        const isExternal = link.href.startsWith("http");

        return (
          <motion.div
            key={link.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileTap={{ scale: 0.95 }} // Анимация при клике
            onClick={() => handleLinkClick(link.id)}
          >
            <a
              href={link.href}
              className={`link-button ${link.className}`}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
            >
              <FontAwesomeIcon
                icon={link.icon}
                style={{ marginRight: "0.75rem", width: "20px" }}
              />
              {t(link.text)}
            </a>
          </motion.div>
        );
      })}
    </div>
  );
}
