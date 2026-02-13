import React from 'react'
import myImage from "../assets/sachin.png"
const Home = () => {
  return (
   <>
    <div className='cursor-pointer'>
      <div className="text-4xl md:text-5xl font-bold fixed top-50 left-4 md:w-full md:left-28 w-1 hover:-translate-y-8 hover:transition-all hover:duration-700 hover:ease-in-out">
        <h1>Hello</h1>
        <h1>I'm Sandeep Kohli</h1>
      </div>

      {/* image section */}
      <div className='flex justify-end fixed -right-5 md:top-20 top-35 md:right-32 md:h-2/3 h-56 hover:-translate-y-8 hover:transition-all hover:duration-700 hover:ease-in-out'>
        <img src= {myImage} alt="" />
      </div>
      
      {/* Short description */}
      <div className="summary text-2xl w-fit md:w-96 fixed bottom-28 left-4 md:left-28 text-slate-950 hover:-translate-y-3 hover:transition-all hover:duration-1000 hover:ease-in-out">
        <p>I am a Full Stack Developer with strong foundation in React, Express, tailwind, Node, Mongodb and Python. Eager to apply skills to innovative software solutions</p>
      </div>
    </div>
   </>
  )
}

export default Home
