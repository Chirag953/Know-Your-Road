import React, { useState, useEffect, useRef } from 'react';
//import Logo from '../../../assets/Logo.jpeg';
import Scane from '../../../assets/scane.png';
import bgHomeImg from '../../../assets/bgimg.webp';


function User() {
const headerRef = useRef(null);
const containerRef = useRef(null);

const [navActive, setNavActive] = useState(false);
const [activeSection, setActiveSection] = useState('home');

useEffect(() => {
const container = containerRef.current;
const getHeaderHeight = () => (headerRef.current ? headerRef.current.offsetHeight : 70);

// Ensure container height & scrolling style (and update on resize)
const setContainerLayout = () => {
if (!container) return;
const headerH = getHeaderHeight();
container.style.height = `calc(100vh - ${headerH}px)`; // fill remaining viewport under fixed header
container.style.overflowY = 'auto';
container.style.scrollBehavior = 'smooth';
};

// Active-section detection
const handleScroll = () => {
if (!container) return;
const sections = container.querySelectorAll('section');
const scrollTop = container.scrollTop;
const headerH = getHeaderHeight();
let current = '';

sections.forEach((section) => {
// offsetTop is relative to the scroll container (since sections are inside it)
const sectionTop = section.offsetTop;
const sectionHeight = section.offsetHeight;
// Use a threshold so the section becomes active a little before it's fully at top
if (scrollTop >= sectionTop - headerH - sectionHeight * 0.25) {
current = section.getAttribute('id');
}
});

if (current) setActiveSection(current);
};

setContainerLayout();
// run once to set active section on mount
handleScroll();

// listeners
container && container.addEventListener('scroll', handleScroll, { passive: true });
window.addEventListener('resize', setContainerLayout);

return () => {
container && container.removeEventListener('scroll', handleScroll);
window.removeEventListener('resize', setContainerLayout);
};
}, []);

const toggleNav = () => setNavActive((s) => !s);

const scrollToSection = (sectionId) => {
const container = containerRef.current;
const headerH = headerRef.current ? headerRef.current.offsetHeight : 70;
const section = document.getElementById(sectionId);
if (!section) return;

const top = section.offsetTop - headerH;
if (container) {
container.scrollTo({ top, behavior: 'smooth' });
} else {
window.scrollTo({ top, behavior: 'smooth' });
}
setNavActive(false);
};

return (
<div className="min-h-screen bg-white">
{/* Fixed header */}
<header ref={headerRef} className="bg-white shadow-md fixed w-full top-0 z-50">
<nav className="flex justify-between items-center py-4 px-5 max-w-6xl mx-auto">
{/* <div > <img 
            src={Logo}
            alt="Know Your Road Logo"
            className="h-12 w-auto object-contain cursor-pointer"/>
            </div> */}
            <div className="text-2xl font-bold text-primary">KNOW YOUR ROAD</div>

<ul
className={`md:flex gap-8 ${
navActive ? 'flex flex-col absolute top-16 left-0 right-0 bg-white shadow-md py-4 px-5' : 'hidden'
}`}
>
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
href="#what-we-do"
className={`block py-2 ${activeSection === 'what-we-do' ? 'text-primary font-medium' : 'text-dark hover:text-primary'}`}
onClick={(e) => {
e.preventDefault();
scrollToSection('what-we-do');
}}
>
What We Do
</a>
</li>
<li>
<a
href="#services"
className={`block py-2 ${activeSection === 'services' ? 'text-primary font-medium' : 'text-dark hover:text-primary'}`}
onClick={(e) => {
e.preventDefault();
scrollToSection('services');
}}
>
Services
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

<div className={`md:hidden cursor-pointer ${navActive ? 'toggle' : ''}`} onClick={toggleNav}>
<div className="w-6 h-0.5 bg-dark my-1.5 transition-all"></div>
<div className="w-6 h-0.5 bg-dark my-1.5 transition-all"></div>
<div className="w-6 h-0.5 bg-dark my-1.5 transition-all"></div>
</div>
</nav>
</header>

{/* Scrollable content container (fills remaining viewport under the fixed header) */}
<main ref={containerRef} className="pt-16">
{/* Hero Section */}
<section id="home" className="min-h-screen h-screen. w-full flex items-center py-20 px-5 mx-auto bg-cover bg-center bg-no-repeat " style={{
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bgHomeImg})`
  }}>
<div className="md:flex items-center gap-12 w-full pl-40">
<div className="md:w-1/2 mb-12 md:mb-0">
<h1 className="text-7xl font-bold text-white mb-4">Smart QR-Based Road Transparency System</h1>
<h2 className="text-5xl text-white mb-6"> Know Your Road....</h2>
<div className="flex gap-4">
<button
className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-all"
onClick={() => scrollToSection('what-we-do')}
>
What We Do
</button>
<button className="border-2 border-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary hover:border-blue-600 hover:text-blue-600 transition-all">
<span className="flex items-center gap-2">Scan Here</span>
</button>
</div>
</div>
{/* <div className="md:w-1/2 flex justify-center">
<div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-light shadow-lg flex items-center justify-center text-gray-400">Photo</div>
</div> */}
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
KnowYourRoad is a QR-based web platform that brings transparency and accountability to road construction in India.
</p>
<p className="mb-8">
By scanning a QR code placed near a highway or government-built road (Entry and Exit), citizens can instantly access details.
</p>
<ul className="space-y-4">
<li>• Contractor or company who built it</li>
<li>• Total project cost</li>
<li>• Start and end dates</li>
<li>• Department or official involved</li>
</ul>
<button
className="mt-8 bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-all"
onClick={() => scrollToSection('services')}
>
Services
</button>
</div>
<div className="md:w-1/2 flex justify-center">
<div className="w-full h-80 rounded-lg bg-gray-100 shadow-lg flex items-center justify-center text-gray-400">
<img 
            src={Scane}
            alt="Know Your Road Logo"
            className="w-full h-80 rounded-lg shadow-lg flex items-center justify-center"/>
</div>
</div>
</div>
</section>

{/* what we do */}
<section id="what-we-do" className="py-20 px-5 bg-yellow-100">
<div className="max-w-6xl mx-auto">
<h2 className="text-4xl font-bold text-center text-dark mb-12 relative">
What We Do
<span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary"></span>
</h2>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="bg-white p-6 rounded-lg shadow-md">
<h3 className="text-xl font-semibold text-primary mb-4">QR Code Scanning</h3>
<p>Scan QR codes placed near roads to access comprehensive project information instantly.</p>
</div>
<div className="bg-white p-6 rounded-lg shadow-md">
<h3 className="text-xl font-semibold text-primary mb-4">Project Transparency</h3>
<p>View contractor details, project costs, timelines, and responsible officials.</p>
</div>
<div className="bg-white p-6 rounded-lg shadow-md">
<h3 className="text-xl font-semibold text-primary mb-4">Accountability</h3>
<p>Promote government accountability by making road project details publicly accessible.</p>
</div>
</div>
</div>
</section>

{/* Services Section */}
<section id="services" className="py-20 px-5 max-w-6xl mx-auto">
<h2 className="text-4xl font-bold text-center text-dark mb-12 relative">
Services
<span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary"></span>
</h2>
<div className="prose max-w-none">
<p>Our platform revolutionizes infrastructure transparency by leveraging QR code technology. Each road project in our system has unique QR codes installed at both entry and exit points. When citizens scan these codes, they gain immediate access to:</p>
<ul>
<li>Complete contractor information and company details</li>
<li>Detailed project budget and expenditure breakdown</li>
<li>Official start and completion dates with progress tracking</li>
<li>Government department oversight information</li>
<li>Quality assurance documentation</li>
<li>Maintenance schedules and warranties</li>
</ul>
<p>This system creates unprecedented transparency in public works projects, allowing citizens to verify project details and hold officials accountable. The platform also enables users to report issues or discrepancies directly through the interface.</p>
</div>
</section>

{/* Contact Section */}
<section id="contact" className="py-20 px-5 bg-yellow-100">
<div className="max-w-6xl mx-auto">
<h2 className="text-4xl font-bold text-center text-dark mb-12 relative">
Let's Connect
<span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary"></span>
</h2>
<div className="md:flex gap-12">
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
</main>

<footer className="bg-black text-white text-center py-8">
<p>&copy; {new Date().getFullYear()} Know Your Road. All rights reserved.</p>
</footer>
</div>
);
}

export default User;