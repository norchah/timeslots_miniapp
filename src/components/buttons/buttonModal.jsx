import React from 'react';
import { useHaptic } from '../../hooks/useHaptic';
import { useModalStore } from '../../stores/useModalStore';
import { usePageStore } from '../../stores/usePageStore';

export default function ButtonModal({ children, modal, page, className }) {
  const { impact } = useHaptic();
  const open = useModalStore((s) => s.open);
  const setMode = usePageStore((s) => s.setMode);

  const handleClick = () => {
    impact('light'); // тактильная отдача

    if (modal) open(modal);
    if (page) setMode(page);
  };

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
}