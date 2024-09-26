import React from 'react';
import logo from '/logo.png'; // Adjust the path as needed

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white relative">
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{backgroundImage: "url('/footer-bg.png')"}}></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Contact Info */}
          <div className="bg-white p-6 rounded-lg flex justify-center items-center flex-col w-full text-left">
            <img src={logo} alt="Logo" className="w-24 h-24 mb-4" />
            <p className="text-gray-600 mb-4">
              Together we the people achieve more than any single person could ever do alone.
            </p>
            <p className="text-gray-600">Phone:</p>
            <p className="text-gray-600">Email:</p>
            <p className="text-gray-600">Address:</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Event</a></li>
              <li><a href="#" className="hover:underline">Donate</a></li>
              <li><a href="#" className="hover:underline">Volunteer</a></li>
            </ul>
          </div>

          {/* Other Page */}
          <div>
            <h3 className="text-xl font-bold mb-4">Other Page</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Services</a></li>
              <li><a href="#" className="hover:underline">Projects</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Get Our News */}
          <div>
            <h3 className="text-xl font-bold mb-4">Get Our News</h3>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-3 py-2 text-gray-700 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button
                type="submit"
                className="w-full px-3 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-blue-900 py-4 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>Copyright 2023 © Ali Mehdi by Codeblish</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
