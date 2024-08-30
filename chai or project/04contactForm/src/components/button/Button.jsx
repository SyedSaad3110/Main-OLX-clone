import React from 'react'
import  styles from './button.module.css'

function Button({isOutLine, text, icon, ...rest}) {
  return (
    <button {...rest} className={isOutLine ?  styles.outline_btn :  styles.primary_btn}>
      {icon}
      {text}
    </button>
  )
}

export default Button
