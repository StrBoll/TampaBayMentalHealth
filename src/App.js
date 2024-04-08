// Inside your App.js file

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
import Biography from './FrontPageBio.js';
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
function App() {
  const [showSlogan, setShowSlogan] = useState(false);

  useEffect(() => {
    // Set showSlogan state to true after a delay
    const timer = setTimeout(() => {
      setShowSlogan(true);
    }, 1000); // Adjust the delay as needed (1000 milliseconds = 1 second)
    
    return () => clearTimeout(timer); // Cleanup function to clear the timer
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />
        
        <Routes>
          <Route path="/bookapt" element={<Bookapt />} />
          <Route path="/location1" element={<Loc1 />} />
          <Route path="/location2" element={<Loc2 />} />
          <Route path="/treatments" element={<Treatment />} />
          <Route path="/treatment1" element={<Treatments1/>}/>
          <Route path="/Meet" element={<TeamSection/>}/>
          <Route path="/treatment2" element={<Treatment2/>}/>
          <Route path="/treatment3" element={<Treatment3/>}/>
          <Route path="/checkinsurance" element={<Checkinsurance />} />
          <Route path="/" element={
            <React.Fragment>
              <div className="banner-container">
                <img src={bannerImage} alt="Banner" className="banner-image" />
                <div className="banner-text">Tampa Bay Mental Health</div>
                <div className={showSlogan ? "slogan show" : "slogan"}>
                  <span>Reliable, Affordable, Help.</span>
                  <span className="cursor"></span>
                </div>
              </div>
              <TeamSection/>
              <Carousel images={countries}/>   
              <iframe src="https://www.google.com/maps/d/u/0/embed?mid=13OSFSfuM3OZS3KLvxp50F2IhOqrkMv0&ehbc=2E312F&noprof=1" width="640" height="480"></iframe>
              <div className="content">
                <div className="image-container">
                  <div className="image-wrapper">
                    <img src={image1} alt="Image 1" />
                  </div>
                  <div className="image-wrapper">
                    <img src={image2} alt="Image 2" />
                  </div>
                  <div className="image-wrapper">
                    <img src={image3} alt="Image 3" />
                  </div>
                </div>
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
