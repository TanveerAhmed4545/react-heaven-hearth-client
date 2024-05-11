// import AutoPopUp from "./AutoPopUp";
// import { useEffect, useState } from "react";
import AllReviews from "./AllReviews";
import Banner from "./Banner";
import NewsLetter from "./NewsLetter";
import OurMap from "./OurMap";
// import AutoPopUp from "./AutoPopUp";



const Home = () => {
//     const [showModal, setShowModal] = useState(false);

//   useEffect(() => {
//     setShowModal(true); // Trigger modal open on mount
//   }, []);

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };
    return (
        <div>
            {/* <AutoPopUp></AutoPopUp> */}
            {/* {showModal && <AutoPopUp onClose={handleCloseModal} />} */}
            <Banner></Banner>
            <OurMap></OurMap>
            <NewsLetter></NewsLetter>
            <AllReviews></AllReviews>
        </div>
    );
};

export default Home;