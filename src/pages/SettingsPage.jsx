import React from 'react';
import {useTelegramNavigation} from "../hooks/useTelegramNavigation.js";
import {getDisplayText, getNormalText, getUserDisplayData} from "../utils/utils.js";


export default function SettingsPage({navigate, tgData, user, safeTop, safeBottom}) {
  useTelegramNavigation(tgData, {backPage: 'home', navigate})
  const {username, name, lastname, photoUrl} = getUserDisplayData(user)


  return (
    <div>
      <h1 className='text-l align-center'>Настройки</h1>
      <p>Пользователь:</p>
      <div className="flex items-center justify-center flex-col">
        <img className='w-[80px] h-[80px] rounded-full' src={photoUrl} alt='avatar'/>
        <p>Имя пользователя: {username}</p>
        <p>Имя из телеграма: {name}</p>
        <p>Фамилия из телеграма: {lastname}</p>
      </div>
    </div>
  );
}