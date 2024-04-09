import React from 'react';
import './T3secondsection.css'; // Import CSS file for styling
import BrainswayImage from './images/Brainsway.webp'; // Import image
import H1Coil from './images/H1Coil.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import YouTube from 'react-youtube';

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
        <p className="title">Enter a Revolutionary Phase in Brain Disorder Treatment.</p>
        <p className="subtext">Tampa Bay Mental Health is proud to offer the latest breakthrough technology in brain stimulation treatments, Deep Transcranial Magnetic Stimulation (Deep TMS). Our BrainsWay Deep TMS machine is a clinically proven, non-invasive brain stimulation treatment which uses magnetic fields to activate the neural networks in your brain. Deep TMS has shown to improve symptoms of mental illness and addiction conditions, including depression, anxiety, OCD, and smoking addiction.</p>
        <img src={BrainswayImage} alt="Brainsway" className="brainsway-image" />
      </div>
            
      <div className="text-box2">
        <p className="titleblue">H1</p>
        <p className="title2">Major Depressive Disorder (MDD) and Anxious Depression</p>
        <p className="subtext2">Our Tampa psychiatry office currently offers the H1 Coil TMS treatment. The H1 Coil stimulates the bilateral prefrontal cortex, and in numerous published trials has shown promising results. Out of 1,000 patients in a clinical setting, it was revealed in that patients who completed at least 30 sessions, approximately 4 in 5 achieved response and approximately 2 in 3 achieved remission. - Info via brainsway.com</p>
        <img src={H1Coil} alt="CoilImage" className="coil-image"/>
      </div>

      <div className="text-box3">
        
        <YouTube videoId={videoId} opts={opts} className="youtube-video" />
        <p className="title3">
          Patient Testimonial
        </p>
        <p className="subtext3">
          <FontAwesomeIcon icon={faCircleCheck} style={{ marginRight: '5px', color: '#8FCBFF' }} /> FDA-cleared <br/><br/>
          <FontAwesomeIcon icon={faCircleCheck} style={{ marginRight: '5px', color: '#8FCBFF' }} /> Effective for medication-resistant patients<br/><br/>
          <FontAwesomeIcon icon={faCircleCheck} style={{ marginRight: '5px', color: '#8FCBFF' }} /> Short 20-minute sessions<br/><br/>
          <FontAwesomeIcon icon={faCircleCheck} style={{ marginRight: '5px', color: '#8FCBFF' }} /> Noninvasive<br/><br/>
          <FontAwesomeIcon icon={faCircleCheck} style={{ marginRight: '5px', color: '#8FCBFF' }} /> No systemic side effects<br/><br/>
          <FontAwesomeIcon icon={faCircleCheck} style={{ marginRight: '5px', color: '#8FCBFF' }} /> Wide variety of insurance accepted
        </p>
      </div>
    </div>
  );
};

export default SecondSection;
