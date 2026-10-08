import React from 'react'
import { useState } from 'react'
const App = () => {
  const [num, setNum] = useState(0)
  const [username,setUsername]=useState('Samu')
  const [users,setUsers]=useState([10,20,30])
  function ChangeNum(){
    setNum(30)
    setUsername('Alice')
    setUsers([100,200,300])
  }
  return (
    <div>
      <h1>Value of num is {num} </h1>
      <h1>Username is {username}</h1>
      <button onClick={ChangeNum}>Click</button>
    </div>
  )
}

export default App
