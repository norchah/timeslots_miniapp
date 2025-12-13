import React from 'react';
import { useTelegramNavigation } from "../hooks/useTelegramNavigation.js";
import { getUserDisplayData } from "../utils/utils.js";
import EditDisplayNameForm from "../components/forms/EditDisplayNameForm.jsx";
import UserApi from "../api/userApi.js";
import ButtonMain from "../components/buttons/buttonMain.jsx";
import { useUserStore } from "../store/useUserStore";

export default function SettingsPage({ navigate, tgData, user }) {
  useTelegramNavigation(tgData, { backPage: 'home', navigate });

  const { username, name, lastname, photoUrl } = getUserDisplayData(user);

  // 🔥 подписка на zustand → авто-перерендер
  const { displayName, displayLastname } = useUserStore();

  async function saveNames(values) {
    try {
      const api = new UserApi();
      await api.updateNames(
        user.id,
        values.displayName,
        values.displayLastname
      );
    } catch (e) {
      console.error("Ошибка обновления", e);
    }
  }

  return (
    <div className="flex flex-col items-center w-full">
      <header>
        <h1 className="text-2xl">Настройки</h1>
      </header>

      <main className="w-full">
        <div className="flex flex-col items-center">
          <img
            className="w-[80px] h-[80px] rounded-full"
            src={photoUrl}
            alt="avatar"
          />

          <p>Имя пользователя: {username}</p>
          <p>Имя: {displayName || name}</p>
          <p>Фамилия: {displayLastname || lastname}</p>

          <EditDisplayNameForm user={user} onSubmit={saveNames} />

          <ButtonMain
            navigate={navigate}
            page="becomeProfi"
            tgData={tgData}
            user={user}
          >
            Начать предоставлять услуги
          </ButtonMain>
        </div>
      </main>
    </div>
  );
}