import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between overflow-hidden">
      {/* Left side - Text content */}
      <div className="w-full lg:w-1/2 bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto lg:ml-auto lg:mr-0">
          <div className="border-l-4 border-primary pl-4">
            <h3 className="text-gray-600 text-base sm:text-lg font-medium mb-2">About</h3>
            <h2 className="text-primary text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">अली मेहदी – जनसेवा के लिए एक नेता</h2>
          </div>
          <div className="space-y-4 text-gray-600 mt-8 sm:mt-12">
            <p className="text-sm sm:text-base">
              Ali Mehdi is a political leader focusing on janseva. A lifelong resident of Mustafabad, he deeply understands the struggles and problems of the local people. His mission is to serve everyone, fighting for social equality, and ensuring that every citizen receives the rights and opportunities they deserve.
            </p>
            <p className="text-sm sm:text-base">
              Having worked closely with welfare programs and NGOs, Ali's experience in solving social issues like unemployment and social discrimination provides him with strong foundations. His strong connection with the youth of Mustafabad has led him to focus on yuva rozgar yojana and skill development initiatives.
            </p>
          </div>
          <button className="mt-6 sm:mt-8 bg-blue-600 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-full hover:bg-blue-700 transition duration-300 inline-flex items-center text-sm sm:text-base">
            READ MORE
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
      {/* Right side - Image (you can add an image of Ali Mehdi here) */}
      <div className="w-full lg:w-1/2 bg-gray-100">
        {/* Add an image here */}
        <img src="/2.jpg" alt="Ali Mehdi About Image" />
      </div>
    </div>
  );
};

export default About;