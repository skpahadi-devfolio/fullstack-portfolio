import React from 'react'
import myImage from "../assets/sachin.png"
const Home = () => {
  return (
   <>
    <div className='cursor-pointer'>
      <div className="text-3xl md:text-5xl font-bold relative top-10 md:top-30 left-2 md:w-fit md:left-28 w-1 hover:-translate-y-8 hover:transition-all hover:duration-700 hover:ease-in-out">
        <h1>Hello</h1>
        <h1>I'm Sandeep Kohli</h1>
      </div>

      {/* image section */}
      <div className='flex justify-end absolute -right-5 md:top-20 top-35 md:right-32 md:h-2/3 h-56 hover:-translate-y-8 hover:transition-all hover:duration-700 hover:ease-in-out'>
        <img src= {myImage} alt="" />
      </div>
      
      {/* Short description */}
      <div className="summary text-xl md:text-2xl w-fit md:w-[30vw] absolute bottom-30 md:bottom-44 md:left-25 text-center text-slate-950 hover:-translate-y-3 hover:transition-all hover:duration-1000 hover:ease-in-out">
        <p>I am a Full Stack Developer with strong foundation in React, Express, tailwind, Node, Mongodb and Python. Eager to apply skills to innovative software solutions</p>
      </div>
    </div>
   </>
  )
}

export default Home
