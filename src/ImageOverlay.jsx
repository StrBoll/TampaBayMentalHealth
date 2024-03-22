import React from 'react';
import './ImageOverlay.css'; // Styles for the component

const ImageOverlay = ({ imageUrl, text }) => {
  return (
    <div className="outer-container">
      <div className="color-container">
        <div className="image-overlay-container" style={{ backgroundImage: `url(${imageUrl})` }}>
          <div className="overlay-text">
            {text}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageOverlay;
