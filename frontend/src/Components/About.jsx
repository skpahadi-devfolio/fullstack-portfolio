import React from 'react'
import codingImg from "../assets/about_coding.png"

const About = () => {
    return (
        <div className='flex justify-center items-center w-fit text-xl fixed left-3 md:w-2xl md:left-96 bottom-35 md:bottom-35 md:text-2xl'>
            <p>I am a BCA graduate from Modern College of Professional Studies, Mohan Nagar, Ghaziabad.
                I am passionate about web development and enjoy building clean, responsive user interfaces.
                I focus on learning modern technologies and applying them in real-world projects.</p>

                <div className="fixed md:top-30 top-60 md:right-130 right-12 hover:-translate-y-8 hover:transition-all hover:duration-700 hover:ease-in-out">
                    <img src={codingImg} alt="" />
                </div>
        </div>
    )
}

export default About
