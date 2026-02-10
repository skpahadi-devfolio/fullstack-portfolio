import React, { useState } from 'react'

const Projectcard = () => {
    const [project, setproject] = useState([
    {
        title: "Personal Portfolio Website",
        desc: "Built a modern, responsive portfolio using React and Tailwind CSS Implemented reusable components, clean UI, and smooth layout Showcases skills, projects, and contact information Focused on performance and mobile responsiveness",
        end: "Tech Stack: React, Tailwind CSS"
    },
    {
        title: "Number Guessing Game",
        desc: "Developed an interactive number guessing game using HTML, CSS, and JavaScript Implemented game logic, user input handling, and result feedback Improved JavaScript fundamentals and DOM manipulation skills",
        end: "Tech Stack: HTML, CSS, JavaScript"
    }
])
  return (
    
    <div className='p-4 flex justify-center items-center flex-col gap-7 my-4 cursor-pointer md:max-h-screen'>
      
      {project.map(project => {
        return <div key={project.title} className="border-2 w-72 max-w-3xl md:w-full mx-auto flex flex-col rounded-xl bg-violet-600 transition-all hover:-translate-y-6 duration-700 ease-in-out leftRightanimation min-h-60">

           <div className='text-center flex flex-col gap-4 md:gap-10'>
             <div className="projects font-bold text-lg min-w-5/6 md:w-full bg-amber-500 rounded-lg">{project.title}</div>
             <div className="projects md:w-3xl text-shadow-2xs">{project.desc}</div>
              <div className="projects flex md:justify-end justify-center">{project.end}</div>
           </div>
        </div>
      })}
    </div>
  )
}

export default Projectcard






