import React from 'react';
import {useMiniApp} from "../hooks/useMiniApp.js";

export default function HomePage({ navigate, user, safeTop, safeBottom }) {
  return (
    <div>
      <h1>Добро пожаловать в TimeSlots</h1>
      <p>safe Bottom: {safeBottom}</p>
      <p>safe Top: {safeTop}</p>
      <button className='w-[40px] h-[40px] rounded-xl bg-sky-600' onClick={() => {
        navigate('settings')
      }}>settings
      </button>
    </div>
  );
}
