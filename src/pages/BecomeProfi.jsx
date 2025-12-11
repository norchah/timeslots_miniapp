import React from 'react';
import {useTelegramNavigation} from "../hooks/useTelegramNavigation.js";

export default function BecomeProfi({tgData, navigate, user}) {
  useTelegramNavigation(tgData, {backPage: 'home', navigate})
  return (
    <div>
      Здесь вы станете профессионалам и начнете оказывать услуги
      Но после небольшой регистрации
    </div>
  );
}