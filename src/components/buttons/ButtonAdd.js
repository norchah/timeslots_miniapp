import React from 'react';
import {usePageStore} from '../../stores/usePageStore';
import {useModalStore} from '../../stores/useModalStore';
import ButtonBase from './ButtonBase.jsx';

export default function ButtonAdd({children, className}) {
  const setMode = usePageStore((s) => s.setMode);
  const resetModal = useModalStore((s) => s.reset);

  return (
    <ButtonBase onClick={handleClick} className={className}>
      {children}
    </ButtonBase>
  );
}