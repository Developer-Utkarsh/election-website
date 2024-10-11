import React from 'react';
import { motion } from 'framer-motion';

const Vision = () => {
  const visionItems = [
    { title: "Contrary to popular belief, What do we want?", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac massa in tellus ultricorper sollicitudin eget eu eros. Nam fermentum semper tortus ut tincidunt." },
    { title: "Contrary to popular belief, What do we want?", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac massa in tellus ultricorper sollicitudin eget eu eros. Nam fermentum semper tortus ut tincidunt." },
    { title: "Politics is why we can't have nice things. Like the internet", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac massa in tellus ultricorper sollicitudin eget eu eros. Nam fermentum semper tortus ut tincidunt." },
    { title: "Organizing for Action is a movement of millions", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac massa in tellus ultricorper sollicitudin eget eu eros. Nam fermentum semper tortus ut tincidunt." },
    { title: "Organizing for Action is a movement of millions", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac massa in tellus ultricorper sollicitudin eget eu eros. Nam fermentum semper tortus ut tincidunt." },
    { title: "We're the people who don't just support progressive change", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac massa in tellus ultricorper sollicitudin eget eu eros. Nam fermentum semper tortus ut tincidunt." },
  ];

  return (
    <div className="bg-white">
      {/* Quotes Section */}
      <section className="py-12 px-4 md:px-8 lg:px-16 text-center">
        <p className="text-sm text-blue-600 mb-2">We do everything for the people</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy-900">Our Quotes</h2>
        <p className="max-w-2xl mx-auto mb-10 text-gray-600 text-sm">
          Vestibulum a fermentum eros. Nullam vel augue viverra, varius felis sit amet, rhoncus risus. Integer at volutpat eros. Curabitur interdum ante turpis.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <motion.div
              key={index}
              className="bg-gray-300 rounded-lg aspect-[4/3]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Content for each quote box */}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-12 px-4 md:px-8 lg:px-16 text-center">
        <p className="text-sm text-blue-600 mb-2">We do everything for the people</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy-900">Vision & Mission</h2>
        <p className="max-w-2xl mx-auto mb-10 text-gray-600 text-sm">
          Vestibulum a fermentum eros. Nullam vel augue viverra, varius felis sit amet, rhoncus risus. Integer at volutpat eros. Curabitur interdum ante turpis.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visionItems.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div 
                className="bg-gray-300 rounded-lg aspect-video mb-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              />
              <h3 className="text-left text-navy-900 font-semibold mb-2">{item.title}</h3>
              <p className="text-left text-gray-600 text-sm">{item.content}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Vision;
