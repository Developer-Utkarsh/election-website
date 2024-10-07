import React from 'react';
import ScrollAnimation from './ScrollAnimation';

const SocialCard = ({ title, date, description, imageUrl }) => (
  <ScrollAnimation animation="scale" delay={0.2}>
    <div className="bg-white p-6 rounded-lg shadow-md">
      <img src={imageUrl} alt={title} className="w-full h-64 object-contain mb-8 rounded" />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-500 text-sm mb-4">{date}</p>
      <p className="text-gray-700">{description}</p>
    </div>
  </ScrollAnimation>
);

const Socials = () => {
  const socialPosts = [
    {
      title: 'Vision for Mustafabad',
      date: 'Twitter - May 15, 2024',
      description: 'Our plan for Mustafabad focuses on youth employment, education reform, and improved healthcare. Together, we can build a brighter future! #AliForMustafabad',
      imageUrl: '/mustafabad.png'
    },
    {
      title: 'Community Outreach Program',
      date: 'Facebook - May 18, 2024',
      description: 'Engaging with local residents to understand their needs and concerns. Your voice matters in shaping the future of Mustafabad. #CommunityFirst',
      imageUrl: '/community-program.png'
    },
    {
      title: 'Environmental Initiative Launch',
      date: 'Instagram - May 20, 2024',
      description: 'Excited to announce our new environmental cleanup drive. Join us in making Mustafabad cleaner and greener! #GreenMustafabad',
      imageUrl: '/environment-program.png'
    },
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation>
          <h3 className="text-gray-600 text-center text-lg font-medium mb-2">Connect With Us</h3>
          <h2 className="text-primary text-center text-4xl sm:text-5xl font-bold mb-12">Social Media Updates</h2>
        </ScrollAnimation>
        
        <div className="relative">
          <div className="flex overflow-x-auto gap-8 pb-4 snap-x justify-center items-center">
            {socialPosts.map((post, index) => (
              <div key={index} className="w-full sm:w-[364px] flex-shrink-0 snap-center">
                <SocialCard {...post} />
              </div>
            ))}
          </div>
          
          {/* ... navigation buttons ... */}
        </div>
      </div>
    </div>
  );
}

export default Socials;