import React from 'react';

const SecondComponent = () => {
    const styles = {
        container: {
            position: 'relative',
            left: '15%',
            width: '70%', // Adjust width for different screen sizes
            height: '40%', // Adjust height for different screen sizes
            background: 'linear-gradient(to bottom, White 75%, #dedede 75%)',
            borderRadius: '8px',
            display: 'flex',
            justifyContent: 'space-between', // Distribute items along the main axis with space between them
            padding: '20px', // Add padding for content inside the component
            boxSizing: 'border-box', // Include padding and border in the total width and height of the element
            marginTop: '20px', // Adjust margin from the top
        },
    };

    return (
        <div style={styles.container}>
            
            
        </div>
    );
};

export default SecondComponent;
