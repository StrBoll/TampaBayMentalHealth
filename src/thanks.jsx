import React from 'react';
import './Linebaugh.css'; // Assuming you have a CSS file for styling

function Thanks() {
  return (
    <div className="windowContainer">
      <div className="bannerText">Thanks for Contacting Us!</div>
      <div className="subText"> Your message has been successfully sent.</div>

      {/* Displaying the image */}

      <BlueSquare />
    </div>
  );
}

function BlueSquare() {
  return (
    <div className="blueSquare"></div>
  );
}

export default Thanks;
