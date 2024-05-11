import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
// import Swal from "sweetalert2";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import TableMyRow from "./TableMyRow";


const MyBooking = () => {

    const {user} = useContext(AuthContext)
    const [myBooking,setMyBooking] = useState([]);
    // const [startDate, setStartDate] = useState(new Date());

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


//    const handleCancel = async(id) =>{
//            console.log(id);

//            Swal.fire({
//             title: "Are you sure?",
//             text: "You won't be able to revert this!",
//             icon: "warning",
//             showCancelButton: true,
//             confirmButtonColor: "#3085d6",
//             cancelButtonColor: "#d33",
//             confirmButtonText: "Yes, cancel it!"
//           }).then(async (result) => {
//             if (result.isConfirmed) {
//                 const {data} = await axios.patch(`http://localhost:5000/booking-cancel/${id}`)
//                 console.log(data);

//                 if(data.modifiedCount>0){
//                     Swal.fire({
//                         title: "Canceled!",
//                         text: "Your Booking has been Canceled.",
//                         icon: "success"
//                       });
//                       getData();
//                 }

              
//             }
//           });     
//    }


//    const handleSubmit = async (id) =>{
//     console.log(id)
//     const date = startDate;
   

//     const bookData ={
//         date, 
//     }
//     console.table(bookData);

//     try{
//       await axios.put(`http://localhost:5000/booking-update/${id}`,bookData)
//       .then(res =>{
//         console.log(res.data);
//         if(res.data.modifiedCount>0){
//           Swal.fire({
//               title: 'Success!',
//               text: 'Date updated successfully',
//               icon: 'success',
//               confirmButtonText: 'Done'
//             })
//             getData();
//       }else{
//           Swal.fire({
//               title: 'Error!',
//               text: 'Do you want to continue',
//               icon: 'error',
//               confirmButtonText: 'Cool'
//             })
//       }
        
//       })


//    const modal = document.getElementById('my_modal_1');
//    if (modal) {
//    modal.close();
//    }
//  }catch (err) {
//       console.log(err)
//  }
//    }



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