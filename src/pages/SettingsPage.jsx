import React from 'react';
import {useTelegramNavigation} from "../hooks/useTelegramNavigation.js";

export default function SettingsPage({navigate, tgData, user, safeTop, safeBottom}) {
  useTelegramNavigation(tgData, {backPage: 'home', navigate})

  return (
    <div>
      <h1>Настройки</h1>
      <p>Пользователь:</p>
      <p className='w-[400px]'>{JSON.stringify(user, null, 2)}</p>
      <p>{user.username}</p>
      <p>{user.firstName}</p>
      <p>{user.lastName}</p>
      <p>{user.photoUrl}</p>
      <p>{user.displayName}</p>
      <p>{user.displayLastname}</p>
      <p>{user.displayPhoto}</p>
    </div>
  );
}