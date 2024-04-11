import React from 'react';
import './team.css';
import { Link } from "react-router-dom"; // Import Link component

const TeamSection = () => {
    const styles = {
        title: {
            fontSize: '48px',
            marginBottom: '20px', // Add margin below the title
            color: '#07538D',
            fontFamily: 'ubuntu, sans-serif',
            marginTop: '0', // Place the title at the top of the container
        },
        subtitle: {
            fontSize: '24px', // Adjust the font size as needed
            fontFamily: 'ubuntu, sans-serif', // Specify the font family
            color: '#000', // Black color
            marginBottom: '28px', // Add margin below the subtitle
        },
    };

    return (
        <div className="tee">
            <p style={styles.title}>Meet Our Team</p>
            <p style={styles.subtitle}>Learn more about our talented team of board-certified psychiatrists and psychologists</p>
            <Link to="/meet" className="wrapper">
                <div className="card_Container">
                    <TeamMember
                        name="APRN Yanet Fernandez Diaz"
                        role="Psychiatrist"
                        
                    />
                    <TeamMember
                        name="Dr. Orlando L. Ruano, DO"
                        role="Medical Director"
                        imageSrc="./ruano.png"
                    />
                    <TeamMember
                        name="APRN Stefanny Molina Mesa"
                        role="Psychiatrist"
                        
                    />
                    <TeamMember
                        name="Dr. Joseph Grimaldi, PhD"
                        role="Psychologist"
                        
                    />
                </div>
            </Link>
        </div>
    );
};

const TeamMember = ({ name, role, imageSrc }) => {
    const styles = {
        role: {
            fontSize: '18px', // Adjust the font size as needed
            color: '#07538D', // Dark blue color
        },
    };

    return (
        <div className="card">
            <div className="imbBx">
                <img src={imageSrc} alt="" />
            </div>
            <div className="content">
                <div className="contentBx">
                    <h3>
                        {name} <br />
                        <span style={styles.role}>{role}</span> {/* Apply styles to the role span */}
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default TeamSection;
