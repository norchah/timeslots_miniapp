import React from 'react';
import {useTelegramNavigation} from "../hooks/useTelegramNavigation.js";
import ButtonMain from "../components/buttons/buttonMain.jsx";
import {useModalStore} from "../stores/useModalStore";
import SettingsModal from "../components/modal/SettingsModal";
import ButtonModal from "../components/buttons/buttonModal.jsx";

export default function HomePage({navigate, tgData}) {
  useTelegramNavigation(tgData, {navigate})

  const open = useModalStore((s) => s.open);

  return (
    <div>
      <h1>Добро пожаловать в TimeSlots</h1>

      {/* Можно ещё одну */}
      <ButtonMain navigate={navigate} page="users">
        Пользователи
      </ButtonMain>

      <ButtonModal open={open} page={SettingsModal} navigate={navigate}>
        опен Настройки
      </ButtonModal>

    </div>
  );
}
