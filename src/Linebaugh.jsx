import React from 'react';
import './Linebaugh.css'; // Assuming you have a CSS file for styling
import MyApp from './bookingcomp';

function App() {
  return (
    <div className="windowContainer">
      <div className="bannerText">Contact Us</div>
      <div className="subText"> Schedule an Appointment or Ask Questions</div>

      <BlueSquare />
      <MyApp />
    </div>
  );
}

function BlueSquare() {
  return (
    <div className="blueSquare"></div>
  );
}

export default App;
