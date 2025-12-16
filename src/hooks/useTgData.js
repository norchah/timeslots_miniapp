import {useEffect, useMemo} from "react";
import {useI18nStore} from "../stores/useI18nStore.js";

export function useTgData() {
  const setLang = useI18nStore((s) => s.setLang);

  // tgData всегда мемоизируется, чтобы не пересоздавать объект каждый рендер
  const tgData = useMemo(() => {
    if (typeof window === "undefined") return null;
    return window.Telegram?.WebApp ?? null;
  }, []);

  useEffect(() => {
    if (!tgData) return;

    const lang = tgData.initDataUnsafe?.user?.language_code || "en";
    setLang(lang);
  }, [tgData, setLang]);

  return {tgData};
}