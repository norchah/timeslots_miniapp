import { useEffect, useRef } from "react";
import { useAppSettings } from "../stores/useAppSettings";
import { useI18nStore } from "../stores/useI18nStore.js";
import { useUserStore } from "../stores/useUserStore.js";
import { useProfiStore } from "../stores/useProfiStore.js";
import { usePageStore } from "../stores/usePageStore.js";

export function useMiniAppInit(tgData) {
  const initializedRef = useRef(false);

  const setSettingsField = useAppSettings((s) => s.setSettingsField);
  const setLang = useI18nStore((s) => s.setLang);

  const user = useUserStore((s) => s);
  const loadProfi = useProfiStore((s) => s.loadProfi);

  const setMode = usePageStore((s) => s.setMode);
  const setInitialized = usePageStore((s) => s.setInitialized);

  useEffect(() => {
    if (!tgData || initializedRef.current) return;
    if (user.loading) return;

    initializedRef.current = true;

    tgData.ready();
    tgData.disableVerticalSwipes?.();
    tgData.lockOrientation?.();
    tgData.requestFullscreen?.();
    tgData.MainButton.hide?.();
    tgData.enableClosingConfirmation?.();

    const lang = tgData.initDataUnsafe?.user?.language_code || "en";
    setLang(lang);

    const updateInsets = () => {
      const top = tgData.safeAreaInset?.top ?? 0;
      const bottom = tgData.safeAreaInset?.bottom ?? 0;

      // сохраняем в любом случае, даже если 0
      setSettingsField("safeTop", top);
      setSettingsField("safeBottom", bottom);
      setSettingsField("heightView", window.innerHeight);
      setSettingsField("widthView", window.innerWidth);
      setSettingsField("loading", false);
    };

    tgData.onEvent("viewportChanged", updateInsets);
    updateInsets(); // сразу вызвать

    if (user.id && user.isPro) loadProfi(user.id);
    setMode(user.isPro ? "homeProfi" : "home");
    setInitialized();

    return () => tgData.offEvent?.("viewportChanged", updateInsets);
  }, [tgData, user.loading, user.id]);
}