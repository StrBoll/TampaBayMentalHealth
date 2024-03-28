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
            justifyContent: 'space-between', // Distribute items along the main axis with space between them
            padding: '20px', // Add padding for content inside the component
            boxSizing: 'border-box', // Include padding and border in the total width and height of the element
            marginTop: '20px', // Adjust margin from the top
        },
        dropdown: {
            maxHeight: '200px',
            overflowY: 'auto',
            border: '1px solid #ccc',
            borderRadius: '4px',
            padding: '5px',
            width: '100px', // Width of the dropdown items
        },
        item: {
            padding: '5px',
            cursor: 'pointer',
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
        </div>
    );
};

export default SecondComponent;
