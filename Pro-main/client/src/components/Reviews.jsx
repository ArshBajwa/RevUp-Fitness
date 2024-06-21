import React from 'react';
import Card from 'react-bootstrap/Card';
import re1 from "../assets/re1.webp";
import re2 from "../assets/re2.webp";
import re3 from "../assets/re3.webp";
import './style.css';
import form from "../assets/form.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'; // Importing the star icon

const Reviews = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // 
      alert('Form Submitted Successfully');
    event.target.reset();
  
  };
  return (
    <>
      <div className='text-4xl font-bold mt-14 text-white text-center'>
        <h2><span className='text-pink-500'>OUR</span> REVIEWS</h2>
      </div>
      <div className='flex p-2 flex-col lg:flex-row justify-center flex-center mt-6 gap-12'>
      <div className='text-white border-inherit d-flex justify-content-center ml-12'>
        <Card style={{ width: '20rem' }} className="border border-white rounded-circle">
          <div className="ml-10 overflow-hidden  d-flex justify-content-center align-items-center" style={{ width: '150px', height: '150px', backgroundColor: 'white' }}>
            <img src={re1} className="img-fluid rounded-circle" alt="Review" style={{ maxWidth: '100%', maxHeight: '100%' }} />
          </div>
          <Card.Body>
            <div className="mt-5 d-flex align-items-center">
              <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", marginRight: "5px" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", marginRight: "5px" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", marginRight: "5px" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", marginRight: "5px" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", marginRight: "5px" }} />
              <Card.Title className='mt-3 text-xl'>Jessica liss</Card.Title>
            </div>
            <Card.Text className='mt-3'>
              "6 months after joining I lost 15lbs and I am getting stronger and healthier day by day."
            </Card.Text>
            
          </Card.Body>
        </Card>
      </div>
      <div className='text-white border-inherit d-flex justify-content-center ml-12'>
        <Card style={{ width: '20rem' }} className="border border-white rounded-circle">
          <div className="ml-10 overflow-hidden  d-flex justify-content-center align-items-center" style={{ width: '150px', height: '150px', backgroundColor: 'white' }}>
            <img src={re2} className="img-fluid rounded-circle" alt="Review" style={{ maxWidth: '100%', maxHeight: '100%' }} />
          </div>
          <Card.Body>
            <div className="mt-5 d-flex align-items-center">
              <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", marginRight: "5px" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", marginRight: "5px" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", marginRight: "5px" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", marginRight: "5px" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", marginRight: "5px" }} />
              <Card.Title className='mt-3 text-xl '>Alex Wood
              </Card.Title>
            </div>
            <Card.Text className='mt-3 text-l'>
           "I've gotten so much stronger after joining it's insane. My deadlift increased by 65lbs."
            </Card.Text>
            
          </Card.Body>
        </Card>
      </div>
      <div className='text-white border-inherit d-flex justify-content-center ml-12'>
        <Card style={{ width: '20rem' }} className="border border-white rounded-circle">
          <div className="ml-10 overflow-hidden  d-flex justify-content-center align-items-center" style={{ width: '150px', height: '150px', backgroundColor: 'white' }}>
            <img src={re3} className="img-fluid rounded-circle" alt="Review" style={{ maxWidth: '100%', maxHeight: '100%' }} />
          </div>
          <Card.Body>
            <div className="mt-5 d-flex align-items-center">
              <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", marginRight: "5px" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", marginRight: "5px" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", marginRight: "5px" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", marginRight: "5px" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", marginRight: "5px" }} />
              <Card.Title className='mt-3 text-xl'>Monica Hazel</Card.Title>
            </div>
            <Card.Text className='mt-3'>
            "While I am passionate about health and fitness this gym is more like a community to me than anything!
            </Card.Text>
            
          </Card.Body>
        </Card>
      </div>
      </div>
      <div className='text-4xl font-bold mt-14 text-white text-center'>
  <h2><span className='text-pink-500'>CLAIM</span> YOUR FREE TRIAL</h2>
</div>
<div className='w-full mt-10 flex mt-3 bg-stone-900 relative'>
  <div className='w-1/2 flex flex-col justify-center items-center p-8 text-white bg-black z-10'>
    <form onSubmit={handleSubmit}className="max-w-sm mx-auto h-390 w-full">
      <label htmlFor="name" className="block mb-2 text-sm font-medium text-white dark:text-white">Name</label>
      <input 
        type="text" 
        id="name" 
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
        placeholder="Name"
      />
      <label for="phone" className="block mb-2 mt-4 text-sm font-medium text-white dark:text-white">Phone</label>
    
      <input 
        type="tel" 
        id="phone"  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
        placeholder="Phone"
      />
      <label htmlFor="subscription" className="block mb-2 text-sm font-medium text-white mt-4 dark:text-white">Select your subscription</label>
      <select id="subscription" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option>3-Month</option>
        <option>6-Month</option>
        <option>1-Year</option>
      </select>
      <label htmlFor="email" className="block mb-2 text-sm font-medium text-white dark:text-white mt-4">Your Email</label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
          </svg>
        </div>
        <input 
          type="text" 
          id="email" 
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
          placeholder="name@flowbite.com"
        />
      </div>
      <button className='mt-6 px-4 py-2 bg-red-600 rounded hover:bg-pink-700 transition duration-300'>Submit</button>
    </form>
  </div>
  <div className='w-full md:w-1/2 '>
      <img src={form} className="h-full w-full object-cover" alt="" />
    </div>
</div>

    </>
  );
}

export default Reviews;