import { Helmet } from "react-helmet-async";


const About = () => {
    return (
        <div className=" mb-5 lg:mb-10">
          <Helmet>
            <title>Heaven Hearth || About</title>
          </Helmet>
      <div className="mb-5 lg:mb-10">
        <div
          className="hero  "
          style={{
            backgroundImage: "url(https://i.ibb.co/kc3MWJd/the.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60  "></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-lg py-24">
              <h1 className="mb-5 text-5xl font-bold">About Us</h1>
              <p className="mb-5">Welcome to Heaven Hearth Hotel Booking, where the rhythm of the waves sets the tone for your tranquil escape. Nestled beside the shimmering sea, our curated selection of coastal retreats beckons you to unwind in harmony with nature is symphony.  Allow yourself to be enchanted by the beauty of the shore as you explore our handpicked havens, where every stay promises panoramic views and blissful moments by the waters edge. Welcome to a world where the soothing sounds of the sea accompany your journey to paradise.</p>
            </div>
          </div>
        </div>
      </div>

       {/* Our Philosophy Section */}
       <div className="container mx-auto px-5 lg:px-20 py-10  ">
                <h2 className="text-center mb-8 font-bold text-4xl ">OUR PHILOSOPHY</h2>
                <p className="font-medium text-lg  text-center leading-relaxed">
                    At Heaven Hearth Hotel Booking, we understand that travel preferences vary just as much as literary tastes. Some seek the convenience of digital bookings, while others crave the tactile experience and charm of physical spaces. They revel in the artistry of interior design, the scent of freshly laundered linens, and the feel of plush furnishings. They delight in the memories created by each destination, cherishing the moments spent exploring new surroundings and indulging in local culture.
                    <br />
                    <br />
                    Our patrons are connoisseurs of hospitality, valuing not just the accommodation but the entire experience it offers. They appreciate the beauty of thoughtfully designed spaces, the warmth of personalized service, and the allure of unique amenities. They seek out destinations that resonate with their sense of style and sophistication, where every detail is crafted to elevate their stay into a cherished memory.
                    <br />
                    <br />
                    Just as book lovers cherish their collections, our guests treasure their travel experiences. They relish the opportunity to discover hidden gems and off-the-beaten-path destinations, savoring each moment and creating stories to be remembered long after their journey ends. They understand that travel is not just about reaching a destination but about immersing oneself in the journey, embracing new experiences, and forging connections with people and places along the way.
                    <br />
                    <br />
                    At Heaven Hearth Hotel Booking, we are dedicated to serving these discerning travelers, providing a curated selection of exceptional accommodations and personalized service that caters to their unique preferences and desires. Whether they seek the tranquility of a secluded retreat, the excitement of a vibrant city, or the charm of a coastal escape, we strive to exceed their expectations and create moments of joy, wonder, and inspiration that will linger in their hearts forever.
                </p>
            </div>

            {/* Our Story Section */}
            <div className="container mx-auto px-5 lg:px-20 py-10 ">
                <h2 className="text-center mb-8 font-bold text-4xl ">OUR STORY</h2>
                <p className="font-medium text-lg  text-center leading-relaxed">
                    Heaven Hearth Hotel Booking began as a dream to create a sanctuary where travelers can find peace and rejuvenation by the sea. Our founders, passionate about hospitality and the natural beauty of coastal landscapes, sought to build a place where guests could escape the hustle and bustle of everyday life and reconnect with nature. Today, we are proud to offer a collection of serene retreats that embody our vision and commitment to excellence.
                </p>
            </div>

            {/* Meet the Team Section */}
            <div className="container mx-auto px-5 lg:px-20 py-10 ">
                <h2 className="text-center mb-8 font-bold text-4xl ">MEET THE TEAM</h2>
                <div className="flex flex-wrap justify-center items-center">
                    {[
                        { name: "John Doe", role: "Founder & CEO", image: "https://i.ibb.co/4wk0Nqn/agent-male-2.jpg" },
                        { name: "Jane Smith", role: "Head of Hospitality", image: "https://i.ibb.co/2shZGfH/agent-female-7-1-300x300.jpg" },
                        { name: "Michael Johnson", role: "Marketing Director", image: "https://i.ibb.co/2KFVj5C/agent-male-1-1-300x300.jpg" },
                    ].map((member, index) => (
                        <div key={index} className="p-4">
                            <div className="max-w-xs mx-auto bg-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-500 hover:shadow-xl hover:scale-105">
                                <img className="w-full h-64 object-cover" src={member.image} alt={member.name} />
                                <div className="p-4">
                                    <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                                    <p className="text-gray-700">{member.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
    </div>
    );
};

export default About;