import React from "react";
import scane from "../../../assets/scane.png";

function AboutUs() {
  return (
    <section
      id="about"
      className="w-full py-20 bg-white text-black scroll-mt-16" /* scroll-mt-16 offsets the fixed nav */
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1">
            <img src={scane} alt="scan icon" className="mx-auto mb-6 w-full max-w-[600px] h-auto object-cover" />
          </div>

          <div className="flex-1">
            <h3 className="text-blue-800 text-xl font-bold mb-3">About us</h3>
      
            <p className="text-gray-700 mb-6">
              Our system places QR codes along roads to give citizens instant access to important road information. By scanning the codes, people can check maintenance history, track ongoing repairs with completion dates, report issues, and view transparent spending reports for projects. This promotes accountability, bridges the gap between citizens and authorities, and helps create safer, smarter cities.
            </p>

            <button className="border-2 px-6 py-3 rounded-lg font-medium bg-blue-600 text-white">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
    //  <section id="about" className="py-20 px-5 max-w-6xl mx-auto">

    //        <div className="md:flex gap-12 items-center">
    //            <div className="md:w-1/2 mb-12 md:mb-0">
    //              <p className="mb-6">
    //                KnowYourRoad is a QR-based web platform that brings transparency
    //                and accountability to road construction in India.
    //              </p>
    //              <p className="mb-8">
    //                By scanning a QR code placed near a highway or government-built
    //                road (Entry and Exit), citizens can instantly access details.
    //              </p>
    //              <ul className="space-y-4">
    //                <li>• Contractor or company who built it</li>
    //                <li>• Total project cost</li>
    //                <li>• Start and end dates</li>
    //                <li>• Department or official involved</li>
    //              </ul>
    //              <button
    //               className="mt-8 bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-all"
    //               onClick={() => scrollToSection("services")}
    //             >
    //               Services
    //             </button>
    //           </div>
    //           <div className="md:w-1/2 flex justify-center">
    //             <div className="w-full h-80 rounded-lg bg-gray-100 shadow-lg flex items-center justify-center text-gray-400">
    //               <img
    //                 src={scane}
    //                 alt="Know Your Road Logo"
    //                 className="w-full h-80 rounded-lg shadow-lg flex items-center justify-center"
    //               />
    //             </div>
    //           </div>
    //         </div>
    //       </section>
  );
}

export default AboutUs;
