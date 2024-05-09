import  { useEffect, useState } from 'react';

const AutoPopUp = () => {
    const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2000); // Show popup after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShowPopup(false);
  };
    return (
        <div>
        {showPopup && (
          <div className="popup">
            <div className="popup-content">
              <h2>Auto Popup</h2>
              <p>This is an auto-generated popup.</p>
              <button onClick={handleClose}>Close</button>
            </div>
          </div>
        )}
      </div>
    );
};

export default AutoPopUp;