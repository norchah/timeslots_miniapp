import {useEffect, useState} from "react";

export function useTgData() {
  const [tgData, setTgData] = useState(null); // сразу моковые данные
  const [lang, setLang] = useState('en');

  useEffect(() => {
    if (typeof window !== "undefined" && window.Telegram?.WebApp) {
      const tgWebApp = window.Telegram.WebApp;

      setTgData(tgWebApp);
    }
  }, []);
  setLang(tgData.language_code)
  console.log('useTgData::::::: LANG :::::', lang)
  return {tgData, lang}; // возвращаем все поля + source
}
