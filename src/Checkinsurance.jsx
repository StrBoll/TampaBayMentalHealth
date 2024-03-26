import React from 'react';

const CheckInsurance = () => {
    const acceptedInsurances = [
        "Sunshine",
        "Ambetter",
        "United HealthCare",
        "Cigna",
        "Humana",
        "Simply Healthcare",
        "Aetna",
        "Carelon",
        "Florida Community Care",
        "Florida Blue",
        "Magellan",
        "OPtum"
    ];

    const stylePicture = {
        container: {
            backgroundColor: 'white',
            width: "100%",
        },
        image: {
            width: '100%',
            height: '100%',
        }
    };
    
    return (
        <div style={stylePicture.container}>
            <img src={require("./images/SmilingFinal.png")} alt="Description of the image" style={stylePicture.image} />
            {/* Other content */}
        </div>
    );
};

export default CheckInsurance;
