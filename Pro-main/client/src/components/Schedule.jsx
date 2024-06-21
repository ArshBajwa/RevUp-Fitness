import React, { useState } from 'react';
import size from "../assets/size.webp";
import box from "../assets/box.webp";
import body from "../assets/body.webp";
import boxing from "../assets/boxing-gloves.webp";
import biceps from "../assets/biceps.webp";
import rope from "../assets/rope.webp";
import run from "../assets/run.webp";
import yoga from "../assets/yoga.webp";

const timetableData = [
  { day: "Monday", events: [
    { time: "06AM-08AM", title: "Weight Loose", instructor: "Rachel Adam", icon: size },
    { time: "08AM-10AM", title: "Cardio", instructor: "Rachel Adam", icon: run },
    { time: "04PM-06PM", title: "Karate", instructor: "Keaf Shen", icon: box },
    { time: "06PM-07PM", title: "Boxing", instructor: "Rachel Adam", icon: boxing },
    { time: "07PM-08PM", title: "Aerobics & Skipping", instructor: "Lefew D. Loee", icon: rope },
    { time: "08PM-09PM", title: "Body Building", instructor: "Rachel Adam", icon: biceps },
  ] },

  { day: "Tuesday", events: [
    { time: "08AM-10AM", title: "Cardio", instructor: "Rachel Adam", icon: run },
    { time: "01PM-02PM", title: "Fitness", instructor: "Rachel Adam", icon: body },
    { time: "04PM-06PM", title: "Karate", instructor: "Keaf Shen", icon: box },
    { time: "06PM-07PM", title: "Boxing", instructor: "Rachel Adam", icon: boxing },
    { time: "08PM-09PM", title: "Body Building", instructor: "Rachel Adam", icon: biceps },
 
  ] },
  { day: "Wednesday", events: [
    { time: "06AM-08AM", title: "Weight Loose", instructor: "Rachel Adam", icon: size },
    { time: "08PM-09PM", title: "Body Building", instructor: "Rachel Adam", icon: biceps },
   
  ] },
  { day: "Thursday", events: [
    { time: "06PM-07PM", title: "Boxing", instructor: "Rachel Adam", icon: boxing },
    { time: "07PM-08PM", title: "Aerobics & Skipping", instructor: "Lefew D. Loee", icon: rope },
    { time: "08AM-10AM", title: "Cardio", instructor: "Rachel Adam", icon: run },
    
  ] },
  { day: "Friday", events: [
    { time: "06PM-07PM", title: "Boxing", instructor: "Rachel Adam", icon: boxing },
     { time: "07PM-08PM", title: "Aerobics & Skipping", instructor: "Lefew D. Loee", icon: rope },
    { time: "08AM-10AM", title: "Cardio", instructor: "Rachel Adam", icon: run },
   
  ] },
  { day: "Saturday", events: [
    { time: "10PM-01PM", title: "Yoga", instructor: "Lefew D.Loee", icon: yoga },
    { time: "06PM-07PM", title: "Boxing", instructor: "Rachel Adam", icon:boxing },
  ] },
];

const Schedule = () => {
  const [selectedDay, setSelectedDay] = useState("Monday");

  return (
    <>
<div className='text-4xl bold mt-14 text-white'>
        <h2><span className='text-pink'>OUR</span> TIME TABLE</h2>
      </div>
    <div className="container mx-auto p-4 mt-5">
      <div className="flex justify-between mb-4 ">
        {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map(day => (
          <button
            key={day}
            className={`w-1/7 text-center text-l bold py-2 cursor-pointer  ${selectedDay === day ? "bg-pink-500 text-white rounded-full p-2" : "text-white"}`}
            onClick={() => setSelectedDay(day)}
          >
            {day}
          </button>
        ))}
      </div>
      <div className='mt-2'>
        {timetableData.map(({ day, events }) => (
          <div key={day} className={`day-events ${selectedDay === day ? "block" : "hidden"}`}>
            <div className="mt-10 grid grid-cols-2 gap-4">
              {events.map(event => (
                <div key={event.time} className="flex items-center mb-4 text-white">
                  <div className="w-1/4 text-center">
                    <img src={event.icon} alt={event.title} className="mx-auto"/>
                    <div className="text-sm text-white">{event.time}</div>
                  </div>
                  <div className="w-3/4 p-4 border-l">
                    <div className="text-lg font-bold text-white">{event.title}</div>
                    <div className="text-sm text-gray-500 text-white">{event.instructor}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Schedule;
