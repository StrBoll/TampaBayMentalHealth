import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Bottom from './bottom.js';
import Checkinsurance from './Checkinsurance.jsx';
import ImageOverlay from './ImageOverlay.jsx';
import SearchableList from './list.js';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import './skyline.css';
import Bookapt from './bookapt.jsx';
import Navbar from './navbar.js';
import man from './images/man.jpg';
import Card from './Card.jsx';
import Carousel from './Carousel.js';
import Loc1 from './location1.jsx';
import Loc2 from './location2.jsx';
import Treatment from './Treatments.jsx';
import Treatments1 from './Treatment1.jsx';
import Treatment2 from './treatment2.jsx';
import Treatment3 from './treatment3.jsx';
import bannerImage from './images/skylineFinal.jpeg';
import { countries } from './newcarousel.js';
import TeamSection from './Teamsec.js';
import Bio from './Bio.jsx';
import MobilePopup from './mobilepopup.js'; 

function App() {
  const [showSlogan, setShowSlogan] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Set showSlogan state to true after a delay
    const timer = setTimeout(() => {
      setShowSlogan(true);
    }, 1000); // Adjust the delay as needed (1000 milliseconds = 1 second)
    
    // Check if the user is on a mobile device
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the width threshold as needed
    };
    handleResize(); // Check initially
    window.addEventListener('resize', handleResize); // Listen for window resize event

    return () => {
      clearTimeout(timer); // Cleanup function to clear the timer
      window.removeEventListener('resize', handleResize); // Cleanup function to remove event listener
    };
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />
        
        <Routes>
          <Route path="/bookapt" element={<Bookapt />} />
          <Route path="/location1" element={<Loc1 />} />
          <Route path="/location2" element={<Loc2 />} />
          <Route path="/treatments" element={<Treatment3 />} />
          <Route path="/treatment1" element={<Treatment3/>}/>
          <Route path="/Meet" element={<Bio/>}/>
          <Route path="/treatment2" element={<Treatment2/>}/>
          <Route path="/treatment3" element={<Treatment3/>}/>
          <Route path="/checkinsurance" element={<Checkinsurance />} />
          <Route path="/" element={
            <React.Fragment>
              {isMobile && <MobilePopup />} {/* Conditionally render MobilePopup if user is on a mobile device */}
              <div className="banner-container">
                <img src={bannerImage} alt="Banner" className="banner-image" />
                <div className="banner-text">Tampa Bay Mental Health</div>
                <div className={showSlogan ? "slogan show" : "slogan"}>
                  <span>Reliable, Affordable, Help.</span>
                  <div className="butt">
                    <a href="/location1">Schedule Now</a>
                  </div>
                  <div className="butt">
                    <a href="/treatment1">Treatment</a>
                  </div>
                  <span className="cursor"></span>
                </div>
              </div>
              <TeamSection/>
              <Carousel images={countries}/>   
              <div className="content">
                <div>
                  <ImageOverlay imageUrl={man} text="Expert care" />
                </div>
              </div>
              <Bottom />
            </React.Fragment>
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
