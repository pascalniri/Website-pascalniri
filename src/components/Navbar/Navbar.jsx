import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <h1>Logo</h1>
        <nav>
            <ul>
                <li>Home</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact Us</li>
            </ul>
        </nav>
        <button>Sign in</button>
    </div>
  )
}

export default Navbar