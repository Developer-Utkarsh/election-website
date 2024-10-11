import React from 'react';
import Hero from "../components/Hero";
import About from "../components/About";
import Events from "../components/Events";
import Press from "../components/Press";
import Gallery from "../components/Gallery";
import Socials from "../components/Socials";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Events />
      <Press />
      <Gallery />
      <Socials />
    </>
  );
};

export default Home;