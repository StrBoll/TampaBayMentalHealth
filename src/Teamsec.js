import React from 'react';
import './team.css'

const TeamSection = () => {
    return (
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
