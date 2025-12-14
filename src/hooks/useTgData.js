import { useEffect } from "react";
import { useI18nStore } from "../stores/useI18nStore.js";

export function useTgData() {
  const setLang = useI18nStore((s) => s.setLang);

  useEffect(() => {
    if (!window?.Telegram?.WebApp) return;

    const tg = window.Telegram.WebApp;

    setLang(tg?.initDataUnsafe?.user?.language_code || 'en');
  }, []);

  return {
    tgData: typeof window !== "undefined"
      ? window.Telegram?.WebApp ?? null
      : null,
  };
}