import React from 'react'
import Otp from '../components/Otp'
import otp from "../assets/otp.png"
const VerificationPage = () => {
  return (
    <div className='flex justify-start max-lg:justify-center items-center h-[100vh] max-lg:h-[90vh] bg-cover bg-center w-full'
  
        style={{ backgroundImage: `url(${otp})` }}
    >
        <Otp/>
    </div>
  )
}

export default VerificationPage