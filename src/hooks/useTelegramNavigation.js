import { useEffect } from "react";

export function useTelegramNavigation(tgData, { backPage, navigate }) {
  useEffect(() => {
    if (!tgData) return;

    // Всегда скрываем MainButton по умолчанию
    tgData.MainButton.hide?.();

    if (backPage) {
      // показываем кнопку "Назад"
      tgData.BackButton.show();
      tgData.BackButton.onClick(() => {
        navigate(backPage);
      });
    } else {
      // на главной странице кнопка назад не нужна
      tgData.BackButton.hide?.();

      // назначаем пользовательскую логику для закрытия
      const confirmClose = () => {
        if (window.confirm("Вы точно хотите закрыть мини-приложение?")) {
          tgData.close();
        }
      };

      // можно повесить на жест swipe-down или просто на крестик сверху
      tgData.onEvent("back", confirmClose);
      // Если нужно, можно назначить MainButton для закрытия:
      // tgData.MainButton.setText("Закрыть");
      // tgData.MainButton.onClick(confirmClose);
    }

    return () => {
      tgData.BackButton.offClick?.();
      tgData.MainButton.offClick?.();
      tgData.offEvent?.("back");
    };
  }, [tgData, backPage, navigate]);
}