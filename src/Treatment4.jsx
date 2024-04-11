import React from 'react';
import PsychiatryVideo from './Media/gr1.mp4'; // Import your video file
import './Treatment4.css'; // Import CSS file for styling
import SecondSection from './T4secondsection'; // Import SecondSection component

const Treatment4 = () => {
  return (
    <div>
      {/* First Section */}
      <div className="video-container" style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#f0f0f0' }}>
        {/* Video */}
        <h1 className="video-text">Group Therapy</h1>
        <video autoPlay loop muted className="fullscreen-video">
          <source src={PsychiatryVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

      </div>

      <SecondSection />      
      
    </div>
  );
};

export default Treatment4;
