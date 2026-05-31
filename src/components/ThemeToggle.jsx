import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    return saved === "dark" || (!saved && prefersDark);
  });

  useEffect(() => {
    const body = document.body;
    if (isDark) {
      body.classList.remove("light-theme");
      body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
    } else {
      body.classList.remove("dark-theme");
      body.classList.add("light-theme");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <div className="theme-toggle" onClick={() => setIsDark(!isDark)}>
      <FontAwesomeIcon icon={isDark ? faSun : faMoon} />
    </div>
  );
}
