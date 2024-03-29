import React from 'react';
import Bottom from './bottom';
import Particlebg from './Particles';
import Placeholder from './images/Placeholder.png';
import './bookapt.css'

const Bookapt = () => {

  return (
    <div>
    
  
    <div className='container'> 
      <div className='upc'>
        <div className='gradient'></div>
        <div className='profile-down'>
          <img src = {Placeholder} alt="placeholder"></img>
          <div className='profile-title'>Location1</div>
          <div className='profile-description'>
          Address phone number description
          </div>
          <div className='profbutton'>
            <a href="/location1">Choose location</a>
             </div>
        </div>

        <div className='mapContainer'>
         
            <iframe
              title="Google Map"
              width="100%"
              height="300%"
              frameBorder="0"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.3437563037693!2d-81.76918458546154!3d26.2415256976223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2c7a189a784b7%3A0x9a03f4e8bcfc2544!2sTampa%20Bay%20Mental%20Health%20Clinic!5e0!3m2!1sen!2sus!4v1648698960744!5m2!1sen!2sus"
              allowFullScreen
            ></iframe>
          
        </div>
      </div>

      <div className='upc'>
        <div className='gradient'></div>
        <div className='profile-down'>
          <img src = {Placeholder} alt="placeholder"></img>
          <div className='profile-title'>Location2</div>
          <div className='profile-description'>
          Address phone number description
          </div>
          <div className='profbutton'>
            <a href="/location2">Choose location</a>
             </div>
        </div>
        <div className='mapContainer'>
         
            <iframe
              title="Google Map"
              width="100%"
              height="300%"
              frameBorder="0"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.3437563037693!2d-81.76918458546154!3d26.2415256976223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2c7a189a784b7%3A0x9a03f4e8bcfc2544!2sTampa%20Bay%20Mental%20Health%20Clinic!5e0!3m2!1sen!2sus!4v1648698960744!5m2!1sen!2sus"
              allowFullScreen
            ></iframe>
          
        </div>
      </div>

      <div className='upc'>
        <div className='gradient'></div>
        <div className='profile-down'>
          <img src = {Placeholder} alt="placeholder"></img>
          <div className='profile-title'>Location3</div>
          <div className='profile-description'>
          Address phone number description
          </div>
          <div className='profbutton'>
            <a href="/location3">Choose location</a>
             </div>
        </div>
        <div className='mapContainer'>
         
            <iframe
              title="Google Map"
              width="100%"
              height="300%"
              frameBorder="0"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.3437563037693!2d-81.76918458546154!3d26.2415256976223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2c7a189a784b7%3A0x9a03f4e8bcfc2544!2sTampa%20Bay%20Mental%20Health%20Clinic!5e0!3m2!1sen!2sus!4v1648698960744!5m2!1sen!2sus"
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
