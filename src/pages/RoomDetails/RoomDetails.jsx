import { useContext,  useEffect,  useState } from "react";
import {   NavLink,  useLocation,  useNavigate,  useParams } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { BsCurrencyDollar } from "react-icons/bs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import ReviewCard from "./ReviewCard";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";


const RoomDetails = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [booking,setBooking] = useState([]);
    const [reviews, setReviews] = useState([]);
    const {user} = useContext(AuthContext);
    // console.log(user);
    const navigate = useNavigate();
    const location = useLocation(); 
    const {id} = useParams();

    const {_id,description,price,size,availability,images,special_offer} = booking;


    
    

    useEffect(()=>{
        axios.get(`https://react-heaven-hearth-server.vercel.app/reviews`)
        .then(res => {
          
          setReviews(res.data)
        })
    },[])

    


    useEffect(() => {
        getData()
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [user])
 
   const getData = async () => {
     const { data } = await axios(
       `https://react-heaven-hearth-server.vercel.app/rooms/${id}`
     )
     setBooking(data);
   }
 


    const handleSubmit = async () =>{
        
        

        
        const date = startDate;
        const email = user?.email;
        const roomId = _id;


        const bookingData = {
          price,
          size,
          roomId,
          images,
          date,
            email

        }

        const bookData ={

            
            availability: "no",
           
        }
       

          try{
               await axios.patch(`https://react-heaven-hearth-server.vercel.app/booking/${_id}`,bookData)
               await axios.post(`https://react-heaven-hearth-server.vercel.app/booking-post`,bookingData)

              // Fetch the updated room details
              const { data } = await axios.get(`https://react-heaven-hearth-server.vercel.app/rooms/${_id}`);
        
              // Update the details 
              setBooking(data);


            const modal = document.getElementById('my_modal_1');
            if (modal) {
            modal.close();
            }

            toast.success("Booked");

            navigate('/my-booking');
          }catch (err) {
               console.log(err)
          }


    }

    const reviewData = reviews.filter(item => item.roomId === _id);
    // console.log(reviewData);


    

    return (
        <div className="card rounded-none   hover:shadow-2xl hover:shadow-[#D9E1FF]   my-5 lg:my-10 mx-5">
          <Helmet>
                <title>Heaven Hearth || Room Details</title>
            </Helmet>
            
  <div className="">
  <figure><img className=" lg:h-screen lg:w-full" src={images}/></figure>
  </div>
  <div className="p-5 lg:p-10 space-y-5 ">
    
    <p className="text-xl flex items-center"><span className="font-semibold ">Price : </span> <span className="text-blue-gray-600 flex items-center"> {price} <BsCurrencyDollar className=""/></span> </p>
    <p className="text-xl"><span className="font-semibold ">Room Size :</span> <span className="text-blue-gray-600">{size}</span></p>
    
    <p className="text-xl"><span className="font-semibold ">Short Description : </span>  <span className="text-blue-gray-600">{description}</span></p>
    
    <p className="text-xl"><span className="font-semibold ">Availability : </span> <span className="text-blue-gray-600">{availability}</span> </p>
    <p className="text-xl"><span className="font-semibold ">Special Offer : </span> <span className="text-blue-gray-600">{special_offer}</span> </p>
     

     {
       reviewData.length > 0 ? ( <p className="font-semibold text-lg">Totals Review : {reviewData.length}</p>) :  (<p className="font-semibold text-lg">Totals Review : {0}</p>)
     }

{
    reviewData.length > 0 ? (
        <div>
            {reviewData.map(item => <ReviewCard key={item._id} item={item}></ReviewCard>)}
        </div>
    ) : (
        <p className="font-semibold text-lg"> Please Book First to add Some beautiful Reviews</p>
    )
}
    
    <div>
   
   

    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
<NavLink state={location.pathname}  to={!user && '/login'}>
<button 
disabled = {availability === 'no'}
className="btn w-full rounded-none text-white bg-[#959cef]" onClick={()=>document.getElementById('my_modal_1').showModal()}>Book Now</button>
</NavLink>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Price : {price} $</h3>
    <p className="py-4 font-semibold">Special Offer : {special_offer}</p>
    <p className="pb-2 font-semibold">Room Size : {size}</p>
    <div className='pb-2'>
              <label className='text-gray-700 mr-5 font-semibold'>Date pick :</label> 

              {/* Date Picker Input Field */}
              <DatePicker
                className='border p-2 rounded-md'
                selected={startDate}
                onChange={date => setStartDate(date)}
              />
            </div>
            <button className="btn w-full font-semibold text-white bg-[#959cef]" onClick={handleSubmit}>Confirm</button>
    <div className="modal-action">
      <form method="dialog" >
        {/* if there is a button in form, it will close the modal */}
        <button className="btn w-full text-white bg-[#EA1A66]" >Close</button>
      </form>
    </div>
  </div>
</dialog>
    </div>

  </div>
    
  </div>

  
</div>
    );
};

export default RoomDetails;
