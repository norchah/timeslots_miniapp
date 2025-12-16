import React from 'react';
import { useHaptic } from '../../hooks/useHaptic';
import { usePageStore } from '../../stores/usePageStore';

export default function ButtonNavigate({ children, page, className }) {
  const { impact } = useHaptic();
  const setMode = usePageStore((s) => s.setMode);

  const handleClick = () => {
    impact('light');
    if (page) setMode(page);
  };

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
}