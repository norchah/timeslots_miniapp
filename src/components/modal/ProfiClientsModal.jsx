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
    <div className="flex flex-col gap-2">
      {clients.map((client) => (
        <div key={client.id}>
          <p>id: {client.id}</p>
          <p>имя: {client.customName}</p>
          <p>фамилия: {client.customLastname}</p>
          <p>заметка: {client.notes}</p>
        </div>
      ))}
    </div>
  );
}
