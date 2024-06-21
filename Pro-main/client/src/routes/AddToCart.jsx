import React from 'react';
import { useAuth } from '../context/AuthContext';
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from 'react-router-dom';

const AddToCart = () => {
  const { isAuthenticated, username, logout, cart, setCart } = useAuth();
  const navigate = useNavigate();

  const totalPrice = () => {
    let total = 0;
    cart?.forEach((item) => {
      const priceString = typeof item.price === 'string' ? item.price : '';
      const price = parseFloat(priceString.replace(/[^\d.]/g, ''));
      const quantity = item.quantity || 1;

      if (!isNaN(price) && !isNaN(quantity)) {
        total += price * quantity;
      }
    });
    return total.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2
    }).replace(/^0+/, '');
  };

  const removeCartItem = (pid, size, color) => {
    let myCart = [...cart];
    let index = myCart.findIndex(item => item._id === pid && item.size === size && item.color === color);
    if (index !== -1) {
      myCart[index].quantity -= 1;
      if (myCart[index].quantity <= 0) {
        myCart.splice(index, 1);
      }
    }
    setCart(myCart);
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleContinueShopping = () => {
    navigate('/shop'); // Navigate to the shop page
  };


  return (
    <div className='container text-white'>
      {isAuthenticated ? (
        <>
          {cart.length > 0 ? (
            <>
              <div className='row'>
                <div className='w-full'>
                  <h4 className='text-center text-white mt-20 text-3xl'>
                    Hello {username}, you have {cart.reduce((total, item) => total + item.quantity, 0)} items in your cart
                  </h4>
                </div>
              </div>
              <div className='mt-10 flex justify-center'>
                <div className='flex-1'>
                  <div className='flex flex-wrap justify-center'>
                    {cart.map((item, index) => (
                      <div key={`${item._id}-${item.size}-${item.color}`} className='w-full md:w-1/2 lg:w-1/2 px-4 mb-4'>
                        <div className='flex flex-col items-center'>
                          <img src={item.img} alt={item.description} className='w-full mb-4' />
                          <h4 className='text-xl mb-2'>{item.description}</h4>
                          <p>{item.price}</p>
                          <p>Size: {item.size}</p>
                          <p>Color: {item.color}</p>
                          <p>Quantity: {item.quantity}</p>
                          <Button
                            className='px-4 py-2 bg-red-600 rounded hover:bg-pink-700 transition duration-300'
                            onClick={() => removeCartItem(item._id, item.size, item.color)}
                          >
                            Remove
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className='ml-20 flex-none ml-auto text-center'>
                  <h2 className='text-2xl'>Cart Summary</h2>
                  <br />
                  <p>Total | Checkout | Payment</p>
                  <hr />
                  <h3 className='text-xl'>Total: {totalPrice()} </h3>
                  <Button className='mt-4' onClick={handleLogout}>
                    Logout
                  </Button>

                  <Button className='text-white px-4 py-2  bg-blue-600 rounded hover:bg-blue-700 transition duration-300 mt-7' onClick={handleContinueShopping}>
            CONTINUE SHOPPING
          </Button>
                </div>
              </div>
            </>
          ) : (
            <div className='text-center mt-20'>
              <h4 className='text-3xl'>Your cart is empty</h4>
              <Button className='mt-4' onClick={() => navigate('/shop')}>
                Go to Shop
              </Button>
              <Button className='mt-4 ml-4' onClick={handleLogout}>
                Logout
              </Button>
            </div>
          )}
        </>
      ) : (
        <div className='text-center mt-20'>
          <h4 className='text-3xl'>Please log in to view your cart</h4>
          <Button className='mt-4' onClick={() => navigate('/login')}>
            Go to Login
          </Button>
<br />
         
        </div>
      )}
    </div>
  );
};

export default AddToCart;
