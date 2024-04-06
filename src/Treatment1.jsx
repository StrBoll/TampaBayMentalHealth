import React from 'react';
import BlueComponent from './BigBlue';
import SecondSection from './SecondSectionTreatment';
import './Treatments.css';
import Bottom from './bottom';
import containerImage from './images/BrainswayExplanation.png'; // Import your container image
import H1image from './images/H1.png';
import YouTube from 'react-youtube';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const Treatment1 = () => {
  const videoId = 'mjA6oQdLr9U';
  const opts = {
    playerVars: {
      autoplay: 0, // Autoplay disabled
      origin: window.location.origin, // Set the origin to your website
    },
  };
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
      height: '1900px',
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
    video: {
      width: '100%',
      height: 'auto',
      position: 'absolute',
      transform: 'translate(-21%, -125%)',
    },
    whiteComponent: {
      width: '20%',
      height: 'auto',
      backgroundColor: 'white',
      position: 'absolute',
      left: 'calc(50% + 280px)',
      top: '50%',
      transform: 'translate(-50%, 315%)',
      borderRadius: '7px',
      borderTopLeftRadius: '49px', 
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
      paddingLeft: '15%',
      color: '#4C94C8', // Dark blue color
      fontFamily: 'Helvetica, Arial, sans-serif', // Apply the Helvetica font
      fontSize: '18px', // 18 pixels font size
      fontWeight: 'bold',
    },
  };

  return (
    <div className="special-background">
      <BlueComponent />
      <div style={stylePicture.container}>
        <img src={containerImage} alt="Container" style={stylePicture.image} />
        <img src={H1image} alt="H1Image" style={stylePicture.H1} />
      </div>
      <div style={stylePicture.video}>
        <h2 style={{left: '0', color: 'Black', fontSize: '225%', marginBottom: '4%', marginRight: '17%', }}>Real Testimonial</h2>
        <iframe                  
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
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
