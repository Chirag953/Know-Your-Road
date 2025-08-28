import React from 'react';

const team = [
  { name: "Chirag Dutta (Team Lead)", role: "Frontend, Backend & Database" },
  { name: "Prashant", role: "Frontend Developer & Content Researcher" },
  { name: "Abhishek Khatana", role: "UI/UX Designer & Content Researcher" },
  { name: "Divyanshu", role: "Frontend Developer" },
];

function TeamInfo() {
  return (
    <section id="team" className="bg-[#FCEDC6] py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        
        <div className="max-w-3xl mb-12">
          <h3 className="text-sm font-semibold text-[#2B78F6] mb-3">Our Team</h3>
          <p className="text-sm text-gray-700">
            We are a passionate team of four, united by the vision of making roads
            smarter, safer, and more transparent through technology, design, and
            innovation. Each of us brings unique skills and expertise to bring this project to life:
          </p>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {team.map((member, idx) => (
            <div 
              key={idx} 
              className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition"
            >
             
              <div
                className="w-32 h-32 rounded-full bg-gray-200 mb-6 flex items-center justify-center"
                aria-hidden="true"
              >
                <span className="text-2xl font-semibold text-gray-400">
                  {member.name.charAt(0)}
                </span>
              </div>

              
              <h4 className="text-base font-bold text-gray-900 mb-1">
                {member.name}
              </h4>

             
              <p className="text-sm text-gray-700">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamInfo;
