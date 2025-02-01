import React from 'react';
import testing from"../assets/testing.png";
import Btns from '../components/Btns';

const ChatBotInt = () => {
  

  return (
    <div className="w-full h-screen  flex flex-col items-center max-lg:px-8 max-lg:h-[90vh] bg-cover bg-center justify-center "
          style={{backgroundImage:`url(${testing})`}}
    >
      <h1 className="text-4xl max-lg:text-3xl  font-bold mb-4">Chatbot Integration & Testing</h1>
      <p className="text-gray-600 max-lg:text-sm mb-8">Test and integrate the chatbot on your website.</p>

      <div className="flex flex-col gap-6">
        <Btns name="Test Chatbot" path="/test-integration"/>
        <button 
          
          className="bg-green-500 shadow-green-300 text-white px-6 py-3 rounded-md font-bold shadow-md hover:bg-green-600 cursor-pointer"
        >
          Integrate on Your Website
        </button>
      </div>

      <div className="absolute bottom-4 right-4 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-md shadow-md">
        Chatbot not working as intended? <a href="#" className="text-blue-600 font-bold">Share feedback</a>
      </div>
    </div>
  );
};

export default ChatBotInt;
