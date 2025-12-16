import React from 'react';
import {useHaptic} from '../../hooks/useHaptic';
import {usePageStore} from '../../stores/usePageStore';
import {useModalStore} from "../../stores/useModalStore.js";

export default function ButtonNavigate({children, page, className}) {
  const {impact} = useHaptic();
  const setMode = usePageStore((s) => s.setMode);
  const reset = useModalStore((s) => s.reset);

  const handleClick = () => {
    impact('light');
    if (page) setMode(page);
    reset()
  };

  return (
    <button onClick={handleClick} className={`
        mt-2 py-2 px-1 rounded-xl bg-blue-500 text-white
        transition-all active:scale-[0.97] text-sm
        ${className || ''}
      `}>
      {children}
    </button>
  );
}