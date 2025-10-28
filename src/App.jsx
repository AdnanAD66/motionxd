import React from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import LogoStrip from './components/LogoStrip';
import WhatWeDo from './components/WhatWeDo';
import KillerVideos from './components/KillerVideos';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content">
        <Hero />
        <VideoSection />
        <LogoStrip />
        <WhatWeDo />
        <KillerVideos />
        <PricingSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
