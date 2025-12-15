import {pages} from "./pages/pages.js";
import React, {useEffect, useState} from "react";
import Loading from "./components/UI/loading.jsx";
import {useTgData} from "./hooks/useTgData.js";
import {useMiniAppInit} from "./hooks/useMiniAppInit.js";
import {useMiniAppAuth} from "./hooks/useMiniAppAuth.js";
import {useUserStore} from "./stores/useUserStore.js";
import {useAppSettings} from "./stores/useAppSettings.js";
import {useI18nStore} from "./stores/useI18nStore.js";


export default function App() {
  const {tgData} = useTgData();
  useMiniAppInit(tgData)
  useMiniAppAuth(tgData)

  const [page, setPage] = useState(null); // пока null, чтобы не рендерить ничего
  const user = useUserStore();
  const app = useAppSettings();
  const text = useI18nStore((s) => s.text);

  // Ждем, пока user загрузится
  useEffect(() => {
    if (!user.loading && user.id) {
      setPage(user.is_pro ? 'homeProfi' : 'home');
    }
  }, [user.loading, user.id, user.is_pro]);

  // Находим нужный компонент
  const PageComponent = pages[page];

  // Показываем лоадер, пока не готов user или app
  // Если данные еще не загрузились
  if (user.loading || app.loading) {
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

  return (
    <div
      className="m-auto py-5 flex flex-col items-center justify-center mt-[40px]"
      style={{paddingTop: `${app.safeTop}px`, paddingBottom: `${app.safeBottom}px`, width: `${app.widthView}px`}}>
      <PageComponent
        navigate={setPage}
        tgData={tgData}
      />
    </div>
  )
}
