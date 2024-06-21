import React from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

const CartAmountToggle = ({ amount, setDecrease, setIncrease }) => {
  return (
    <div className="cart-button text-white">
      <div className="amount-toggle" style={{ display: 'flex', alignItems: 'center' }}>
        <button onClick={setDecrease}>
          <FaMinus />
        </button>
        <div className="amount-style" style={{ margin: '0 10px' }}>{amount}</div>
        <button onClick={setIncrease}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default CartAmountToggle;
