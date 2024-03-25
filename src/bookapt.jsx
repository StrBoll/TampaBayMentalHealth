import React from 'react';

const Bookapt = () => {
  return (
    <bottom style={styles.bottom}>
      <div style={styles.container}>
      <p style={styles.text}>Phone number here</p>
      <p style={styles.text}>example@gmail.com</p>
      </div>
    </bottom>
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
