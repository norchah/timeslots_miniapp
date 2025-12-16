import React from 'react';
import {useHaptic} from '../../hooks/useHaptic';

export default function ButtonBase(
  {
    children,
    onClick,
    className = '',
    type = 'button',
    disabled = false,
    haptic = 'light', // none | light | medium | heavy
  }) {
  const {impact} = useHaptic();

  const handleClick = (e) => {
    if (disabled) return;

    if (haptic !== 'none') {
      impact(haptic);
    }

    onClick?.(e);
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={handleClick}
      className={`
        mt-2 py-2 px-4 rounded-xl w-20 h-20
        bg-blue-500 text-white font-medium
        transition-all
        active:scale-[0.97]
        disabled:opacity-50 disabled:active:scale-100
        ${className}
      `}
    >
      {children}
    </button>
  );
}