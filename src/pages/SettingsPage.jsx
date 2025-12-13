import React, {useEffect} from 'react';
import {useTelegramNavigation} from "../hooks/useTelegramNavigation.js";
import {getUserDisplayData} from "../utils/utils.js";
import EditDisplayNameForm from "../components/forms/EditDisplayNameForm.jsx";
import UserApi from "../api/userApi.js";
import ButtonMain from "../components/buttons/buttonMain.jsx";
import { useUserStore } from "../store/useUserStore";



export default function SettingsPage({navigate, tgData, user, safeTop, safeBottom}) {
  useTelegramNavigation(tgData, {backPage: 'home', navigate})
  const {username, name, lastname, photoUrl} = getUserDisplayData(user)
  const {
  displayName,
  displayLastname,
} = useUserStore();
  let finalName = displayName || name;
  let finalLastname = displayLastname || lastname;

  useEffect(() =>{
    finalName = displayName || name;
    finalLastname = displayLastname || lastname;
  }, [finalName, finalLastname]);

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
          <p>Имя: {displayName || name}</p>
          <p>Фамилия: {displayLastname || lastname}</p>
          <EditDisplayNameForm user={user} onSubmit={saveNames}/>
          <ButtonMain
            navigate={navigate}
            page={'becomeProfi'}
            tgData={tgData}
            user={user}
          >Начать предоставлять услуги
          </ButtonMain>
        </div>
      </main>
    </div>
  );
}