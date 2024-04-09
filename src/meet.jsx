import React from 'react';
import TeamSection from './Teamsec';
import './Meet.css'
const Meet = () => {
  
  const styles = {
    container: {
        backgroundColor: 'White', // Background color for the section
        width: '100%',
        minHeight: '1200px', // Set the minimum height of the section
        display: 'flex',
        flexDirection: 'column', // Align items vertically
        alignItems: 'center', // Center items horizontally
        padding: '20px', // Add padding to space out the pictures
        boxSizing: 'border-box', // Include padding and border in the total width and height of the element
    },
    title: {
        fontSize: '48px',
        marginBottom: '20px', // Add margin below the title
        color: '#07538D',
        fontFamily: 'goldenbook, serif',
        marginTop: '0', // Place the title at the top of the container
    },
    picturesRow: {
        position: 'relative', // Position the container relatively to place the vertical line
        display: 'flex',
        justifyContent: 'center',
        gap: '260px', // Add gap between the pictures
    },
    verticalLine: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: '50%', // Position the line in the middle horizontally
        width: '1.5px',
        backgroundColor: '#07538D', // Color of the vertical line
        content: '""',
    },
    pictureContainer: {
        textAlign: 'center', // Center the content horizontally within each picture container
    },
    picture: {
        width: '215px',
        height: '263px',
        backgroundSize: 'cover', // Ensure the image covers the entire container
        backgroundPosition: 'center', // Center the background image
    },
    caption: {
        fontSize: '16px',
        marginTop: '5px', // Add margin above each caption
        color: '#666', // Dark gray color
    },
    
    
};

  return (
    <div className='t'>
      <p style={styles.title}>Meet Our Team</p>
    <TeamSection/>
    </div>
  );
};

export default Meet;
