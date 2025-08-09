import React  from 'react'
import { useState, useEffect } from 'react'

function User() {
   const [navActive, setNavActive] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

useEffect(() => {
  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    let current = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollPos = window.scrollY || document.documentElement.scrollTop;

      if (scrollPos >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
      }
    });

    setActiveSection(current);
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    window.scrollTo({
      top: section.offsetTop - 70,
      behavior: 'smooth'
    });
    setNavActive(false);
  };

  // const handleScanQR= () => {
  //   alert('Scan QR...');
  //   // window.location.href = '/path/to/ScanQR.com';
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   alert('Message sent! Thank you for reaching out.');
  //   e.target.reset();
  // };
  return (
 <div className="min-h-screen bg-white">
      <header className="bg-white shadow-md fixed w-full top-0 z-50">
        <nav className="flex justify-between items-center py-4 px-5 max-w-6xl mx-auto">
          <div className="text-2xl font-bold text-primary">KNOW YOUR ROAD</div>
          <ul className={`md:flex gap-8 ${navActive ? 'flex flex-col absolute top-16 left-0 right-0 bg-white shadow-md py-4 px-5' : 'hidden'}`}>
            <li>
              <a 
                href="#home" 
                className={`block py-2 ${activeSection === 'home' ? 'text-primary font-medium' : 'text-dark hover:text-primary'}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('home');
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className={`block py-2 ${activeSection === 'about' ? 'text-primary font-medium' : 'text-dark hover:text-primary'}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('about');
                }}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#what we do" 
                className={`block py-2 ${activeSection === 'what we do' ? 'text-primary font-medium' : 'text-dark hover:text-primary'}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('what we do');
                }}
              >
                what we do
              </a>
            </li>
            <li>
              <a 
                href="#Learn More" 
                className={`block py-2 ${activeSection === 'Learn More' ? 'text-primary font-medium' : 'text-dark hover:text-primary'}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('Learn More');
                }}
              >
                Learn More
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className={`block py-2 ${activeSection === 'contact' ? 'text-primary font-medium' : 'text-dark hover:text-primary'}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
              >
                Contact
              </a>
            </li>
          </ul>
          <div 
            className={`md:hidden cursor-pointer ${navActive ? 'toggle' : ''}`} 
            onClick={toggleNav}
          >
            <div className="w-6 h-0.5 bg-dark my-1.5 transition-all"></div>
            <div className="w-6 h-0.5 bg-dark my-1.5 transition-all"></div>
            <div className="w-6 h-0.5 bg-dark my-1.5 transition-all"></div>
          </div>
        </nav>
      </header>

            <main className="pt-16">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center py-20 px-5 max-w-6xl mx-auto">
          <div className="md:flex items-center gap-12 w-full">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <h1 className="text-5xl font-bold text-dark mb-4">Smart QR-Based Road Transparency System</h1>
              <h2 className="text-3xl text-primary mb-6"> Know Your Road....</h2>
              <div className="flex gap-4">
                <button 
                  className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-all"
                  onClick={() => scrollToSection('what we do')}
                >
                  What We Do
                </button>
                <button 
                  className="border-2 border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary hover:border-blue-600 hover:text-blue-600 transition-all"
                  // onClick={handleScanQR}
                >
                  <span className="flex items-center gap-2">
                    Scane Here 
                  </span>
                </button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-light shadow-lg flex items-center justify-center text-gray-400">
                Photo
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-5 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-dark mb-12 relative">
            Know About Us
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary"></span>
          </h2>
          <div className="md:flex gap-12 items-center">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <p className="mb-6">
                KnowYourRoad is a QR-based web platform that
                brings transparency and accountability to road
                construction in India.
              </p>
              <p className="mb-8">
                  By scanning a QR code placed near a highway or
                  government-built road(Entery and Exit), citizens can
                  instantly.
              </p>
              <ul>
               <li className="mb-8">
                  access details such as:
              </li>
               <li className="mb-8">
                 Contractor or company who built it
              </li>
              <li className="mb-8">
                 Total project cost
              </li>
               <li className="mb-8">
                Start and end dates
              </li>
               <li className="mb-8">
                Department or official involved
              </li>
              </ul>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-lg bg-light shadow-lg flex items-center justify-center text-gray-400">
                Photo
              </div>
            </div>
          </div>
           <div className="flex gap-4">
                <button 
                  className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-all"
                  onClick={() => scrollToSection('Learn More')}
                >
                  Learn More
                </button>
              </div>
        </section>

        {/* what we do */}
        <section id="what we do" className="py-20 px-5 bg-light">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-dark mb-12 relative">
              What We Do
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 hover:bg-primary"></span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"> 
              {/* Access point */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-4">By scanning a QR code placed near a highway 
                    access details such as:</h3>
                <div className="flex flex-wrap gap-2">
                  {['Contractor or company who built it', 'Total project cost', 'Start and end dates', 'Department or official involved'].map(skill => (
                    <span key={skill} className="bg-light px-4 py-2 rounded-full text-sm hover:bg-black hover:text-white transition-all">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
        
            </div>
          </div>
        </section>

        {/* Learn More Section */}
         <section id="Learn More" className="py-20 px-5 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-dark mb-12 relative">
            Learn More
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary"></span>
          </h2>
          <div className="relative"> 
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary transform -translate-x-1/2"></div>
             
            {/* Timeline items */}
            <div className="space-y-8 md:space-y-0"> 
              <div className="md:flex w-full">
             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam et eveniet rerum rem voluptate autem sed. Modi suscipit laborum perferendis quisquam ipsam sequi distinctio alias! Impedit quibusdam saepe magnam ratione.
             Iste placeat labore ipsa consequatur repellat aut ducimus quos. Inventore eveniet nulla in error nemo voluptatibus omnis, natus minima iure vitae obcaecati quod, fuga aliquid consectetur suscipit quasi corrupti ut?
             Dicta quidem eius voluptates expedita maxime, alias quam possimus. Explicabo voluptates corporis sunt quas a dicta reiciendis, expedita, cupiditate illum rerum porro aut similique doloribus iste libero voluptas nesciunt alias?
             Necessitatibus unde quod cum, consequatur suscipit sequi? Fugiat fuga explicabo modi eum, rem quo cupiditate quasi quisquam, recusandae voluptates iste ducimus? Nisi officia, asperiores repudiandae mollitia dicta sequi. Quisquam, est?
             Corporis dolorem eaque aspernatur, consequuntur impedit fugit porro excepturi voluptas quam laudantium, sequi eius, modi veniam unde similique error iusto deserunt voluptate quos enim architecto. Fugit ex consequatur optio repellendus?
             Error, soluta? Nemo provident omnis fugiat vero, facilis nulla quo dolor perferendis minima in fuga odit aliquam laudantium quia corrupti quis suscipit eos qui asperiores! Fuga ullam nobis sapiente minima.
             Fuga molestias eos soluta voluptatum ea officia reiciendis et, architecto at rem corporis, repudiandae quaerat quia voluptatem itaque? Perspiciatis officiis vel enim nostrum earum hic qui debitis in rerum officia.
             Accusamus distinctio, totam pariatur, accusantium voluptatum quaerat officia aliquam eius inventore repellat provident quisquam ratione similique minus sint sit non excepturi in saepe! Voluptatibus perferendis id numquam error nesciunt deserunt.
             Sunt, perspiciatis ducimus, maxime reprehenderit, et quisquam ratione porro nulla alias voluptatibus soluta itaque! Nobis delectus dolor officiis eos ipsam veritatis, quos ad eaque quam provident aut aperiam maxime illum.
             Sint quam eaque, asperiores dolorem pariatur ipsam debitis minus hic rerum delectus dignissimos quidem doloremque, ducimus eligendi cumque omnis officiis quisquam accusantium eum, illum corrupti veritatis iusto. Voluptate, ipsum dolor.</p>
            </div>
            </div>
          </div>
        </section> 

         {/* Contact Section */}
        <section id="contact" className="py-20 px-5 bg-light">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-dark mb-12 relative">
              Let's Connect
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary"></span>
            </h2>
            <div className="md:flex gap-12">
              <div className="md:w-1/2 mb-12 md:mb-0">
                <h3 className="text-2xl font-semibold text-dark mb-6">Get in touch</h3>
                <p className="text-gray-600 mb-8">
                  Feel free to reach out for collaborations or just a friendly hello
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="text-primary text-xl" />
                    <span>know.your.road@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-primary text-xl" />
                    <span>+91-01125532553</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-primary text-xl" />
                    <span>Meerut India</span>
                  </div>
                </div>
                <div className="flex gap-6">
                  <a 
                    href="https://linkedin.com/in/your-linkedin-id" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-2xl text-dark hover:text-primary transition-all"
                  >
                    
                  </a>
                  <a 
                    href="https://github.com/your-github-id" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-2xl text-dark hover:text-primary transition-all"
                  >
                    
                  </a>
                </div>
              </div>
              <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-md">
                <form >
                  <div className="mb-6">
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-blue-600"
                      required 
                    />
                  </div>
                  <div className="mb-6">
                    <input 
                      type="email" 
                      placeholder="Your Email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-blue-600"
                      required 
                    />
                  </div>
                  <div className="mb-6">
                    <input 
                      type="text" 
                      placeholder="Subject" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-blue-600"
                    />
                  </div>
                  <div className="mb-6">
                    <textarea 
                      placeholder="Your Message" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-blue-600 min-h-[150px]"
                      required
                    ></textarea>
                  </div>
                  <button 
                   // type="submit" 
                    className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-all w-full"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section> 
      </main>

       <footer className="bg-black text-white text-center py-8">
        <p>&copy; {new Date().getFullYear()} Know Your Road. All rights reserved.</p>
      </footer>
      </div>
  )
}

export default User
