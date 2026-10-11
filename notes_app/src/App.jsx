import React from 'react'
import { useState } from 'react'
import {X} from 'lucide-react'
const App = () => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task,setTask]=useState([])
  const deleteNote=(idx)=>{
    const copyTask=[...task];
    copyTask.splice(idx,1)
    setTask(copyTask)
  }
  const submitHandler=(e)=>{
    e.preventDefault()
    const copyTask=[...task]
    copyTask.push({title,details})
    setTask(copyTask)
    setTitle('')
    setDetails('')
  }
  return (
    <div className='h-screen lg:flex  bg-black text-white'>
     <form onSubmit={(e)=>{
      submitHandler(e)
     }}
      className='flex gap-4 items-start flex-col  p-10'>
        <h1 className='text-3xl font-bold'>Add Notes</h1>
      <input 
      type='text'
      placeholder='Enter Notes Heading'
      className='px-5 w-full py-2  font-medium outline-none  border-2 rounded'
      value={title}
      onChange={(e)=>{
           setTitle(e.target.value)
      }}
       />
      <textarea
       type='text'
       placeholder='Enter Details' 
       className='px-5 w-full h-32 py-2 font-medium border-2 flex-row outline-none rounded'
       value={details}
       onChange={(e)=>{
        setDetails(e.target.value)
       }}
       />
       <button className='bg-white outline-none  text-black px-5 py-2 rounded'>Add Notes</button>
     </form>
     <div className=' lg:w-1/2  lg:border-l-2 p-10'>
     <h1 className='text-3xl font-bold'>Recent Notes</h1>
     <div className='flex flex-wrap gap-5 mt-5 h-[90%] overflow-auto'>
      {task.map(function(elem,idx){
         return <div key={idx} className='h-52  flex  justify-between  flex-col item-start  relative pt-9 pb-4 text-black w-40 rounded-2xl bg-white'>
          <div>
          <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
          <p className='mt-4 lending-tight font-medium text-gray-500'>{elem.details}</p>
          </div>
          <button onClick={()=>{
              deleteNote(idx)
          }} className='w-full bg-red-400 rounded  font-bold py-1 text-xs text-white'>Delete</button>
         </div>
      })}
     </div>
     </div>
    </div>
  )
}

export default App