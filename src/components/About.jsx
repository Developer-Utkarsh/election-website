import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between overflow-hidden">
      {/* Left side - Text content */}
      <div className="w-full lg:w-1/2 bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto lg:ml-auto lg:mr-0">
          <div className="border-l-4 border-primary pl-4">
            <h3 className="text-gray-600 text-base sm:text-lg font-medium mb-2">About</h3>
            <h2 className="text-primary text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">ABOUT ALI MEHDI</h2>
          </div>
          <div className="space-y-4 text-gray-600 mt-8 sm:mt-12">
            <p className="text-sm sm:text-base">
              Accumsan voluptat ocurreret id nam, solet numquam accommodare quo et. Et vidit choro aliquid pro, ad inani eirmod vituperata duo. Ut ludus vulputate qui, movartem iscom modare eos no, vix error percipitur.
            </p>
            <p className="text-sm sm:text-base">
              Nunc, blandit libero, blandit nunc diam rhoncus viverra. Et nec tellus nulla erisque ultricies massa sagittis dictum malesuada. Urna id velit, quis motti nibh duis massa odio, laculis massa duis sit tellus adipiscing. Cursus amet.
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
      
      {/* Right side - Image placeholder with light blue background */}
      <div className="w-full lg:w-1/3 bg-[#F1F5FA] min-h-[300px] lg:min-h-[500px]">
        <div className="h-full flex items-center justify-center relative">
          <div className="bg-gray-300 w-3/4 h-3/4 rounded-lg absolute left-0 lg:-left-[15%] transform -translate-x-1/4 lg:-translate-x-[15%]"></div>
        </div>
      </div>
    </div>
  );
};

export default About;