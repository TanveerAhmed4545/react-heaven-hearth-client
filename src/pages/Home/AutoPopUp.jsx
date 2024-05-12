// import  { useEffect, useState } from 'react';

import { IoCloseCircle } from "react-icons/io5";

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
      <div className="bg-[#182E32]rounded-lg shadow-lg relative">
        <img className="size-80 rounded-lg" src={"https://i.ibb.co/84pWJhK/Green-Modern-Hotel-Advertisement-Instagram-Post.png"} alt="pic Popup" />
        <button className="mt-4 absolute -top-2 right-1 text-white  rounded " onClick={onClose}>
        <IoCloseCircle className="size-8" />
        </button>
      </div>
    </div>
    );
};

export default AutoPopUp;