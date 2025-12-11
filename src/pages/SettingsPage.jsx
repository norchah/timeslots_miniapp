import React from 'react';
import {useTelegramBackButton} from "../hooks/useTelegramBackButton.js";

export default function SettingsPage({navigate, tgData, user, safeTop, safeBottom}) {
  useTelegramBackButton(tgData, 'home', navigate)
  return (
    <div>
      <h1>Настройки</h1>
      <p>{user.username}</p>
      <p>{user.first_name}</p>
      <p>{user.last_name}</p>
      <p>{user.photo_url}</p>
      <p>{user.display_name}</p>
      <p>{user.display_lastname}</p>
    </div>
  );
}