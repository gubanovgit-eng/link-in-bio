import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Проверка на тач-устройства
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    setIsVisible(true);
    document.body.classList.add("custom-cursor-active");

    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`; // clientY лучше, чем pageY для fixed позиционирования
      }
    };

    const handleBlur = () => {
      if (cursorRef.current) cursorRef.current.style.opacity = "0";
    };
    const handleFocus = () => {
      if (cursorRef.current) cursorRef.current.style.opacity = "1";
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("blur", handleBlur);
    window.addEventListener("focus", handleFocus);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("focus", handleFocus);
    };
  }, []);

  if (!isVisible) return null;

  return <div ref={cursorRef} className="custom-cursor" />;
}
