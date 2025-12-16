import React from 'react';
import {useModalStore} from '../../stores/useModalStore';
import ButtonBase from './ButtonBase.jsx';

export default function ButtonOpenModal({children, modal, className}) {
  const open = useModalStore((s) => s.open);

  const handleClick = () => {
    if (modal) open(modal);
  };

  return (
    <ButtonBase
      onClick={handleClick}
      className={className}
    >
      {children}
    </ButtonBase>
  );
}