import React, { useState } from 'react';
import logo from '/logo.png'; // Adjust the path as needed

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              {/* Add Ali Mehdi's logo or name here */}
              <span className="text-2xl font-bold text-primary">Ali Mehdi</span>
            </div>
          </div>
          <div className="hidden md:flex items-center">
            <a href="#" className="text-primary hover:text-blue-700 px-3 py-2 rounded-md text-lg font-medium">Home</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-lg font-medium">About Ali</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-lg font-medium">Vision</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-lg font-medium">Initiatives</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-lg font-medium">News</a>
            <a href="#" className="bg-primary text-white hover:bg-secondary transition duration-300 px-4 py-2 rounded-full text-sm font-medium">Join the Movement</a>
          </div>
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Icon when menu is open */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden relative z-10`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#" className="text-primary hover:text-blue-700 block px-3 py-2 rounded-md text-base font-medium">Home</a>
          <a href="#" className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">About Ali</a>
          <a href="#" className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Vision</a>
          <a href="#" className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Initiatives</a>
          <a href="#" className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">News</a>
          <a href="#" className="bg-primary text-white hover:bg-secondary block px-3 py-2 rounded-md text-base font-medium">Join the Movement</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;