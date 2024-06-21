// main.jsx (or App.jsx, adjust based on your setup)

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './routers/router';
import { CartProvider } from './context/cart';
import { AuthProvider } from './context/AuthContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
