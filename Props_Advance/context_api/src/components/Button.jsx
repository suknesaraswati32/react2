import React, { useContext } from 'react'
import Navbar from './Navbar'
import { ThemeDataContext } from '../context/ThemeContext'

const Button = () => {
  const [theme,setTheme]=useContext(ThemeDataContext)
  const changeTheme=()=>{
    setTheme('dark')
  }
  return (
    <div>
      <button onClick={changeTheme}>Change theme</button>
    </div>
  )
}

export default Button
