import React from 'react'
import Banner from '../components/Banner'
import Courses from '../components/Courses'
import About from '../components/About'
import Trainers from '../components/Trainers'
import Schedule from '../components/Schedule'
import Membership from '../components/Membership'
import Reviews from '../components/Reviews'
import Footer from '../components/Footer'
const HomePage = () => {
  return (
    <>
    <div className='mt-10'>
    <Banner/>
    </div>
    <br />
    <div className='mt-10'>
      <Courses/>
    </div>
    <br />
    <div className='mt-10'>
      <About/>
    </div>
    <br />
    <div className='mt-10'>
      <Trainers/>
    </div>
    <br />
    <div className='mt-10'>
      <Schedule/>
    </div>
    <br />
    <div>
      <Membership/>
    </div>
    <br />
    <div>
      <Reviews/>
    </div>
    <br />
 
    </>
    
  )
}

export default HomePage
