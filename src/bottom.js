import React from 'react';
import { Link } from 'react-router-dom';

const Bottom = () => {
  return (
    <footer style={styles.bottom}>
      <div style={styles.container}>
        <div style={styles.leftContent}>
          <p style={styles.title}>Contact Us</p>
          <div style={styles.buttonsContainer}>
          <Link to="/bookapt">
              <button style={styles.button}>Schedule an Appointment</button>
            </Link>
          </div>
          <p style={styles.text}>Phone: (813) 269-2920</p>
          <p style={styles.text}>Fax: (813) 269-2921</p>
          <p style={styles.text}>office@tampabaymentalhealth.net</p>
  
        </div>
        <div style={styles.mapContainer}>
          <div style={styles.grayBlock}>
            <iframe
              title="Google Map"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.3437563037693!2d-81.76918458546154!3d26.2415256976223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2c7a189a784b7%3A0x9a03f4e8bcfc2544!2sTampa%20Bay%20Mental%20Health%20Clinic!5e0!3m2!1sen!2sus!4v1648698960744!5m2!1sen!2sus"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  bottom: {
    backgroundColor: '#07538d',
    color: '#fff',
    textAlign: 'center',
    padding: '20px 0',
    width: '100%',
  },
  container: {
    maxWidth: '900px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    position: 'relative',
  },
  leftContent: {
    paddingRight: '20px',
  },
  mapContainer: {
    width: '350px',
    height: '350px',
  },
  title: {
    fontSize: '32px',
    marginBottom: '15px',
    fontFamily: 'Montserrat, sans-serif',
  },
  text: {
    fontSize: '20px',
    fontFamily: 'Arial, Helvetica, sans-serif',
    marginBottom: '5px',
  },
  grayBlock: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 400,
    height: '100%',
    backgroundColor: 'gray',
  },
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '20px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: 'white',
    color: '#07538d',
    border: 'none',
    borderRadius: '25px', // Set border-radius to half of the button height for stadium shape
    cursor: 'pointer',
    fontSize: '16px',
    fontFamily: 'Montserrat, sans-serif',
  },
};

export default Bottom;
