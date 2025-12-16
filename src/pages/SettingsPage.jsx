import React from 'react';
import {getUserDisplayData} from "../utils/utils";
import EditDisplayNameForm from "../components/forms/EditDisplayNameForm";

import {useUserStore} from "../stores/useUserStore";
import {useI18nStore} from "../stores/useI18nStore";
import {useIsPro} from '../stores/useProfiSelectors';
import ButtonNavigate from "../components/buttons/ButtonNavigate.jsx";
import ButtonOpenModal from "../components/buttons/buttonModal.jsx";
import BecomeProfiModal from "../components/modal/BecomeProfiModal.jsx";

export default function SettingsPage() {
  const user = useUserStore();
  const text = useI18nStore((s) => s.text);
  const isPro = useIsPro();

  const {username, name, lastname, photoUrl} =
    getUserDisplayData(user);

  const button = isPro
    ? <ButtonNavigate page="homeProfi">{text('switchToProfi')}</ButtonNavigate>
    : <ButtonOpenModal modal={BecomeProfiModal}>{text('becomeProfi')}</ButtonOpenModal>;


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

          {button}
        </div>
      </main>
    </div>
  );
}