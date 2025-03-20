'use client';
import { useState } from 'react';

const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative w-full h-screen">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 flex justify-between items-center px-8 py-4 z-50">
        <div className="text-2xl font-bold z-50 text-white">
          <h1>LOGO</h1>
        </div>
        
        <button 
          className="relative z-50 flex flex-col gap-2 p-2 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`block w-8 h-0.5 bg-white transition-transform duration-300 ${
            isMenuOpen ? 'rotate-45 translate-y-2.5' : ''
          }`}></span>
          <span className={`block w-8 h-0.5 bg-white transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-0' : ''
          }`}></span>
          <span className={`block w-8 h-0.5 bg-white transition-transform duration-300 ${
            isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''
          }`}></span>
        </button>
      </nav>

      {/* Fullscreen Menu */}
      <div className={`fixed inset-0 bg-black/95 backdrop-blur-sm z-40 transition-all duration-300 ${
        isMenuOpen 
          ? 'opacity-100 visible' 
          : 'opacity-0 invisible'
      }`}>
        <div className="h-full flex items-center justify-center">
          <ul className="text-center">
            <li className="my-8">
              <a 
                href="#home" 
                className="text-4xl md:text-5xl text-white hover:text-gray-300 transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li className="my-8">
              <a 
                href="#about" 
                className="text-4xl md:text-5xl text-white hover:text-gray-300 transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li className="my-8">
              <a 
                href="#services" 
                className="text-4xl md:text-5xl text-white hover:text-gray-300 transition-colors duration-300"
              >
                Services
              </a>
            </li>
            <li className="my-8">
              <a 
                href="#contact" 
                className="text-4xl md:text-5xl text-white hover:text-gray-300 transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative h-screen flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to Our Site
        </h1>
        <p className="text-xl md:text-2xl text-gray-600">
          Your compelling headline goes here
        </p>
      </div>
    </div>
  );
};

export default HeroSection; 