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
        "Max", "Bella", "Charlie", "Lucy", "Cooper", "Daisy", "Bailey", "Luna", "Rocky", "Sadie",
        "Tucker", "Lola", "Buddy", "Molly", "Stella", "Jack", "Zoey", "Duke", "Maggie", "Bear",
        "Sophie", "Oliver", "Rosie", "Harley", "Ruby", "Lily", "Leo", "Gracie", "Teddy", "Emma",
        "Sam", "Chloe", "Riley", "Penny", "Jake", "Zoe", "Milo", "Annie", "Mia", "Gus", "Princess",
        "Oscar", "Maddie", "Coco", "Jax", "Sasha", "Scout", "Lilly", "Buster"
    ];

    return (
        <div style={styles.container}>
            <div style={styles.dropdown}>
                
            </div>
        </div>
    );
};

export default SecondComponent;
