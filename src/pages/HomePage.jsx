import React from 'react';
import ButtonMain from "../components/buttons/buttonMain.jsx";
import SettingsModal from "../components/modal/SettingsModal";
import ButtonOpenModal from "../components/buttons/ButtonOpenModal.jsx";

export default function HomePage() {
  return (
    <div>
      <h1>Добро пожаловать в TimeSlots</h1>

      {/* Можно ещё одну */}
      <ButtonMain>
        Пользователи
      </ButtonMain>

      <ButtonOpenModal modal={SettingsModal}>
        Настройки
      </ButtonOpenModal>

    </div>
  );
}
