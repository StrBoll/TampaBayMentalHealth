import React from 'react';

const SecondSection = () => {
    const styles = {
        container: {
            backgroundColor: '#F9F9F9', // Background color for the second section
            width: '100%',
            minHeight: '1800px', // Set the minimum height of the second section
        },
    };

    return (
        <div style={styles.container}>
            {/* Content of the second section goes here */}
        </div>
    );
};

export default SecondSection;