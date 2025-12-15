import React from 'react';
import {useTelegramNavigation} from "../hooks/useTelegramNavigation";
import {getUserDisplayData} from "../utils/utils";
import EditDisplayNameForm from "../components/forms/EditDisplayNameForm";
import ButtonMain from "../components/buttons/buttonMain";
import {useUserStore} from "../stores/useUserStore";
import {useAppSettings} from "../stores/useAppSettings";
import {useI18nStore} from "../stores/useI18nStore";

export default function SettingsPage({navigate, tgData}) {
  useTelegramNavigation(tgData, {backPage: 'home', navigate});

  const user = useUserStore();
  const text = useI18nStore((s) => s.text);

  const {username, name, lastname, photoUrl} =
    getUserDisplayData(user);

  return (
    <div className="flex flex-col items-center w-full py-4">
      <header>
        <h1 className="text-2xl">{text('settings')}</h1>
      </header>

      <main className="w-full">
        <div className="flex flex-col items-center">
          <img
            className="w-[80px] h-[80px] rounded-full"
            src={photoUrl}
            alt="avatar"
          />

          <p>{text('username')}: {username}</p>
          <p>{text('name')}: {user.displayName || name}</p>
          <p>{text('lastname')}: {user.displayLastname || lastname}</p>

          {/* 🔥 форма теперь автономная */}
          <EditDisplayNameForm/>

          <ButtonMain
            navigate={navigate}
            page="becomeProfi"
            tgData={tgData}
          >
            {text('becomeProfi')}
          </ButtonMain>
        </div>
      </main>
    </div>
  );
}