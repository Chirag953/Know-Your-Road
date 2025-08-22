import React from "react";
import NewImage from "../../../assets/scaneQrCode.jpg"; 

function CitizenEmpowerment() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-white px-6 md:px-16">
      {/* Left Content */}
      <div className="md:w-1/2 w-full space-y-6">
        <p className="text-blue-600 font-semibold">What we do</p>
        <h1 className="text-3xl md:text-4xl font-bold leading-snug text-gray-900">
          Empowering Citizens with <br /> Tech & Trust
        </h1>

        <div className="mt-6 space-y-5">
          {/* Item 1 */}
          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              checked
              readOnly
              className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <div>
              <h3 className="font-semibold text-gray-900">Access Road Details</h3>
              <p className="text-gray-600 text-sm">
                Scan the QR code to see when the road was built, who built it,
                cost, department, and lifespan.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              checked
              readOnly
              className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <div>
              <h3 className="font-semibold text-gray-900">Report Problems</h3>
              <p className="text-gray-600 text-sm">
                If damaged, file a complaint online with photos and location,
                track it, and get updates in 15 days.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              checked
              readOnly
              className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <div>
              <h3 className="font-semibold text-gray-900">Ensure Accountability</h3>
              <p className="text-gray-600 text-sm">
                Hold contractors responsible for early road damage.
              </p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              checked
              readOnly
              className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <div>
              <h3 className="font-semibold text-gray-900">
                Empower Citizens & Government
              </h3>
              <p className="text-gray-600 text-sm">
                Give citizens real-time data and provide the government with
                direct public feedback.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 w-full mt-10 md:mt-0 flex justify-center">
        <img
          src={NewImage}
          alt="Citizen Empowerment"
          className="rounded-lg shadow-lg w-full h-full md:w-4/5"
        />
      </div>
    </div>
  );
}

export default CitizenEmpowerment;
