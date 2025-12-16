import React from 'react';
import {useProfiStore} from "../../stores/useProfiStore.js";

export default function ProfiClientsModal() {
  const clients = useProfiStore((s) => s.profi.clients)


  if (!clients || !clients.length) {
    return (
      <div>Клиентов нет</div>
    );
  }
  return (
    <div>Тут будут клиенты, типа легка срмка</div>
  );
}
