import React from 'react';

const PressItem = ({ title, date, comments }) => (
  <div className=" rounded-xl overflow-hidden text-left">
    <div className="w-full h-64 rounded-3xl bg-neutral-500"></div>
    <div className="p-4 pl-0">
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <div className="text-sm text-gray-600">
        <span>{date}</span> • <span>{comments} Comments</span>
      </div>
    </div>
  </div>
);

const Press = () => {
  const pressItems = [
    { title: 'SED AUCTOR EST CONDI MENTUM SIT NAM EGESTAS', date: 'April 28, 2021', comments: 0 },
    { title: 'SED AUCTOR EST CONDI MENTUM SIT NAM EGESTAS', date: 'April 28, 2021', comments: 0 },
    { title: 'SED AUCTOR EST CONDI MENTUM SIT NAM EGESTAS', date: 'April 28, 2021', comments: 0 },
    { title: 'SED AUCTOR EST CONDI MENTUM SIT NAM EGESTAS', date: 'April 28, 2021', comments: 0 },
    { title: 'SED AUCTOR EST CONDI MENTUM SIT NAM EGESTAS', date: 'April 28, 2021', comments: 0 },
    { title: 'SED AUCTOR EST CONDI MENTUM SIT NAM EGESTAS', date: 'April 28, 2021', comments: 0 },
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h3 className="text-gray-600 text-xl font-medium">Press</h3>
            <h2 className="text-primary text-4xl sm:text-5xl font-bold">Press Release</h2>
          </div>
          <button className="bg-blue-700 text-white px-6 py-3 rounded-full hover:bg-blue-800 transition duration-300">
            VIEW ALL

          </button>
        </div>
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