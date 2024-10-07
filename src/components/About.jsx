import React from 'react';
import ScrollAnimation from './ScrollAnimation';

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between overflow-hidden w-full">
      <div className="w-full lg:w-1/2 bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto lg:ml-auto lg:mr-0">
          <ScrollAnimation>
            <div className="border-l-4 border-primary pl-4">
              <h3 className="text-gray-600 text-base sm:text-lg font-medium mb-2">About</h3>
              <h2 className="text-primary text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">My Journey in Law and Politics</h2>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animation="fadeUp">
            <div className="space-y-4 text-gray-600 mt-8 sm:mt-12">
              <p className="text-sm sm:text-base">
                Ali Mehdi, an experienced advocate and political leader, has been involved in law and public service for over 20 years. His father, Hasan Ahmed, a two-time MLA from Mustafabad, set the foundation for his commitment to the community. Ali has served in various leadership roles and has been an active MLA candidate, continuing to work for a better Mustafabad.
              </p>
              <ul className="list-disc list-inside">
                <li>AICC Media Coordinator, Telangana Elections 2023</li>
                <li>MLA Candidate for Mustafabad (2020)</li>
                <li>Vice President, Delhi Pradesh Congress Committee</li>
              </ul>
            </div>
          </ScrollAnimation>
          <ScrollAnimation>
            <button className="mt-6 sm:mt-8 bg-blue-600 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-full hover:bg-blue-700 transition duration-300 inline-flex items-center text-sm sm:text-base">
              READ MORE
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </ScrollAnimation>
        </div>
      </div>
      <ScrollAnimation animation="fadeLeft" className="w-full lg:w-1/2 bg-gray-100">
        <div className=" rounded-xl">
          <img src="/about.png" alt="Ali Mehdi About Image" className="w-full h-full object-cover rounded-xl" />
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default About;