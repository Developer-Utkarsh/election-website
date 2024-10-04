import React from 'react';

const Hero = () => {
  return (
    <div className="bg-[#222]/70 text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        {/* Left side - Image placeholder */}
        <img src="/1.jpg" alt="" className='w-[40%] rounded-xl ' />

        {/* Right side - Text content */}
        <div className="lg:w-1/2 lg:pl-12">
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-[900] mb-4 tracking-wider">
            अली मेहदी
          </h1>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[800] mb-3">
            <span className="text-primary">नेता</span> for
          </h2>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-[900] mb-6'>
            मुस्तफाबाद विधानसभा 69
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            अली मेहदी का साथ, विकास की नई बात, मुस्तफाबाद का बदल रहा हर हालात।
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <button className="bg-secondary hover:bg-blue-700 text-white font-bold py-3 w-full rounded-full transition duration-300 text-lg">
              अभियान से जुड़ें
            </button>
            <blockquote className="text-gray-300 italic border-l-4 border-secondary pl-4 max-w-lg text-lg">
              "#AliForMustafabad"
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;