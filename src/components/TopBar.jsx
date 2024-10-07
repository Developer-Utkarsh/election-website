import React from "react";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";

const TopBar = () => {
  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/alimehdiinc",
      Icon: Facebook,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/alimehdi_inc",
      Icon: Twitter,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/alimehdi_inc",
      Icon: Instagram,
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/channel/UCW12YOrb1C0ZY7qpaim0Y2w",
      Icon: Youtube,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#3D588B] text-white py-3 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <motion.div
          className="flex items-center gap-2 mb-2 sm:mb-0"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <MessageCircle className="w-6 h-6" />
          <span className="text-sm">Your vote builds a better future</span>
        </motion.div>
        <motion.div
          className="flex justify-center items-center mb-2 sm:mb-0"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Phone className="w-4 h-4 mr-1" />
          <span className="text-sm mr-2">+91 9910788784</span>
          <Mail className="w-4 h-4 mr-1" />
          <span className="text-sm">ali.mehdi169@gmail.com</span>
        </motion.div>
        <motion.div
          className="flex items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="flex space-x-2">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-200"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
              >
                <span className="sr-only">{link.name}</span>
                <link.Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TopBar;
