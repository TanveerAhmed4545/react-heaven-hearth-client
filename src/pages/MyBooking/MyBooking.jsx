import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const MyBooking = () => {

    const {user} = useContext(AuthContext)
    const [myBooking,setMyBooking] = useState([]);

    useEffect(() => {
        getData()
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [user])
 
   const getData = async () => {
     const { data } = await axios(
       `http://localhost:5000/my-books/${user?.email}`
     )
     setMyBooking(data);
   }

   console.log(myBooking);

    return (
        <div>
            
        </div>
    );
};

export default MyBooking;