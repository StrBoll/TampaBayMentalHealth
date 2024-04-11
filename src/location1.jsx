// Loc1.jsx
import React from 'react';
import MyApp from './bookingcomp';
import Particlebg from './Particles';

const Loc1 = () => {
  return (
    <div>
      <div style={{ backgroundColor: '#f0f0f0', width: '300%', textAlign: 'center', marginRight: '100%' }}>
        <h1>Schedule an Appointment or Ask Questions</h1>
      </div>
      <MyApp></MyApp>
      <Particlebg></Particlebg>
    </div>
  );
};

export default Loc1;
