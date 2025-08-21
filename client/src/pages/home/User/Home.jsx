import React from "react";
import bgHomeImg from "../../../assets/bgimg.webp";
import { useNavigate } from "react-router-dom";
function Home() {
   const navigate = useNavigate();
  return (
    <section
      id="home"
      className="w-full min-h-screen bg-cover bg-center text-white flex items-center relative scroll-mt-16"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${bgHomeImg})`,
      }}
    >
      
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-[853px]">
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-4">
            Smart QR-Based <br />
            Road Transparency System
          </h1>

          <h2 className="text-2xl md:text-5xl text-white mb-6">Know Your Road....</h2>

          <div className="flex gap-4">
            
            <button
              className="bg-transparent text-white border-2 border-white px-6 py-3 rounded-lg font-medium
                         transition-transform duration-200 ease-out hover:scale-105 hover:-translate-y-1 active:scale-95
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
            >
              What We Do
            </button>

            
            <button
              className="bg-white text-black px-6 py-3 rounded-lg font-medium
                         transition-transform duration-200 ease-out hover:scale-105 hover:-translate-y-1 active:scale-95
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
               onClick={() => navigate("/ScanQr")}
            >
              <span className="flex items-center gap-2">Scan Here</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
