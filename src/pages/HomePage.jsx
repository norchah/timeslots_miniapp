import React from 'react';
import Card from "../components/cards/card.jsx";

export default function HomePage({navigate, tgData, user, safeTop, safeBottom}) {
  return (
    <div style={{paddingTop: safeTop, paddingBottom: safeBottom}}>
      <h1>Добро пожаловать в TimeSlots</h1>
      <p>safe Bottom: {safeBottom}</p>
      <p>safe Top: {safeTop}</p>
      {user && (
        <p className="mt-2 text-white">
          Привет, {user.first_name} {user.last_name}
        </p>
      )}

      {/* Универсальная карточка */}
      <Card navigate={navigate} page="settings">
        Настройки
      </Card>

      {/* Можно ещё одну */}
      <Card navigate={navigate} page="profile">
        Профиль
      </Card>

      {/* Старая кнопка для примера */}
      <button
        className="w-[60px] h-[40px] rounded-xl bg-sky-600 mt-2"
        onClick={() => navigate("settings")}
      >
        settings
      </button>
    </div>
  );
}
