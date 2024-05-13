import axios from "axios";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const TableMyRow = ({book,getData,idx}) => {
  const [startDate, setStartDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

    // eslint-disable-next-line react/prop-types
    const {_id,roomId,images,email,price,size,date} = book;

    const handleCancel = async(id,roomId) =>{
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
              await axios.patch(`http://localhost:5000/booking-cancel/${roomId}`)
            //  console.log(data);
             const {data} = await axios.delete(`http://localhost:5000/booking-delete/${_id}`)
             console.log(data);

             if(data.deletedCount > 0){
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


// const handleSubmit = async (id) =>{
//  console.log(id)
//  const date = startDate;


//  const bookData ={
//      date, 
//  }
//  console.table(bookData);

//  try{
//    await axios.put(`http://localhost:5000/booking-update/${id}`,bookData)
//    .then(res =>{
//      console.log(res.data);
//      if(res.data.modifiedCount>0){
//        Swal.fire({
//            title: 'Success!',
//            text: 'Date updated successfully',
//            icon: 'success',
//            confirmButtonText: 'Done'
//          })
//          getData();
//    }else{
//        Swal.fire({
//            title: 'Error!',
//            text: 'Do you want to continue',
//            icon: 'error',
//            confirmButtonText: 'Cool'
//          })
//    }
     
//    })
// const modal = document.getElementById('my_modal_1');
// if (modal) {
// modal.close();
// }
// }catch (err) {
//    console.log(err)
// }
// }

 



const handleOpenModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleConfirm = async () => {
    const date = startDate;
    const bookData = {
      date,
    };

    console.table(bookData);

    try {
      const response = await axios.patch(`http://localhost:5000/book-update/${_id}`, bookData);
      //  await axios.put(`http://localhost:5000/booking-update/${_id}`, bookData);
      console.log(response.data);
      if (response.data.modifiedCount > 0) {
        Swal.fire({
          title: 'Success!',
          text: 'Date updated successfully',
          icon: 'success',
          confirmButtonText: 'Done',
        });
        getData();
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'Failed to update date',
          icon: 'error',
          confirmButtonText: 'OK',
        });
      }
    } catch (error) {
      console.error('Error updating date:', error);
      Swal.fire({
        title: 'Error!',
        text: 'An error occurred while updating date',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }

    closeModal(); 
  };



    return (
        <tr className="hover" >
              <th>{idx+1}</th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask rounded w-24 h-24">
                    <img src={images} />
                  </div>
                </div>
                
              </div>
            </td>
            <td>
             {email}
              
            </td>
            <td>{price} $</td>
            <td>{size}</td>
            <td>{new Date(date).toLocaleDateString()}</td>
            <th>

<button className="btn btn-ghost text-white bg-[#959cef] btn-sm" onClick={handleOpenModal}>Update Now</button>
        {/* Modal */}
        <div className={`${isOpen ? 'block' : 'hidden'} fixed z-10 inset-0 overflow-y-auto`}>
          <div className="flex items-center justify-center min-h-screen">
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div className="bg-white rounded-lg p-8 z-20">
              <div className="flex justify-end">
                <button onClick={closeModal}>&times;</button>
              </div>
              <h2 className="text-xl font-bold mb-4">Change Your Date</h2>
              <div className='pb-2'>
                <label className='text-gray-700 mr-5 font-semibold'>Date pick :</label>
                <DatePicker
                  className='border p-2 rounded-md'
                  selected={startDate}
                  onChange={date => setStartDate(date)}
                />
              </div>
              <div className="flex justify-end">
                <button className="bg-[#959cef] hover:bg-[#959c8e] text-white font-bold py-2 px-4 rounded mr-2" onClick={handleConfirm}>Confirm</button>
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded" onClick={closeModal}>Close</button>
              </div>
            </div>
          </div>
        </div>
            </th>
            <th>
              <button
              onClick={()=>handleCancel(_id,roomId)}
              className="btn btn-ghost text-white bg-[#EA1A66] btn-sm">Cancel</button>
            </th>
            <th>
             <Link to={`/my-review/${_id}`}> <button className="btn btn-ghost text-white bg-[#27AE61] btn-sm">Add Review</button></Link>
            </th>
          </tr>
    );
};

export default TableMyRow;