import React, { useState } from 'react';
import testing from "../assets/testing.png";

import { Link } from 'react-router-dom';


const ChatBotInt = () => {
  const [showChatbot, setShowChatbot] = useState(false);
  const [integrationStatus, setIntegrationStatus] = useState(null);

  const dummyCode = `
    <script>
      (function() {
        console.log('Dummy chatbot integrated!');
      })();
    </script>
  `;

  const handleIntegrationTest = () => {
    const isSuccess = Math.random() > 0.5; 
    setIntegrationStatus(isSuccess);
  };

  return (
    <div className="w-full h-screen flex flex-col items-center max-lg:px-8 max-lg:h-[90vh] bg-cover bg-center justify-center" style={{ backgroundImage: `url(${testing})` }}>
      <h1 className="text-4xl max-lg:text-[23px] font-bold mb-4">Chatbot Integration & Testing</h1>
      <p className="text-gray-600 max-lg:text-sm mb-8">Test and integrate the chatbot on your website.</p>

      <div className="flex flex-col gap-6">
        <button onClick={() => setShowChatbot(true)} className='py-3 bg-blue-500 font-bold text-white rounded-md'>Test Chatbot</button>

        <Link to="/test-integration" className="bg-black text-white px-6 py-3 rounded-md font-bold shadow-md hover:bg-green-600 cursor-pointer">
          Integrate on Your Website
        </Link>

        <button onClick={handleIntegrationTest} className='font-bold text-white bg-blue-500 py-3 px-4 rounded-md'>Test Integration</button>
      </div>

      {showChatbot && (
        <div className="fixed bottom-4 max-lg:bottom-20 right-4 h-[300px]  bg-blue-50 p-4 rounded-md shadow-md">
          <p>Dummy Chatbot Here!</p>
          <button className="text-red-500 mt-2" onClick={() => setShowChatbot(false)}>Close</button>
        </div>
      )}

      <div className="absolute bottom-4 right-4 bg-neutral-100 text-black px-4 py-2 rounded-md shadow-md">
        Chatbot not working as intended? <a href="#" className="text-blue-600 font-bold">Share feedback</a>
      </div>

      {integrationStatus !== null && (
        <div className="fixed inset-0 bg-white bg-opacity-90 flex flex-col items-center justify-center">
          {integrationStatus ? (
            <div className="text-center">
              <h2 className="text-3xl font-bold text-green-600">🎉 Integration Successful!</h2>
              <div className="mt-4 flex gap-4">
                <Button>Explore Admin Panel</Button>
                <Button>Start Talking to Your Chatbot</Button>
              </div>
              <div className="mt-4">
                <Button className="bg-blue-500 text-white">Share on Twitter</Button>
                <Button className="bg-blue-700 text-white ml-2">Share on LinkedIn</Button>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <h2 className="text-3xl font-bold text-red-600">❌ Integration Not Detected!</h2>
              <p className="mt-2">Please check the code and try again.</p>
            </div>
          )}
          <Button className="mt-4" onClick={() => setIntegrationStatus(null)}>Close</Button>
        </div>
      )}
    </div>
  );
};

export default ChatBotInt;
