import { useCallback, useEffect, useMemo, useState } from "react";
import { useMiniApp } from "./useMiniApp";

/**
 * useNavigatePages
 *
 * @param {string} initial - ключ начальной страницы (например "home")
 * @param {object} opts - опции: { exitOnRoot: boolean } (по умолчанию true)
 *
 * Возвращает:
 * { page, pageState, navigate, goBack, history }
 *
 * История — массив записей { page: string, state: any }.
 */
export function useNavigatePages(initial = "home", opts = { exitOnRoot: true }) {
  const { tgData } = useMiniApp(); // используем твой единый источник WebApp
  const [history, setHistory] = useState(() => [{ page: initial, state: undefined }]);

  // Текущая страница — последний элемент стека
  const current = useMemo(() => history[history.length - 1], [history]);
  const page = current?.page ?? initial;
  const pageState = current?.state;

  // navigate: добавляет запись в стек (страница + опциональный state)
  const navigate = useCallback((nextPage, state = undefined) => {
    setHistory((prev) => [...prev, { page: nextPage, state }]);
  }, []);

  // goBack: удаляет последний элемент стека и переключается на предыдущий
  // если стек уже на корне — опционально закрываем MiniApp (exitOnRoot)
  const goBack = useCallback(() => {
    setHistory((prev) => {
      if (prev.length <= 1) {
        // на корне — ничего не меняем в истории
        // если нужно — попробуем закрыть mini app
        if (opts.exitOnRoot && tgData?.close) {
          try {
            tgData.close();
          } catch (e) {
            // игнорируем ошибки закрытия
            // (например, в тестовом окружении close может отсутствовать)
          }
        }
        return prev;
      }

      const updated = prev.slice(0, -1);
      return updated;
    });
  }, [opts.exitOnRoot, tgData]);

  // синхронизация видимости BackButton (показываем только если не на корне)
  useEffect(() => {
    if (!tgData || !tgData.BackButton) return;

    try {
      if (history.length <= 1) {
        tgData.BackButton.hide?.();
      } else {
        tgData.BackButton.show?.();
      }
    } catch (e) {
      // не критично — безопасно игнорируем
      // (иногда в тестах или окружениях WebApp частично реализован)
    }
  }, [tgData, history.length]);

  // подписка на нажатие системной BackButton (в Telegram)
  useEffect(() => {
    if (!tgData || !tgData.BackButton) return;

    const handler = () => {
      // вызываем goBack — он безопасно закроет приложение если нужно
      goBack();
    };

    // Подписываемся
    tgData.BackButton.onClick?.(handler);

    // Отписываемся при размонтировании / изменении tgData/goBack
    return () => {
      try {
        tgData.BackButton.offClick?.(handler);
      } catch (e) {
        // в некоторых реализациях просто вызывает on/off иначе — безопасно игнорируем
        // Можно также попробовать tgData.BackButton.onClick(null) в старых версиях
      }
    };
  }, [tgData, goBack]);

  return {
    page,
    pageState,
    navigate,
    goBack,
    history,
  };
}
