import React from 'react';
import {useTelegramNavigation} from "../hooks/useTelegramNavigation.js";

export default function SettingsPage({navigate, tgData, user, safeTop, safeBottom}) {
  useTelegramNavigation(tgData, {backPage: 'home', navigate})

  function getText(text) {
    if (text === null || text === "") {
      return 'Пусто'
    } else {
      return text
    }
  }

  return (
    <div>
      <h1 className='text-lg'>Настройки</h1>
      <p>Пользователь:</p>
      <div className="flex flex-col jusify-bettwen align-center">
        <img className='w-[80px] h-[80px] rounded-full' src={user.photoUrl} alt='avatar'/>
        <p>Имя пользователя: getText({user.username})</p>
        <p>Имя из телеграма: getText({user.firstName})</p>
        <p>Фамилия из телеграма: getText({user.lastName})</p>
        <p>Отображаемое имя в приложении: getText({user.displayName})</p>
        <p>Отображаемая фамилия в приложении: getText({user.displayLastname})</p>
      </div>
    </div>
  );
}