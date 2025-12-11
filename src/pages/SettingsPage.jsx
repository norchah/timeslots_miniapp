import React from 'react';
import {useTelegramNavigation} from "../hooks/useTelegramNavigation.js";

export default function SettingsPage({navigate, tgData, user, safeTop, safeBottom}) {
  useTelegramNavigation(tgData, {backPage: 'home', navigate})

  return (
    <div>
      <h1>Настройки</h1>
      <p>Пользователь:</p>
      <img className='w-[60px] h-[60px] rounded-full' src={user.photo_url} alt='avatar'/>
      <p>{user.username}</p>
      <p>{user.firstName}</p>
      <p>{user.lastName}</p>
      <p>{user.photoUrl}</p>
      <p>{user.displayName}</p>
      <p>{user.displayLastname}</p>
    </div>
  );
}