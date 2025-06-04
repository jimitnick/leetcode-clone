import React from 'react'
import SignOutButton from './SignOutButton'
import { useUser } from '../providers/userContext'

const Navbar = () => {
    const { user }  = useUser();
    if (!user) return  null;
    const menuItems = [
      {
        title:"About",
        route:"/about"
      },
      {
        title:"Activity",
        route:"/activity"
      },
      {
        title:"Problems",
        route:"/problems"
      },
      {
        title:"Leaderboard",
        route:"/leaderboard"
      }
    ]
  return (
    <div className='flex w-full h-[80px] bg-zinc-800 p-4  justify-between items-center'>
        <div className='flex gap-3 items-center h-full'>
            <img src={user.photoURL} alt="" className='h-[45px] w-[45px] rounded-full object-cover'/>
            <span className='text-white text-xl'>{user.displayName}</span>
        </div>
        <div className='flex gap-16 items-center'>
          {
            menuItems.map(item => <Items title = {item.title} route = {item.route}/>)
          }
        </div>
      <SignOutButton />
    </div>
  )
}

export default Navbar

function Items({title, route}){
  return(
    <a href={route} className='text-white text-lg hover:underline decoration-2 hover:ease-in-out'>{title}</a>
  )
}