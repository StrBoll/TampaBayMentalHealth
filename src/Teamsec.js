import React from 'react';
import './team.css'

const TeamSection = () => {
    const styles = {
    
        title: {
            fontSize: '48px',
            marginBottom: '20px', // Add margin below the title
            color: '#07538D',
            fontFamily: 'goldenbook, serif',
            marginTop: '0', // Place the title at the top of the container
        },
    }
    return (
        <div className="tee">
        <p style={styles.title}>Meet Our Team</p>
        <div className="wrapper">
            
            <div className="card_Container">
                <TeamMember
                    name="James Henry"
                    role="Web Analyst"
                    imageSrc="./image1.jpg"
                />
                <TeamMember
                    name="John Doe"
                    role="UI/UX Designer"
                    imageSrc="./bannerCarousel.jpeg"
                />
                 <TeamMember
                    name="John Doe"
                    role="UI/UX Designer"
                    imageSrc="./bannerCarousel.jpeg"
                />
                
                <TeamMember
                    name="Alex Morgan"
                    role="Back-End Web Developer"
                    imageSrc="./bannerCarousel.jpeg"
                />
            </div>
        </div>
        </div>

    );
};

const TeamMember = ({ name, role, imageSrc }) => {
    return (
        <div className="card">
            <div className="imbBx">
                <img src={imageSrc} alt="" />
            </div>
            <div className="content">
                <div className="contentBx">
                    <h3>
                        {name} <br />
                        <span>{role}</span>
                    </h3>
                </div>
                
            </div>
        </div>
    );
};

export default TeamSection;
