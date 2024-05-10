import { useEffect, useState } from "react";
import RoomCard from "./RoomCard";


const Rooms = () => {

    const [rooms,setRooms] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/rooms')
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            setRooms(data);
        })
    },[])


    return (
        <div>
            <div className="text-center py-8 ">
             <h2 className=" text-2xl lg:text-4xl font-extrabold">
              Discover Latest Rooms
             </h2>
              <p className=" pt-6 w-full mx-auto lg:w-9/12">
              Explore the latest in rooms  on our platform.{" "}
               </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 px-6">
                         {
                            rooms.map(room => <RoomCard key={room._id} room={room} ></RoomCard> )
                         }
                </div>
        </div>
    );
};

export default Rooms;