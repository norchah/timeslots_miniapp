import React from 'react';
import {useMiniApp} from "../hooks/useMiniApp.js";

export default function HomePage(navigate, props) {
  return (
    <div>
      <h1>Добро пожаловать в TimeSlots</h1>
      <p>safe Bottom: {props.safeBottom}</p>
      <p>safe Top: {props.safeTop}</p>
      <button onClick={() => {
        navigate.setPage('settings')
      }}>settings
      </button>
    </div>
  );
}
