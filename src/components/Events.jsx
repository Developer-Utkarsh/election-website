import React from 'react';
import eventPersonImg from '/event-person-img.png';
import eventsBottomBg from '/events-bottom-bg.png';

const Events = () => {
  const events = [
    { date: '15 Aug 2024', title: 'Human Rights Conference' },
    { date: '16 Aug 2024', title: 'Happy Mind Happy Life' },
    { date: '17 Aug 2024', title: 'Economic development' },
    { date: '18 Aug 2024', title: 'Strength Of Politic' },
  ];

  return (
    <div className="relative bg-[#F9F9F9] py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-gray-600 text-lg font-medium mb-2">Our Next Event</h3>
          <h2 className="text-primary text-4xl sm:text-5xl font-bold mb-4">Event That Inspire</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Vestibulum a fermentum eros. Nullam vel augue viverra, varius felis et amet,
            rhoncus duis. Integer at vulputat eros. Curabitur interdum ante turpis.
          </p>
        </div>

        <div className="grid grid-cols-1 mb-60 md:grid-cols-2 gap-30 relative z-10">
          {events.map((event, index) => (
            <div key={index} className=" p-6 rounded-lg ">
              <p className="text-primary font-semibold mb-2">{event.date}</p>
              <h3 className="text-xl font-bold mb-3">{event.title}</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          ))}
        </div>

        {/* <img
          src={eventPersonImg}
          alt="Event Person"
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/3 max-w-xs z-20"
        /> */}
      </div>

      <img
        src={eventsBottomBg}
        alt="Events Bottom Background"
        className="absolute bottom-0 left-0 w-full h-auto z-0"
      />
    </div>
  );
};

export default Events;