import React from 'react';
import {useTelegramNavigation} from "../hooks/useTelegramNavigation.js";
import {getDisplayText, getNormalText, getUserDisplayData} from "../utils/utils.js";


export default function SettingsPage({navigate, tgData, user, safeTop, safeBottom}) {
  useTelegramNavigation(tgData, {backPage: 'home', navigate})
  const {username, name, lastname, photoUrl} = getUserDisplayData(user)


  return (
    <div className="outline flex flex-col justify-center items-center w-full">
      <header className="outline outline-red-400">
        <h1 className='text-2xl'>Настройки</h1>
      </header>
      <main className="outline outline-pink-500">
        <p>Пользователь:</p>
        <div className="flex items-center justify-center flex-col outline outline-sky-400">
          <img className='w-[80px] h-[80px] rounded-full' src={photoUrl} alt='avatar'/>
          <p>Имя пользователя: {username}</p>
          <p>Имя: {name}</p>
          <p>Фамилия: {lastname}</p>
        </div>
      </main>
    </div>
  );
}