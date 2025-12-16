import React from 'react';
import ButtonNavigate from "../components/buttons/ButtonNavigate.jsx";
import ButtonOpenModal from "../components/buttons/ButtonOpenModal.jsx";
import ProfiClientsModal from "../components/modal/ProfiClientsModal.jsx";
import ProfiTagsModal from "../components/modal/ProfiTagsModal.jsx";
import ProfiScheduleModal from "../components/modal/ProfiScheduleModal.jsx";

export default function HomeProfiPage() {
  return (
    <div className='flex flex-col justify-center inline-flex items-center'>
      <h1>Home Page для пользователя предоставляющего услуги</h1>
      <p>настройки, записи то се</p>
      <ul>
        <li>
          <ButtonNavigate
            page='home'
          >
            Переключиться на пользователя
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
