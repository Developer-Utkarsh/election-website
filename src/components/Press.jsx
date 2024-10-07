import React from 'react';
import ScrollAnimation from './ScrollAnimation';

const PressItem = ({ title, date, comments }) => (
  <ScrollAnimation animation="scale">
    <div className=" rounded-xl overflow-hidden text-left">
      <div className="w-full h-64 rounded-3xl bg-neutral-500"></div>
      <div className="p-4 pl-0">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <div className="text-sm text-gray-600">
          <span>{date}</span> • <span>{comments} Comments</span>
        </div>
      </div>
    </div>
  </ScrollAnimation>
);

const Press = () => {
  const pressItems = [
    { title: 'Ali Mehdi Announces New Youth Employment Initiative', date: 'April 28, 2024', comments: 15 },
    { title: "Improving Healthcare Access in Mustafabad: Ali Mehdi's Vision", date: 'May 5, 2024', comments: 8 },
    { title: "Education Reform: Ali Mehdi's Plan for Mustafabad's Future", date: 'May 12, 2024', comments: 12 },
    { title: 'Ali Mehdi Leads Environmental Clean-up Drive in Mustafabad', date: 'May 19, 2024', comments: 20 },
    { title: 'Community Outreach: Ali Mehdi Meets Local Business Owners', date: 'May 26, 2024', comments: 7 },
    { title: 'Ali Mehdi Speaks on Social Equality at Town Hall Meeting', date: 'June 2, 2024', comments: 18 },
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation>
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="text-gray-600 text-xl font-medium">Media & Press</h3>
              <h2 className="text-primary text-4xl sm:text-5xl font-bold">Latest Updates</h2>
            </div>
            <button className="bg-blue-700 text-white px-6 py-3 rounded-full hover:bg-blue-800 transition duration-300">
              VIEW ALL
            </button>
          </div>
        </ScrollAnimation>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {pressItems.map((item, index) => (
            <PressItem key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Press;