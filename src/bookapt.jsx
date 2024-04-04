import React from 'react';
import Bottom from './bottom';
import Particlebg from './Particles';
import Placeholder from './images/BETTERLOGO.png';
import BlueGradientImage from './images/LinebaughOffice.jpeg'; // Import your first image
import SecondImage from './images/officeWaters.png'; // Import your second image
import './bookapt.css'

const Bookapt = () => {

  return (
    <div>
      <div className='container'> 
        <div className='upc'>
          <div className='gradient'>
            <img src={BlueGradientImage} alt="Blue Gradient" className="gradient-image" />
          </div>
          <div className='profile-down'>
            <img src={Placeholder} alt="placeholder"></img>
            <div className='profile-title'>Linebaugh Office</div>
            <div className='profile-description'>
Psychiatry Services, Psychology Services, TMS Brain Mapping            </div>
            
          </div>
          <div className='profbutton'>
              <a href="/location1">Schedule Now</a>
            </div>
          <div className='mapContainer'>
            <iframe
              title="Google Map"
              width="100%"
              height="300%"
              frameBorder="0"
              styleBorder="0"
              style={{ border: 0 }}
              src ="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3521.504637374879!2d-82.55813602409533!3d28.039612375993798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2c1d0a69bffff%3A0xbf19c42cee2a9da6!2s6916%20W%20Linebaugh%20Ave%20%23102%2C%20Tampa%2C%20FL%20336255815!5e0!3m2!1sen!2sus!4v1712007868312!5m2!1sen!2sus"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className='upc'>
          <div className='gradient'>
            <img src={SecondImage} alt="Second Image" className="gradient-image" /> {/* Use the second image here */}
          </div>
          <div className='profile-down'>
            <img src={Placeholder} alt="placeholder"></img>
            <div className='profile-title'>Waters Office</div>
            <div className='profile-description'>
              Group Therapy, Spanish Speakers Exclusive                                            
            </div>
            <div className='profbutton'>
              <a href="/location2">Schedule Now</a>
            </div>
          </div>
          <div className='mapContainer'>
            <iframe
              title="Google Map"
              width="100%"
              height="300%"
              frameBorder="0"
              style={{ border: 0 }}
              src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3521.9812199380017!2d-82.49828501486735!3d28.02504981412471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2c13f6f9715ad%3A0x51de9d73311c4738!2s3104%20W%20Waters%20Ave%2C%20Tampa%2C%20FL%2033614!5e0!3m2!1sen!2sus!4v1712005792458!5m2!1sen!2sus"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <Particlebg/>
      </div>
    </div>
  );
};

export default Bookapt;
