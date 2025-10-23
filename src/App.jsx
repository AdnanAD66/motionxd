import React from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import VideoSection from './components/VideoSection';

function App() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content">
        <Hero />
        <VideoSection />
      </div>
    </div>
  );
}

export default App;
