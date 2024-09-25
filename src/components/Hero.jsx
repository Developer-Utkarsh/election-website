import React from 'react';

const Hero = () => {
  return (
    <div className="bg-[#222]/70 text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        {/* Left side - Image placeholder */}
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <div className="bg-[#333] w-full h-96 rounded-lg flex items-center justify-center">
            <span className="text-gray-500 text-lg">Image Placeholder</span>
          </div>
        </div>

        {/* Right side - Text content */}
        <div className="lg:w-1/2 lg:pl-12">
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-[900] mb-4  tracking-wider">
            Ali Mehdi
          </h1>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[800] mb-3  ">
            <span className="text-primary">LEADER</span> FOR
          </h2>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-[900] mb-6  '>
          NEW GENERATION
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis magna ut lectus aliquot consequat. Nulla lectus augue, ullamcorper et efficitur lacinia, eleifend eget lacus.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <button className="bg-secondary hover:bg-blue-700 text-white font-bold py-3 w-full rounded-full transition duration-300 text-lg">
              JOIN NOW
            </button>
            <blockquote className="text-gray-300 italic border-l-4 border-secondary pl-4 max-w-lg text-lg">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis magna ut lectus aliquot consequat."
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;