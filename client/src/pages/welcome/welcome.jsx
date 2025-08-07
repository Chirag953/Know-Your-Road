import React from 'react'
import { useNavigate } from "react-router-dom";
import Logo from '../../assets/logo.png';

function Welcome() {
  const navigate = useNavigate();
  
        const navigateToRegister = () => {
        navigate('/register'); 
      };
       const navigateToLogin = () => {
        navigate('/login'); 
      };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-white h-[400px] flex justify-center items-center">
        <div className="w-full max-w-md mx-auto">
          <img 
            src={Logo}
            alt="Know Your Road Logo"
            className="object-contain w-full" 
          />
        </div>
      </div>

      
      <div className="bg-orange-500 rounded-t-[50px] flex-1">
        <div className="h-full bg-gradient-to-b from-white via-transparent to-orange-500">
          <div className="flex flex-col justify-between items-center py-12 h-full">
            <div className="welcome-container text-center mb-12 px-4">
              <h1 className="text-2xl font-bold text-black mb-5">Welcome</h1>
              <p className="text-black text-base leading-6 font-bold px-5">
                KNOW YOUR ROAD , "Every great adventure begins with knowing your path."
              </p>

              <div className="flex justify-center mt-8">
                <button onClick={navigateToLogin}
                  className="px-10 py-5 bg-black rounded-full shadow-lg text-white font-bold mr-5"
                >
                  Sign In
                </button>
              
              
                <button onClick={navigateToRegister}
                  className="px-10 py-5 bg-white rounded-full shadow-lg text-black font-bold ml-5"
                >
                  Sign Up
                </button>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome
