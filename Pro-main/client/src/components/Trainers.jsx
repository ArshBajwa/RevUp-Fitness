import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import t1 from "../assets/t1.jpg"; 
import t2 from "../assets/t2.jpg"; 
import t3 from "../assets/t3.jpg"; 
import t4 from "../assets/t4.jpg"; 
import t5 from "../assets/t5.jpg"; 
import t6 from "../assets/t6.jpg"; 
import './style.css';

    import { Pagination, Navigation } from 'swiper/modules';

const Trainers = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  let appendNumber = 8; // Initialize to 8 for 8 slides
  let prependNumber = 1;

  const prepend2 = () => {
    swiperRef.prependSlide([
      '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
      '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
    ]);
  };

  const prepend = () => {
    swiperRef.prependSlide(
      '<div class="swiper-slide">Slide ' + --prependNumber + '</div>'
    );
  };

  const append = () => {
    swiperRef.appendSlide(
      '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>'
    );
  };

  const append2 = () => {
    swiperRef.appendSlide([
      '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
      '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
    ]);
  };

  return (
   <div className='courses-container'>
      <div className='text-4xl bold mt-10 text-white'>
        <h2><span className='text-pink'>MEET</span> OUR TRAINERS</h2>
      </div>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
         <SwiperSlide>
          <div className="trainer-slide">
            <img src={t1} alt="Trainer 1" className="trainer-image" />
            <div className="trainer-info">
              <h4>John Smith</h4>
              <p>Contact Details:</p>
             <p>(555) 123-4567,</p>
              <p>john.smith@example.com</p>
              <p>Specializes in: </p>
            <p> Cardio Blast, Strength Training</p>
            </div>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className="trainer-slide">
            <img src={t2} alt="Trainer 2" className="trainer-image" />
            <div className="trainer-info">
              <h4>Michael Davis</h4>
              <p>Contact Details:</p>
             <p>(555) 456-7890,</p>
              <p>michael.davis@example.com</p>
              <p>Specializes in: </p>
            <p> HIIT Circuit, Bootcamp Challenge</p>
            </div>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className="trainer-slide">
            <img src={t3} alt="Trainer 3" className="trainer-image" />
            <div className="trainer-info">
              <h4>Alex Garcia</h4>
              <p>Contact Details:</p>
             <p>(555)789-1234</p>
              <p>alex.garcia@example.com</p>
              <p>Specializes in: </p>
            <p> Cardio Blast, HIIT Circuit</p>
            </div>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className="trainer-slide">
            <img src={t4} alt="Trainer 1" className="trainer-image" />
            <div className="trainer-info">
              <h4>Sarah Thompson</h4>
              <p>Contact Details:</p>
             <p>(555) 321-9876,</p>
              <p>sarah.thompson@example.com</p>
              <p>Specializes in: </p>
            <p> Pilots Core,Strength Training</p>
            </div>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className="trainer-slide">
            <img src={t5} alt="Trainer 1" className="trainer-image" />
            <div className="trainer-info">
              <h4>David Brown</h4>
              <p>Contact Details:</p>
             <p>(555) 234-5678,</p>
              <p>david.brown@example.com</p>
              <p>Specializes in: </p>
            <p> Strength Training, Bootcamp Challenge</p>
            </div>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className="trainer-slide">
            <img src={t6} alt="Trainer 1" className="trainer-image" />
            <div className="trainer-info">
              <h4> Jessica Lee</h4>
              <p>Contact Details:</p>
             <p>(555) 876-5432,</p>
              <p>jessic.lee@example.com</p>
              <p>Specializes in: </p>
            <p> Yoga Flow, Bootcamp Challenge
            </p>
            </div>
          </div>
        </SwiperSlide>
      
      </Swiper>
    </div>
  )
}

export default Trainers
