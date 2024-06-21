import React from 'react';
import './Ca.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const CardM = ({ item }) => {
  const navigate=useNavigate();
    return (
      <>
   
      <div className="ca text-white">
      <Link to={`/productMen/${item._id}`} className="slide-content">
        <img src={item.img} alt={item.description} />
        <h3 className=' text-xl'>{item.description}</h3>
        <p className=' text-l'>Color: {item.color}</p>
        <p className=' text-l'>Size: {item.size}</p>
        <p className=' text-l  text-pink-500'>Price: {item.price}</p>
        </Link>
      </div>
      </>
    );
  };
  
  export default CardM;