import React from 'react';
import './T3secondsection.css'; // Import CSS file for styling
import BrainswayImage from './images/brain2.png'; // Import image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import YouTube from 'react-youtube';
import Bottom from './bottom.js';

const videoId = 'mjA6oQdLr9U';
const opts = {
  playerVars: {
    autoplay: 0, // Autoplay disabled
    origin: window.location.origin, // Set the origin to your website
    showinfo: 0,
    rel: 0,
  },
};

const SecondSection = () => {
  return (
    <div className="second-section">
      <div className="text-box">
        <p className="title">Access the Right Psychiatric Care</p>
        <p className="subtext">
          Tampa Bay Mental Health is one of the leading offices for affordable, tailored psychiatric and psychological care. At Tampa Bay Mental Health, we pride ourselves on providing excellent care to those who need it. Our board-certified psychiatrists will help you choose your own path to success, whether that be holistic approaches to therapy or getting the prescriptions you need.
        </p>
        <img src={BrainswayImage} alt="Brainsway" className="brainsway-image" />
      </div>

      
    </div>
  );
};

export default SecondSection;
