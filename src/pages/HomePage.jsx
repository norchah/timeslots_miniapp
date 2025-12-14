import React from 'react';
import {useTelegramNavigation} from "../hooks/useTelegramNavigation.js";
import ButtonMain from "../components/buttons/buttonMain.jsx";


export default function HomePage({navigate, tgData}) {
  useTelegramNavigation(tgData, {navigate})

  // const user = useUserStore();
  // const app = useAppSettings();
  // const text = useI18nStore((s) => s.text);

  return (
    // <div style={{paddingTop: app.safeTop, paddingBottom: app.safeBottom}}>
    <div>
      <h1>Добро пожаловать в TimeSlots</h1>


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
