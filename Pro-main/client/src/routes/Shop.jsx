import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../styles.css';
import { Pagination } from 'swiper/modules';
import backgroundImage from "../assets/shopbg.avif";
import { Link, useNavigate } from 'react-router-dom';

const Shop = () => {
  const [clothes, setClothes] = useState([]);
  const [Menclothes, setMenClothes] = useState([]);
  const [Items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchClothes = async () => {
      try {
        const response = await axios.get('http://localhost:5000/shop');
        setClothes(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchClothes();
  }, []);

  useEffect(() => {
    const fetchMenClothes = async () => {
      try {
        const response = await axios.get('http://localhost:5000/shop/Men');
        setMenClothes(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMenClothes();
  }, []);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('http://localhost:5000/shop/Item');
        setItems(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchItems();
  }, []);

  return (
    <>
      <div className='flex justify-end mt-5 w-full h-screen pr-10 mb-2'>
        <div className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white text-center'>
          <div className='text-white text-6xl font-bold welcome-animation'><span className='text-pink-500'> SHOP </span> WITH US</div>
          <p className='font-bold text-xl mt-4'>"Explore our premium selection of fitness gear, apparel, and accessories to elevate your workout experience at RevUp Fitness."</p>
          <br />
        </div>
        <div className='absolute inset-0 z-0'>
          <img src={backgroundImage} alt='Background' className='w-full h-full object-cover' />
        </div>
      </div>

      {/* Women's Section */}
      <div className="swipe text-black">
        <div className='text-white text-4xl font-bold '><span className='text-pink-500'> WOMEN </span> SECTION</div>
        <div className='mt-10'>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {clothes.slice(5, 12).map((item, index) => (
              <SwiperSlide key={index}>
                <Link to={`/productWomen/${item._id}`} className="slide-content">
                  <img src={item.img} alt={item.name} className="slide-image" />
                  <h3 className='to-black'>{item.name}</h3>
                  <p className='to-black text-xl'>{item.description}</p>
                  <p className='to-black text-xl'>{item.size}</p>
                  <p className='to-black text-xl'>{item.price}</p>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          <button className='mt-7 text-white text-l'>
            <Link to="/shop/Women" className='px-4 py-2 bg-red-600 rounded hover:bg-pink-700 transition duration-300'> Explore Women's Clothing</Link>
          </button>
        </div>
      </div>

      {/* Men's Section */}
      <div className="mt-20 swipe text-black">
        <div className='text-white text-4xl font-bold '><span className='text-pink-500'> MEN </span> SECTION</div>
        <div className='mt-10'>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {Menclothes.slice(5, 12).map((item, index) => (
              <SwiperSlide key={index}>
                <Link to={`/productMen/${item._id}`} className="slide-content">
                <img src={item.img} alt={item.name} className="slide-image" />
                  <h3 className='to-black'>{item.name}</h3>
                  <p className='to-black text-xl'>{item.description}</p>
                  <p className='to-black text-xl'>{item.size}</p>
                  <p className='to-black text-xl'>{item.price}</p>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          <button className='mt-7 text-white text-l'>
            <Link to="/shop/Men" className='px-4 py-2 bg-red-600 rounded hover:bg-pink-700 transition duration-300'> Explore Men's Clothing</Link>
          </button>
        </div>
      </div>

      {/* Accessories Section */}
      <div className="mt-20 swipe text-black">
        <div className='text-white text-4xl font-bold '><span className='text-pink-500'> ACCESSORIES </span> SECTION</div>
        <div className='mt-10'>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {Items.slice(5, 12).map((item, index) => (
              <SwiperSlide key={index}>
                <Link to={`/product/${item._id}`} className="slide-content">
                <img src={item.img} alt={item.name} className="slide-image" />
                  <h3 className='to-black'>{item.name}</h3>
                  <p className='to-black text-xl'>{item.description}</p>
                  <p className='to-black text-xl'>{item.size}</p>
                  <p className='to-black text-xl'>{item.price}</p>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          <button className='mt-7 text-white text-l'>
            <Link to="/shop/Item" className='px-4 py-2 bg-red-600 rounded hover:bg-pink-700 transition duration-300'> Explore Accessories</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Shop;
