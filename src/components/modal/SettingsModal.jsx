// components/modals/SettingsModal.jsx
import React from 'react';
import {getUserDisplayData} from "../../utils/utils";
import EditDisplayNameForm from "../../components/forms/EditDisplayNameForm";
import {useUserStore} from "../../stores/useUserStore";
import {useI18nStore} from "../../stores/useI18nStore";
import {useIsPro} from '../../stores/useProfiSelectors';
import {useModalStore} from "../../stores/useModalStore";
import BecomeProfiModal from "../../components/modal/BecomeProfiModal";
import ButtonModal from "../buttons/buttonModal.jsx";
import {useHaptic} from '../../hooks/useHaptic';
const close = useModalStore((s) => s.close);

export default function SettingsModal({navigate}) {
  const open = useModalStore((s) => s.open);
  const isPro = useIsPro();
  const user = useUserStore();
  const text = useI18nStore((s) => s.text);

  const handleProfiButton = () => {
    const {impact} = useHaptic();
    if (isPro) {
      // Уже Profi → просто переходим на страницу
      close();
      navigate('homeProfi');
    } else {
      // Не Profi → открываем модалку регистрации
      open(BecomeProfiModal);
    }
  }

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
          <ButtonModal open={open} page={handleProfiButton}>
            {buttonText}
          </ButtonModal>
        </div>
      </main>
    </div>
  );
}