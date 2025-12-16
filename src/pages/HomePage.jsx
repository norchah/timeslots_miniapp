import React from 'react';
import SettingsModal from "../components/modal/SettingsModal";
import ButtonOpenModal from "../components/buttons/ButtonOpenModal.jsx";
import BecomeProfiModal from "../components/modal/BecomeProfiModal.jsx";
import {useI18nStore} from "../stores/useI18nStore.js";
import ButtonNavigate from "../components/buttons/ButtonNavigate.jsx";
import {useUserStore} from "../stores/useUserStore.js";

export default function HomePage() {
  const text = useI18nStore((s) => s.text);
  const user = useUserStore((s) => s);

  const button = user.isPro
    ? <ButtonNavigate page={'homeProfi'}>{text('switchToProfi')}</ButtonNavigate>
    : <ButtonOpenModal modal={BecomeProfiModal}>{text('becomeProfi')}</ButtonOpenModal>
  return (
    <div className='flex flex-col justify-center inline-flex items-center px-3'>
      <h1>Тут у нас Пользователь {user.displayName}</h1>
      <img
        className="w-[80px] h-[80px] rounded-full"
        src={user.photoUrl}
        // src={user.displayPhoto}
        alt="avatar"
      />
      <p>Можно будет записаться то се</p>
      {button}
      <ButtonOpenModal modal={SettingsModal}>
        Настройки
      </ButtonOpenModal>

    </div>
  );
}
