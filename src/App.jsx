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
  useMiniAppAuth(tgData);
  useMiniAppInit(tgData);
  const user = useUserStore();
  const app = useAppSettings();
  const text = useI18nStore((s) => s.text);
  const mode = usePageStore((s) => s.mode);
  const initialized = usePageStore((s) => s.initialized);

  // // Следим за получением реальных safe areas
  // useEffect(() => {
  //   if (tgData?.platform === "tdesktop") {
  //     // Для десктопа safe areas всегда 0, считаем их готовыми сразу
  //     setIsSafeAreasReady(true);
  //   } else if (app.hasRealSafeAreas) {
  //     // Для мобильных - когда получили не нулевые значения
  //     setIsSafeAreasReady(true);
  //   } else {
  //     // Фоллбэк: если долго не приходят значения, используем эмуляцию
  //     const timeout = setTimeout(() => {
  //       console.log("Fallback: using estimated safe areas");
  //       setIsSafeAreasReady(true);
  //     }, 1000);
  //
  //     return () => clearTimeout(timeout);
  //   }
  // }, [app.hasRealSafeAreas, tgData?.platform]);

  /* ================= Loading ================= */
  const isLoading = !initialized || user.loading || app.loading
  // const isLoading = !initialized || user.loading || app.loading || !isSafeAreasReady;

  if (isLoading) {
    return (
      <Loading>
        {text('loading')}
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
      <div
        className="flex flex-col items-center justify-center py-5 mt-[40px]"
        style={{
          paddingTop: `${app.safeTop}px`,
          paddingBottom: `${app.safeBottom}px`,
          width: `${app.widthView}px`,
        }}
      >
        <PageComponent tgData={tgData}/>
      </div>
    </>
  );
}