import React from 'react';

const Bottom = () => {
  return (
    <footer style={styles.bottom}>
      <div style={styles.leftContainer}>
        <p style={styles.title}>Contact Us</p>
        <div style={styles.buttonsContainer}>
          <button style={styles.button}>Schedule an Appointment</button>
        </div>
        <p style={styles.text}>Phone: (813) 269-2920</p>
        <p style={styles.text}>Fax: (813) 269-2921</p>
        <p style={styles.text}>office@tampabaymentalhealth.net</p>
        <div style={styles.blackBox}></div> {/* Black box */}
      </div>
      <div style={styles.rightContainer}>
        <div style={styles.container}>
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
    backgroundColor: '#2D473F',
    color: '#fff',
    textAlign: 'center',
    padding: '20px 0',
    width: '100%',
    bottom: 0,
    left: 0,
    display: 'flex', // Use Flexbox for flexible positioning
  },
  leftContainer: {
    flex: '1', // Let the left container grow to fill available space
    padding: '0 120px', // Add padding to the left container
    position: 'relative', // Position relative for positioning the black box
  },
  rightContainer: {
    flex: '1', // Let the center container grow to fill available space
  },
  container: {
    margin: '0 auto',
    padding: '0 20px', // Add padding to the center container
  },
  title: {
    fontSize: '32px', // Adjust font size as needed
    marginBottom: '15px', // Add some space between title and other content
    fontFamily: 'Montserrat, sans-serif',
  },
  text: {
    fontSize: '20px',
    fontFamily: 'Arial, Helvetica, sans-serif',
    marginBottom: '5px',
  },
  grayBlock: {
    height: '350px', // Height of the gray block
    backgroundColor: 'gray', // Background color of the gray block
  },
  buttonsContainer: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '20px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    fontFamily: 'Montserrat, sans-serif',
  },
  blackBox: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '50px',
    height: '100%',
    backgroundColor: 'black',
  },
};

export default Bottom;
