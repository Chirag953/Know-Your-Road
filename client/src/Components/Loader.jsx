import React from "react";

function Loader() {
  return (
    <div className="bg-black-50 h-screen w-screen flex justify-center items-center opacity-70 absolute inset-0 z-[10000]">
      <div className="h-8 w-8 border-4 border-t-blue-300 rounded-full animate-spin border-blue-500"></div>
    </div>
  );
}

export default Loader;
