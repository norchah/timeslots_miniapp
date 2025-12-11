import React from 'react';
import {useTelegramNavigation} from "../hooks/useTelegramNavigation.js";

export default function BecomeProfi({tgData, navigate, user}) {
  useTelegramNavigation(tgData, {backPage: 'home', navigate})
  return (
    <div className="flex flex-col align-center justify-center w-full">
      <h1>Становление Профессионалом</h1>
      <p>Здесь вы станете профессионалам и начнете оказывать услуги</p>
      <p>Но после небольшой регистрации</p>
    </div>
  );
}