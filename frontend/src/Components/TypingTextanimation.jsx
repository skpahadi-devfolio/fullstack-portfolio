import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const TypingTextanimation = () => {
  return (
    <div>
       <TypeAnimation
      sequence={[
        'Software Developer', // Types this string
        2000,                   // Waits 1s
        'Frontend Developer',  // Deletes and types next
        2000,                   // Waits 2s
        'Fullstack Developer',
      ]}
      cursor={true}
      repeat={Infinity}
      className="text-2xl"
    />
    </div>
  )
}

export default TypingTextanimation
