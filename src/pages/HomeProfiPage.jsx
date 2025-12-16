import React from 'react';
import ButtonNavigate from "../components/buttons/ButtonNavigate.jsx";
import ButtonOpenModal from "../components/buttons/ButtonOpenModal.jsx";
import ProfiClientsModal from "../components/modal/ProfiClientsModal.jsx";

export default function HomeProfiPage() {
  return (
    <div className='flex flex-col justify-center inline-flex items-center'>
      <h1 className='text-2xl'>Теперь ты профи</h1>
      <p>Скоро можно будет куда-то переключиться, на юзера например</p>
      <ul>
        <li>
          <ButtonNavigate
            page='home'
          >
            Стать юзером
          </ButtonNavigate>
        </li>
        <li>
          <ButtonOpenModal
            modal={ProfiClientsModal}
          >
            Мои клиенты
          </ButtonOpenModal>
        </li>
        <li>
          <ButtonOpenModal>Управление тегами</ButtonOpenModal>
        </li>
        <li>
          <ButtonOpenModal>тут будет расписание</ButtonOpenModal>
        </li>
      </ul>
    </div>
  );
}
