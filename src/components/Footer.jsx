import React from 'react';
import { motion } from 'framer-motion';
import { path } from 'framer-motion/client';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Ali Mehdi', href: '#' },
    { name: 'Vision for Mustafabad', href: '#' },
    { name: 'Get Involved', href: '#' },
  ];

  const socialLinks = [
    { name: 'Twitter', href: 'https://twitter.com/alimehdi_inc', icon: 'twitter', path: 'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' },
    { name: 'Facebook', href: 'https://www.facebook.com/alimehdiinc', icon: 'facebook', path: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z' },
    { name: 'Instagram', href: 'https://www.instagram.com/alimehdi_inc', icon: 'instagram', path: 'M12 2.25a5.25 5.25 0 00-5.25 5.25H4.5A6.75 6.75 0 00.75 12v7.5a6.75 6.75 0 006.75 6.75h7.5a5.25 5.25 0 005.25-5.25V7.5A5.25 5.25 0 0012 2.25zm0 10.5a.75.75 0 100-1.5.75.75 0 000 1.5z' },
  ];

  return (
    <motion.footer 
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75 }}
      className="bg-gray-900 text-white"
    >
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400">Phone: +91 9910788784</p>
            <p className="text-gray-400">Email: ali.mehdi169@gmail.com</p>
            <p className="text-gray-400">Address: Mustafabad, Delhi</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                >
                  <a href={link.href} className="text-gray-400 hover:text-white">{link.name}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                >
                  <span className="sr-only">{link.name}</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d={link.path}  clipRule="evenodd"  fillRule="evenodd"/>
                  </svg>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;


