import React from 'react'
import RightCrdContent from './RightCrdContent'

const RightCard = (props) => {
  return (
    <div ClassName='h-full  shrink-0 overflow-hidden  relative w-80 rounded-4xl '>
      <img className='h-full w-full object-cover' src={props.img} alt='' />
      <RightCrdContent   id={props.id} tag={props.tag}/>
    </div>         
  )
}

export default RightCard
