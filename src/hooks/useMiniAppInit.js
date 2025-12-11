import {useEffect, useState} from "react";

/**
 * Хук для инициализации Telegram WebApp
 * - Подключается к tgData
 * - Настраивает safeAreaInsets (top/bottom)
 * - Блокирует вертикальные свайпы и фиксирует ориентацию (не для desktop)
 * - Запрашивает fullscreen
 * - Скрывает MainButton
 * - Включает подтверждение закрытия мини-приложения
 *
 * @param {Telegram.WebApp} tgData - объект Telegram WebApp
 * @returns {{safeTop: number|null, safeBottom: number|null}} - safeAreaInsets для верстки
 */
export function useMiniAppInit(tgData) {
  const [safeTop, setSafeTop] = useState(null);
  const [safeBottom, setSafeBottom] = useState(null);

  useEffect(() => {
    if (!tgData) return;

    // Блокируем вертикальные свайпы и фиксируем ориентацию на мобильных
    if (tgData.platform !== "tdesktop") {
      tgData.disableVerticalSwipes?.();
      tgData.lockOrientation?.();
      tgData.requestFullscreen?.();
    }

    // Telegram требует вызвать ready() перед доступом к safeAreaInset
    tgData.ready();

    // Скрываем MainButton и включаем подтверждение закрытия
    tgData.MainButton.hide?.();
    tgData.enableClosingConfirmation?.();
    // tgData.isClosingConfirmationEnabled = true;

    // Даем Telegram кадр, чтобы safeArea применился
    requestAnimationFrame(() => {
      setSafeTop(tgData.safeAreaInset?.top ?? 0);
      setSafeBottom(tgData.safeAreaInset?.bottom ?? 0);
    });

    // Подписка на изменения viewport (особенно iOS)
    const handleViewportChange = () => {
      setSafeTop(tgData.safeAreaInset?.top ?? 0);
      setSafeBottom(tgData.safeAreaInset?.bottom ?? 0);
    };
    tgData.onEvent("viewportChanged", handleViewportChange);

    // Чистка при размонтировании
    return () => {
      tgData.offEvent?.("viewportChanged", handleViewportChange);
    };
  }, [tgData]);

  return {safeTop, safeBottom};
}