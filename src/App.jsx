import React from "react";
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

  /* ================= Loading ================= */
  const isLoading =
    !initialized || user.loading || app.loading || app.safeTop === null;

  if (isLoading) {
    return <Loading>{text("loading")}</Loading>;
  }

  /* ================= Error ================= */
  if (user.error) {
    return (
      <div className="bg-slate-800 text-white h-screen flex items-center justify-center">
        <h1>Error: {user.error}</h1>
      </div>
    );
  }

  /* ================= Page ================= */
  const PageComponent = pages[mode];

  if (!PageComponent) {
    return <div>Page not found: {mode}</div>;
  }

  /* ================= Render ================= */
  console.log('APP, app.safeTop::::::::::', app.safeTop)
  return (
    <>
      {/* Модальные окна */}
      <ModalRoot/>

      {/* Основная разметка */}
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