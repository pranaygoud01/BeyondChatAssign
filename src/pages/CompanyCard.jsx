import React, { useContext, useEffect, useState } from 'react';
import { companyData } from '../store/CompanyData';
import { Link, useParams } from 'react-router';
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { motion } from 'framer-motion';

const CompanyCard = () => {
  const { name } = useParams(); 
  const { companies } = useContext(companyData);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      const company = companies.find((company) => company.name.toLowerCase() === name.toLowerCase());
      if (company) {
        setData(company);
      } else {
        setData(null); 
      }
    };
    fetchData();
  }, [name, companies]);

  if (!data) {
    return <div>Company not found</div>;
  }

  return (
    <div className='h-fit p-28 max-lg:p-4 flex flex-col w-full'>
      <Link to="/setup" className='text-start max-lg:pt-18'>
        <div >
          <IoArrowBackCircleSharp className='text-4xl hover:scale-90 duration-300' />
        </div>
      </Link>

      <div className='flex max-lg:pt-4'>
        <div className='p-20 max-lg:p-5 w-8/12 max-lg:w-full flex flex-col gap-5'>
          <motion.img 
            src={data.imgUrl} 
            className='w-[150px] h-[150px] max-lg:w-[70px] max-lg:h-[70px] object-cover' 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5 }} 
          />
          <motion.h1 
            className='text-3xl font-bold'
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {data.name}
          </motion.h1>
          <motion.p 
            className='text-sm leading-6 text-neutral-600'
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {data.des}
          </motion.p>
          <motion.a 
            href={data.url} 
            className='bg-black rounded-md text-white w-fit shadow-md shadow-neutral-400 font-bold px-10 py-3 mt-3'
            initial={{ scale: 0.9 }} 
            animate={{ scale: 1 }} 
            transition={{ duration: 0.3 }}
          >
            Visit the website
          </motion.a>
        </div>

        <div className='w-3/12 h-full relative pt-30 max-lg:hidden'>
          <motion.img 
            src={data.imgUrl} 
            className='h-full w-full object-cover' 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5 }} 
          />
          <div className='absolute inset-0 bg-white opacity-40' />
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
