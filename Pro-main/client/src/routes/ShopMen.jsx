import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './CardM.jsx';

const ShopMen = () => {
  const [clothes, setClothes] = useState([]);

  useEffect(() => {
    const fetchClothes = async () => {
      try {
        const response = await axios.get('http://localhost:5000/shop/Men');
        setClothes(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchClothes();
  }, []);

  return (
    <>
      <div className='text-white text-6xl font-bold welcome-animation mt-20'>
        <span className='text-pink-500'>Men</span> Clothing
      </div>
      <div className='max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-8'>
          {clothes.map((item) => (
            <Card key={item._id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ShopMen;
