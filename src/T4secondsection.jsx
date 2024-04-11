import React from 'react';
import './T3secondsection.css'; // Import CSS file for styling
import BrainswayImage from './images/hearts.png'; // Import image
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
    // Define styles for the image
    const imageStyles = {
        // Add your desired styles here
        width: '80%', // Example width
        height: 'auto', // Example height
        borderRadius: '50%', // Example border-radius
        position: 'absolute', // Set position to absolute
        top: '2%', // Example distance from the top
        right: '-9%', // Example distance from the right
        zIndex: 1, // Updated here
      };
      
  
    return (
      <div className="second-section">
        <div className="text-box">
          <p className="title">Considering Group Therapy?</p>
          <p className="subtext">
            As the need for behavioral intervention and long-term psychiatric care is steadily rising, alternative methods of treatment must be employed by physicians and healthcare teams to meet this increasing demand. Group therapy provides a solution to this problem by allowing for the treatment of multiple individuals simultaneously. <br /> <br /> <br /> Doing so allows healthcare providers to reduce wait times and increase accessibility. This approach is especially necessary for rural and low-income areas where clinics are often understaffed and have a high volume of patients. Furthermore, group therapy can be used to treat a multitude of conditions including, but not limited to, emotional trauma, anxiety, depression, post-traumatic stress disorder (PTSD), and attention deficit hyperactivity disorder (ADHD).
          </p>
        </div>
        {/* Apply inline styles to the image */}
        <img src={BrainswayImage} alt="Brainsway" style={imageStyles} />
      </div>
    );
  };
  
export default SecondSection;
