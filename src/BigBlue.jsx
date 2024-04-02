import React from 'react';
import bigBlueImage from './images/bigblue.png'; // Import the image

const BlueComponent = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bigBlueImage})`, // Use the imported image
        backgroundSize: 'cover', // Cover the entire area of the div with the background image
        height: '80%', // Height of the component
        borderRadius: '0 0 20% 20%', // Rounding off bottom edges
        position: 'absolute', // Positioning it at the top of the screen
        width: '100%', // Full width
        top: 0, // Positioned at the top of the screen
        left: 0, // Aligned to the left
        zIndex: -1 // Behind other content
      }}
    ></div>
  );
};

export default BlueComponent;
