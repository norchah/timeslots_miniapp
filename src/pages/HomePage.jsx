import React from 'react';
import Card from "../components/cards/card.jsx";

export default function HomePage({navigate, tgData, user, safeTop, safeBottom}) {
  return (
    <div style={{paddingTop: safeTop, paddingBottom: safeBottom}}>
      <h1>Добро пожаловать в TimeSlots</h1>
      <p>safe Bottom: {safeBottom}</p>
      <p>safe Top: {safeTop}</p>

      {/* Универсальная карточка */}
      <Card navigate={navigate} page="settings">
        Настройки
      </Card>

      {/* Можно ещё одну */}
      <Card navigate={navigate} page="users">
        Пользователи
      </Card>

    </div>
  );
}
