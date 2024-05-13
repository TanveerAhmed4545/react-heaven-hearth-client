import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

import TableMyRow from "./TableMyRow";
import { Helmet } from "react-helmet-async";


const MyBooking = () => {

    const {user} = useContext(AuthContext)
    const [myBooking,setMyBooking] = useState([]);
    

    useEffect(() => {
        getData()
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [user])
 
   const getData = async () => {
    //   await axios(
    //    `http://localhost:5000/my-books/${user?.email}` ,{withCredentials: true}
    //  )
     const { data } = await axios(`http://localhost:5000/my-booking/${user?.email}` ,{withCredentials: true})
     setMyBooking(data);
   }

//    console.log(myBooking);






    return (
        <div className=" min-h-[50vh] md:min-h-[80vh]">
          <Helmet>
                <title>Heaven Hearth || My Booking</title>
            </Helmet>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr className="bg-[#e5ebee]">
      <th></th>
        <th>Room Image</th>
        <th>User Email</th>
        <th>Price</th>
        <th>Size</th>
        <th>Date</th>
        <th>Update Date</th>
        <th>Cancel Booking</th>
        <th>Add Review</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        myBooking.map((book,idx) => <TableMyRow key={book._id} book={book} getData={getData} idx={idx}></TableMyRow>)
      }
      
    </tbody>
    {/* foot */}
   
    
  </table>
</div>
        </div>
    );
};

export default MyBooking;