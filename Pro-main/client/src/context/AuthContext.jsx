import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setIsAuthenticated(true);
      setUsername(storedUsername);

      const storedCart = JSON.parse(localStorage.getItem(`cart_${storedUsername}`)) || [];
      setCart(storedCart);
    }
  }, []);

  const login = async (email, password) => {
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (response.ok) {
        const extractedUsername = email.substring(0, email.indexOf('@'));
        setIsAuthenticated(true);
        setUsername(extractedUsername);
        localStorage.setItem('username', extractedUsername);

        const storedCart = JSON.parse(localStorage.getItem(`cart_${extractedUsername}`)) || [];
        setCart(storedCart);

        return true;
      } else {
        console.log('Login failed:', result.message);
        return false;
      }
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUsername('');
    setCart([]);
    localStorage.removeItem('username');
    localStorage.removeItem(`cart_${username}`);
  };

  const updateCart = (newItems) => {
    const updatedCart = [...cart];

    newItems.forEach((newItem) => {
      const itemIndex = updatedCart.findIndex(
        (item) => item._id === newItem._id && item.size === newItem.size && item.color === newItem.color
      );

      if (itemIndex !== -1) {
        // If item already exists in cart, update its quantity
        updatedCart[itemIndex].quantity += newItem.quantity;
      } else {
        // Otherwise, add the new item to the cart
        updatedCart.push(newItem);
      }
    });

    setCart(updatedCart);

    if (isAuthenticated && username) {
      localStorage.setItem(`cart_${username}`, JSON.stringify(updatedCart));
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, username, login, logout, cart, updateCart }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
