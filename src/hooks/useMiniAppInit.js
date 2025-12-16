import {useEffect} from "react";
import {useAppSettings} from "../stores/useAppSettings";
import {useI18nStore} from "../stores/useI18nStore.js";
import {useUserStore} from "../stores/useUserStore.js";
import {useProfiStore} from "../stores/useProfiStore.js";
import {usePageStore} from "../stores/usePageStore.js";

export function useMiniAppInit(tgData) {
  const setMode = usePageStore((s) => s.setMode);
  const setInitialized = usePageStore((s) => s.setInitialized);
  const setSettingsField = useAppSettings((s) => s.setSettingsField);
  const setLang = useI18nStore((s) => s.setLang);
  const user = useUserStore((s) => s);
  const loadProfi = useProfiStore((s) => s.loadProfi);

  useEffect(() => {
    if (!tgData) return;

    tgData.ready();

    if (tgData.platform !== "tdesktop") {
      tgData.disableVerticalSwipes?.();
      tgData.lockOrientation?.();
      tgData.requestFullscreen?.();
    }

    // ✅ ЕДИНСТВЕННЫЙ источник языка
    const lang = tgData.initDataUnsafe?.user?.language_code ?? "en";
    setLang(lang);

    tgData.MainButton.hide?.();
    tgData.enableClosingConfirmation?.();

    const updateInsets = () => {
      setSettingsField("safeTop", tgData.safeAreaInset?.top ?? 0);
      setSettingsField("safeBottom", tgData.safeAreaInset?.bottom ?? 0);
      setSettingsField("heightView", window.innerHeight);
      setSettingsField("widthView", window.innerWidth);
      setSettingsField("loading", false);
    };

    requestAnimationFrame(updateInsets);
    tgData.onEvent("viewportChanged", updateInsets);

    // ================= Завершение инициализации =================
    const completeInitialization = () => {
      if (user.id && user.isPro) {
        loadProfi(user.id);
      }
      console.log('useMiniAppInit::::::: user.isPro', user.isPro)
      console.log('useMiniAppInit::::::: user.id', user.id)
      setMode(user.isPro ? "homeProfi" : "home");
      setInitialized();
      user.setUserField("loading", false);
    };

    const initTimeout = setTimeout(completeInitialization, 300);

    return () => {
      tgData.offEvent?.("viewportChanged", updateInsets);
      clearTimeout(initTimeout);
    };
  }, [tgData]);
}