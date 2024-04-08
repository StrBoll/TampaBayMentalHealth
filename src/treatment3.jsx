import React from 'react';
import BrainswayVideo from './Media/BrainswayVideo.mp4'; // Import your video file
import './Treatment3.css'; // Import CSS file for styling

const Treatment3 = () => {
  return (
    <div className="video-container">
      <h1 className="video-text">Discover Brainsway Deep TMS</h1>
      <video autoPlay loop muted className="fullscreen-video">
        <source src={BrainswayVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Treatment3;
