import React from 'react';
import "../styles.css";
import backgroundImage from "../assets/contact_bg.webp";
import about from "../assets/about.webp"
import aboutimg from "../assets/aboutbg.jpg";
import Card from 'react-bootstrap/Card';
import re1 from "../assets/re1.webp";
import re2 from "../assets/re2.webp";
import re3 from "../assets/re3.webp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'; // Importing the star icon
import { Link } from 'react-router-dom';
const About = () => {
  return (
    <>
      <div className='flex justify-end mt-40 w-full h-screen pr-20 mb-30'>
        <div className='absolute  z-10 text-white'>
          <div className='text-white text-6xl font-bold welcome-animation'><span className='text-pink-500'>ABOUT</span> US</div>
          <p className='mt-7 font-bold text-xl'>Building A community Of Fitness Athletic.</p>
          <br />
          <Link to="/" className='mt-8 px-4 py-2 bg-red-600 rounded hover:bg-pink-700 transition duration-300'>Home/About Us</Link>
        </div>
        <div className='absolute inset-0 z-0'>
          <img src={backgroundImage} alt='Background' className='w-full h-full object-cover' />
        </div>
      </div>

      <div className='flex bg-stone-900 mb-20'>
        <div className=' w-1/2 flex flex-col justify-center items-center p-5 text-white bg-black z-10'>
          <h2 className='text-5xl font-bold text-pink'>ABOUT RevUp Fitness</h2>
          
          <p className='mt-4 text-l text-center text-wrap'>RevUp Fitness Center is not just a gym; it's a community committed to helping individuals achieve their fitness goals in a supportive and motivating environment. With state-of-the-art facilities and experienced trainers, we offer a wide range of programs and classes tailored to every fitness level, from beginners to advanced athletes. Our holistic approach focuses on not only physical strength but also mental well-being, ensuring that each member feels empowered and confident on their fitness journey. Whether you're looking to lose weight, build muscle, or improve overall health, Revup Fitness Center provides the tools, guidance, and encouragement needed to succeed. Join us today and discover the transformative power of Revup Fitness Center.</p>
        <Link to="/" className='mt-6 px-4 py-2 bg-red-600 rounded hover:bg-pink-700 transition duration-300'>Contact Us</Link>
        </div>
        <div className=' mt-5 '>
<img src={about} alt="" />
        </div>
      </div>


      <div className='relative w-full h-screen bg-stone-900'>
      {/* Background image container */}
     

      {/* First part */}
      <div className='flex w-full h-2/4 justify-center items-center mt-16'>
        <div className='w-1/2 flex flex-col justify-center items-center text-white mt-1'>
          <h2 className='text-5xl font-bold text-white z-10'>WHY <span className='text-pink-500'>CHOOSE</span> US?</h2>
        </div>
      </div>

      {/* Second part */}
      <div className='flex h-1/4  justify-center items-center'>
        <div className='w-1/2 flex flex-col justify-center items-center p-5 text-white mt-16'>
          {/* Content for the second part */}
          <div className='flex flex-cols z-10 gap-4 text-white text-l'>
          <div className='text-white z-10'>
            <h2 className=' text-xl'>01.</h2>
          </div>
          <div>
          <h2 className='text-xl'>LOW PRICES</h2>
            <p className='text-l'>Join us and experience top-notch facilities and expert guidance without the high costs."</p>
            </div>
            <div className='text-white z-10'>
            <h2 className='text-xl'>02.</h2>
          </div>
          <div>
          <h4 className='text-xl'>HIGH QUALITY GTMS</h4>
            <p>"Experience premium fitness with our high-quality gyms, equipped with state-of-the-art facilities and expert trainers to elevate your workouts."

            </p>
            </div>
            <div className='text-white z-10'>
            <h2 className='text-xl'>03.</h2>
          </div>
          <div>
          <h4 className='text-xl mr-4'>OPEN ALL DAY,EVERYDAY</h4>
            <p>"Embrace convenience with our round-the-clock access, ensuring you can pursue your fitness goals at any time, day or night, on your schedule."
            </p>
            </div>
        </div>
        
        </div>
      </div>
      <img src={aboutimg} alt='Background' className='absolute inset-0 w-full h-full object-cover blur-sm z-0' />
    </div>



    <div className='text-4xl font-bold mt-14 text-white text-center'>
        <h2><span className='text-pink-500'>WHAT</span> OUR CLIENTS SAY</h2>
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


    </>
  );
}

export default About;

