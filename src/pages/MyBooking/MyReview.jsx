import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const MyReview = () => {
    const ownReview = useLoaderData();
    const axiosSecure = useAxiosSecure();
    // console.log(ownReview);
    const {user} = useContext(AuthContext);
   


  const handleSubmit = async (e) =>{
    e.preventDefault();
    // console.log("click");
    const form = e.target;
    const roomId = ownReview.roomId;
    const userRating = form.rating.value;
    const userComment = form.comment.value;
    const userName = user?.displayName;
    const userPhoto = user?.photoURL;

    const timestamp = new Date();

    const reviewData = {

        userName,roomId,userRating,userComment,timestamp,userPhoto
    }

    console.log(reviewData);

    try {
        const {data} =  await axiosSecure.post('/reviews', reviewData);
         if(data.insertedId){
            console.log(data);
            Swal.fire({
                title: "Success!",
                text: "Review submitted successfully",
                icon: "success",
                confirmButtonText: "Done",
              });
               // Reset the form after successful submission
              form.reset();
         }
      } catch (error) {
        console.error('Error submitting review:', error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Failed to submit review',
        });
      }


  }



    return (
        <div className=" p-6  rounded-lg">
          <Helmet>
                <title>Heaven Hearth || Add Review</title>
            </Helmet>
      <h2 className="text-xl text-center font-semibold mb-4">Add a Review</h2>
     <form  onSubmit={handleSubmit}>
     <div className="mb-4">
        <label className="block text-xl font-semibold text-gray-700 mb-2">Rating:</label>
        <input
          type="number"
        //   value={rating}
        defaultValue={1}
        name="rating"
          min={1}
          max={5}
        //   onChange={(e) => setRating(e.target.value)}
          required
          className="border border-gray-300 rounded-md p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-xl font-semibold text-gray-700 mb-2">Comment:</label>
        <textarea
        //   value={comment}
        //   onChange={(e) => setComment(e.target.value)}
        name="comment"
          required
          className="border border-gray-300 rounded-md p-2 w-full"
        />
      </div>
      <div className="text-center my-10">
      <button
        // onClick={handleSubmit}
        type="submit"
        className="bg-[#85A1FF] btn text-white font-bold py-2 px-4 rounded"
      >
        Submit Review
      </button>
      </div>
     </form>
    </div>
    );
};

export default MyReview;