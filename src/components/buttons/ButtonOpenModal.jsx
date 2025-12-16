import React from 'react';
import { useHaptic } from '../../hooks/useHaptic';
import { useModalStore } from '../../stores/useModalStore';

export default function ButtonOpenModal({ children, modal, className }) {
  const { impact } = useHaptic();
  const open = useModalStore((s) => s.open);

  const handleClick = () => {
    impact('light'); // тактильная отдача
    if (modal) open(modal);
  };

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
}