import React from 'react';
import {getUserDisplayData} from "../../utils/utils";
import EditDisplayNameForm from "../../components/forms/EditDisplayNameForm";
import {useUserStore} from "../../stores/useUserStore";
import {useI18nStore} from "../../stores/useI18nStore";
import {useIsPro} from '../../stores/useProfiSelectors';
import BecomeProfiModal from "../../components/modal/BecomeProfiModal";
import ButtonOpenModal from "../buttons/ButtonOpenModal.jsx";
import ButtonNavigate from "../buttons/ButtonNavigate.jsx";

export default function SettingsModal() {
  const isPro = useIsPro();
  const user = useUserStore();
  const text = useI18nStore((s) => s.text);
  const {username, name, lastname, photoUrl} = getUserDisplayData(user);

  const button = isPro
    ? <ButtonNavigate page={'homeProfi'}>{text('switchToProfi')}</ButtonNavigate>
    : <ButtonOpenModal modal={BecomeProfiModal}>{text('becomeProfi')}</ButtonOpenModal>

  return (
    <div className="flex flex-col items-center w-full py-4 text-white outline outline-white">
      <header className="mb-4">
        <h1 className="text-2xl">{text('settings')}</h1>
      </header>

      <main className="w-full">
        <div className="flex flex-col items-center gap-2">
          <img
            className="w-[80px] h-[80px] rounded-full"
            src={photoUrl}
            alt="avatar"
          />

          <p>{text('username')}: {username}</p>
          <p>{text('name')}: {user.displayName || name}</p>
          <p>{text('lastname')}: {user.displayLastname || lastname}</p>

          <EditDisplayNameForm/>

          {button}
        </div>
      </main>
    </div>
  );
}