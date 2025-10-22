import React from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';

function App() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content">
        <Hero />
      </div>
    </div>
  );
}

export default App;
