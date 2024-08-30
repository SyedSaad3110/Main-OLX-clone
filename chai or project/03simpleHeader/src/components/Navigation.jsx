import React from 'react'

function Navigation() {
  return (
    <div>
       <div>
     <nav className='container'>
        <div className="logo">
            <img src='/images/logo.jpg' width={100} alt='logo' />
        </div>

    <ul>
        <li href="#">Menu</li>
        <li href="#">Location</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
    </ul>

    <div className='btn'>
        <button>Login</button>
    </div>
  
     </nav>

    </div>
    </div>
  )
}

export default Navigation
