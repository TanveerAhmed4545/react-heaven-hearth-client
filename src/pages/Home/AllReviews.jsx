import axios from "axios";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';


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
            <h2>Reviews</h2>
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
                            <div className="flex    items-center">
                            <div className="card rounded-none w-full bg-violet-200 shadow-xl">
                                <div className="card-body">
                                    <h2 className="card-title">Name : {review.userName}</h2>
                                    <p>Review : {review.userComment}</p>
                                    <p>Posted Date and Time : {new Date(review.timestamp).toLocaleDateString()} {new Date(review.timestamp).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', hour12: true})}</p>
                                </div>
                            </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
                </div>
            </Swiper>
        </div>
    );
};

export default AllReviews;
