import React from 'react';
import {useTelegramBackButton} from "../hooks/useTelegramBackButton.js";

export default function SettingsPage({navigate, tgData, user, safeTop, safeBottom}) {
  useTelegramBackButton(tgData, 'home', navigate)
  console.log('SETTINGS:::: user::', user)
  if (!user) return <p>Загрузка пользователя...</p>;
  return (
    <div>
      <h1>Настройки</h1>
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