import React from 'react';
import {useTelegramNavigation} from "../hooks/useTelegramNavigation.js";

export default function BecomeProfi({tgData, navigate}) {
  useTelegramNavigation(tgData, {backPage: 'home', navigate})
  return (
    <div className="flex flex-col justify-center px-5">
      <h1 className='text-xl'>Что бы начать оказывать услуги заполните форму нижу</h1>
    </div>
  );
}