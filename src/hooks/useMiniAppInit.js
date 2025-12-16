import { useEffect, useRef } from "react";
import { useAppSettings } from "../stores/useAppSettings";
import { useI18nStore } from "../stores/useI18nStore.js";
import { useUserStore } from "../stores/useUserStore.js";
import { useProfiStore } from "../stores/useProfiStore.js";
import { usePageStore } from "../stores/usePageStore.js";

export function useMiniAppInit(tgData) {
  const initializedRef = useRef(false);
  const safeAreaCheckRef = useRef(null);

  const setSettingsField = useAppSettings((s) => s.setSettingsField);
  const setSafeAreas = useAppSettings((s) => s.setSafeAreas);
  const setLang = useI18nStore((s) => s.setLang);

  const user = useUserStore((s) => s);
  const loadProfi = useProfiStore((s) => s.loadProfi);

  const setMode = usePageStore((s) => s.setMode);
  const setInitialized = usePageStore((s) => s.setInitialized);

  useEffect(() => {
    if (!tgData || initializedRef.current) return;
    if (user.loading) return;

    initializedRef.current = true;

    /* ================= Telegram Init ================= */
    tgData.ready();

    // Настройки для мобильных платформ
    if (tgData.platform !== "tdesktop") {
      tgData.disableVerticalSwipes?.();
      tgData.lockOrientation?.();
      tgData.requestFullscreen?.();
    }

    tgData.MainButton.hide?.();
    tgData.enableClosingConfirmation?.();

    const lang = tgData.initDataUnsafe?.user?.language_code || "en";
    setLang(lang);

    /* ================= Обработка безопасных отступов ================= */
    const updateInsets = () => {
      let top = tgData.safeAreaInset?.top ?? 0;
      let bottom = tgData.safeAreaInset?.bottom ?? 0;

      // Для tdesktop всегда 0
      if (tgData.platform === "tdesktop") {
        top = 0;
        bottom = 0;
      }

      console.log(`Safe areas updated: top=${top}, bottom=${bottom}`);

      // Сохраняем отступы
      setSafeAreas(top, bottom);
      setSettingsField("heightView", window.innerHeight);
      setSettingsField("widthView", window.innerWidth);
    };

    // Дополнительная проверка для мобильных устройств
    const checkSafeAreas = () => {
      if (tgData.platform === "tdesktop") return;

      const top = tgData.safeAreaInset?.top ?? 0;
      const bottom = tgData.safeAreaInset?.bottom ?? 0;

      // Если получили нулевые значения, проверяем ещё раз через небольшую задержку
      if (top === 0 && bottom === 0) {
        console.log("Got zero safe areas, will retry...");

        clearTimeout(safeAreaCheckRef.current);
        safeAreaCheckRef.current = setTimeout(() => {
          const retryTop = tgData.safeAreaInset?.top ?? 0;
          const retryBottom = tgData.safeAreaInset?.bottom ?? 0;

          if (retryTop !== 0 || retryBottom !== 0) {
            console.log(`Retry successful: top=${retryTop}, bottom=${retryBottom}`);
            setSafeAreas(retryTop, retryBottom);
          }
        }, 300); // Задержка для получения корректных значений
      }
    };

    // Подписка на изменение viewport
    tgData.onEvent("viewportChanged", updateInsets);

    // Вызов сразу
    updateInsets();

    // Дополнительная проверка для мобильных
    checkSafeAreas();

    /* ================= Завершение инициализации ================= */
    const completeInitialization = () => {
      // Загружаем данные профи, если пользователь PRO
      if (user.id && user.isPro) {
        loadProfi(user.id);
      }

      // Устанавливаем режим страницы
      setMode(user.isPro ? "homeProfi" : "home");

      // Помечаем приложение как инициализированное
      setInitialized();

      // Завершаем загрузку настроек
      setSettingsField("loading", false);
    };

    // Даём небольшую задержку для стабилизации safe areas
    const initTimeout = setTimeout(completeInitialization, 100);

    return () => {
      clearTimeout(initTimeout);
      clearTimeout(safeAreaCheckRef.current);
      tgData.offEvent?.("viewportChanged", updateInsets);
    };
  }, [tgData, user.loading, user.id]);
}