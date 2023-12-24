import React from 'react';
import '../../App.css';
import Cards from '../Cards.js';
import HeroSection from '../HeroSection.js';
import Footer from '../Footer.js';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
