import React from 'react';
import BlueComponent from './BigBlue';
import SecondSection from './SecondSectionTreatment';
import './Treatments.css'
import Bottom from './bottom';
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
      
    },
    image: {
      width: '100%',
      height: '100%',
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
        <h1 style={stylePicture.title}>
          BrainsWay Deep TMS Technology
        </h1>
      </div>
      <SecondSection/> {/*This second section is the white part */}
      <Bottom></Bottom>
    </div>
  );
};

export default Treatments;
