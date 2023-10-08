import React, { MouseEventHandler } from 'react'
import './style.scss'

type Props = {
  children: React.ReactNode,
  outline?: boolean
  onClick: MouseEventHandler<HTMLButtonElement>
}

export default function Button({ children, outline = false, onClick}: Props) {


  return (
    <button className={`btn ${outline && 'btn-outline'}`} onClick={onClick}>
      {children}
    </button>
  )
}