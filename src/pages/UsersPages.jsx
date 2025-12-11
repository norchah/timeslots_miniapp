import React from 'react';
import {useTelegramBackButton} from "../hooks/useTelegramBackButton.js";

export default function UsersPages({navigate, tgData, user, safeTop, safeBottom}) {
  useTelegramBackButton(tgData, 'home', navigate)
  return (
    <div>Users Page</div>
  );
}
