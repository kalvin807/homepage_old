import React from 'react';
import Navbar from 'parts/navbar';

import './style.scss';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <main style={{ color: "#FFFFFF" }}>
        <div className="intro-wrapper">
          <div className="intro-name">Hello, I'm Calvin!</div>
          <div className="tagline">
            HKU Student | Computer Science Year 2 | Boardgame fan
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;