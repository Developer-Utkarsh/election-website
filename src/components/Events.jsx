import React from 'react';
import ScrollAnimation from './ScrollAnimation';
import eventsBottomBg from '/events-bottom-bg.png';

const Events = () => {
  const initiatives = [
    { title: 'Youth Employment', description: 'Providing job opportunities for young people through skill development and career guidance.' },
    { title: 'Education for All', description: 'Expanding access to quality education for every child in Mustafabad.' },
    { title: 'Healthcare Improvement', description: 'Ensuring better healthcare facilities and services for residents.' },
    { title: 'Environmental Protection', description: 'Promoting sustainability through clean-up initiatives and tree plantation.' },
  ];

  return (
    <div className="relative bg-[#F9F9F9] py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation>
          <div className="text-center mb-12">
            <h3 className="text-gray-600 text-lg font-medium mb-2">Our Initiatives</h3>
            <h2 className="text-primary text-4xl sm:text-5xl font-bold mb-4">Vikas-e-Mustafabad: A Vision for Growth</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ali Mehdi's vision for Mustafabad focuses on creating a stronger future through key initiatives in employment, education, healthcare, and environmental conservation. His ongoing projects aim to improve the community's quality of life.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          {initiatives.map((initiative, index) => (
            <ScrollAnimation key={index} animation={index % 2 === 0 ? "fadeRight" : "fadeLeft"}>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">{initiative.title}</h3>
                <p className="text-gray-600">{initiative.description}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
<div className='flex justify-center items-center w-full mt-0 rounded-xl'>

      <img
        src="/vision.png"
        alt="Events Bottom Background"
        className=" z-10  w-[32rem] h-auto rounded-xl"
      />

</div>
      </div>


      <img
        src={eventsBottomBg}
        alt="Events Bottom Background"
        className="absolute bottom-0 left-0 w-full h-auto z-0"
      />
    </div>
  )
}

export default Events;