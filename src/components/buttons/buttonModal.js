import React from 'react';
import SettingsModal from "../modal/SettingsModal.jsx";

export default function ButtonModal({children, open, page, className}) {
  return (
    <button
      type='button'
      onClick={() => open(page)}
      className={`
              mt-2 py-2 px-1 rounded-xl bg-blue-500 text-white
              font-medium transition-all active:scale-[0.97]
              ${className}`}
    >{children}
    </button>
  );
}
