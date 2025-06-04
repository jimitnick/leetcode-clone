import React from 'react'
import MainLogo from "../images/MainLogo.jpeg"
const Banner = () => {
  return (
    <div className='flex absolute top-100 left-1/2 -translate-x-1/2 -translate-y-1/2'>
      <img src={MainLogo} alt="" className='h-[300px] w-[300px] object-cover'/>
    </div>
  )
}

export default Banner
