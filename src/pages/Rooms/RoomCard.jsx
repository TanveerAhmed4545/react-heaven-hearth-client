// eslint-disable-next-line react/prop-types
const RoomCard = ({ room }) => {
  return (
   
      <div className="card rounded-xl rounded-br-none card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img
          className="h-auto md:h-44 lg:h-52 w-full rounded-tl-none rounded-br-none rounded-xl"
            // eslint-disable-next-line react/prop-types
            src={room.images}
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
    
  );
};

export default RoomCard;
