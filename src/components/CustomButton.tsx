import React from 'react'

import styles from '../../styles/Button.module.css'

const CustomButton: React.FC<React.PropsWithChildren<{
  className?: string
  ariaLabel?: string
}>> = props => (
  <button
    type="button"
    className={`flex items-center justify-center font-bold text-black border-0 px-4 cursor-pointer ${styles.button} ${props.className || ''}`}
    aria-label={props.ariaLabel}
  >
    {props.children}
  </button>
)

export default CustomButton
