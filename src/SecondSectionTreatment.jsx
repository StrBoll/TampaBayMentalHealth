// SecondSection.js

import React from 'react';

const SecondSection = () => {
    const styles = {
        container: {
            backgroundColor: '#F9F9F9', // Background color for the second section
            width: '100%',
            minHeight: '450px', // Set the minimum height of the second section
            position: 'relative', // Ensure relative positioning
            zIndex: 0 // Behind other content
        },
        overlay: {
            position: 'absolute', // Positioning the overlay absolutely
            top: '50%', // Align the overlay to the middle vertically
            left: 0, // Align the overlay to the left
            width: '100%', // Full width
            height: '50%', // Half of the height
            backgroundColor: 'rgba(255, 255, 255, 0.5)', // Semi-transparent white background color
            zIndex: 1 // Above the background color
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.overlay}></div>
        </div>
    );
};

export default SecondSection;
