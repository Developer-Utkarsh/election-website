import React from 'react'
import { motion } from 'framer-motion'

const JoinUs = () => {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <motion.div 
          className="w-full md:w-1/2 mb-8 md:mb-0 pr-0 md:pr-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-blue-700 font-semibold mb-4">Know More About</p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
            Together we can achieve anything
          </h2>
          <p className="text-gray-700 mb-6">
            Aliquam erat volutpat. Curabitur feugiat diam a gravida
            dignissim. Etiam luctus magna vitae nibh eleifend
            elementum.
          </p>
          <p className="text-gray-500 text-sm mb-6">
            Nullam efficitur augue orci, at ultrices ligula ultrices ut. Etiam vitae
            ipsum et nisi dapibus fringilla. Fusce finibus fringilla mauris sit amet
            porta. Mauris et arcu ac est condimentum pharetra eget vehicula lorem.
          </p>
          <p className="text-gray-500 text-sm mb-8">
            Sed efficitur in metus at consectetur. Curabitur fermentum ultricies leo
            commodo hendrerit. Morbi congue sapien non pharetra rhoncus. Nunc
            leo leo, scelerisque vel elit quis, gravida semper eros.
          </p>
          <motion.button 
            className="bg-blue-700 text-white px-6 py-3 rounded-full font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Do Better With Us
          </motion.button>
        </motion.div>
        <motion.div 
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-gray-300 rounded-lg aspect-[4/3] w-full"></div>
        </motion.div>
      </div>
    </div>
  )
}

export default JoinUs