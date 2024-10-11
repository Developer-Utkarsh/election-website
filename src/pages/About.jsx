import React from 'react';
import ScrollAnimation from '../components/ScrollAnimation';
import { DollarSign, Briefcase, Users, GraduationCap, Play } from 'lucide-react';
import About from '../components/About';

const VisionMissionCard = ({ icon: Icon, title, description }) => (
  <ScrollAnimation animation="scale" className="bg-white p-8 rounded-3xl shadow-md">
    <div className="flex flex-col items-center text-center">
      <div className="bg-blue-100 p-3 rounded-full mb-4">
        <Icon className="w-8 h-8 text-blue-600" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </ScrollAnimation>
);

const AboutUs = () => {
  const visionMissionItems = [
    { icon: DollarSign, title: 'Economic', description: 'Nulla eget suscipit leo, sit amet lobortis sem. Nullam efficitur augue orci, at ultricies ligula ultricies ut.' },
    { icon: Briefcase, title: 'Medical', description: 'Nulla eget suscipit leo, sit amet lobortis sem. Nullam efficitur augue orci, at ultricies ligula ultricies ut.' },
    { icon: Users, title: 'Policy', description: 'Nulla eget suscipit leo, sit amet lobortis sem. Nullam efficitur augue orci, at ultricies ligula ultricies ut.' },
    { icon: GraduationCap, title: 'Education', description: 'Nulla eget suscipit leo, sit amet lobortis sem. Nullam efficitur augue orci, at ultricies ligula ultricies ut.' },
  ];

  return (
    <div className="pb-24">
      <div className="">
        <About />
        
        <ScrollAnimation>
          <div className="text-center mt-16 p-16 max-sm:px-8 bg-[#F9f9f9]">
            <h3 className="text-blue-600 text-lg font-medium mb-2">We do everything for the people</h3>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Vision & Mission</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Vestibulum a fermentum eros. Nullam vel augue viverra, varius felis sit amet, rhoncus risus. Integer at volutpat eros. Curabitur interdum ante turpis.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {visionMissionItems.map((item, index) => (
                <VisionMissionCard key={index} {...item} />
              ))}
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation>
          <div className="flex flex-col lg:flex-row justify-between items-center gap-12 mt-16 px-6 sm:px-16">
            <div className="w-full lg:w-1/2">
              <h3 className="text-blue-600 text-lg font-medium mb-2">Know More About</h3>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
                We Build A Better<br />Place For Each Citizen
              </h2>
              <p className="text-gray-600 mb-4">
                Aliquam erat volutpat. Curabitur feugiat diam a gravida
                dignissim. Etiam luctus magna vitae nibh eleifend elementum.
              </p>
              <p className="text-gray-600 mb-4">
                Nullam efficitur augue orci, at ultricies ligula ultricies ut. Etiam vitae
                ipsum in nisi dapibus fringilla. Fusce finibus fringilla mauris sit amet
                porta. Mauris et arcu ac est condimentum pharetra eget vehicula lorem.
              </p>
              <p className="text-gray-600 mb-8">
                Sed efficitur in metus at consectetur. Curabitur fermentum ultricies leo
                commodo hendrerit. Morbi congue sapien non pharetra rhoncus. Nunc
                leo leo, scelerisque vel elit euis, gravida semper eros.
              </p>
              <ScrollAnimation>
                <button className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-full hover:bg-blue-700 transition duration-300">
                  Let's Do Better With Us
                </button>
              </ScrollAnimation>
            </div>
            
            <ScrollAnimation animation="fadeLeft" className="w-full lg:w-1/2">
              <div className="relative aspect-video bg-gray-300 rounded-lg overflow-hidden">
                {/* <img 
                  src="/placeholder-video.jpg" 
                  alt="Video Placeholder" 
                  className="w-full h-full object-cover"
                /> */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-white bg-opacity-80 rounded-full p-4 hover:bg-opacity-100 transition duration-300">
                    <Play className="w-12 h-12 text-blue-600" />
                  </button>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </ScrollAnimation>

      </div>
    </div>
  );
};

export default AboutUs;