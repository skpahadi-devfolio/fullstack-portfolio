import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar flex flex-col md:gap-12 md:flex-row gap-1'>
      <NavLink className={(e)=> {return e.isActive?"red":""}} to={"/"}><li>Home</li></NavLink>
      <NavLink className={(e)=> {return e.isActive?"red":""}} to={"/about"}><li>About</li></NavLink>
      <NavLink className={(e)=> {return e.isActive?"red":""}} to={"/skill"}><li>Skill</li></NavLink>
      <NavLink className={(e)=> {return e.isActive?"red":""}} to={"/project"}><li>Project</li></NavLink>
      <NavLink className={(e)=> {return e.isActive?"red":""}} to={"/contact"}><li>Contact</li></NavLink>
    </div>
    
  )
}

export default Navbar
