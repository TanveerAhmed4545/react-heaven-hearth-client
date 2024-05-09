import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Banner = () => {
    return (
        <div className=''>
            
            <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/VqsP0J9/jsb-co-lat-YJb-Ex-Nb-A-unsplash-Copy.jpg)'}}>
  <div className="hero-overlay bg-opacity-50"></div>
  <div className="hero-content text-center text-neutral-content">
    <div data-aos="fade-up" data-aos-duration="2000"  className="max-w-md">
      <h1  className="mb-5 text-5xl font-bold">
      Suite Collection</h1>
      <p className="mb-5">At our  hotel, we understand that travelers have unique preferences and needs. That is why we offer a variety of thoughtfully designed airport room types.</p>
      
    </div>
  </div>
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/JKYq1H2/zero.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div  className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">The Ultimate Comfort</h1>
      <p className="mb-5">Regain your vigor in the snug luxurious bed. A soft touch by using nature-friendly materials that inspire business.</p>
      
    </div>
  </div>
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/kc3MWJd/the.jpg)'}}>
  <div className="hero-overlay bg-opacity-50"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Art of City Luxury</h1>
      <p className="mb-5">Embark on a Journey of Opulent Urban Living  Embrace the Artistry of City Luxury, Where Every Moment is Infused with Sophistication, Style, and Serenity</p>
      
    </div>
  </div>
</div>
        </SwiperSlide>
        
      </Swiper>
        </div>
    );
};

export default Banner;
