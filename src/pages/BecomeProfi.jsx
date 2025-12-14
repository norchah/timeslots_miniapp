import React from 'react';
import {useTelegramNavigation} from "../hooks/useTelegramNavigation.js";

export default function BecomeProfi({tgData, navigate}) {
  useTelegramNavigation(tgData, {backPage: 'home', navigate})
  return (
    <div className="flex flex-col align-center justify-center py-5 outline outline-red-500">
      <h1 className='text-3xl'>Становление Профессионалом</h1>
      <p>Здесь вы станете профессионалам и начнете оказывать услуги</p>
      <p>Но после небольшой регистрации</p>
    </div>
  );
}