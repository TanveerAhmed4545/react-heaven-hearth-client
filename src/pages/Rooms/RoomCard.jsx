import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const RoomCard = ({ room }) => {
    // eslint-disable-next-line react/prop-types
    const {_id,images,availability,price} = room;
  return (
   
      <Link to={`/room-details/${_id}`}>
      <div className="card rounded-none  card-compact  bg-base-100 shadow-xl">
        <div className="relative">
        <figure>
          <img
          className="h-44 lg:h-52 w-full "
            src={images}
          />
        </figure>
        <button className="absolute top-3 right-2 font-semibold btn-sm  text-white  bg-[#56537b]">Available : {availability}</button>
        <button className="absolute top-3 left-2 font-semibold btn-sm  text-white  bg-[#56537b]"> {price} $</button>
        </div>
        {/* <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div> */}
      </div>
      </Link>
    
  );
};

export default RoomCard;
