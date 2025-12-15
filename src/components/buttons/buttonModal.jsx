// components/buttons/buttonModal.jsx
import React from 'react';
import {useHaptic} from '../../hooks/useHaptic';
import {useModalStore} from '../../stores/useModalStore.js';

export default function ButtonModal({children, page, navigate, className}) {
  const {impact} = useHaptic();
  const open = useModalStore((s) => s.open);

  const handleClick = () => {
    impact();

    if (page) {
      if (typeof page === 'string' && navigate) {
        // переход на страницу
        navigate(page);
      } else if (typeof page === 'function') {
        // открываем модалку
        open(page, { navigate });
      }
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`
        mt-2 py-2 px-3 rounded-xl bg-blue-500 text-white
        font-medium transition-all active:scale-[0.97]
        ${className || ''}
      `}
    >
      {children}
    </button>
  );
}