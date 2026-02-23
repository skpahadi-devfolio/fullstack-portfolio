import React from 'react'
import { useState } from 'react'

const SkillCard = () => {
  const [card, setcard] = useState([
     {
            title: "Frontend",
            skill: ["HTML", "CSS", "Javascript", "TailwindCSS", "React", "Next Js"]
        },
        {
            title: "Backend",
            skill: ["Node js", "Express js", "Python"]
        },
        {
            title: "Database",
            skill: ["MongoDB"]
        },
        {
            title: "Version Control",
            skill: ["Git & GitHub"]
        }
    ])

  return (
   <div className='flex justify-center gap-5 md:gap-10 flex-wrap md:flex-row md:h-[220px] my-16 md:my-28'>
            {card.map(card => {
                return <div key={card.title} className="flex justify-center items-center hover:-translate-y-8 transition-all hover:duration-700 hover:ease-in-out cursor-pointer">
                    <div className='border-2 text-center w-44 min-h-[120px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex-wrap'>
                        <div className='flex justify-between items-center flex-col'>
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
        </div>
  )
}

export default SkillCard
