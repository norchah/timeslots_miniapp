import React from 'react';
import SettingsModal from "../components/modal/SettingsModal";
import ButtonOpenModal from "../components/buttons/ButtonOpenModal.jsx";
import BecomeProfiModal from "../components/modal/BecomeProfiModal.jsx";
import {useI18nStore} from "../stores/useI18nStore.js";
import ButtonNavigate from "../components/buttons/ButtonNavigate.jsx";
import {useUserStore} from "../stores/useUserStore.js";

export default function HomePage() {
  const text = useI18nStore((s) => s.text);
  const isPro = useUserStore((s) => s.isPro);

  const button = isPro
    ? <ButtonNavigate page={'homeProfi'}>{text('switchToProfi')}</ButtonNavigate>
    : <ButtonOpenModal modal={BecomeProfiModal}>{text('becomeProfi')}</ButtonOpenModal>


  return (
    <div>
      <h1>Добро пожаловать в TimeSlots</h1>
      {button}
      <ButtonOpenModal modal={SettingsModal}>
        Настройки
      </ButtonOpenModal>

    </div>
  );
}
