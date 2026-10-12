import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
const App = () => {
  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)
  const getData=async()=>{
   const res= await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=100`)
    setUserData(res.data)
  }
  useEffect(function(){
     getData()
  },[index])
  let printUserData=<h3 className='text-gray-400'>No user Available</h3>
  if(userData.length>0){
    printUserData=userData.map(function(elem,idx){
       
    return <div key={idx}>
      <a href={elem.url} target='_blank'>
    <div className='h-40 w-44 bg-white  overflow-hidden rounded-xl' key={idx}>
      <img className='h-[full]  w-full object-cover' src={elem.download_url} />
    </div>
    <h2 className='font-bold text-lg'>{elem.author}</h2>
    </a>
    </div>
    })
  }
  return (
    <div className='bg-black p-4 h-screen overflow-auto text-white'>
      <div className='flex flex-wrap gap-4'>
       {printUserData}
      </div>
       <div className='flex justify-center items-center gap-6 p-4'>
        <button onClick={()=>{
            if(index>1){
              setIndex(index-1)
            }
           setIndex(index-1)
        }} className='bg-amber-400 text-black rounded px-4 py-2 text-smcursor-pointer activate:scale-95  font-semibold'>Prev</button>
        <button  onClick={()=>{
           setIndex(index+1)
        }} className='bg-amber-400 text-black rounded px-4 py-2 text-smcursor-pointer activate:scale-95 font-semibold'>Next</button>
       </div>
    </div>
  )
}

export default App