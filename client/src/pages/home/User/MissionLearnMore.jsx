import React from "react";
import { useNavigate } from "react-router-dom";

export default function MissionLearnMore() {
   const navigate = useNavigate();
  const features = [
    {
      title: "Empowering Citizens",
      desc: "Giving everyone a simple platform to report road damage and issues instantly.",
    },
    {
      title: "Faster Solutions",
      desc: "Connecting complaints directly to concerned authorities for quick action.",
    },
    {
      title: "Transparency & Tracking",
      desc: "Allowing users to monitor the status of their road issue from report to resolution.",
    },
    {
      title: "Building Safer Roads",
      desc: "Ensuring smoother travel and reducing accidents caused by poor road conditions.",
    },
  ];

  return (
    <section id="mission" className="w-full bg-[#FCEDC6] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left column */}
          <div className="max-w-xl">
            <p className="text-sm font-semibold text-[#2B78F6] mb-4">Our Mission</p>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4 ">
              Building a Smoother Future <br className="hidden lg:block" />
            </h2>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4 ">
              with Reliable Roads
            </h2>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
              To empower citizens with a simple, transparent, and effective way to report and track road issues,
              ensuring faster solutions and safer journeys for all. We aim to bridge the gap between the public and
              authorities, creating a connected community that drives real change on our roads.
            </p>

          </div>

          {/* Right column: 2x2 text items */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((f, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  {/* circle placeholder for icon (empty) */}
                  <div className="w-12 h-12 rounded-full bg-[#2B78F6] flex items-center justify-center flex-shrink-0" />

                  {/* text */}
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 mb-1">{f.title}</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



 