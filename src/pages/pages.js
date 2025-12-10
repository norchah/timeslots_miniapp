// pages/pages.js
import UsersPage from "./UsersPage.jsx";
import SettingsPage from "./SettingsPage.jsx";
import HomePage from "./HomePage.jsx";

// Словарь всех страниц по ключу (card.href)
export const pages = {
  home: HomePage,
  users: UsersPage,
  settings: SettingsPage,
};

// Универсальная функция рендеринга страницы
export function renderPageByKey(key) {
  const PageComponent = pages[key] ?? pages.home;
  return <PageComponent />;
}