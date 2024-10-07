import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'About Ali', href: '#' },
    { name: 'Vision', href: '#' },
    { name: 'Initiatives', href: '#' },
    { name: 'News', href: '#' },
  ];

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, delay: 0.5 }}
      className="bg-white shadow-lg"
    >
      {isLoading ? (
        <div className="flex justify-center items-center h-16">
          <Loader2 className="animate-spin" />
        </div>
      ) : (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-bold text-primary">Ali Mehdi</span>
              </div>
            </div>
            <div className="hidden md:flex items-center">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-lg font-medium"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.a
                href="#"
                className="bg-primary text-white hover:bg-secondary transition duration-300 px-4 py-2 rounded-full text-sm font-medium"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                Join the Movement
              </motion.a>
            </div>
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;