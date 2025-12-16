import React from 'react';
import SettingsModal from "../components/modal/SettingsModal";
import ButtonOpenModal from "../components/buttons/ButtonOpenModal.jsx";
import BecomeProfiModal from "../components/modal/BecomeProfiModal.jsx";
import {useI18nStore} from "../stores/useI18nStore.js";

export default function HomePage() {
  const text = useI18nStore((s) => s.text);
  return (
    <div>
      <h1>Добро пожаловать в TimeSlots</h1>

      <ButtonOpenModal modal={BecomeProfiModal}>
        {text('becomeProfi')}
      </ButtonOpenModal>

      <ButtonOpenModal modal={SettingsModal}>
        Настройки
      </ButtonOpenModal>

    </div>
  );
}
