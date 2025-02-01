import React, { useContext, useEffect, useState } from 'react';
import training from "../assets/training.png";
import Btns from '../components/Btns';
import { companyData } from '../store/CompanyData';

const ProgressPage = () => {
  const [status, setStatus] = useState(0);
   const {submitForm}=useContext(companyData);
  useEffect(() => {
    const interval = setInterval(() => {
      setStatus((prev) => (prev < 100 ? prev + 1 : 100));
    }, 1000); 

    return () => clearInterval(interval); 
  }, []);



  return (
    <div
      className="w-full h-[100vh] max-lg:h-[90vh] flex justify-end max-lg:justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${training})` }} 
    >
      <div className="w-5/12 h-fit mr-36 max-lg:w-11/12 max-lg:mr-0  py-16 px-10 bg-white flex flex-col items-center gap-8  rounded-md">
      <div className='flex flex-col gap-3'>
        <h1 className="text-2xl font-bold text-center max-lg:text-2xl max-lg:text-start">Your chatbot is under Training...</h1>
        <p className="text-center  max-lg:text-sm text-md text-gray-600">Please wait while we process your request.</p>
        </div>
        
        <div className="h-[10px] w-full rounded-md bg-neutral-200">
          <div className="h-full rounded-md bg-blue-500 transition-all" style={{ width: `${status}%` }}></div>
        </div>
           <Btns name="Skip to nextpage" path="/chatbot-integration" click={submitForm}/>

      </div>
    </div>
  );
};

export default ProgressPage;
