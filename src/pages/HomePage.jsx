import React from 'react';

export default function HomePage() {
  return (
    <div>
      <h1>Добро пожаловать в TimeSlots</h1>
      <p>safe Bottom: {safeBottom}</p>
      <p>safe Top: {safeTop}</p>
      <button onClick={() => {
        setPage('settings')
      }}>settings
      </button>
    </div>
  );
}
