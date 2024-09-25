import React, { useState } from 'react';
import logo from '/logo.png'; // Adjust the path as needed

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative bg-white shadow-md py-3">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ backgroundImage: "url('/navbar-bg.png')" }}
      ></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
        <div className="flex justify-between items-center h-16 relative z-10">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img className="h-16 w-auto" src={logo} alt="Logo" />
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4 ">
            <a href="#" className="text-primary hover:text-blue-700 px-3 py-2 rounded-md text-lg font-medium">Homepage</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-lg font-medium">About us</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-lg font-medium">Gallery</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-lg font-medium">My view</a>
            <a href="#" className="bg-primary text-white hover:bg-secondary transition duration-300 px-4 py-2 rounded-full text-sm font-medium">Join the movement</a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              <svg className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Icon when menu is open */}
              <svg className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu, show/hide based on menu state */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden relative z-10`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#" className="text-blue-500 hover:text-blue-700 block px-3 py-2 rounded-md text-base font-medium">Homepage</a>
          <a href="#" className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">About us</a>
          <a href="#" className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Gallery</a>
          <a href="#" className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">My view</a>
          <a href="#" className="bg-blue-500 text-white hover:bg-blue-600 block px-3 py-2 rounded-md text-base font-medium">Join the movement</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;