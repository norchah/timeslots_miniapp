import React from 'react';
import {useTelegramNavigation} from "../hooks/useTelegramNavigation.js";

export default function UsersPages({navigate, tgData, user, safeTop, safeBottom}) {
  useTelegramNavigation(tgData, {backPage: 'home', navigate})
  return (
    <div>Users Page</div>
  );
}
