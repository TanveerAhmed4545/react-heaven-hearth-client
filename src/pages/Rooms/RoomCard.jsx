import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const RoomCard = ({ room }) => {
    // eslint-disable-next-line react/prop-types
    const {_id,images} = room;
  return (
   
      <Link to={`/room-details/${_id}`}>
      <div className="card rounded-xl rounded-br-none card-compact  bg-base-100 shadow-xl">
        <figure>
          <img
          className="h-auto md:h-44 lg:h-52 w-full rounded-tl-none rounded-br-none rounded-xl"

            src={images}
            alt="Shoes"
          />
        </figure>
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
