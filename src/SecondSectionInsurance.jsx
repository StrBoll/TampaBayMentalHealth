import React from 'react';
import SecondComponent from './InsuranceDropDown';

const SecondSection = () => {
    const styles = {
        container: {
            backgroundColor: '#F9F9F9', // Background color for the second section
            width: '100%',
            minHeight: '350 px', // Set the minimum height of the second section
        },
        dropdown: {
            maxHeight: '200px',
            width: '20%',
            margin: '0 auto', // Center the dropdown horizontally
            overflowY: 'auto',
            border: '1px solid #ccc',
            borderRadius: '4px',
            padding: '5px',
        },
        item: {
            padding: '5px',
            cursor: 'pointer',
        },
    };

    return (
        <div style={styles.container}>
        <SecondComponent/>
        </div>
    );
};

export default SecondSection;
