import React from 'react'
import about from "../assets/about.webp"
import { Link } from 'react-router-dom';
const About = () => {
  return (
    <>
      <div className='w-full mt-14 flex mt-3 bg-stone-900 relative'> {/* Adjust margin-top to match Navbar height */}
        <div className='w-1/2 flex flex-col justify-center items-center p-8 text-white bg-black z-10'>
          <h2 className='text-5xl  mt-10 font-bold welcome-animation'><span className='text-r'>About</span> Us</h2>

          <p className='mt-4 text-l text-center text-wrap'>RevUp Fitness Center is not just a gym; it's a community committed to helping individuals achieve their fitness goals in a supportive and motivating environment. With state-of-the-art facilities and experienced trainers, we offer a wide range of programs and classes tailored to every fitness level, from beginners to advanced athletes. Our holistic approach focuses on not only physical strength but also mental well-being, ensuring that each member feels empowered and confident on their fitness journey. Whether you're looking to lose weight, build muscle, or improve overall health, Revup Fitness Center provides the tools, guidance, and encouragement needed to succeed. Join us today and discover the transformative power of Revup Fitness Center.</p>
          <Link to="/contact">
          <button className='mt-6 px-4 py-2 bg-red-600 rounded hover:bg-pink-700 transition duration-300'>Contact Us</button>
          </Link>
        </div>
        <div className='w-1/2 mt-5 '>
<img src={about} alt="" />
        </div>

      </div>
    </>
  )
}

export default About
