import React from 'react';
import Placeholder from './images/Placeholder.png';

const Biography = () => {
    const styles = {
        container: {
            backgroundColor: 'gray', // Background color for the section
            width: '100%',
            minHeight: '1200px', // Set the minimum height of the section
            display: 'flex',
            flexDirection: 'column', // Align items vertically
            justifyContent: 'center', // Center items horizontally
            alignItems: 'center', // Center items vertically
            padding: '20px', // Add padding to space out the pictures
            boxSizing: 'border-box', // Include padding and border in the total width and height of the element
        },
        title: {
            fontSize: '32px',
            marginBottom: '20px', // Add margin below the title
        },
        picture: {
            width: '215px',
            height: '263px',
            backgroundSize: 'cover', // Ensure the image covers the entire container
            backgroundPosition: 'center', // Center the background image
        },
        picturesContainer: {
            display: 'flex',
            justifyContent: 'center',
            gap: '20px', // Add gap between the images
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
            <p style={styles.title}>Meet Our Team</p>
            <div style={styles.picturesContainer}>
                {pictureUrls.map((url, index) => (
                    <div key={index} style={{ backgroundImage: `url(${url})`, ...styles.picture }} />
                ))}
            </div>
        </div>
    );
};

export default Biography;
