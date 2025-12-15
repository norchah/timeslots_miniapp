import React from 'react';
import { useHaptic } from '../../hooks/useHaptic';

export default function ButtonModal({children, open, page, className}) {
  const { impact } = useHaptic();

  return (
    <button
      type='button'
      onClick={() => {
        impact('light');
        open(page)
      }}
      className={`
              mt-2 py-2 px-1 rounded-xl bg-blue-500 text-white
              font-medium transition-all active:scale-[0.97]
              ${className}`}
    >{children}
    </button>
  );
}
