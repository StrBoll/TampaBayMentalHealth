// BlueComponent.js

import React from 'react';
import bigBlueImage from './images/bigblue.png'; // Import the bigBlue image
import overlayImage from './images/Brainsway.webp'; // Import the overlay image
import explanation from './images/BrainswayExplanation.png';
const BlueComponent = () => {
  return (
    <div
      style={{
        position: 'relative', // Set the position to relative
        height: '80%', // Height of the component
        borderRadius: '0 0 100px 100px', // Rounding off bottom corners by 100 pixels
        width: '100%', // Full width
        top: 0, // Positioned at the top of the screen
        left: 0, // Aligned to the left
        zIndex: 0 // Behind other content
      }}
    >
      <img src={bigBlueImage} alt="bigBlue" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0 0 100px 100px' }} />
      <div
        style={{
          position: 'absolute', // Positioning the overlay absolutely
          top: '5%', // Align the overlay to the middle vertically
          left: '35%', // Align the overlay to the left
          width: '70%', // Full width
          height: 'auto', // Half of the height
          zIndex: 1, // Above the background image
          borderRadius: '0 0 100px 100px', // Rounding off bottom corners by 100 pixels
        }}
      >
        <img src={overlayImage} alt="Overlay Image" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0 0 100px 100px' }} />
      </div>
    </div>
  );
};

export default BlueComponent;
