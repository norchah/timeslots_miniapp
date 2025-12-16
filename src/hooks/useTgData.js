import { useEffect } from "react";
import { useI18nStore } from "../stores/useI18nStore.js";

export function useTgData() {
  const setLang = useI18nStore((s) => s.setLang);
  console.log('useTgData ::::::: start of useTgData')
  useEffect(() => {
    if (!window?.Telegram?.WebApp) return;

    const tg = window.Telegram.WebApp;

    setLang(tg?.initDataUnsafe?.user?.language_code || 'en');
  }, []);
  console.log('useTgData ::::::: end before return')
  return {
    tgData: typeof window !== "undefined"
      ? window.Telegram?.WebApp ?? null
      : null,
  };
}