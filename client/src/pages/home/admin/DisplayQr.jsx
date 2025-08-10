import React from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function DisplayQr() {
    const { currentUser } = useSelector((state) => state.usersReducer);
    const navigate = useNavigate();
  const location = useLocation();
  const qrCode = location.state?.qrCode;

  const downloadQR = () => {
    const link = document.createElement("a");
    link.href = qrCode;
    link.download = "road_qr.png";
    link.click();
  };

  return (
  <>
  
  <header className="bg-white shadow-md fixed w-full top-0 z-50">
    <div className="flex justify-between items-center py-4 max-w-[75rem] mx-auto px-4">
      <div
        className="text-2xl font-bold text-primary cursor-pointer"
        onClick={() => navigate("/Admin-dashboard")}
      >
        KYR
      </div>
      <div className="bg-black text-white rounded p-2 flex gap-4 items-center">
        <h1 className="underline uppercase font-semibold">
          {currentUser?.name}
        </h1>
        <i
          className="ri-logout-circle-r-line cursor-pointer text-lg"
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/login");
          }}
        ></i>
      </div>
    </div>
  </header>

  
  <div className="flex justify-center items-center min-h-screen bg-gray-100 pt-20">
    <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">QR Code</h2>
      <img
        src={qrCode}
        alt="QR"
        className="mx-auto w-48 h-48 border border-gray-300 rounded-lg p-2 shadow-sm"
      />
      <button
        onClick={downloadQR}
        className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-300"
      >
        Download QR
      </button>
    </div>
  </div>
</>

  );
}

export default DisplayQr;
