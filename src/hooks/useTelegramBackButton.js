import {useEffect} from "react";

/**
 * Хук для работы с кнопкой "Назад" Telegram
 * @param {Telegram.WebApp} tgData - объект Telegram WebApp
 * @param {string} backPage - страница, на которую возвращаемся
 * @param {function} navigate - функция навигации
 */
export function useTelegramBackButton(tgData, backPage, navigate) {
  useEffect(() => {
    if (!tgData) return;

    tgData.BackButton.show();

    const handleBack = () => {
      navigate(backPage);
    };

    tgData.BackButton.onClick(handleBack);

    return () => {
      tgData.BackButton.offClick(handleBack);
    };
  }, [tgData, backPage, navigate]);
}