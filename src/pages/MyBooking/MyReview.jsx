import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const MyReview = () => {
    const ownReview = useLoaderData();
    const {user} = useContext(AuthContext);
    const [rating, setRating] = useState(1);
  const [comment, setComment] = useState('');




    return (
        <div className=" p-6  rounded-lg">
      <h2 className="text-xl text-center font-semibold mb-4">Submit a Review</h2>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Rating:</label>
        <input
          type="number"
          value={rating}
          min={1}
          max={5}
          onChange={(e) => setRating(e.target.value)}
          className="border border-gray-300 rounded-md p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Comment:</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="border border-gray-300 rounded-md p-2 w-full"
        />
      </div>
      <div className="text-center">
      <button
        // onClick={handleSubmit}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Submit Review
      </button>
      </div>
    </div>
    );
};

export default MyReview;