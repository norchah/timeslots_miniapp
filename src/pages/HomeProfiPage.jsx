import React from 'react';
import ButtonMain from "../components/buttons/buttonMain.jsx";

export default function HomeProfiPage() {
  return (
    <div className='flex flex-col justify-center inline-flex items-center'>
      <h1 className='text-2xl'>Теперь ты профи</h1>
      <p>Скоро можно будет куда-то переключиться, на юзера например</p>
      <ButtonMain
        navigate={navigate}
        page='home'
        tgData={tgData}
      >
        Стать юзером
      </ButtonMain>
      <ButtonMain
        navigate={navigate}
        page='profiClients'
        tgData={tgData}
      >
        Мои клиенты
      </ButtonMain>
    </div>
  );
}
