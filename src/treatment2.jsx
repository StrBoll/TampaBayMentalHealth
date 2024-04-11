import React from 'react';
import PsychiatryVideo from './Media/bannervid.mp4'; // Import your video file
import './Treatment2.css'; // Import CSS file for styling
import SecondSection from './T2secondsection'; // Import SecondSection component

const Treatment3 = () => {
  return (
    <div>
      {/* First Section */}
      <div className="video-container" style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#f0f0f0' }}>
        {/* Video */}
        <h1 className="video-text">Accessible Psychiatry</h1>
        <video autoPlay loop muted className="fullscreen-video">
          <source src={PsychiatryVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

      </div>

      <SecondSection />      
      
    </div>
  );
};

export default Treatment3;
