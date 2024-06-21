import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from "../assets/sign.jpg";
import "../style.css";
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Signin = () => {
  const [name,setName]=useState();
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const navigate=useNavigate();

  const handleSubmit=(e)=>{
    e.preventDefault();
    if (password.length < 8) {
      alert('Password must be at least 8 characters long.');
      return;
    }
    axios.post('http://localhost:5000/register',{name,email,password}).then(result=>console.log(result)).catch(err=>console.log(err));
    navigate('/login')
  }
  return (
   

    <div className='flex justify-end mt-5 w-full h-screen pr-10 mb-2'>
    <div className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white text-center'>
    <div>
      <div >
         <form onSubmit={handleSubmit} action="">
           <h1 className="text-6xl font-bold mb-6 mt-10">Sign In</h1>

           <div className="input-box">
             <input type="text" placeholder="Name" required className="input-field" 
             onChange={(e)=>setName(e.target.value)}
             />
             <i className='bx bxs-user'></i>
          </div>
           <div className="input-box">
             <input type="text" placeholder="Username" required className="input-field"
              onChange={(e)=>setEmail(e.target.value)}
             
             />
             <i className='bx bxs-user'></i>
          </div>
           <div className="input-box">
            <input type="password" placeholder="Password" required className="input-field"
             onChange={(e)=>setPassword(e.target.value)}
            />
             <i  className='bx bxs-lock-alt'></i>
           </div>
           <div className="remember-forgot">
             <label>
               <input type="checkbox" />
               Remember me
             </label>
             <a href="#">Forgot Password?</a>
           </div>
           <button type="submit" className="btn">Register</button>
           <div className="register-link">
            <p>Already have an account? <Link to="/login" className="text-bold text-pink-500">Log In
            </Link>
            </p>
         </div>
         </form>
       </div>
     </div>

      
    </div>
    <div className='absolute inset-0 z-0'>
      <img src={backgroundImage} alt='Background' className='w-full h-full object-cover' />
    </div>
  </div>
  );
};

export default Signin;
