import {useMiniApp} from "./hooks/useMiniApp.js";
import {pages} from "./pages/pages.js";
import {useEffect, useState} from "react";


export default function App() {
  const {tgData, user, safeTop, safeBottom, loading, error} = useMiniApp();
  const [page, setPage] = useState('home');
  const [data, setData] = useState();

  // Находим нужный компонент
  const PageComponent = pages[page] ?? pages.home;

  console.log("TOP::::::::::::::::::::::", safeTop);
  console.log("BOTTOM::::::::::::::::::::::", safeBottom);



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
      className="m-auto max-w-[456px] flex flex-col items-center justify-center outline"
      style={{paddingTop: `${safeTop}px`, paddingBottom: `${safeBottom}px`}}
    >
      <h1>Добро пожаловать в TimeSlots</h1>
      <p>safe Bottom: {safeBottom}</p>
      <p>safe Top: {safeTop}</p>

      <PageComponent navigate={setPage}/>

    </div>
  )
}
