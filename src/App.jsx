import {useMiniApp} from "./hooks/useMiniApp.js";
import {pages} from "./pages/pages.js";
import {useEffect, useState} from "react";


export default function App() {
  const {tgData, user, safeTop, safeBottom, loading, error} = useMiniApp();
  const [page, setPage] = useState('home');

  // Находим нужный компонент
  const PageComponent = pages[page];

  useEffect(() => {
    console.log('USER APP:::::::::::::', user)
  }, [tgData])


  // Показываем лоадер, пока не готовы tgData или user
  if (!tgData || safeTop === null || loading) {
    return (
      <div className="bg-slate-800 text-white h-screen flex items-center justify-center">
        <h1>Loading...</h1>
      </div>
    );
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
      className="m-auto max-w-[456px] flex flex-col items-center justify-center outline mt-[35px]"
      style={{paddingTop: `${safeTop}px`, paddingBottom: `${safeBottom}px`}}
    >
      <PageComponent navigate={setPage}/>
    </div>
  )
}
