import React from 'react';
import {useHaptic} from '../../hooks/useHaptic';
import {useModalStore} from '../../stores/useModalStore';

export default function ButtonOpenModal({children, modal, className}) {
  const {impact} = useHaptic();
  const open = useModalStore((s) => s.open);

  const handleClick = () => {
    impact('light'); // тактильная отдача
    if (modal) open(modal);
  };

  return (
    <button onClick={handleClick} className={`
        mt-2 py-2 px-1 rounded-xl bg-blue-500 text-white
        font-medium transition-all active:scale-[0.97]
        ${className || ''}
      `}>
      {children}
    </button>
  );
}