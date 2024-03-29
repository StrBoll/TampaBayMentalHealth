import React from 'react';
import SearchableList from "./list.js";

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
            flexDirection: 'column', // Change direction to column
            justifyContent: 'space-between', // Distribute items along the main axis with space between them
            padding: '20px', // Add padding for content inside the component
            boxSizing: 'border-box', // Include padding and border in the total width and height of the element
            marginTop: '20px', // Adjust margin from the top
            marginBottom: '10px',
        },
        dropdown: {
            maxHeight: '200px',
            overflowY: 'auto',
            borderRadius: '4px',
            padding: '5px',
            width: '100%', // Width of the dropdown items
        },
        item: {
            padding: '5px',
            cursor: 'pointer',
        },
        disclaimer: {
            fontSize: '14px',
            color: '#666', // Dark gray color
            marginTop: 'auto', // Move disclaimer to the bottom
            paddingTop: '30px', // Adjust margin from the bottom
            marginLeft: '-550px', // Add margin from the left
        },
    };
    
    const petNames = [
        "Blue Cross (BCBS)", "Optum", "United Healthcare", "Cigna", "Wellcare", "Ambetter", "Medicaid", "Simply Healthcare",
        "Aetna", "Medicare", "Molina healthcare", "Veterans Affairs", "Oscar Healthcare", "Devoted Health", "Sunshine Health",
        "Humana", "Florida Blue", "Carelon"
    ];

    return (
        <div style={styles.container}>
            <div style={styles.dropdown}>
                <SearchableList items={petNames} />
            </div>
            <div style={styles.disclaimer}>
                If you are not covered by one of these providers you can still receive care*
            </div>
        </div>
    );
};

export default SecondComponent;
