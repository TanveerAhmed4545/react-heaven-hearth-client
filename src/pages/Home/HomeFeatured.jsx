import axios from "axios";
import { useEffect, useState } from "react";
import FeaturedCard from "./FeaturedCard";


const HomeFeatured = () => {

    const [featuredRoom,setFeaturedRoom] = useState([]);

    useEffect(()=>{
        axios.get('https://react-heaven-hearth-server.vercel.app/room')
        .then(res => {
        //   console.log(res.data);
          setFeaturedRoom(res.data);
        })
    },[])
    return (
        <div>
             <div className="text-center py-8 ">
             <h2 className=" text-2xl lg:text-4xl font-extrabold">
              Discover Latest Featured Rooms
             </h2>
              <p className=" pt-6 w-full mx-auto lg:w-9/12">
              Explore the luxury rooms   on our platform.{" "}
               </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 px-6">
                       {
                        featuredRoom.slice(0,6).map(feature => <FeaturedCard key={feature._id} feature={feature}></FeaturedCard>)
                       }  
                </div>
        </div>
    );
};

export default HomeFeatured;