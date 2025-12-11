import { useEffect } from "react";

/**
 * Хук для настройки кнопки назад и подтверждения закрытия
 * @param tgData - window.Telegram.WebApp
 * @param backPage - страница, на которую возвращаемся
 * @param navigate - функция навигации
 */
export function useTelegramNavigation(tgData, { backPage, navigate }) {
  useEffect(() => {
    if (!tgData) return;

    // Всегда скрываем MainButton по умолчанию
    tgData.MainButton.hide?.();

    // включаем подтверждение закрытия мини-приложения
    tgData.enableClosingConfirmation?.();

    if (backPage) {
      // показываем кнопку "Назад"
      tgData.BackButton.show();
      tgData.BackButton.onClick(() => {
        navigate(backPage);
      });
    } else {
      // на главной странице скрываем кнопку назад
      tgData.BackButton.hide?.();
    }

    return () => {
      tgData.BackButton.offClick?.();
    };
  }, [tgData, backPage, navigate]);
}