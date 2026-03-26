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
        },
        {
            title: "URL Shortener App",
            desc: "Developed a full-stack URL shortener using Next.js with secure GitHub authentication via NextAuth Implemented features like generating short URLs, redirect handling, and user-specific link management Improved understanding of authentication, API routes, and modern full-stack development",
            end: "Tech Stack: Next.js, NextAuth, GitHub OAuth"
        },
        {
            title: "KJ&SK Pahadi Rasoi Website",
            desc: "Designed and developed a responsive restaurant website using HTML, CSS, and JavaScript Created an interactive UI with features like menu display, image gallery, and booking section Built using AI-assisted prompt engineering to enhance design and development speed",
            end: "Tech Stack: HTML, CSS, JavaScript"
        },
        {
            title: "Note Manager App",
            desc: "Built a full-stack note management application using the MERN stack Implemented JWT-based authentication for secure user access Developed CRUD functionality for creating, updating, and deleting notes Strengthened backend API development and database handling skills",
            end: "Tech Stack: MongoDB, Express.js, React.js, Node.js, JWT"
        }
    ])
    return (

        <div className='min-h-screen flex flex-col mb-20'>
        <div className='p-4 flex justify-center items-center flex-col gap-5 my-10 md:my-4 cursor-pointer'>

            {project.map(project => {
                return <div key={project.title} className="border-2  max-w-3xl w-[88vw] mx-auto flex flex-col rounded-xl bg-violet-600 transition-all hover:-translate-y-6 duration-700 ease-in-out leftRightanimation  min-h-60 my-3 md:my-0 ">

                    <div className='text-center flex flex-col gap-2 md:gap-10'>
                        <div className="projects font-bold text-lg min-w-5/6 md:w-full bg-amber-500 rounded-lg">{project.title}</div>
                        <div className="projects md:w-3xl text-shadow-2xs">{project.desc}</div>
                        <div className="projects flex md:justify-end justify-center">{project.end}</div>
                    </div>
                </div>
            })}
        </div>
        </div>
    )
}

export default Projectcard


// const [card, setcard] = useState([
//      {
//             title: "Frontend",
//             skill: ["HTML", "CSS", "Javascript", "TailwindCSS", "React", "Next Js"]
//         },
//         {
//             title: "Backend",
//             skill: ["Node js", "Express js", "Python"]
//         },
//         {
//             title: "Database",
//             skill: ["MongoDB"]
//         },
//         {
//             title: "Version Control",
//             skill: ["Git & GitHub"]
//         }
//     ])



{/* <div className='flex justify-center gap-5 md:gap-10 flex-wrap md:flex-row md:h-[250px] my-28'>
            {card.map(card => {
                return <div key={card.title} className="flex justify-center items-center hover:-translate-y-8 transition-all hover:duration-700 hover:ease-in-out cursor-pointer">
                    <div className='border-2 text-center w-44 min-h-[120px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex-wrap'>
                        <div className='flex justify-between items-center flex-col gap-1'>
                        <div className="card bg-slate-900 text-white w-full">{card.title}</div>

                        <div className="card">
                            {card.skill.map((item) => (
                                <p key={item}>{item}</p>
                            ))}
                        </div>
                        </div>
                    </div>
                </div>
            })}
        </div> */}
