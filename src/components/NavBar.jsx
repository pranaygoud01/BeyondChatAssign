import React from 'react'
import Btns from './Btns'
import { Link } from 'react-router'

const NavBar = () => {
  return (
    <div className="p-7  flex fixed w-screen max-lg:py-5 bg-white max-lg:px-0 ">
      <div className='flex justify-between px-10 max-lg:px-8 w-full'>
    <Link className="font-bold text-xl" to="/setup">Beyond<span className='text-blue-500'>Chats</span></Link>
     <span className='max-lg:hidden'><Btns name="Logout" path="/login"  /></span> 
    </div>
  </div>
  )
}

export default NavBar