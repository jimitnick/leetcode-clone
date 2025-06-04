import React from 'react'

const Competitions = (props) => {
  return (
    <div className='w-[330px] h-[280px] bg-zinc-700 rounded-xl text-white flex flex-col gap-4 justify-between p-4'>
        <div className='w-full bg-white text-zinc-900 h-1/3 rounded-xl flex items-center justify-center p-3 flex-wrap overflow-y-auto'>
            <h1 className='text-xl font-bold text-center pb-6'>{props.title}</h1>
        </div>
      
      <h2 className='text-lg'>Status : {props.status}</h2>
      <h3 className='text-md'>Date : {props.date}</h3>
      <p className='text-sm'>{props.participants}</p>
      <p className='text-sm'>{props.submission}</p>
    </div>
  )
}

export default Competitions
