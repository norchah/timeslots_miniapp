import React from 'react';
import {useTelegramNavigation} from "../hooks/useTelegramNavigation.js";
import {getDisplayText, getNormalText, getUserDisplayData} from "../utils/utils.js";


export default function SettingsPage({navigate, tgData, user, safeTop, safeBottom}) {
  useTelegramNavigation(tgData, {backPage: 'home', navigate})
  const {username, name, lastname, photoUrl} = getUserDisplayData(user)


  return (
    <div className="outline w-full">
      <h1 className='text-l align-center'>Настройки</h1>
      <p>Пользователь:</p>
      <div className="flex items-center justify-center flex-col">
        <img className='w-[80px] h-[80px] rounded-full' src={photoUrl} alt='avatar'/>
        <p>Имя пользователя: {username}</p>
        <p>Имя: {name}</p>
        <p>Фамилия: {lastname}</p>
      </div>
    </div>
  );
}