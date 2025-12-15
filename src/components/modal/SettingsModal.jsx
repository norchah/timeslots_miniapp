// components/modals/SettingsModal.jsx
import React from 'react';
import {getUserDisplayData} from "../../utils/utils";
import EditDisplayNameForm from "../../components/forms/EditDisplayNameForm";
import ButtonMain from "../../components/buttons/buttonMain";
import {useUserStore} from "../../stores/useUserStore";
import {useI18nStore} from "../../stores/useI18nStore";
import {useIsPro} from '../../stores/useProfiSelectors';
import {useModalStore} from "../../stores/useModalStore";

export default function SettingsModal() {
  const close = useModalStore((s) => s.close);

  const user = useUserStore();
  const text = useI18nStore((s) => s.text);
  const isPro = useIsPro();

  const {username, name, lastname, photoUrl} =
    getUserDisplayData(user);

  const buttonText = isPro
    ? text('switchToProfi')
    : text('becomeProfi');

  return (
    <div className="flex flex-col items-center w-full py-4 text-white">
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

          {/* Кнопка теперь открывает следующую модалку */}
          <ButtonMain
            onClick={() => {
              close();
              // тут дальше можно открыть другую модалку
            }}
          >
            {buttonText}
          </ButtonMain>
        </div>
      </main>
    </div>
  );
}