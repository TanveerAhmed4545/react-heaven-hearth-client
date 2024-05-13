import AutoPopUp from "./AutoPopUp";
import { useEffect, useState } from "react";
import AllReviews from "./AllReviews";
import Banner from "./Banner";
import HomeFeatured from "./HomeFeatured";
import NewsLetter from "./NewsLetter";
import OurMap from "./OurMap";
import { Helmet } from "react-helmet-async";
// import AutoPopUp from "./AutoPopUp";



const Home = () => {
    const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true); 
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };
    return (
        <div>
          <Helmet>
                <title>Heaven Hearth || Home</title>
            </Helmet>
            {/* <AutoPopUp></AutoPopUp> */}
            {showModal && <AutoPopUp onClose={handleCloseModal} />}
            <Banner></Banner>
            <HomeFeatured></HomeFeatured>
            <OurMap></OurMap>
            <NewsLetter></NewsLetter>
            <AllReviews></AllReviews>
        </div>
    );
};

export default Home;