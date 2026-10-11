import React from 'react'
import axios from 'axios'
import { useState } from 'react'
const App = () => {
  // localStorage.clear()
  // sessionStorage.clear()
  // localStorage.setItem('user','Sarthak')
  // const user=localStorage.getItem('user')
  // localStorage.removeItem('user')
  // const user={
  //   username:'Sarthak',
  //   age:69,
  //   city:'Bhoapal'
  // }
  // localStorage.setItem('user',JSON.stringify(user))
  // const user=JSON.parse(localStorage.getItem('user'))
  //  const getData=async ()=>{
    // const response=await fetch('https://jsonplaceholder.typicode.com/todos')
    // const data=await response.json()
  //  }
  const [data, setData] = useState([])
  const getData=async()=>{
    // const {data}= await axios.get('https://jsonplaceholder.typicode.com/users')
    // console.log(data)
    const res= await axios.get('https://picsum.photos/v2/list')
    setData(res.data)
  }
  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {
        data.map(function(elem,idx){
          return <h1 key={idx}>Hello{elem.author}</h1>
        })
        }
      </div>
    </div>
  )
}

export default App