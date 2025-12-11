import {useEffect} from "react";

/**
 * Хук для работы с кнопкой "Назад" Telegram
 * @param {Telegram.WebApp} tgData - объект Telegram WebApp
 * @param {string} backPage - страница, на которую возвращаемся
 * @param {function} navigate - функция навигации
 */
export function useTelegramNavigation(tgData, { backPage, navigate }) {
  useEffect(() => {
    if (!tgData) return;

    if (backPage) {
      // показываем кнопку "Назад"
      tgData.BackButton.show();
      tgData.BackButton.onClick(() => {
        navigate(backPage);
      });
    } else {
      // скрываем кнопку назад и показываем крестик
      tgData.BackButton.hide?.();
      tgData.MainButton.show?.();
      tgData.MainButton.onClick(() => tgData.close());
    }

    return () => {
      tgData.BackButton.offClick?.();
      tgData.MainButton.offClick?.();
    };
  }, [tgData, backPage, navigate]);
}