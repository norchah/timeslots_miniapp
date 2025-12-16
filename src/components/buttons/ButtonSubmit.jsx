import React from 'react';
import ButtonBase from './ButtonBase.jsx';

export default function ButtonSubmit({children, className}) {
  return (
    <ButtonBase
      type="submit"
      haptic="medium"
      className={className}
    >
      {children}
    </ButtonBase>
  );
}