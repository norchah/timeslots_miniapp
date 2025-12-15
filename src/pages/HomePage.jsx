import React from 'react';
import {useTelegramNavigation} from "../hooks/useTelegramNavigation.js";
import ButtonMain from "../components/buttons/buttonMain.jsx";
import {useModalStore} from "../stores/useModalStore";
import SettingsModal from "../components/modal/SettingsModal";
import ButtonModal from "../components/buttons/buttonModal.js";

export default function HomePage({navigate, tgData}) {
  useTelegramNavigation(tgData, {navigate})

  const open = useModalStore((s) => s.open);

  return (
    <div>
      <h1>Добро пожаловать в TimeSlots</h1>


      {/* Универсальная карточка */}

      <ButtonMain navigate={navigate} page="settings" className='mr-1'>
        Настройки
      </ButtonMain>

      {/* Можно ещё одну */}
      <ButtonMain navigate={navigate} page="users">
        Пользователи
      </ButtonMain>

      <ButtonModal open={open} page={SettingsModal}>
        опен Настройки
      </ButtonModal>

    </div>
  );
}
