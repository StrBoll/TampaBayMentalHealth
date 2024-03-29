import React from 'react';
import OverlayComponent from './OverLayComponent';
import SecondSection from './SecondSectionInsurance';
import Bottom from './bottom';


const CheckInsurance = () => {

    const stylePicture = {
        container: {
            backgroundColor: '#F9F9F9',
            width: "100%",
        },
        image: {
            width: '100%',
            height: '100%',
        },
        button: {
            position: 'absolute',
            bottom: '20px', // Adjust as needed
            left: '50%', // Adjust as needed
            transform: 'translateX(-50%)', // Center the button horizontally
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '20px',
            cursor: 'pointer',
            fontSize: '16px',
        },
    };

    return (
        <div style={stylePicture.container}>
            <img src={require("./images/SmilingFinal.png")} alt="Description of the image" style={stylePicture.image} />
            <OverlayComponent />
            <SecondSection/>
            <Bottom/>
            
            
            

            
            {/* Other content */}
        </div>
    );
};

export default CheckInsurance;
