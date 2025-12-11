import React from 'react';
import {useMiniApp} from "../hooks/useMiniApp.js";

export default function HomePage({ navigate, user, safeTop, safeBottom }) {
  return (
    <div>
      <h1>Добро пожаловать в TimeSlots</h1>
      <p>safe Bottom: {safeBottom}</p>
      <p>safe Top: {safeTop}</p>
      <button onClick={() => {
        navigate('settings')
      }}>settings
      </button>
    </div>
  );
}
