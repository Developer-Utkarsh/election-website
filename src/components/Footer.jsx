import React from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Twitter,
  Facebook,
  Instagram,
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "About Ali Mehdi", href: "#" },
    { name: "Vision for Mustafabad", href: "#" },
    { name: "Get Involved", href: "#" },
  ];

  const socialLinks = [
    {
      name: "Twitter",
      href: "https://twitter.com/alimehdi_inc",
      Icon: Twitter,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/alimehdiinc",
      Icon: Facebook,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/alimehdi_inc",
      Icon: Instagram,
    },
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
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400 flex items-center">
              <Phone className="w-4 h-4 mr-2" /> +91 9910788784
            </p>
            <p className="text-gray-400 flex items-center">
              <Mail className="w-4 h-4 mr-2" /> ali.mehdi169@gmail.com
            </p>
            <p className="text-gray-400 flex items-center">
              <MapPin className="w-4 h-4 mr-2" /> Mustafabad, Delhi
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.75 }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 1.5 + index * 0.1 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
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
                  <link.Icon className="h-6 w-6" />
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
