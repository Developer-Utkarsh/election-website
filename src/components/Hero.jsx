import React from "react";
import ScrollAnimation from "./ScrollAnimation";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-[#222]/70 text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        <ScrollAnimation
          animation="fadeRight"
          className="w-[40%] max-sm:w-[80%] rounded-xl"
          duration={1}
        >
          <img src="/hero.png" alt="Ali Mehdi" className=" rounded-xl w-full" />
        </ScrollAnimation>

        <div className="lg:w-1/2 lg:pl-12">
          <ScrollAnimation duration={1}>
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-[900] mb-4 tracking-wider">
              Ali Mehdi
            </h1>
          </ScrollAnimation>
          <ScrollAnimation animation="fadeLeft" duration={0.5} delay={1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[800] mb-3">
              <span className="text-primary">Advocate</span> and
            </h2>
          </ScrollAnimation>
          <ScrollAnimation animation="fadeLeft" duration={0.5} delay={1.25}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[900] mb-6">
              Political Leader
            </h2>
          </ScrollAnimation>
          <ScrollAnimation delay={1.5}>
            <p className="text-gray-300 mb-8 text-lg">
              Committed to justice, progress, and making a difference for the
              people of Mustafabad.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Link
                to="/joinus"
                className="bg-primary hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 text-lg"
              >
                Get Involved  
              </Link>
              <blockquote className="text-gray-300 italic border-l-4 border-secondary pl-4 max-w-lg text-lg">
                "#AliForMustafabad
              </blockquote>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
};

export default Hero;
