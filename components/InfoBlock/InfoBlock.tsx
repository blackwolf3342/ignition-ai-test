import React from "react";
import './style.scss'

export default function InfoBlock({ children, reversed_bg = false}: { children: React.ReactNode, reversed_bg?: boolean }) {


  return (
    <div className={`info-block ${reversed_bg && 'reversed-bg'}`}>
      {children}
    </div>
  )
}