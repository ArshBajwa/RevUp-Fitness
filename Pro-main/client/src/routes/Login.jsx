import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from "../assets/sign.jpg";
import "../style.css";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const isSuccess = await login(email, password);
      if (isSuccess) {
        navigate('/addToCart');
      } else {
        console.log('Login failed: Invalid email or password');
        // Optionally, you can set an error state here and display it in the UI
      }
    } catch (error) {
      console.error('Login error:', error);
      // Handle error appropriately (e.g., display error message)
    }
  };

  return (
    <div className='flex justify-end mt-5 w-full h-screen pr-10 mb-2'>
      <div className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white text-center'>
        <div>
          <form onSubmit={handleSubmit} action="">
            <h1 className="text-6xl font-bold mb-6 mt-10">Login</h1>
            <div className="input-box">
              <input
                type="text"
                placeholder="Email"
                required
                className="input-field"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <i className='bx bxs-user'></i>
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Password"
                required
                className="input-field"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <i className='bx bxs-lock-alt'></i>
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" />
                Remember me
              </label>
              <a href="#">Forgot Password?</a>
            </div>
            <button type="submit" className="btn">Login</button>
            <div className="register-link">
              <p>Don't have an account? <Link to="/sign" className="text-bold text-pink-500">Register</Link></p>
            </div>
          </form>
        </div>
      </div>
      <div className='absolute inset-0 z-0'>
        <img src={backgroundImage} alt='Background' className='w-full h-full object-cover' />
      </div>
    </div>
  );
};

export default Login;
