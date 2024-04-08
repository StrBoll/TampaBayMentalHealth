import React from 'react';
import Bottom from './bottom';
import Particlebg from './Particles';
import Placeholder from './images/BETTERLOGO.png';
import BlueGradientImage from './images/LinebaughOffice.jpeg'; // Import your first image
import SecondImage from './images/officeWaters.png'; // Import your second image
import './Bio.css'

const Bio = () => {
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
    <div>
      <p style={styles.title}>Meet Our Team</p>
      <div className='container'> 
        <div className='upc'>
          <div className='gradient'>
            <img src={'./bannerCarousel.jpeg'} alt="Blue Gradient" className="gradient-image" />
          </div>
          <div className='profile-down'>
            <div className='profile-title'>Example 1</div>
            <div className='profile-description'>
              Example text ejkfbehjwbvfhjewvbfhewvbfhew  </div>     
          </div>
        </div>
        <div className='upc'>
          <div className='gradient'>
            <img src={'./bannerCarousel.jpeg'} alt="Second Image" className="gradient-image" /> {/* Use the second image here */}
          </div>
          <div className='profile-down'>
            <div className='profile-title'>Example 2</div>
            <div className='profile-description'>
            Example text ejkfbehjwbvfhjewvbfhewvbfhew                                            
            </div>
          </div>
        </div>
        <div className='upc'>
          <div className='gradient'>
            <img src={'./bannerCarousel.jpeg'} alt="Second Image" className="gradient-image" /> {/* Use the second image here */}
          </div>
          <div className='profile-down'>
            <div className='profile-title'>Example 3</div>
            <div className='profile-description'>
            Example text ejkfbehjwbvfhjewvbfhewvbfhew                                            
            </div>
          </div>
        </div>
        <div className='upc'>
          <div className='gradient'>
            <img src={'./bannerCarousel.jpeg'} alt="Second Image" className="gradient-image" /> {/* Use the second image here */}
          </div>
          <div className='profile-down'>
            <div className='profile-title'>Example 4</div>
            <div className='profile-description'>
            Example text ejkfbehjwbvfhjewvbfhewvbfhewe                                            
            </div>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default Bio;
