import React from 'react'

function WhatWEDo() {
  return (
    <section id="what-we-do" className="py-20 px-5 bg-yellow-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-dark mb-12 relative">
          What We Do
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary"></span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-primary mb-4">
              QR Code Scanning
            </h3>
            <p>
              Scan QR codes placed near roads to access comprehensive
              project information instantly.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-primary mb-4">
              Project Transparency
            </h3>
            <p>
              View contractor details, project costs, timelines, and
              responsible officials.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-primary mb-4">
              Accountability
            </h3>
            <p>
              Promote government accountability by making road project
              details publicly accessible.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatWEDo

