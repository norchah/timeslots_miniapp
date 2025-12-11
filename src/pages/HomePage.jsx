import React from 'react';
import Card from "../components/cards/card.jsx";
import {useTelegramNavigation} from "../hooks/useTelegramNavigation.js";
import ButtonMain from "../components/buttons/buttonMain.jsx";


export default function HomePage({navigate, tgData, user, safeTop, safeBottom}) {
  useTelegramNavigation(tgData, {navigate})
  return (
    <div style={{paddingTop: safeTop, paddingBottom: safeBottom}}>
      <h1>Добро пожаловать в TimeSlots</h1>
      <p>safe Bottom: {safeBottom}</p>
      <p>safe Top: {safeTop}</p>

      {/* Универсальная карточка */}
      <ButtonMain navigate={navigate} page="settings" className='mr-1'>
        Настройки
      </ButtonMain>

      {/* Можно ещё одну */}
      <ButtonMain navigate={navigate} page="users">
        Пользователи
      </ButtonMain>

    </div>
  );
}
