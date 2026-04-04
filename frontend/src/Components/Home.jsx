import React from 'react'
import myImage from "../assets/sachin.png"
import TypingTextanimation from './TypingTextanimation'
const Home = () => {
  return (
   <>
    <div>

      <div className='flex justify-center md:gap-28 items-center md:px-20'>
      {/* left side */}
      <div className='my-6 text-2xl font-semibold '>
        <p>Hello</p>
        <p>I'm Sandeep Kohli</p>
        <p className='font-bold md:min-w-[19vw] min-w-[30vw]'><TypingTextanimation/></p>
      </div>


      {/* right side */}
      <div className='flex justify-center items-center flex-col gap-4'>
        <img className='w-60 md:w-80 lg:w-96' src={myImage} alt="" />
        <p className='bg-black text-white text-center mx-1 md:p-4 p-2 whitespace-nowrap rounded-md'>Software Developer</p>
      </div>
      </div>


      {/* short description */}
      <div className='text-center md:text-left md:text-2xl mx-auto md:w-[60vw] md:my-10 my-7 px-4 md:px-20 md:pb-20 pb-14'>
        <p>I am a Full Stack Developer with strong foundation in React, Express, Tailwind, Node.js,  MongoDb, Next.js and Python language. Eager to apply skills to innovative software solutions.</p>
      </div>
    </div>
   </>
  )
}

export default Home
