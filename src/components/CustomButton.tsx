import React, { ReactNode, MouseEvent } from 'react';
import styles from '../../styles/Button.module.css';

interface CustomButtonProps {
  className?: string;
  ariaLabel?: string;
  primary?: boolean;
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ primary = false, className, ariaLabel, children, onClick}) => (
  <button
    type="button"
    className={`
      flex items-center justify-center font-bold border-0 px-4 cursor-pointer text-color-1 ${styles.button}
      ${className || ''}
      ${primary ? styles.btnPrimary : ""}
    `}
    aria-label={ariaLabel}
    onClick={onClick}
  >
    {children}
  </button>
);

export default CustomButton;