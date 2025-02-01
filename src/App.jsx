import React from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar';
import SetUp from './pages/SetUp';
import CompanyCard from './pages/CompanyCard';
import ProgressPage from './pages/ProgressPage';
import { CompanyProvider } from './store/CompanyData.jsx'; 
import VerificationPage from './pages/VerificationPage.jsx';
import ChatBotInt from './pages/ChatBotInt.jsx';
import TestIntegration from './pages/TestIntegration.jsx';



const App = () => {
  return (
    <BrowserRouter>
      <CompanyProvider>  
        <NavBar/>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Register />} />
          <Route path="/setup" element={<SetUp />} />
          <Route path="/company/:name" element={<CompanyCard />} />
          <Route path="/progress" element={<ProgressPage/>}/>
          <Route path="chatbot-integration" element={<ChatBotInt />}/>
          <Route path="/verify-otp" element={<VerificationPage />}/>
          <Route path='/test-integration' element={<TestIntegration />}/>
        </Routes>
      </CompanyProvider>  
    </BrowserRouter>
  );
}

export default App;
