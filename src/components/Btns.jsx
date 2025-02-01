import React from 'react'
import { Link } from 'react-router'

const Btns = ({name,path,click}) => {
  return (
    <>
    <Link className='font-bold max-lg:py-3  text-white text-center bg-blue-500 py-3 rounded-md shadow-blue-300 shadow-md  px-10 cursor-pointer' to={path} onClick={click}>{name}</Link>
          </>
  )
}

export default Btns