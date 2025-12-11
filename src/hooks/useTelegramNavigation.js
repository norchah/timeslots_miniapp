import { useEffect } from "react";

export function useTelegramNavigation(tgData, { backPage, navigate }) {
  useEffect(() => {
    if (!tgData) return;

    // Всегда скрываем MainButton по умолчанию
    tgData.MainButton.hide?.();

    if (backPage) {
      // кнопка "Назад"
      tgData.BackButton.show();
      tgData.BackButton.onClick(() => {
        navigate(backPage);
      });
    } else {
      // главная страница — кнопка назад не нужна
      tgData.BackButton.hide?.();

      // Подтверждение закрытия через alert
      const handleClose = () => {
        if (window.confirm("Закрыть приложение?")) {
          tgData.close();
        }
      };

      // Можно повесить на крестик сверху, если есть swipe-back:
      tgData.onEvent("back", handleClose);

      // Или назначить кнопку MainButton для закрытия
      tgData.MainButton.setText("Закрыть");
      tgData.MainButton.show();
      tgData.MainButton.onClick(handleClose);
    }

    return () => {
      tgData.BackButton.offClick?.();
      tgData.MainButton.offClick?.();
      tgData.offEvent?.("back");
    };
  }, [tgData, backPage, navigate]);
}