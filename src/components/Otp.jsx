import React from 'react';
import Btns from './Btns';

const Otp = () => {
  return (
    <div className='h-fit w-[500px] max-lg:ml-0 max-lg:w-11/12 ml-36 rounded-xl bg-white p-10 max-lg:p-6 max-lg:py-10 flex flex-col gap-5 transition-transform duration-300 ease-in-out transform hover:scale-105'>
      <div className='flex flex-col gap-2'>
        <h1 className='font-bold text-[20px] max-lg:text-xl max-lg:font-bold'>Enter One Time Password (OTP)</h1>
        <p className='text-sm text-neutral-600'>OTP is sent to your email</p>
      </div>
      <input 
        type='number' 
        placeholder='OTP' 
        className='remove-arrow text-sm py-3 px-3 border-2 rounded-md border-neutral-200 focus:outline-none focus:border-blue-400 transition duration-300'
      />
      <Btns name="Submit" path="/login" />
    </div>
  );
};

export default Otp;