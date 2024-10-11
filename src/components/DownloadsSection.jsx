import React from 'react'
import { motion } from 'framer-motion'

const DownloadsSection = () => {
  const downloadItems = Array(6).fill(null)

  return (
    <section className="py-8 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Downloads</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {downloadItems.map((_, index) => (
          <motion.div
            key={index}
            className="bg-gray-200 rounded-lg aspect-[4/3] cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          />
        ))}
      </div>
    </section>
  )
}

export default DownloadsSection