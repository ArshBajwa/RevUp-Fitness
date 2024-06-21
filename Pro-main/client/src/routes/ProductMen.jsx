import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/esm/Button';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-toastify';
import CartAmountToggle from './CartAmountToggle';
import { useNavigate } from 'react-router-dom';

const ProductMen = () => {
  const { id } = useParams();
  const { isAuthenticated, updateCart } = useAuth();
  const [amount, setAmount] = useState(1);
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      const url = `http://localhost:5000/shop/Men/${id}`;
      try {
        const response = await axios.get(url);
        if (response.data) {
          const priceString = response.data.price;
          const price = typeof priceString === 'string' ? parseFloat(priceString.replace(/[^\d.]/g, '')) : priceString;
          if (isNaN(price)) {
            console.error("Invalid price format in product data", response.data.price);
          }
          response.data.price = price.toString();
          response.data.quantity = response.data.quantity || 1;
          console.log("Fetched product data:", response.data);
          setProduct(response.data);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    setAmount(amount + 1);
  };

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }

    updateCart([{ ...product, quantity: amount }]);
    toast.success('Item added to cart');
    navigate("/addToCart");
  };

  const handleMORE = () => {
    navigate("/Shop/Men");
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-20 container mx-auto text-white flex flex-col lg:flex-row items-center lg:items-start">
      {/* Left side - Image */}
      <div className="lg:w-1/2">
        <img className="h-auto lg:h-70 w-full object-contain" src={product.img} alt={product.name} />
      </div>

      <div className="mt-20 lg:w-1/2 px-4">
        <h3 className='text-3xl'>{product.name}</h3>
        <p className='text-2xl'>{product.description}</p>
        <p className='text-xl'>Size: {product.size}</p>
        <p className='text-xl'>Price: ${product.price}</p>
        <p className='text-xl'>Color: {product.color}</p>

        {/* CartAmountToggle */}
        <CartAmountToggle
          amount={amount}
          setDecrease={setDecrease}
          setIncrease={setIncrease}
        />

        {/* Add to Cart Button */}
        <div className="mt-4">
          <Button className='text-white px-4 py-2 bg-red-600 rounded hover:bg-pink-700 transition duration-300' onClick={handleAddToCart}>
            ADD TO CART
          </Button>
        </div>

        <div className="mt-4">
          <Button className='text-white px-4 py-2 bg-red-600 rounded hover:bg-pink-700 transition duration-300' onClick={handleMORE}>
            EXPLORE MORE
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductMen;
