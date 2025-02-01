import React from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import home from "../assets/home.png";

const HomePage = () => {
  return (
    <div 
      className="w-full h-[100vh] overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${home})` }}
    >
      <div className="w-full h-[100vh] max-lg:h-[70vh] flex justify-center items-center text-white px-4">
        <motion.div 
          className="w-8/12 max-lg:w-11/12 max-w-3xl flex flex-col gap-5 max-lg:gap-3 justify-center text-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", staggerChildren: 0.2 }}
        >
          <motion.h1 
            className="font-bold text-5xl max-lg:text-2xl text-black"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Beyond<span className="text-blue-500">Chats</span> – Elevate Your Customer Experience with Smart Chatbots
          </motion.h1>

          <motion.p 
            className="font-semibold text-2xl max-lg:text-xl text-neutral-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Engage. Assist. Grow.
          </motion.p>

          <motion.p 
            className="text-neutral-700 max-lg:text-xs"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            At BeyondChat, we revolutionize how businesses connect with their customers. Our intelligent chatbots are designed to enhance user engagement, streamline support, and boost conversions—24/7, without missing a beat.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className='mt-6'
          >
            <Link 
              className="font-bold max-lg:text-sm bg-black shadow-xl shadow-neutral-300 rounded-md py-3 px-5"
              to="/setup"
            >
              Setup Chatbot in your site now!
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
