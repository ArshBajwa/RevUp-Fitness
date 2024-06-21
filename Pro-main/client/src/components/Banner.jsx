import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import slide1 from "../assets/slide1.jpg"; 
import slide2 from "../assets/slide2.jpg"; 
import slide3 from "../assets/slide3.jpg"; 
import slide4 from "../assets/slide4.jpg"; 
import slide5 from "../assets/slide5.jpg"; 
import '../styles.css';
import { Autoplay } from 'swiper/modules';

// import required modules
import { Navigation } from 'swiper/modules';

const Banner = () => {
  return (
    <>
      <div className='w-full h-screen flex mt-3 bg-stone-900 relative'> {/* Adjust margin-top to match Navbar height */}
        <div className='w-1/2 flex flex-col justify-center items-center p-8 text-white bg-black z-10'>
          <h2 className='text-5xl italic font-bold welcome-animation'><span className='text-r'>Wel</span>come</h2>
          <h3 className='text-4xl font-semibold revup-animation mt-2'>To RevUp <span className='text-pink'>Fit</span>ness</h3>
          <p className='mt-4 text-l text-center'>Join us to achieve your fitness goals with our personalized plans and professional trainers.</p>
          <Link to="/about">
          <button className='mt-6 px-4 py-2 bg-red-600 rounded hover:bg-pink-700 transition duration-300'>Get Started</button>
          </Link>
        </div>
        <div className='w-1/2 h-full'>
          <Swiper 
            navigation={true} 
            modules={[Navigation, Autoplay]} 
            className="mySwiper h-full" 
            autoplay={{ delay: 3000, disableOnInteraction: false }}
          >
            <SwiperSlide><img src={slide2} alt="" /></SwiperSlide>
            <SwiperSlide><img src={slide3} alt="" /></SwiperSlide>
            <SwiperSlide><img src={slide5} alt="" /></SwiperSlide>
            <SwiperSlide><img src={slide4} alt="" /></SwiperSlide>
            <SwiperSlide><img src={slide1} alt="" /></SwiperSlide>
          </Swiper>
        </div>
        
      </div>
    </>
  );
};

export default Banner;
