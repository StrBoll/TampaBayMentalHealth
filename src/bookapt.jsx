import React from 'react';
import Bottom from './bottom';
import Particlebg from './Particles';

const Bookapt = () => {
  return (
    <div> 
      <Particlebg/>
    
    <Bottom />
    </div>
  );
};


const styles = {
    bottom: {
      backgroundColor: '#d8b578',
      color: '#fff',
      textAlign: 'center',
      padding: '20px 0',
      width: '100%',
      bottom: 0,
      height: 100,
      left: 0,
    },
    container: {
      maxWidth: '550px',
      margin: '0 auto',
    },
    text: {
      fontSize: '14px',
    },
  };
  
export default Bookapt;
