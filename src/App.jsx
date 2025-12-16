import React, {useEffect, useState} from "react";
import {pages} from "./pages/pages.js";
import Loading from "./components/UI/loading.jsx";
import ModalRoot from "./components/modal/ModalRoot";
import {useTgData} from "./hooks/useTgData.js";
import {useMiniAppInit} from "./hooks/useMiniAppInit.js";
import {useMiniAppAuth} from "./hooks/useMiniAppAuth.js";
import {useUserStore} from "./stores/useUserStore.js";
import {useAppSettings} from "./stores/useAppSettings.js";
import {useI18nStore} from "./stores/useI18nStore.js";
import {usePageStore} from "./stores/usePageStore.js";

export default function App() {
  const {tgData} = useTgData();
  const [isSafeAreasReady, setIsSafeAreasReady] = useState(false);
  useMiniAppAuth(tgData);
  useMiniAppInit(tgData);
  const user = useUserStore();
  const app = useAppSettings();
  const text = useI18nStore((s) => s.text);
  const mode = usePageStore((s) => s.mode);
  const initialized = usePageStore((s) => s.initialized);

  // Следим за получением реальных safe areas
  useEffect(() => {
    if (tgData?.platform === "tdesktop") {
      // Для десктопа safe areas всегда 0, считаем их готовыми сразу
      setIsSafeAreasReady(true);
    } else if (app.hasRealSafeAreas) {
      // Для мобильных - когда получили не нулевые значения
      setIsSafeAreasReady(true);
    } else {
      // Фоллбэк: если долго не приходят значения, используем эмуляцию
      const timeout = setTimeout(() => {
        console.log("Fallback: using estimated safe areas");
        setIsSafeAreasReady(true);
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [app.hasRealSafeAreas, tgData?.platform]);

  /* ================= Loading ================= */
  const isLoading = !initialized || user.loading || app.loading || !isSafeAreasReady;

  if (isLoading) {
    return (
      <Loading>
        <div className="text-center">
          <div>{text("loading")}</div>
          {!isSafeAreasReady && (
            <div className="text-sm mt-2 opacity-70">
              Adjusting layout...
            </div>
          )}
        </div>
      </Loading>
    );
  }

  /* ================= Error ================= */
  if (user.error) {
    return (
      <div className="bg-slate-800 text-white h-screen flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-xl font-bold mb-2">Error</h1>
          <p className="text-red-300">{user.error}</p>
        </div>
      </div>
    );
  }

  /* ================= Page ================= */
  const PageComponent = pages[mode];
  if (!PageComponent) return <div>Page not found: {mode}</div>;

  /* ================= Render ================= */
  return (
    <>
      <ModalRoot/>

      <div
        className="flex flex-col items-center justify-center min-h-screen"
        style={{
          paddingTop: `${Math.max(app.safeTop, 0)}px`,
          paddingBottom: `${Math.max(app.safeBottom, 0)}px`,
          minHeight: `calc(100vh - ${app.safeTop + app.safeBottom}px)`,
        }}
      >
        <div
          className="w-full max-w-md mx-auto px-4"
          style={{
            width: `${Math.min(app.widthView, 428)}px`,
          }}
        >
          <PageComponent tgData={tgData}/>
        </div>
      </div>
    </>
  );
}