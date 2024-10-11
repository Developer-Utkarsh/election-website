import React from "react";
import ScrollAnimation from "./ScrollAnimation";
import eventsBottomBg from "/events-bottom-bg.png";

const Events = () => {
  const initiatives = [
    {
      title: "Youth Employment",
      description:
        "Providing job opportunities for young people through skill development and career guidance.",
    },
    {
      title: "Education for All",
      description:
        "Expanding access to quality education for every child in Mustafabad.",
    },
    {
      title: "Healthcare Improvement",
      description:
        "Ensuring better healthcare facilities and services for residents.",
    },
    {
      title: "Environmental Protection",
      description:
        "Promoting sustainability through clean-up initiatives and tree plantation.",
    },
  ];

  return (
    <div className="relative bg-[#F9F9F9] py-16 pb-0 px-4 sm:px-6 xl:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation>
          <div className="text-center mb-12">
            <h3 className="text-gray-600 text-xl font-medium mb-2">
              Our Initiatives
            </h3>
            <h2 className="text-primary text-4xl sm:text-5xl font-bold mb-4">
              Vikas-e-Mustafabad: A Vision for Growth
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ali Mehdi's vision for Mustafabad focuses on creating a stronger
              future through key initiatives in employment, education,
              healthcare, and environmental conservation. His ongoing projects
              aim to improve the community's quality of life.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          <ScrollAnimation
            animation="fadeLeft"
            className="xl:absolute xl:left-40 xl:max-w-sm xl:text-right"
          >
            <div className=" p-6 rounded-xl xl:text-right max-md:bg-white">
              <h3 className="text-xl font-bold mb-3 text-blue-600">
                Youth Employment
              </h3>
              <p className="text-gray-600">
                Providing job opportunities for young people through skill
                development and career guidance.
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animation="fadeRight"
            className="xl:absolute xl:right-40 xl:max-w-sm "
          >
            <div className=" p-6 rounded-xl text-left max-md:bg-white">
              <h3 className="text-xl font-bold mb-3 text-blue-600">
                Education for All
              </h3>
              <p className="text-gray-600">
                Expanding access to quality education for every child in
                Mustafabad.
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animation="fadeLeft"
            className="xl:absolute xl:left-16 xl:top-48 xl:max-w-sm xl:text-right"
          >
            <div className=" p-6 rounded-xl xl:text-right max-md:bg-white">
              <h3 className="text-xl font-bold mb-3 text-blue-600">
                Healthcare Improvement
              </h3>
              <p className="text-gray-600">
                Ensuring better healthcare facilities and services for
                residents.
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animation="fadeRight"
            className="xl:absolute xl:right-16  xl:top-48 xl:max-w-sm xl:text-left"
          >
            <div className=" p-6 rounded-xl xl:text-left max-md:bg-white  ">
              <h3 className="text-xl font-bold mb-3 text-blue-600">
                Environmental Protection
              </h3>
              <p className="text-gray-600">
                Promoting sustainability through clean-up initiatives and tree
                plantation.
              </p>
            </div>
          </ScrollAnimation>
        </div>
        <div className="flex justify-center items-center w-full mt-0 rounded-xl">
          <img
            src="/vision.png"
            alt="Events Bottom Background"
            className=" z-10  w-[54rem] ml-8 h-auto rounded-xl"
          />
        </div>
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
