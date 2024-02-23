import React, { ReactNode } from 'react'
import styles from './CustomButton.module.css'

interface CustomButtonProps {
  children: ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({ children }) => {
  return (
    <button className={styles['cybr-btn']} type='button'>
      {children}
    </button>
  )
}

export default CustomButton
