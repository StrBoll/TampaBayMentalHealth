import React from 'react';
import Placeholder from './images/Placeholder.png';

function Card({ title }) {
    return (
        <div className="card">
            <img className="card-image" src={Placeholder} alt="placeholder"></img>
            <h2 className="card-title">{title}</h2> {/* Display the title passed as a prop */}
            <p className="card-text">doctor</p>
            <p className="card-text">phone number</p>
            <p className="card-text">email</p>
        </div>
    );
}

export default Card;
