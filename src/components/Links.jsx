import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram, faVk, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLink } from "@fortawesome/free-solid-svg-icons";

export default function Links() {
  const { t } = useTranslation();

  const linksData = [
    {
      id: "telegram",
      href: "https://t.me/voituk_nikita",
      text: "Telegram",
      icon: faTelegram,
      className: "telegram",
    },
    {
      id: "vk",
      href: "https://vk.com/gubanov.nikita",
      text: "VK",
      icon: faVk,
      className: "vk",
    },
    {
      id: "github",
      href: "https://github.com/gubanovgit-eng",
      text: "GitHub",
      icon: faGithub,
      className: "github",
    },
    {
      id: "email",
      href: "mailto:gubanov.git@gmail.com",
      text: t("links.contact"),
      icon: faEnvelope,
      className: "email",
    },
    {
      id: "website",
      href: "#",
      text: t("links.website"),
      icon: faLink,
      className: "website",
    },
  ];

  return (
    <div className="links-container">
      {linksData.map((link) => {
        const isExternal = link.href.startsWith("http");

        return (
          <div key={link.id}>
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
              {link.text}
            </a>
          </div>
        );
      })}
    </div>
  );
}
