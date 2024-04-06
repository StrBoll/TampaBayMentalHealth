import React from 'react';
import './treatment2.css'; // Import your CSS file for styling
import psychiatryImage from './images/Psychiatry.svg'; // Import your image

const Treatment2 = () => {
  return (
    <div className="banner-container">
      {/* Use the image as a background */}
      <div className="banner" style={{ backgroundImage: `url(${psychiatryImage})` }}>
        {/* You can add content or text inside the banner if needed */}
        <h1 className="banner-text">Welcome to Treatment 2</h1>
      </div>
    </div>
  );
};

export default Treatment2;
