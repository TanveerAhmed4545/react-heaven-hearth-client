import TableMyRow from "./TableMyRow";
import { Helmet } from "react-helmet-async";
import useBooking from "../../hooks/useBooking";
import { Link } from "react-router-dom";


const MyBooking = () => {

  const [booking,refetch] = useBooking();
  console.log(booking);

    // const {user} = useContext(AuthContext)
    // const [myBooking,setMyBooking] = useState([]);
    // const axiosSecure = useAxiosSecure();
    

  //   useEffect(() => {
  //     if(user?.email){
  //       getData()
  //     }
        
      
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //     }, [user?.email])
 
  //  const getData = async () => {
  //   //   await axios(
  //   //    `https://react-heaven-hearth-server.vercel.app/my-books/${user?.email}` ,{withCredentials: true}
  //   //  )
  //    const { data } = await axiosSecure.get(`/my-booking/${user?.email}` )
  //    setMyBooking(data);
  //  }

//    console.log(myBooking);






    return (
        <div className=" min-h-[50vh] md:min-h-[80vh]">
          <Helmet>
                <title>Heaven Hearth || My Booking</title>
            </Helmet>

            <div className="flex justify-between items-center px-10 py-5 bg-[#DBEAFE]">
              <h2 className="text-xl font-semibold">Payment All</h2>
              { 
              booking.length ? <Link to='/payment'>
              <button className="btn btn-ghost text-white bg-[#27AE61] ">Pay All booking</button>
              </Link> : <button disabled  className="btn btn-ghost text-white bg-[#27AE61]">Pay All booking</button>
            }
              {/* <Link to={`/payment`}> 
            <button className="btn btn-ghost text-white bg-[#27AE61] ">Pay All booking</button></Link> */}
            </div>
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
        booking?.map((book,idx) => <TableMyRow key={book._id} book={book} refetch={refetch}  idx={idx}></TableMyRow>)
      }
      
    </tbody>
    {/* foot */}
   
    
  </table>
</div>
        </div>
    );
};

export default MyBooking;