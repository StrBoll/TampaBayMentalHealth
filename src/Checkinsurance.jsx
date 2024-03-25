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

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Accepted Insurances</h2>
            <ul style={styles.insuranceList}>
                {acceptedInsurances.map(insurance => (
                    <li key={insurance} style={styles.insuranceItem}>{insurance}</li>
                ))}
            </ul>
        </div>
    );
};

const styles = {
    container: {
        backgroundColor: 'white',
        padding: '20px',
    },
    title: {
        fontFamily: '"Libre Baskerville", sans-serif',
        fontSize: '40px',
        color: 'blue',
        textAlign: 'center',
    },
    insuranceList: {
        listStyleType: 'none',
        padding: 0,
    },
    insuranceItem: {
        fontFamily: 'Arial, Helvetica, sans-serif',
        color: 'blue',
        marginBottom: '5px',
    },
};

export default CheckInsurance;
