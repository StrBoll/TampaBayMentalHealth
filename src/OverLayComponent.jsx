import React from 'react';

const OverlayComponent = () => {
    const styles = {
        overlay: {
            position: 'relative',
            bottom: '20px', // Align the bottom of the overlay with the bottom of the container
            left: '15%', // Adjust padding from the left for different screen sizes
            width: '70%', // Adjust width for different screen sizes
            height: '10%', // Cover only the bottom 25 pixels of the container
            background: 'linear-gradient(to bottom, White 75%, #dedede 75%)',            
            borderRadius: '8px',
            display: 'flex',
            justifyContent: 'space-between', // Distribute items along the main axis with space between them
            padding: '5% 5%', // Add padding for content inside the overlay
            boxSizing: 'border-box', // Include padding and border in the total width and height of the element
        },
        button: {
            backgroundColor: '#8D5C87',
            color: 'white',
            border: 'none',
            borderRadius: '20px',
            cursor: 'pointer',
            fontSize: '1vw', // Responsive font size based on viewport width
            fontFamily: 'Inter, Arial, sans-serif',
            padding: '2vh 4vw', // Responsive padding based on viewport width and height
            marginBottom: '2vh', // Add margin to separate the button from other content
            marginLeft: '0%', // Adjusted margin to be relative to container width
        },
        text: {
            color: 'Granite',
            fontFamily: 'Domine, Georgia, sans-serif',
            fontSize: '2vw', // Responsive font size based on viewport width
            fontWeight: 400,
            marginBottom: '2vh', // Responsive margin based on viewport height
            marginLeft: '0%', // Adjusted margin to be relative to container width
        },
        image: {
            width: '60%', // Set width relative to the size of the container
            height: 'auto', // Maintain aspect ratio
            position: 'relative', // Add position relative
            top: '-25px', // Move the image 25 pixels higher
        },
        disclaimer: {
            color: 'gray',
            fontFamily: 'Arial, sans-serif',
            fontSize: '1vw', // Responsive font size based on viewport width
            margin: '0', // Adjust margin to fit within the gray section
            textAlign: 'left', // Align the disclaimer to the left
            width: '100%', // Ensure the disclaimer spans the full width of the container
            position: 'absolute', // Position the disclaimer within the overlay
            bottom: '10%', // Adjust vertical position as needed
            left: '5%', // Adjust horizontal position as needed
        },
    };

    return (
        <div style={styles.overlay}>
            <div>
                <p style={styles.text}>Insurance Accepted</p>
                <button style={styles.button}>See more..</button>
            </div>
            <img src={require('./images/logoCollage.png')} alt="Description of the image" style={styles.image} />
            <p style={styles.disclaimer}>Disclaimer: Understanding Insurance Coverage for Psychiatry Services</p>
        </div>
    );
};

export default OverlayComponent;
