import {useEffect} from "react";

/**
 * Хук для управления кнопкой "Назад" и подтверждением закрытия
 *
 * @param {Telegram.WebApp} tgData - объект Telegram WebApp
 * @param {Object} options
 * @param {string|null} options.backPage - страница, на которую возвращаемся при нажатии BackButton
 * @param {Function} options.navigate - функция навигации по страницам
 */
export function useTelegramNavigation(tgData, {backPage, navigate}) {
  useEffect(() => {
    if (!tgData) return;

    // Всегда скрываем MainButton (для безопасности)
    tgData.MainButton.hide?.();

    // Включаем подтверждение закрытия мини-приложения
    tgData.enableClosingConfirmation?.();

    if (backPage) {
      // Показываем кнопку "Назад" и назначаем обработчик
      tgData.BackButton.show();
      const handleBack = () => navigate(backPage);
      tgData.BackButton.onClick(handleBack);

      // Чистим обработчик при размонтировании
      return () => tgData.BackButton.offClick(handleBack);
    } else {
      // Если backPage нет, скрываем кнопку "Назад"
      tgData.BackButton.hide?.();
    }
  }, [tgData, backPage, navigate]);
}