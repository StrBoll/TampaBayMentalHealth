import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
      <p style={styles.text}>Phone number here</p>
      <p style={styles.text}>example@gmail.com</p>
      </div>
    </footer>
  );
};


const styles = {
    footer: {
      backgroundColor: '#78d8d5',
      color: '#fff',
      textAlign: 'center',
      padding: '20px 0',
      width: '100%',
      position: 'fixed',
      bottom: 0,
      left: 0,
      
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
    },
    text: {
      fontSize: '14px',
    },
  };
  
export default Footer;
