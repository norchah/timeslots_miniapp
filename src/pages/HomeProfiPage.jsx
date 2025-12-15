import React from 'react';
import {useTelegramNavigation} from "../hooks/useTelegramNavigation.js";
import ButtonMain from "../components/buttons/buttonMain.jsx";

export default function HomeProfiPage(navigate, tgData) {
  useTelegramNavigation(tgData, {navigate})
  return (
    <div className='flex flex-col justify-center inline-flex items-center'>
      <h1 className='text-2xl'>Теперь ты профи</h1>
      <p>Скоро можно будет куда-то переключиться, на юзера например</p>
      <ButtonMain navigate={'home'}>Стать юзером</ButtonMain>
    </div>
  );
}
