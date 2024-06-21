// src/pages/SomePage.jsx

import React from 'react';
import { useOutletContext } from 'react-router-dom';
import AddToCart from '../routes/AddToCart';

const SomePage = () => {
  const { isAuthenticated, username } = useOutletContext();

  return (
    <AddToCart isAuthenticated={isAuthenticated} username={username} />
  );
};

export default SomePage;
