import React from 'react';
import { motion } from 'framer-motion';
import bg from "../assets/bg.png";
import InputBtn from '../components/InputBtn';
import { Link } from 'react-router';
import Btns from '../components/Btns';

const Login = () => {
  return (
    <div
      className="w-full h-[100vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className='grid grid-cols-2 max-lg:grid-cols-1 gap-10'>
        <motion.div
          className='flex justify-center gap-9 max-lg:gap-8 px-36 max-lg:h-fit max-lg:py-6 max-lg:pb-1 max-lg:px-8 max-lg:pt-28 flex-col h-[100vh]'
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className='flex flex-col gap-3'>
            <h1 className='font-bold text-5xl max-lg:text-3xl'>Login to</h1>
            <p className='text-4xl font-bold max-lg:text-xl'>Explore BeyondChats</p>
          </div>
          <div className='font-medium text-neutral-600 text-base max-lg:text-sm'>
            <h1>If you don't have an account register</h1>
            <h1>you can <Link to="/" className='text-blue-500 font-semibold cursor-pointer'>Register here !</Link></h1>
          </div>
        </motion.div>

        <motion.div
          className='h-[100vh] max-lg:h-fit max-lg:px-8 px-30 flex flex-col justify-center max-lg:w-full max-lg:bg-white max-lg:pb-17 w-10/12'
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          <div className='flex flex-col justify-center gap-10 max-lg:gap-6 pb-5'>
            <h1 className='font-semibold text-3xl max-lg:text-2xl max-lg:hidden'>Login</h1>
            <InputBtn type="text" placeholder="Enter Email" />
            <InputBtn type="password" placeholder="Enter Password" />
            <Btns name="Login" path="/home" />
          </div>
          <div className='flex flex-col gap-5'>
            <h1 className='text-center text-neutral-600'>or continue with the</h1>
            <button className='flex gap-6 justify-center items-center font-semibold border-neutral-100 rounded-md shadow-xl border w-full py-4'>
              <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png' className='w-[20px] h-[20px] object-cover' /> Login with Google
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
