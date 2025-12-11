import React from 'react';
import {useTelegramBackButton} from "../hooks/useTelegramBackButton.js";

export default function SettingsPage({navigate, tgData, user, safeTop, safeBottom}) {
  useTelegramBackButton(tgData, 'home', navigate)

  // if (!user) return <p>Загрузка пользователя...</p>;
  return (
    <div>
      <h1>Настройки</h1>
      <p>Пользователь:</p>
      <p className='w-[450px]'>{JSON.stringify(user, null, 2)}</p>
      <p>{user.username}</p>
      {/*<p>{user.firstName}</p>*/}
      {/*<p>{user.lastName}</p>*/}
      {/*<p>{user.photoUrl}</p>*/}
      {/*<p>{user.displayName}</p>*/}
      {/*<p>{user.displayLastname}</p>*/}
      {/*<p>{user.displayPhoto}</p>*/}
    </div>
  );
}