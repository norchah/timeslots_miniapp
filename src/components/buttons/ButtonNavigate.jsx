import React from 'react';
import {useHaptic} from '../../hooks/useHaptic';
import {usePageStore} from '../../stores/usePageStore';

export default function ButtonNavigate({children, page, className}) {
  const {impact} = useHaptic();
  const setMode = usePageStore((s) => s.setMode);

  const handleClick = () => {
    impact('light');
    if (page) setMode(page);
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