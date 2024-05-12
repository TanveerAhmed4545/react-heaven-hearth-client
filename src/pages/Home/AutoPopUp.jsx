// import  { useEffect, useState } from 'react';

// eslint-disable-next-line react/prop-types
const AutoPopUp = ({onClose}) => {
  //   const [showPopup, setShowPopup] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowPopup(true);
  //   }, 2000); // Show popup after 5 seconds

  //   return () => clearTimeout(timer);
  // }, []);

  // const handleClose = () => {
  //   setShowPopup(false);
  // };
    return (
      //   <div>
      //   {showPopup && (
      //     <div className="popup">
      //       <div className="popup-content">
      //         <h2>Auto Popup</h2>
      //         <p>This is an auto-generated popup.</p>
      //         <button onClick={handleClose}>Close</button>
      //       </div>
      //     </div>
      //   )}
      // </div>

      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <img className="w-96" src="" alt="pic Popup" />
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
    );
};

export default AutoPopUp;