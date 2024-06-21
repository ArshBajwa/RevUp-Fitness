import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
   
      <>
        <Navbar />
        <Outlet />
        <div className='mt-20'>
          <Footer />
        </div>
      </>
  
  );
}

export default App;
