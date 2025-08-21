import React from "react";

function Services() {
  const features = [
    {
      title: "QR CODE INSTALLATION",
      desc: "We strategically install unique QR codes along roads, junctions, and construction sites to ensure citizens can easily access information anytime, anywhere.",
    },
    {
      title: "REAL-TIME ROAD INFORMATION",
      desc: "Get instant details about road construction, maintenance history, project timelines, and contractor details — all with a quick scan.",
    },
    {
      title: "ISSUE REPORTING SYSTEM",
      desc: "Report potholes, cracks, waterlogging, or any other problem directly to the concerned authorities through our platform, ensuring faster resolutions.",
    },
    {
      title: "TRANSPARENCY DASHBOARD",
      desc: "View government spending reports, project budgets, and progress updates to ensure public funds are used effectively.",
    },
    {
      title: "COMMUNITY ENGAGEMENT",
      desc: "We encourage citizens to participate in road monitoring, creating a shared responsibility for better infrastructure.",
    },
    {
      title: "SUPPORT FOR AUTHORITIES",
      desc: "We’re here to answer your questions, hear your feedback, and work together for better roads.",
    },
  ];

  return (
    <section
      id="services"
      className="bg-[#FCEDC6] w-full py-16"
    >
      <div className="max-w-7xl mx-auto px-6">
       
        <div className="mb-8 text-center">
          <h3 className="text-sm font-semibold text-[#2B78F6] mb-2">
            Services
          </h3>
          <p className="max-w-3xl mx-auto text-sm text-gray-700">
            Our Smart QR-Based Road Transparency System offers a complete set of
            solutions to make roads more accountable, safer, and easier to
            maintain.
          </p>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <article
              key={i}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-[#FFF2F2] flex items-center justify-center">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M12 2l2.9 6.1L21 9.3l-5 4.6L17 21l-5-2.9L7 21l1-7.1L3 9.3l6.1-1.2L12 2z"
                      stroke="#F36B6B"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

            
              <h4 className="text-center text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">
                {f.title}
              </h4>

              
              <p className="text-center text-xs text-gray-600 leading-relaxed">
                {f.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
