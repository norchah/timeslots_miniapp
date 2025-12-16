import React from 'react';
import { useHaptic } from '../../hooks/useHaptic';

export default function ButtonSubmit({children, className, type = 'submit'}) {
  const { impact } = useHaptic();

  return (
    <button
      type={type}
      onClick={() => impact('light')}
      className={`
        mt-2 py-2 px-1 rounded-xl bg-blue-500 text-white
        font-medium transition-all active:scale-[0.97]
        ${className || ''}
      `}
    >
      {children}
    </button>
  );
}