import React from 'react';
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
import Biography from './FrontPageBio.js'
import Bookapt from './bookapt.jsx';
import Navbar from './navbar.js';
import man from './images/man.jpg';
import Card from './Card.jsx';
import { Carousel } from "./Carousel";
import Loc1 from './location1.jsx';
import Loc2 from './location2.jsx';
import Loc3 from './location3.jsx';
import Treatment from './Treatments.js';

// Define your components...

function App() {
  const position = {lat: 61.2176, lng: -149.8997};
  const items = [
    'Apple',
    'Banana',
    'Cherry',
    'Date',
    'Elderberry',
    'Fig',
    'Grape',
    'Kiwi',
    'Lemon',
    'Mango',
  ];

  return (
    <div className="App">
    <Router>
        <Navbar />
        <Routes>
          <Route path="/bookapt" element={<Bookapt />} />
          <Route path="/location1" element={<Loc1 />} />
          <Route path="/location2" element={<Loc2 />} />
          <Route path="/location3" element={<Loc3 />} />
          <Route path="/treatments" element={<Treatment />} />
          <Route path="/checkinsurance" element={<Checkinsurance />} />
          <Route path="/" element={
            <React.Fragment>
              <div>
                <Carousel />
              </div>
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
                  <Biography/>
                  
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

