import React from 'react';
import BlueComponent from './BigBlue';
import Bottom from './bottom';
import containerImage from './images/BrainswayExplanation.png'; // Import your container image
import H1image from './images/H1.png';
import YouTube from 'react-youtube';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { ZIndex } from '@tsparticles/engine';

const Treatment1 = () => {
  const videoId = 'mjA6oQdLr9U';
  const opts = {
    playerVars: {
      autoplay: 0, // Autoplay disabled
      origin: window.location.origin, // Set the origin to your website
    },
  };
  const stylePicture1 = {
    container: {
      width: "100%",
      maxWidth: "700px", // Adjust maximum width as needed
      zIndex: 2,
    },
    
    image: {
      width: '100%', // Make the image responsive to its container width
      height: 'auto', // Maintain aspect ratio
    },
    video: {
      width: '100%',
      marginTop: '2rem', // Adjust spacing as needed
    },
    whiteComponent: {
      width: '90%', // Adjust as needed
      maxWidth: '600px', // Set maximum width to prevent stretching on larger screens
      margin: '0 auto', // Center horizontally
      backgroundColor: 'white',
      borderRadius: '7px',
      boxShadow: '0px 0px 9px rgba(0, 0, 0, 0.1)',
      padding: '20px', 
      textAlign: 'left',
      fontSize: '18px', 
      lineHeight: '1.5', 
      color: '#343a40', 
      fontFamily: 'Lato, Helvetica, Arial, sans-serif', 
      textIndent: '0.5em', // Adjust the indentation as needed
    },
    firstLine: {
      color: '#4C94C8', // Dark blue color
      fontFamily: 'Helvetica, Arial, sans-serif', // Apply the Helvetica font
      fontSize: '18px', // 18 pixels font size
      fontWeight: 'bold',
    },
  };
  const stylePicture = {
    container: {
      width: "95%",
      maxWidth: "1200px", // Adjust maximum width as needed
      margin: "0 auto", // Center horizontally
    },
    
    image: {
      width: '100%', // Make the image responsive to its container width
      height: 'auto', // Maintain aspect ratio
    },
    video: {
      width: '100%',
      marginTop: '2rem', // Adjust spacing as needed
    },
    whiteComponent: {
      width: '90%', // Adjust as needed
      maxWidth: '600px', // Set maximum width to prevent stretching on larger screens
      margin: '0 auto', // Center horizontally
      backgroundColor: 'white',
      borderRadius: '7px',
      boxShadow: '0px 0px 9px rgba(0, 0, 0, 0.1)',
      padding: '20px', 
      textAlign: 'left',
      fontSize: '18px', 
      lineHeight: '1.5', 
      color: '#343a40', 
      fontFamily: 'Lato, Helvetica, Arial, sans-serif', 
      textIndent: '0.5em', // Adjust the indentation as needed
    },
    firstLine: {
      color: '#4C94C8', // Dark blue color
      fontFamily: 'Helvetica, Arial, sans-serif', // Apply the Helvetica font
      fontSize: '18px', // 18 pixels font size
      fontWeight: 'bold',
    },
  };

  return (
    <div className="special-background">
      <BlueComponent style={{ zIndex: 1 }} />
      <div style={stylePicture1.container}>
      <img src={containerImage} alt="Container" style={stylePicture.image} />
      </div>
      <div style={stylePicture.container}>
       
        <img src={H1image} alt="H1Image" style={stylePicture.image} />
      </div>
      <div style={stylePicture.video}>
        <h2 style={{ color: 'Black', fontSize: '225%', marginBottom: '2%', }}>Real Testimonial</h2>
        <YouTube videoId={videoId} opts={opts} />
      </div>
      <div style={stylePicture.whiteComponent}>
        <span style={stylePicture.firstLine}>Our Treatment:</span><br/><br/>
        <hr style={{ borderTop: '1px solid #DCDCDC', marginBottom: '20px' }} />
        <FontAwesomeIcon icon={faCircleCheck} style={{ marginRight: '5px', color: '#8FCBFF' }} /> FDA-cleared <br/><br/>
        <FontAwesomeIcon icon={faCircleCheck} style={{ marginRight: '5px', color: '#8FCBFF' }} /> Effective for medication-resistant patients<br/><br/>
        <FontAwesomeIcon icon={faCircleCheck} style={{ marginRight: '5px', color: '#8FCBFF' }} /> Short 20-minute sessions<br/><br/>
        <FontAwesomeIcon icon={faCircleCheck} style={{ marginRight: '5px', color: '#8FCBFF' }} /> Noninvasive<br/><br/>
        <FontAwesomeIcon icon={faCircleCheck} style={{ marginRight: '5px', color: '#8FCBFF' }} /> No systemic side effects<br/><br/>
        <FontAwesomeIcon icon={faCircleCheck} style={{ marginRight: '5px', color: '#8FCBFF' }} /> Wide variety of insurance accepted, call to see if you're covered
      </div>
      <Bottom />
    </div>
  );
};

export default Treatment1;
