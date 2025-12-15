import {pages} from "./pages/pages.js";
import React, {useEffect, useState} from "react";
import Loading from "./components/UI/loading.jsx";
import {useTgData} from "./hooks/useTgData.js";
import {useMiniAppInit} from "./hooks/useMiniAppInit.js";
import {useMiniAppAuth} from "./hooks/useMiniAppAuth.js";
import {useUserStore} from "./stores/useUserStore.js";
import {useAppSettings} from "./stores/useAppSettings.js";
import {useI18nStore} from "./stores/useI18nStore.js";
import {useProfiStore} from "./stores/useProfiStore.js";
import ModalRoot from "./components/modal/ModalRoot";


export default function App() {
  const {tgData} = useTgData();
  useMiniAppAuth(tgData)
  useMiniAppInit(tgData)

  const [page, setPage] = useState(null); // пока null, чтобы не рендерить ничего
  const user = useUserStore();
  const app = useAppSettings();
  const text = useI18nStore((s) => s.text);
  const profi = useProfiStore((s) => s.profi);
  const profiLoading = useProfiStore((s) => s.loading);


  // После загрузки user устанавливаем страницу
  useEffect(() => {
    if (!user.loading && !profiLoading && user.id && page === null) {
      setPage(user.isPro ? 'homeProfi' : 'home');
    }
  }, [user.loading, profiLoading, user.id, user.isPro, page]);

  // Показываем лоадер, пока не готов user или app
  // Если данные еще не загрузились
  if (user.loading || app.loading || page == null) {
    return <Loading>{text('loading')}</Loading>;
  }

  // Ошибка
  if (user.error) {
    return (
      <div className="bg-slate-800 text-white h-screen flex items-center justify-center">
        <h1>Error: {user.error}</h1>
      </div>
    );
  }

  const PageComponent = pages[page];

  // На всякий случай
  if (!PageComponent) {
    return <div>Page not found: {page}</div>;
  }

  return (
    <>
      <div
        className="m-auto py-5 flex flex-col items-center justify-center mt-[40px]"
        style={{paddingTop: `${app.safeTop}px`, paddingBottom: `${app.safeBottom}px`, width: `${app.widthView}px`}}>
        <PageComponent
          navigate={setPage}
          tgData={tgData}
        />
      </div>

      <ModalRoot/>
    </>

  )
}
