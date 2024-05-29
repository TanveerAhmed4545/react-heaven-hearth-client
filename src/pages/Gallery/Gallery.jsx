import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Gallery = () => {
    return (
        <div>
            <Helmet>
                <title>HavenHearth || Gallery</title>
            </Helmet>

            {/* Hero Section */}
            <div className="relative">
                <img src="https://i.ibb.co/THCS8Bm/indoor-beach-1.jpg" alt="Hero Image" className="w-full h-96 object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <h1 className="text-white text-4xl lg:text-6xl font-bold">Welcome to Our Gallery</h1>
                </div>
            </div>

            <div className="text-center py-8 px-5">
                <h2 className=" text-2xl lg:text-4xl font-extrabold">
                    Gallery
                </h2>
                <p className=" pt-6 w-full mx-auto md:w-9/12">
                    For personalized assistance in finding your perfect stay, our gallery showcases the beauty and variety of our accommodations and amenities. Explore our curated selection of coastal retreats and envision your tranquil escape.{" "}
                </p>
            </div>

            <section className="py-6 dark:bg-gray-100">
                <div className="container grid grid-cols-1 gap-4 p-4 mx-auto md:grid-cols-2  lg:grid-cols-3">
                    {[
                        "https://i.ibb.co/bvf8jm2/the.jpg",
                        "https://i.ibb.co/VqsP0J9/jsb-co-lat-YJb-Ex-Nb-A-unsplash-Copy.jpg",
                        "https://i.ibb.co/JKYq1H2/zero.jpg",
                        "https://i.ibb.co/gjywScG/queen-1.jpg",
                        "https://i.ibb.co/MRpK9N9/twin-room-1.jpg",
                        "https://i.ibb.co/S5shbdJ/mountain-view-1.jpg",
                        "https://i.ibb.co/kJmW5CS/city.jpg",
                        "https://i.ibb.co/2hqz8qm/king-1.jpg",
                        "https://i.ibb.co/4jp6pq6/superiorsea-room4.jpg",
                        
                    ].map((src, index) => (
                        <img 
                            key={index} 
                            src={src}
                            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square hover:scale-105 transition-transform duration-300" 
                        />
                    ))}
                </div>
            </section>

            <div className="text-center py-8 px-5">
                <p className=" pt-6 w-full mx-auto lg:w-9/12">
                    Welcome to HavenHearth Hotel Booking, where the rhythm of the waves sets the tone for your tranquil escape. Nestled beside the shimmering sea, our curated selection of coastal retreats beckons you to unwind in harmony with nature,s symphony.
                </p>
                <p className=" pt-6 w-full mx-auto lg:w-9/12">
                    Allow yourself to be enchanted by the beauty of the shore as you explore our handpicked havens, where every stay promises panoramic views and blissful moments by the water,s edge. Welcome to a world where the soothing sounds of the sea accompany your journey to paradise.
                </p>
                <Link to='/rooms'>
                <button className="mt-6 px-8 py-4 bg-[#959cef] text-white font-semibold rounded-lg shadow-md hover:bg-black focus:outline-none focus:ring-2 focus:ring-[#EA1A66] focus:ring-opacity-75">
                    Book Your Stay
                </button>
                </Link>
            </div>
        </div>
    );
};

export default Gallery;