import { BsCurrencyDollar } from "react-icons/bs";
import { SlSizeFullscreen } from "react-icons/sl";
import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const FeaturedCard = ({feature}) => {

    // eslint-disable-next-line react/prop-types
    const {_id,description,price,size,availability,images,special_offer} = feature;

    
    // eslint-disable-next-line react/prop-types
    const shortDes = description.slice(0, 100);

    return (
        <div>
            <div className="card  p-5 bg-base-100 rounded-none border-[#D9E1FF] border-2 hover:border-none hover:shadow-xl hover:shadow-[#D9E1FF] transition duration-300 ease-in-out">
  <div >
  <figure><img className="h-auto md:h-44 lg:h-52 w-full rounded-none " src={images} /></figure>
 
  </div>
  <div className="mt-3">
    <h2 className=" hover:text-[#99a3f2]"> <span className="card-title">Special Offer :</span>  </h2>
    <p>{special_offer}</p>
    <p className="flex items-center my-3 font-medium">Price :  {price} <span className="text-[#99a3f2] mr-2"><BsCurrencyDollar /></span></p>
    <div className="flex items-center justify-between">
    <p className="flex items-center gap-2 font-medium">Size : {size}<span className="text-[#99a3f2]"><SlSizeFullscreen /></span></p>
    <p className="font-medium">Availability : {availability}</p>
    </div>
    <p className="my-3 font-semibold hover:text-[99a3f2]">{shortDes}....</p>
    
    <div className=" ">
      <Link to={`/room-details/${_id}`}><button className="btn rounded-none w-full text-white border-none bg-[#99a3f2]">Book Now</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default FeaturedCard;