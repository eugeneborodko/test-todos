import React, { FC } from 'react'
import './button.css'
interface ButtonProps {
  message: string
  buttonText: string
  children: React.ReactNode
}

const Button: FC<ButtonProps> = ({ message, buttonText, children }) => {
  const myOnClick = () => {
    alert(message)
  }

  return (
    <button onClick={myOnClick} className="button">
      {children}  
    </button> //все что внутри
  )
}

export default Button 
