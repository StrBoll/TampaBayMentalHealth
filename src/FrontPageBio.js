import React from 'react';
import image1 from './images/image1.jpg';
import Placeholder from './images/Placeholder.png';

const Biography = () => {
    const styles = {
        container: {
            backgroundColor: 'gray', // Background color for the section
            width: '100%',
            minHeight: '1200px', // Set the minimum height of the section
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            padding: '20px', // Add padding to space out the pictures
            boxSizing: 'border-box', // Include padding and border in the total width and height of the element
        },
        picture: {
            width: '215px',
            height: '263px',
            marginBottom: '20px', // Add margin to space out the pictures vertically
            backgroundSize: 'cover', // Ensure the image covers the entire container
            backgroundPosition: 'center', // Center the background image
        },
    };

    // Array of picture URLs
    const pictureUrls = [
        Placeholder,
        Placeholder,
        Placeholder,
        Placeholder,
    ];

    return (
        <div style={styles.container}>
            {pictureUrls.map((url, index) => (
                <div key={index} style={{ backgroundImage: `url(${url})`, ...styles.picture }} />
            ))}
        </div>
    );
};

export default Biography;
