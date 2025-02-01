import React from 'react';
import { motion } from 'framer-motion';
import bg from "../assets/bg.png";
import InputBtn from '../components/InputBtn';
import { Link } from 'react-router-dom';
import Btns from '../components/Btns';

const Register = () => {
  const animationVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  return (
    <div
      className="w-full h-[100vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className='grid grid-cols-2 max-lg:grid-cols-1 gap-10'>
        <motion.div
          className='flex justify-center gap-9 max-lg:gap-10 px-36 flex-col h-[100vh] max-lg:h-fit max-lg:py-6 max-lg:pb-1 max-lg:px-8 max-lg:pt-28'
          initial="hidden"
          animate="visible"
          variants={animationVariants}
        >
          <div className='flex flex-col gap-3 max-lg:gap-2'>
            <h1 className='font-bold max-lg:text-3xl text-5xl'>Register to</h1>
            <p className='text-4xl max-lg:text-xl max-lg:font-semibold font-bold'>Explore BeyondChats</p>
          </div>
          <div className='font-medium text-base max-lg:text-sm text-neutral-800'>
            <h1>If you have already an account register</h1>
            <h1>you can <Link to="/login" className='text-blue-500 font-semibold cursor-pointer'>Login here!</Link></h1>
          </div>
        </motion.div>

        <motion.div
          className='h-[100vh] max-lg:h-fit px-30 flex flex-col justify-center max-lg:w-full max-lg:px-8 max-lg:py-6 w-10/12 max-lg:bg-white'
          initial="hidden"
          animate="visible"
          variants={animationVariants}
        >
          <div className='flex flex-col justify-center gap-5 pb-5'>
            <h1 className='font-semibold text-3xl pb-5 max-lg:hidden'>Register</h1>
            <InputBtn type="text" placeholder="Enter your Full Name" />
            <InputBtn type="text" placeholder="Enter Email" />
            <InputBtn type="password" placeholder="Enter Password" />
            <Btns name="Register" path="/verify-otp" />
          </div>
          <div className='flex flex-col gap-5'>
            <h1 className='text-center text-neutral-600'>or continue with the</h1>
            <button className='flex gap-6 justify-center font-semibold border-neutral-100 rounded-md shadow-xl border w-full py-3'>
              <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png' className='w-[20px] h-[20px] object-cover' /> Login with Google
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Register;
