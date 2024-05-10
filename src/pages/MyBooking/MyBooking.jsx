import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";


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

//    console.log(myBooking);


   const handleCancel = async(id) =>{
           console.log(id);

           Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, cancel it!"
          }).then(async (result) => {
            if (result.isConfirmed) {
                const {data} = await axios.patch(`http://localhost:5000/booking-cancel/${id}`)
                console.log(data);

                if(data.modifiedCount>0){
                    Swal.fire({
                        title: "Canceled!",
                        text: "Your Booking has been Canceled.",
                        icon: "success"
                      });
                      getData();
                }

              
            }
          });     
   }

    return (
        <div>
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
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        myBooking.map((book,idx) => <tr className="hover" key={book._id}>
              <th>{idx+1}</th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask rounded w-24 h-24">
                    <img src={book.images} />
                  </div>
                </div>
                
              </div>
            </td>
            <td>
             {book.email}
              
            </td>
            <td>{book.price} $</td>
            <td>{book.size}</td>
            <td>{new Date(book.date).toLocaleDateString()}</td>
            <th>
              <button className="btn btn-ghost text-white bg-[#959cef] btn-sm">Update</button>
            </th>
            <th>
              <button
              onClick={()=>handleCancel(book._id)}
              className="btn btn-ghost text-white bg-[#EA1A66] btn-sm">Cancel</button>
            </th>
          </tr>)
      }
      
    </tbody>
    {/* foot */}
   
    
  </table>
</div>
        </div>
    );
};

export default MyBooking;