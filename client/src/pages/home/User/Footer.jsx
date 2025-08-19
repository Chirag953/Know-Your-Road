import React from 'react'
import Logo from "../../../assets/Logo.jpeg"

function Footer() {
  return (
    <footer className="bg-[#111111] text-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Logo / left column */}
          <div className="flex flex-col items-start gap-6">
            {/* Logo */}
            <div className="w-32 h-32 bg-white rounded-sm flex items-center justify-center overflow-hidden">
              <img src={Logo} alt="logo" className="w-full h-full object-contain" />
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Facebook" className="text-gray-200 hover:text-white">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 5 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.61.77-1.61 1.56v1.87h2.74l-.44 2.9h-2.3V22c4.78-.8 8.44-4.93 8.44-9.93z" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-200 hover:text-white">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M22 5.92c-.63.28-1.3.47-2 .56a3.49 3.49 0 001.53-1.93 6.9 6.9 0 01-2.2.84 3.46 3.46 0 00-5.9 3.15A9.82 9.82 0 013 4.94a3.46 3.46 0 001.07 4.61c-.5-.02-.98-.15-1.4-.39v.04a3.46 3.46 0 002.78 3.39c-.46.12-.95.14-1.45.05.41 1.28 1.6 2.21 3.01 2.24A6.93 6.93 0 012 19.54 9.82 9.82 0 008.3 21c5.93 0 9.18-4.9 9.18-9.15v-.42A6.54 6.54 0 0022 5.92z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-200 hover:text-white">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 6.2A4.8 4.8 0 1016.8 13 4.8 4.8 0 0012 8.2zM18.4 6.1a1.1 1.1 0 11-1.1-1.1 1.1 1.1 0 011.1 1.1z" />
                  <circle cx="12" cy="12" r="3.2" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-200 hover:text-white">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M20.45 20.45h-3.56v-5.4c0-1.29 0-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85v5.5H8.34V9h3.42v1.56h.05c.48-.9 1.66-1.85 3.42-1.85 3.65 0 4.32 2.4 4.32 5.5v6.24zM5.34 7.5a2.07 2.07 0 11.01-4.14 2.07 2.07 0 01-.01 4.14zM6.82 20.45H3.88V9h2.94v11.45z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 1 - Home links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Home</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><a href="#about" className="hover:text-white">About Us</a></li>
              <li><a href="#what-we-do" className="hover:text-white">What we do</a></li>
              <li><a href="#projects" className="hover:text-white">Projects</a></li>
              <li><a href="#testimonials" className="hover:text-white">Testimonials</a></li>
            </ul>
          </div>

          {/* Column 2 - Social Media */}
          <div>
            <h4 className="text-white font-semibold mb-4">Social Media</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white">YouTube</a></li>
              <li><a href="#" className="hover:text-white">Instagram</a></li>
              <li><a href="#" className="hover:text-white">Facebook</a></li>
              <li><a href="#" className="hover:text-white">Twitter</a></li>
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <div className="text-sm text-gray-300 space-y-4">
              <div>Address: 45 b-Block, Shastri Nagar, Delhi, 110020</div>
              <div>Phone No: +91 89898585**</div>
              <div>Email Id: knowyourroad@gmail.com</div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="bg-gradient-to-b from-[#0b0b0b] to-[#141414]">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <p className="text-center text-xs text-gray-400">
            © Copyright Marketly. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
