import React from 'react';
import BlueComponent from './BigBlue';
import SecondSection from './SecondSectionTreatment';
import './Treatments.css';
import Bottom from './bottom';
import containerImage from './images/BrainswayExplanation.png'; // Import your container image
import H1image from './images/H1.png';

const Treatments = () => {
  const stylePicture = {
    title: {
      fontSize: '60px',
      color: 'white',
      textAlign: 'left',
      paddingTop: '30%',
      paddingRight: '50%',
      fontFamily: 'Ubuntu, sans-serif', // Apply the Ubuntu font
      fontWeight: 700, // Ensure bold font weight
      fontStyle: 'normal', // Ensure normal font style
    },
    container: {
      width: "100%",
      height: '1800px',
      overflow: 'hidden', // Ensure the image doesn't overflow the container
      position: 'relative', // Position the container relative to its parent
    },
    image: {
      position: 'absolute', // Position the image absolutely within the container
      top: '50%', // Position the image 50% from the top of the container
      left: '50%', // Position the image 50% from the left of the container
      transform: 'translate(-105%, -130%) scale(0.8)', // Center the image horizontally and vertically, and scale it to 50%
      maxWidth: '100%', // Ensure the image doesn't exceed the container width
      maxHeight: '100%', // Ensure the image doesn't exceed the container height
    },
    H1: {
      position: 'absolute', // Position the image absolutely within the container
      top: '50%', // Position the image 50% from the top of the container
      left: '50%', // Position the image 50% from the left of the container
      transform: 'translate(-56%, -42%) scale(0.8)', // Center the image horizontally and vertically, and scale it to 50%
      maxWidth: '100%', // Ensure the image doesn't exceed the container width
      maxHeight: '100%', // Ensure the image doesn't exceed the container height
    },
    button: {
      position: 'absolute',
      bottom: '20px', // Adjust as needed
      left: '50%', // Adjust as needed
      transform: 'translateX(-50%)', // Center the button horizontally
      padding: '10px 20px',
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '20px',
      cursor: 'pointer',
      fontSize: '16px',
    },
    
  };

  return (
    <div className="special-background">
      <BlueComponent />
      <div style={stylePicture.container}>
        <img src={containerImage} alt="Container" style={stylePicture.image} />
        <img src={H1image} alt="H1Image" style={stylePicture.H1} />
      </div>
      <SecondSection /> {/* This second section is the white part */}
      <Bottom></Bottom>
    </div>
  );
};

export default Treatments;
