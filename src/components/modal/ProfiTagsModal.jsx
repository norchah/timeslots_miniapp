import React from 'react';
import {useProfiStore} from "../../stores/useProfiStore.js";
import ButtonOpenModal from "../buttons/ButtonOpenModal.jsx";

export default function ProfiTagsModal() {
  const tags = useProfiStore((s) => s.profi.tags)


  if (!tags || !tags.length) {
    return (
      <div className="flex flex-col justify-center items-center w-full">
        <h2>Добавьте свой первый тег</h2>
        <ButtonOpenModal modal={}>Добавить</ButtonOpenModal>
      </div>
    );
  }


  return (
    <div>Всякие крутые теги, замена, настройка и т.д.</div>
  );
}
