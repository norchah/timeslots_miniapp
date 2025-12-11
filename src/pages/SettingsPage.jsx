import React from 'react';
import {useTelegramNavigation} from "../hooks/useTelegramNavigation.js";
import {getUserDisplayData} from "../utils/utils.js";
import EditDisplayNameForm from "../components/forms/EditDisplayNameForm.jsx";
import UserApi from "../api/userApi.js";


export default function SettingsPage({navigate, tgData, user, safeTop, safeBottom}) {
  useTelegramNavigation(tgData, {backPage: 'home', navigate})
  const {username, name, lastname, photoUrl} = getUserDisplayData(user)


  async function saveNames(values) {
    try {
      const api = new UserApi();
      const updated = await api.updateNames(
        user.id,
        values.displayName,
        values.displayLastname
      );

      console.log("Updated user:", updated);

      // можно перезаписать local state, если нужно
      // navigate("home");
    } catch (e) {
      console.error("Ошибка обновления", e);
    }
  }


  return (
    <div className="outline flex flex-col justify-center items-center w-full">
      <header className="outline outline-red-400">
        <h1 className='text-2xl'>Настройки</h1>
      </header>
      <main className="outline outline-pink-500 w-full">
        <p>Пользователь:</p>
        <div className="flex items-center justify-center flex-col outline outline-sky-400">
          <img className='w-[80px] h-[80px] rounded-full' src={photoUrl} alt='avatar'/>
          <p>Имя пользователя: {username}</p>
          <p>Имя: {name}</p>
          <p>Фамилия: {lastname}</p>
          <EditDisplayNameForm user={user} onSubmit={saveNames}/>
          <button
            type="button"
            className="
              mt-2 py-2 rounded-xl bg-blue-500 text-white
              font-medium transition-all active:scale-[0.97]"
          >Начать предоставлять услуги
          </button>
        </div>
      </main>
    </div>
  );
}