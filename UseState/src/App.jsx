import React from 'react'
import { useState } from 'react'
const App = () => {
  const [num,setNum] = useState(0)
  function IncreaseNum(){
    setNum(num+1)
  }
  function DecreaseNum(){
    setNum(num-1)
  }
  function JumpBy5(){
    setNum(num+5)
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={IncreaseNum}>Increase</button>
      <button onClick={DecreaseNum}>Decrease</button>
      <button onClick={JumpBy5}>Increase by 5</button>
      
    </div>
  )
}

export default App
