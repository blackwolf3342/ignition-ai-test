import React from "react";
import './style.scss'

export default function InfoBlock({ children, reversed_bg = false, onClick = () => {}}: { children: React.ReactNode, reversed_bg?: boolean, onClick?: React.MouseEventHandler<HTMLDivElement> }) {


  return (
    <div className={`info-block ${reversed_bg && 'reversed-bg'}`} onClick={onClick}>
      {children}
    </div>
  )
}