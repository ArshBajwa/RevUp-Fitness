import React from 'react'
import "../styles.css";
import backgroundImage from "../assets/train.jpg";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import course1 from "../assets/classes-1.webp"; 
import course2 from "../assets/classes-2.webp"; 
import course3 from "../assets/classes-3.webp"; 
import course4 from "../assets/classes-4.webp"; 
import course5 from "../assets/classes-5.webp"; 
import course6 from "../assets/classes-6.webp"; 
import course7 from "../assets/classes-7.webp"; 
import course8 from "../assets/classes-8.webp"; 
import course9 from "../assets/classes-9.webp"
import { Link } from 'react-router-dom';
// import about from "../assets/about.webp"
// import aboutimg from "../assets/aboutbg.jpg";
const Course = () => {
  return (
    <div>
        <div className='flex justify-end mt-40 w-full h-screen pr-20 mb-30'>
        <div className='absolute  z-10 text-white'>
          <div className='text-white text-6xl font-bold welcome-animation mt-20'><span className='text-pink-500'>OUR</span> CLASSES</div>
          <p className='mt-7 font-bold text-xl'>"Transforming lives through personalized fitness and wellness programs.".</p>
          <br />
          <Link to="/" className='mt-6 px-4 py-2 bg-red-600 rounded hover:bg-pink-700 transition duration-300'>Home/Classes</Link>
        </div>
        <div className='absolute inset-0 z-0'>
          <img src={backgroundImage} alt='Background' className='w-full h-full object-cover ' />
        </div>
      </div>
    <div className='text-white text-5xl mt-1 mb-10'>
    <span className='text-pink-500'>OUR</span> COURSES 
    </div>

   <div className='grid grid-rows-3 grid-cols-3 flex justify-center gap-8'>
      <div className='mt-10 flex justify-center text-white'>
    <Card style={{ width: '18rem'}} className='border border-white rounded-circle'>
      <Card.Img variant="top" src={course1} />
      <Card.Body>
        <Card.Title className='text-pink-500 text-xl mt-5 ' >KETTLEBELL</Card.Title>
        <Card.Text className='text-wrap text-center mt-5'>
Our Kettlebell course focuses on strength, endurance, and flexibility through dynamic and functional movements. Perfect for all fitness levels, this program helps you build muscle, burn fat, and improve overall fitness in a fun and challenging way.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>

    {/* 2 */}
    <div className='mt-10 flex justify-center text-white'>
    <Card style={{ width: '18rem'}} className='border border-white rounded-circle'>
      <Card.Img variant="top" src={course2} />
      <Card.Body>
        <Card.Title className='text-pink-500 text-xl mt-5'> CONJUGATE METHODS</Card.Title>
        <Card.Text className='mt-5 text-wrap text-center'>
Our Conjugate Methods course utilizes a comprehensive training system designed to enhance strength, speed, and athletic performance. This program incorporates varied exercises, intensity levels, and recovery strategies.
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>

    {/* 3 */}
    <div className='mt-10 flex justify-center text-white'>
    <Card style={{ width: '18rem'}} className='border border-white rounded-circle'>
      <Card.Img variant="top" src={course3} />
      <Card.Body>
        <Card.Title className='text-pink-500 text-xl mt-5'> KETTLEBELL</Card.Title>
        <Card.Text className='mt-5 text-wrap text-center'>
        
        Our Kettlebell course focuses on strength, endurance, and flexibility through dynamic and functional movements. Perfect for all fitness levels, this program helps you build muscle, burn fat, and improve overall fitness in a fun and challenging way.
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>

    {/* 4 */}
    
    <div className='mt-10  flex justify-center
     text-white'>
    <Card style={{ width: '18rem'}} className='border border-white rounded-circle'>
      <Card.Img variant="top" src={course4} />
      <Card.Body>
        <Card.Title className='text-pink-500 text-xl mt-5'> ADVANCED GYMNASTIC</Card.Title>
        <Card.Text className='mt-5 text-wrap text-center'>
        Our Advanced Gymnastics course is tailored for those looking to master complex gymnastic skills and movements. This program emphasizes strength, flexibility, and precision, offering rigorous training in techniques such as handstands, flips, and rings work, ideal for athletes aiming to elevate their gymnastic prowess.
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>

    {/* 5 */}
    <div className=' mt-10 flex text-white justify-center'>
    <Card style={{ width: '18rem'}} className='border border-white rounded-circle'>
      <Card.Img variant="top" src={course6} />
      <Card.Body>
        <Card.Title className='text-pink-500 text-xl mt-5'> STRIKING</Card.Title>
        <Card.Text className='mt-5 text-wrap text-center'>
Our Striking course offers comprehensive training in various striking disciplines, including boxing, Muay Thai, and kickboxing. Focused on technique, power, and speed, this program is designed to enhance your offensive and defensive skills, making it perfect for those looking to improve their combat proficiency and overall fitness.
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>

    {/* 6 */}
    <div className=' mt-10 flex text-white justify-center'>
    <Card style={{ width: '18rem'}} className='border border-white rounded-circle'>
      <Card.Img variant="top" src={course7} />
      <Card.Body>
        <Card.Title className='text-pink-500 text-xl mt-5'> BODY PUMP</Card.Title>
        <Card.Text className='mt-5 text-wrap text-center'>
        Our Body Pump course is a high-energy, barbell-based workout designed to build strength and tone your entire body. Combining weightlifting with high-repetition movements set to motivating music, this program is perfect for those seeking a challenging and effective full-body workout that delivers rapid results.
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>

    {/* 7 */}
    <div className=' mt-10 flex text-white justify-center'>
    <Card style={{ width: '18rem'}} className='border border-white rounded-circle'>
      <Card.Img variant="top" src={course5} />
      <Card.Body>
        <Card.Title className='text-pink-500 text-xl mt-5'> ADVANCED GYMNASTIC</Card.Title>
        <Card.Text className='mt-5 text-wrap text-center'>
        
        Our Advanced Gymnastics course is tailored for those looking to master complex gymnastic skills and movements. This program emphasizes strength, flexibility, and precision, offering rigorous training in techniques such as handstands, flips, and rings work, ideal for athletes aiming to elevate their gymnastic prowess.
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>

    {/* 8 */}
    <div className=' mt-10 flex text-white justify-center'>
    <Card style={{ width: '18rem'}} className='border border-white rounded-circle'>
      <Card.Img variant="top" src={course8} />
      <Card.Body>
        <Card.Title className='text-pink-500 text-xl mt-5'> STRIKING </Card.Title>
        <Card.Text className='mt-5 text-wrap text-center'>
        
        Our Striking course offers comprehensive training in various striking disciplines, including boxing, Muay Thai, and kickboxing. Focused on technique, power, and speed, this program is designed to enhance your offensive and defensive skills, making it perfect for those looking to improve their combat proficiency and overall fitness.
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>

    {/* 9 */}
    <div className=' mt-10 flex text-white justify-center'>
    <Card style={{ width: '18rem'}} className='border border-white rounded-circle'>
      <Card.Img variant="top" src={course9} />
      <Card.Body>
        <Card.Title className='text-pink-500 text-xl mt-5'> CARDIO </Card.Title>
        <Card.Text className='mt-5 text-wrap text-center'>
 

Our Cardio course is designed to boost your cardiovascular endurance and overall fitness through a variety of high-energy exercises. This program includes interval training, aerobic workouts, and dynamic movements, making it ideal for anyone looking to improve their heart health, burn calories, and increase stamina.
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>
    </div>
   </div>

    
  )
}

export default Course
