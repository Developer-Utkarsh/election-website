import React from 'react';
import eventPersonImg from '/event-person-img.png';
import eventsBottomBg from '/events-bottom-bg.png';

const Events = () => {
  const events = [
    { date: 'Ongoing', title: 'युवा रोजगार योजना' },
    { date: 'Ongoing', title: 'शिक्षा के लिए पहल' },
    { date: 'Ongoing', title: 'स्वास्थ्य सेवाओं में सुधार' },
    { date: 'Ongoing', title: 'पर्यावरण संरक्षण' },
  ];

  return (
    <div className="relative bg-[#F9F9F9] py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-gray-600 text-lg font-medium mb-2">Our Initiatives</h3>
          <h2 className="text-primary text-4xl sm:text-5xl font-bold mb-4">Vikas-e-Mustafabad</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ali Mehdi's vision for Mustafabad includes key initiatives that focus on employment, education, healthcare, and environmental sustainability.
          </p>
        </div>

        <div className="grid grid-cols-1 mb-60 md:grid-cols-2 gap-30 relative z-10">
          {events.map((event, index) => (
            <div key={index} className="p-6 rounded-lg">
              <p className="text-primary font-semibold mb-2">{event.date}</p>
              <h3 className="text-xl font-bold mb-3">{event.title}</h3>
              <p className="text-gray-600">
                Working towards a better future for Mustafabad through focused initiatives and community engagement.
              </p>
            </div>
          ))}
        </div>

        {/* You can add an image of Ali Mehdi here if available */}
      </div>

      {/* You may want to replace this with a relevant background image */}
      <img
        src={eventsBottomBg}
        alt="Events Bottom Background"
        className="absolute bottom-0 left-0 w-full h-auto z-0"
      />
    </div>
  )
}

export default Events;