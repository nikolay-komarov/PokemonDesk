import React from 'react';

import s from './button.module.scss';

interface ButtonProps {
  onClick: (evt: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button type="button" className={s.root} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
