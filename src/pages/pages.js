// pages/pages.js
import UsersPage from "./UsersPages.jsx";
import ProfiPage from "./ProfiPage.jsx";
import HomePage from "./HomePage.jsx";
import SettingsPage from "./SettingsPage.jsx";
import BecomeProfi from "./BecomeProfi.jsx";
import HomeProfiPage from "./HomeProfiPage.jsx";

// Словарь всех страниц по ключу (card.href)
export const pages = {
  home: HomePage,
  homeProfi: HomeProfiPage,
  users: UsersPage,
  profi: ProfiPage,
  settings: SettingsPage,
  becomeProfi: BecomeProfi,
};