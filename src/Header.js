import React, { useState, useEffect } from 'react';
import image3 from './images/image3.jpg';

function Header() {
  const [headerStyle, setHeaderStyle] = useState({
    background: '#d8b578',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
    zIndex: '1000',
    width: '100%',
    position: 'sticky',
    top: '0'
  });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isAtTop = currentScrollY === 0;
      const headerBackground = isAtTop ? '#d8b578' : '#fff';
      const headerColor = isAtTop ? '#fff' : '#333'; // Change text color to fit your design
      setHeaderStyle({
        ...headerStyle,
        background: headerBackground,
        color: headerColor
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [headerStyle]);

  return (
    <header style={headerStyle}>
      <h1>Tampa Bay Mental Health</h1>
    </header>
  );
}

export default Header;
