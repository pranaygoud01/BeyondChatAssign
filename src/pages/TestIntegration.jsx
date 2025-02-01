import React from "react";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import Btns from "../components/Btns";

const IntegrationSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center w-full justify-center h-screen  px-6">
      <Confetti />
      <div className="bg-white  text-center">
        <h2 className="text-green-600 text-2xl font-bold">Integration Successful! 🎉</h2>
        <p className="text-gray-600 mt-2">Your chatbot is now connected.</p>

        <div className="mt-6 flex flex-col gap-4">
          <Btns
            path="/admin"
           
            name="Explore Admin Panel"
          >
            
          </Btns>
          <button
            onClick={() => navigate("/chatbot")}
            className="px-5 py-3 bg-green-500 text-white font-bold  rounded-md hover:bg-green-600"
          >
            Start Talking to Your Chatbot
          </button>
        </div>

        <div className="flex justify-center gap-4 mt-6">
          <FaFacebook className="text-blue-700 text-2xl cursor-pointer" />
          <FaTwitter className="text-blue-400 text-2xl cursor-pointer" />
          <FaLinkedin className="text-blue-600 text-2xl cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default IntegrationSuccess;
