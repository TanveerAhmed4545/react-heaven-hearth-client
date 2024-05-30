import axios from "axios";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";


// eslint-disable-next-line react/prop-types
const TableMyRow = ({book,refetch,idx}) => {
  const [startDate, setStartDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  

    // eslint-disable-next-line react/prop-types
    const {_id,roomId,images,email,price,size,date} = book;

    const handleCancel = async(id,roomId,bookingDate) =>{
       

        const cancelDate = moment(bookingDate).subtract(1, 'days');
        

       // current date
        const currentDate = moment();

    if (currentDate.isBefore(cancelDate)) {
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
              try {
                  // Make  cancel the booking
                  await axios.patch(`https://react-heaven-hearth-server.vercel.app/booking-cancel/${roomId}`);

                  // Delete the booking 
                  const { data } = await axios.delete(`https://react-heaven-hearth-server.vercel.app/booking-delete/${id}`);
                 

                  //  booking  deleted
                  if (data.deletedCount > 0) {
                      Swal.fire({
                          title: "Canceled!",
                          text: "Your Booking has been Canceled.",
                          icon: "success"
                      });
                      refetch(); 
                  }
              } catch (error) {
                  console.error("Error cancelling booking:", error);
                  // Show error cancellation
                  Swal.fire({
                      title: "Error!",
                      text: "Failed to cancel booking. Please try again later.",
                      icon: "error"
                  });
              }
          }
      });
  } else {
      // cancellation  not allowed than show error
      Swal.fire({
          title: "Cancellation not allowed",
          text: "You can only cancel the booking 1 day before the booked date.",
          icon: "error"
      });
  }

   
}




 



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

    // console.table(bookData);

    try {
      const response = await axios.patch(`https://react-heaven-hearth-server.vercel.app/book-update/${_id}`, bookData);
      //  await axios.put(`https://react-heaven-hearth-server.vercel.app/booking-update/${_id}`, bookData);
      console.log(response.data);
      if (response.data.modifiedCount > 0) {
        Swal.fire({
          title: 'Success!',
          text: 'Date updated successfully',
          icon: 'success',
          confirmButtonText: 'Done',
        });
        refetch();
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
              onClick={()=>handleCancel(_id,roomId,date)}
              className="btn btn-ghost text-white bg-[#EA1A66] btn-sm">Cancel</button>
            </th>
            <th>
             <Link to={`/my-review/${_id}`}> <button className="btn btn-ghost text-white bg-[#27AE61] btn-sm">Add Review</button></Link>
            </th>
          </tr>
    );
};

export default TableMyRow;