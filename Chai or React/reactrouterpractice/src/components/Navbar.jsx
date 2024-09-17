import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
   <>
  <nav>
    <NavLink className={(e)=> {return e.isActive?"red": ""}} to="/"><li>Home</li></NavLink>
    <NavLink  className={(e)=> {return e.isActive?"red": ""}} to="/about"><li>About</li></NavLink>
    <NavLink className={(e)=> {return e.isActive?"red": ""}} to="/content"><li>Contact</li></NavLink>
    <NavLink className={(e)=> {return e.isActive?"red": ""}} to="/user"><li>user</li></NavLink>
  </nav>
   </>
  )
}

export default Navbar