import axios from "axios";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import { FaStar } from "react-icons/fa";
import demoUserPic from "../../assets/demoUser.png"

const AllReviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/reviews')
            .then(response => {
                setReviews(response.data);
            })
            .catch(error => {
                console.error('Error fetching reviews:', error);
            });
    }, []);

    return (
        <div >
             <div className="text-center pt-8 ">
             <h2 className=" text-2xl lg:text-4xl font-extrabold">
              Discover Ours Customers Reviews
             </h2>
              <p className=" pt-6 w-full mx-auto lg:w-9/12">
              Explore the customer reviews on our platform.{" "}
               </p>
      </div>
            <div className="">
            <Swiper
            
            spaceBetween={20} 
            slidesPerView={1}
            
            pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
              
        >
            <div className="">
            {
                reviews.map(review => (
                    <SwiperSlide key={review._id}>
                        <div className="flex  m-5 md:m-10 lg:mx-52  items-center">
                        {/* <div className="card rounded-none w-full bg-violet-200 shadow-xl">
                            <div className="card-body p-5 md:p-8 lg:p-20">
                                <h2 className="card-title">Name : {review.userName}</h2>
                                <p>Posted Date and Time : {new Date(review.timestamp).toLocaleDateString()} {new Date(review.timestamp).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', hour12: true})}</p>
                                <p>Rating : {review.userRating}</p>
                                <p>Review : {review.userComment}</p>
                                
                            </div>
                        </div> */}
                        <div className="container flex flex-col w-full border-2  p-6 mx-auto  divide-y  dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800">
	<div className="flex justify-between p-4">
		<div className="flex space-x-4">
			<div>
				<img src={review.userPhoto? review.userPhoto:demoUserPic} className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
			</div>
			<div>
				<h4 className="font-bold">{review.userName}</h4>
				<span className="text-xs dark:text-gray-600">{new Date(review.timestamp).toLocaleDateString()} {new Date(review.timestamp).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', hour12: true})}</span>
			</div>
		</div>
		<div className="flex items-center space-x-2 dark:text-yellow-700">
			<span><FaStar /></span>
			<span className="text-xl font-bold">{review.userRating}</span>
		</div>
	</div>
	<div className="p-4 space-y-2 text-sm dark:text-gray-600">
		<p>{review.userComment}</p>
	</div>
</div>
                        </div>
                    </SwiperSlide>
                ))
            }
            </div>
        </Swiper>
            </div>
        </div>
    );
};

export default AllReviews;
