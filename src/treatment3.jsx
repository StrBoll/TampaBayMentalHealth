import React from 'react';
import BrainswayVideo from './Media/BrainswayVideo.mp4'; // Import your video file
import './Treatment3.css'; // Import CSS file for styling
import SecondSection from './T3secondsection'; // Import SecondSection component
import overlayImage from './images/Brainsway.webp'; // Import the overlay image

const Treatment3 = () => {
  return (
    <div>
      {/* First Section */}
      <div className="video-container" style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#f0f0f0' }}>
        {/* Video */}
        <h1 className="video-text">Discover Brainsway Deep TMS</h1>
        <video autoPlay loop muted className="fullscreen-video">
          <source src={BrainswayVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Second Section */}
      <SecondSection />
    </div>
  );
};

export default Treatment3;
