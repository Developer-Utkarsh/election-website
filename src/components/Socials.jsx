import React from 'react';

const SocialCard = ({ title, date, description }) => (
  <div className="bg-white rounded-3xl shadow-md overflow-hidden border border-secondary">
    <div className="bg-neutral-500 rounded-3xl h-52 w-full"></div>
    <div className="p-4">
      <h3 className="text-blue-700 font-bold mb-6">{title}</h3>
      <p className="text-gray-600 text-sm mb-2">{date}</p>
      <p className="text-gray-700 mb-4">{description}</p>
      <a href="#" className="text-blue-600 font-semibold hover:underline">Learn More</a>
    </div>
  </div>
);

const Socials = () => {
  const socialPosts = [
    {
      title: 'Vision for Mustafabad',
      date: 'Twitter - May 15, 2024',
      description: 'Our plan for Mustafabad focuses on youth employment, education reform, and improved healthcare. Together, we can build a brighter future! #AliForMustafabad'
    },
    {
      title: 'Community Outreach Program',
      date: 'Facebook - May 18, 2024',
      description: 'Engaging with local residents to understand their needs and concerns. Your voice matters in shaping the future of Mustafabad. #CommunityFirst'
    },
    {
      title: 'Environmental Initiative Launch',
      date: 'Instagram - May 20, 2024',
      description: 'Excited to announce our new environmental cleanup drive. Join us in making Mustafabad cleaner and greener! #GreenMustafabad'
    },
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-gray-600 text-center text-lg font-medium mb-2">Connect With Us</h3>
        <h2 className="text-primary text-center text-4xl sm:text-5xl font-bold mb-12">Social Media Updates</h2>
        
        <div className="relative">
          <div className="flex overflow-x-auto gap-8 pb-4 snap-x justify-center items-center">
            {socialPosts.map((post, index) => (
              <div key={index} className="w-full sm:w-[364px] flex-shrink-0 snap-center">
                <SocialCard {...post} />
              </div>
            ))}
          </div>
          
          <button className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md -ml-4">
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md -mr-4">
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Socials;