import { faTelegram, faVk, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLink } from "@fortawesome/free-solid-svg-icons";

export const linksData = [
  { id: "telegram", href: "https://t.me/voituk_nikita", text: "Telegram", icon: faTelegram, className: "telegram" },
  { id: "vk", href: "https://vk.com/gubanov.nikita", text: "VK", icon: faVk, className: "vk" },
  { id: "github", href: "https://github.com/gubanovgit-eng", text: "GitHub", icon: faGithub, className: "github" },
  { id: "email", href: "mailto:gubanov.git@gmail.com", text: "links.contact", icon: faEnvelope, className: "email" },
  // { id: "website", href: "#", text: "links.website", icon: faLink, className: "website" },
];