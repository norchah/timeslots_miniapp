import {useEffect, useState} from "react";

export function useTgData() {
  const [tgData, setTgData] = useState(null); // сразу моковые данные

  useEffect(() => {
    if (typeof window !== "undefined" && window.Telegram?.WebApp) {
      const tgWebApp = window.Telegram.WebApp;

      setTgData(tgWebApp);
    }
  }, []);

  return {tgData}; // возвращаем все поля + source
}
