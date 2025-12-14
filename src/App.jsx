import {useMiniApp} from "./hooks/useMiniApp.js";
import {pages} from "./pages/pages.js";
import React, {useEffect, useState} from "react";
import Loading from "./components/UI/loading.js";
import {useTgData} from "./hooks/useTgData.js";


export default function App() {
  const {tgData, user, safeTop, safeBottom, loading, error} = useMiniApp();
  const { lang } = useTgData();
  const [page, setPage] = useState('home');
  const [textLoading, setTextLoading] = useState('en');


  useEffect(() => {
      if (lang === 'ru') {
        setTextLoading('ru');
      }
  }, [lang]);

  // Находим нужный компонент
  const PageComponent = pages[page];

  // Показываем лоадер, пока не готовы tgData или user
  // Если данные еще не загрузились
  if (loading || !tgData || !user || safeTop === null || safeBottom === null) {
    <Loading>{textLoading}</Loading>
  }

  // Ошибка
  if (error) {
    return (
      <div className="bg-slate-800 text-white h-screen flex items-center justify-center">
        <h1>Error: {error}</h1>
      </div>
    );
  }

  return (
    <div
      className="m-auto max-w-[456px] flex flex-col items-center justify-center mt-[40px] outline py-2"
      style={{paddingTop: `${safeTop}px`, paddingBottom: `${safeBottom}px`}}
    >
      <PageComponent
        navigate={setPage}
        tgData={tgData}
        user={user}
        safeTop={safeTop}
        safeBottom={safeBottom}
      />
    </div>
  )
}
