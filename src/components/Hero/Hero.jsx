import React from 'react'
import './Hero.css'
import profile from './images/profile.jpg'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='desc'>
        <h1>Pascal <span style={{color:'rgb(41, 173, 159)'}}>NIRINGIYIMANA</span></h1>
        <h2>Web Developer</h2>
        <p>I'm a web Designer with extensive experience for over 3 years.<br/>
          Expertise is to create and website design, Frontend design, and many more...
        </p>
        <div>
        <button
         style={
          {
            background:'transparent',
            border:'1px solid rgb(41, 173, 159)',
            color:'rgb(41, 173, 159)',
            marginRight:'10px'
            
          }
         }
        >
          Hire me
        </button>
        <button>More About Me</button>
        </div>
      </div>
      <div className='profile'>
        <img src={profile} />
      </div>
    </div>
  )
}

export default Hero