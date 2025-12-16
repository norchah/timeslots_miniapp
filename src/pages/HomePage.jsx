import React from 'react';
import ButtonMain from "../components/buttons/buttonMain.jsx";
import {useModalStore} from "../stores/useModalStore";
import SettingsModal from "../components/modal/SettingsModal";
import ButtonModal from "../components/buttons/buttonModal.jsx";

export default function HomePage() {
  const open = useModalStore((s) => s.open);

  return (
    <div>
      <h1>Добро пожаловать в TimeSlots</h1>

      {/* Можно ещё одну */}
      <ButtonMain>
        Пользователи
      </ButtonMain>

      <ButtonModal modal={SettingsModal}>
        Настройки
      </ButtonModal>

    </div>
  );
}
