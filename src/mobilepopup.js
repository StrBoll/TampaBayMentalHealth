import React, { useEffect, useState } from 'react';

const MobilePopup = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobileDevice = /mobile|android|iphone|ipad|phone/i.test(userAgent);
    setIsMobile(isMobileDevice);
  }, []);

  const handleClose = () => {
    setIsMobile(false);
  };

  return (
    <>
      {isMobile && (
        <div className="popup">
          <div className="popup-content">
            <h2>Notice</h2>
            <p>This website is not optimized for mobile devices. For the best experience, please view it on a desktop or tablet.</p>
            <button onClick={handleClose}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default MobilePopup;
