import React from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import LogoStrip from './components/LogoStrip';

function App() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content">
        <Hero />
        <VideoSection />
        {/* <LogoStrip /> */}
      </div>
    </div>
  );
}

export default App;
