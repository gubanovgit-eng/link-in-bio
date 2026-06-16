import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const greetings = [
  "Hello", // Английский
  "Привет", // Русский
  "你好", // Китайский
];

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let currentProgress = 0;
    const interval = setInterval(() => {
      // Имитируем неравномерную загрузку для более естественного ощущения
      let increment = 1;
      if (currentProgress < 30) {
        increment = Math.floor(Math.random() * 5) + 3; // Сначала загрузка идет быстро
      } else if (currentProgress < 75) {
        increment = Math.floor(Math.random() * 3) + 1; // Замедляется в середине
      } else if (currentProgress < 95) {
        increment = Math.floor(Math.random() * 2) + 1; // Сильно замедляется в конце
      } else {
        increment = 1; // Плавное завершение
      }

      currentProgress = Math.min(currentProgress + increment, 100);
      setProgress(currentProgress);

      if (currentProgress >= 100) {
        clearInterval(interval);
        // Небольшая задержка перед тем, как убрать прелоадер для вау-эффекта
        setTimeout(() => {
          onComplete();
        }, 500);
      }
    }, 40); // Частота обновлений

    return () => clearInterval(interval);
  }, [onComplete]);

  // Вычисляем текущее приветствие в зависимости от прогресса
  const greetingIndex = Math.min(
    Math.floor((progress / 100) * greetings.length),
    greetings.length - 1,
  );

  return (
    <motion.div
      className="preloader-overlay"
      initial={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="preloader-content">
        <div className="greeting-wrapper">
          <AnimatePresence mode="wait">
            <motion.p
              key={greetingIndex}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="preloader-greeting"
            >
              {greetings[greetingIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        <div className="preloader-progress-container">
          <div className="progress-number-container">
            <span className="progress-dot" />
            <span className="progress-number">{progress}%</span>
          </div>
          <div className="progress-bar-bg">
            <motion.div
              className="progress-bar-fill"
              style={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
