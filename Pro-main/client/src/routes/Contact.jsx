import React from 'react';
import "../styles.css";
import backgroundImage from "../assets/dum.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faPhone, faClock } from '@fortawesome/free-solid-svg-icons';
import gym from "../assets/gym.jpg";
import { Link } from 'react-router-dom';
const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // 
      alert('Form Submitted Successfully');
    event.target.reset();
  
  };
  return (
    <>
      <div className='flex justify-end mt-5 w-full h-screen pr-10 mb-2'>
        <div className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white text-center'>
          <div className='text-white text-6xl font-bold welcome-animation'><span className='text-pink-500'> CONTACT</span> US</div>
          <p className='font-bold text-xl mt-4'>"Get in touch with us today and take the first step towards achieving your fitness goals!"</p>
          <br />
          <Link to="/" className='mt-6 px-4 py-2 bg-red-600 rounded hover:bg-pink-700 transition duration-300'>Home/Contact Us</Link>
        </div>
        <div className='absolute inset-0 z-0'>
          <img src={backgroundImage} alt='Background' className='w-full h-full object-cover' />
        </div>
      </div>

      <div className='w-full flex bg-stone-900 relative mb-20'>
        <div className='w-1/2 flex flex-col justify-center items-center p-6 text-white bg-black z-10'>
          <div className='text-white text-5xl mt-1'>
            <span className='text-pink-500'>GET</span> IN TOUCH 
          </div>
          <div className='mt-5'>
            "Feel free to reach out to us for any inquiries, assistance, or just to say hello!"
          </div>
          <div className='text-white'>
            <div className='mt-3 text-bold text-xl'>
              LOCATION   
            </div>
            <div>
              <FontAwesomeIcon icon={faLocationDot} style={{color: "#f7691d"}} />
              &nbsp;"123 Fitness Avenue, RevUp City, Gymtopia"
            </div>

            <div className='mt-3 text-xl'>
              EMAIL
            </div>
            <div>
              <FontAwesomeIcon icon={faEnvelope} style={{color: "#f7691d"}} />
              &nbsp;"demo@revupfitness.com"
            </div>

            <div className='mt-3 text-xl'> 
              PHONE
            </div>
            <div>
              <FontAwesomeIcon icon={faPhone} style={{color: "#f7691d"}} />
              &nbsp;"+1 (123) 456-7890"
              <br />
              "+1 (555) 123-4567"
            </div>

            <div className='mt-3 text-xl'>
              TIMINGS
            </div>
            <div>
              <FontAwesomeIcon icon={faClock} style={{color: "#f7691d"}} />
              &nbsp;"Monday to Friday: 9:00 AM-8:00 PM,
              <br />
              Saturday: 9:00 AM - 5:00 PM,
              <br /> 
              Sunday: Closed"
            </div>
          </div>
        </div>
        <div className='w-1/2 h-full bg-black z-20'>
          <form onSubmit={handleSubmit}className="max-w-sm mx-auto h-390 w-full mt-10">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-white dark:text-white">Name</label>
            <input 
              type="text" 
              id="name" 
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              placeholder="Name"
            />
            <label htmlFor="phone" className="block mb-2 mt-6 text-sm font-medium text-white dark:text-white">Phone</label>
            <input 
              type="tel" 
              id="phone"  
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              placeholder="Phone"
            />
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white dark:text-white mt-6">Your Email</label>
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
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                placeholder="name@flowbite.com"
              />
            </div>
            <label htmlFor="subscription" className="block mb-2 text-sm font-medium text-white mt-5 dark:text-white">Message</label>
            <textarea
              id="message"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-10 resize-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 flex justify-center"
              rows="8"
              placeholder="Your Message"
            ></textarea>
            <button className='mt-8 px-4 py-2 bg-red-600 rounded hover:bg-pink-700 transition duration-300'>Submit</button>
          </form>
        </div>
      </div>

      <div className='mt-10'>
      <iframe
          title="Google Map"
          width="1150"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3534.4123659360885!2d80.93692197876422!3d26.871864218227905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd847ab13ee7%3A0x5b2bb06dfef570a4!2s496%2F176%2C%20Nirala%20Nagar%2C%20Lucknow%2C%20Uttar%20Pradesh%20226020!5e0!3m2!1sen!2sin!4v1718221622669!5m2!1sen!2sin"
        ></iframe>
      </div>
    </>
  )
}

export default Contact;
