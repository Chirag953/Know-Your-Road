import React from 'react'

function Contact() {
  return (
    <section id="contact" className="py-20 px-5 bg-yellow-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-dark mb-12 relative">
          Let's Connect
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary"></span>
        </h2>

        <div className="md:flex gap-12">
          {/* Left Side Info */}
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h3 className="text-2xl font-semibold text-dark mb-6">Get in touch</h3>
            <p className="text-gray-600 mb-8">
              Have questions about our platform or want to implement it in your city? Reach out to us.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <span>📧</span>
                <span>know.your.road@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <span>📞</span>
                <span>+91-01125532553</span>
              </div>
              <div className="flex items-center gap-4">
                <span>📍</span>
                <span>Meerut, India</span>
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-md">
            <form>
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                  required
                />
              </div>
              <div className="mb-6">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                  required
                />
              </div>
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </div>
              <div className="mb-6">
                <textarea
                  placeholder="Your Message"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 min-h-[150px]"
                  required
                ></textarea>
              </div>
              <button
                type="button"
                className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-all w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
