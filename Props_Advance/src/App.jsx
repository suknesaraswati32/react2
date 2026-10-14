import React from 'react'
import { useState } from 'react'
const [theme, setTheme] = useState('light')
const App = () => {
  return (
    <div>
      <h1>Theme is {theme}</h1>
      <Navbar theme={theme} setTheme={setTheme}/>
    </div>
  )
}

export default App
