import React from 'react';
import ButtonNavigate from "../components/buttons/ButtonNavigate.jsx";
import ButtonOpenModal from "../components/buttons/ButtonOpenModal.jsx";
import ProfiClientsModal from "../components/modal/ProfiClientsModal.jsx";
import ProfiTagsModal from "../components/modal/ProfiTagsModal.jsx";
import ProfiScheduleModal from "../components/modal/ProfiScheduleModal.jsx";
import {useProfiStore} from "../stores/useProfiStore.js";

export default function HomeProfiPage() {
  const profi = useProfiStore((s) => s.profi);
  console.log('HomeProfiPage :::::: profi', profi);
  return (
    <div className='flex flex-col justify-center inline-flex items-center px-3'>
      <h1>Тут у нас профи {profi.displayName}</h1>
      <img
        className="w-[80px] h-[80px] rounded-full"
        src={profi.photoUrl}
        alt="avatar"
      />
      <p>настройки, записи то се</p>
      <ul>
        <li>
          <ButtonNavigate
            page='home'
          >
          Как пользователя
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
          <ButtonOpenModal
            modal={ProfiTagsModal}
          >
            Мои теги
          </ButtonOpenModal>
        </li>
        <li>
          <ButtonOpenModal
            modal={ProfiScheduleModal}
          >
            Мое расписание
          </ButtonOpenModal>
        </li>
      </ul>
    </div>
  );
}
