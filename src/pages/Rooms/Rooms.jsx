import { useEffect, useState } from "react";
import RoomCard from "./RoomCard";
import axios from "axios";
import { Helmet } from "react-helmet-async";


const Rooms = () => {

    // const [rooms,setRooms] = useState([]);

    // useEffect(()=>{
    //     fetch('https://react-heaven-hearth-server.vercel.app/rooms')
    //     .then(res => res.json())
    //     .then(data =>{
    //         console.log(data);
    //         setRooms(data);
    //     })
    // },[])

    const [rooms, setRooms] = useState([]);
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");

    useEffect(() => {
        fetchRooms();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const fetchRooms = async () => {
        let url = "https://react-heaven-hearth-server.vercel.app/rooms";
        // if (minPrice && maxPrice) {
        //     url = `${url}?minPrice=${minPrice}&maxPrice=${maxPrice}`;
        // }
        // fetch(url)
        //     .then((res) => res.json())
        //     .then((data) => {
        //         setRooms(data);
        //     })
        //     .catch((error) => console.error("Error fetching rooms:", error));
        try {
            if (minPrice && maxPrice) {
                url = `${url}?minPrice=${minPrice}&maxPrice=${maxPrice}`;
            }
            const response = await axios.get(url);
            setRooms(response.data);
        } catch (error) {
            console.error("Error fetching rooms:", error);
        }
    };

    const handleFilter = () => {
        fetchRooms();
    };







    return (
        <div className="mb-6">
            <Helmet>
                <title>Heaven Hearth || Rooms</title>
            </Helmet>

            <div className="text-center py-8 ">
             <h2 className=" text-2xl lg:text-4xl font-extrabold">
              Discover Latest Rooms
             </h2>
              {/* <p className=" pt-6 w-full mx-auto lg:w-9/12">
              Explore the latest in rooms  on our platform.{" "}
               </p> */}
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-center lg:space-x-4 px-6 md:px-20 mb-4">
    <input
        type="number"
        placeholder="Min Price"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
        className="border border-gray-300  px-3 py-2 mb-2 lg:mb-0"
    />
    <input
        type="number"
        placeholder="Max Price"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
        className="border border-gray-300  px-3 py-2 mb-2 lg:mb-0"
    />
    <button
        onClick={handleFilter}
        className="bg-[#8C86E3] text-white px-4 py-2  hover:bg-[#8C86E3]"
    >
        Filter
    </button>
</div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 px-6">
                         {
                            rooms.map(room => <RoomCard key={room._id} room={room} ></RoomCard> )
                         }
                </div>
        </div>
    );
};

export default Rooms;