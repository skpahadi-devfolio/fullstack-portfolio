import React from 'react'
import codingImg from "../assets/about_coding.png"

const About = () => {
    return (
        <>
         <div className="flex justify-center items-center mx-auto md:my-10 hover:-translate-y-8 hover:transition-all hover:duration-700 hover:ease-in-out">
                    <img src={codingImg} alt="" />
                </div>
        <div className='flex justify-center items-center text-center md:text-left md:my-17 md:w-[51vw] mx-auto text-lg md:text-2xl'>
            <p>I am a BCA graduate from Modern College of Professional Studies, Mohan Nagar, Ghaziabad.
                I am passionate about web development and enjoy building clean, responsive user interfaces.
                I focus on learning modern technologies and applying them in real-world projects.</p>

               
        </div>
        </>
    )
}

export default About
