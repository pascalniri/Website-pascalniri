import React from 'react'
import './Skills.css'
import { animated } from '@react-spring/web'
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { FaStar } from "react-icons/fa";


const Skills = () => {
  return (
    <div className='skills'>
        <h1>Web Development Skills</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, </p>
       <div className="container">

         <div 
                   
         className="sub-container">
            <FaReact id='svg' />
            <h3>React Js</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In illo voluptatum, corrupti maxime ipsam pariatur amet earum architecto temporibus, harum eaque incidunt ipsa aliquid vel id eveniet. Eius, mollitia vitae?</p>
            <div className="rate" style={{color:'rgb(41, 173, 159)', fontSize:'1.4rem'}}>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            </div>
         </div>

         <div className="sub-container">
            <FaHtml5 id='svg' />
            <h3>HTML</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In illo voluptatum, corrupti maxime ipsam pariatur amet earum architecto temporibus, harum eaque incidunt ipsa aliquid vel id eveniet. Eius, mollitia vitae?</p>
            <div className="rate" style={{color:'rgb(41, 173, 159)', fontSize:'1.4rem'}}>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            </div>
         </div>

         <div className="sub-container">
            <IoLogoCss3 id='svg' />
            <h3>CSS</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In illo voluptatum, corrupti maxime ipsam pariatur amet earum architecto temporibus, harum eaque incidunt ipsa aliquid vel id eveniet. Eius, mollitia vitae?</p>
            <div className="rate" style={{color:'rgb(41, 173, 159)', fontSize:'1.4rem'}}>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            </div>
         </div>
       </div>
    </div>
  )
}

export default Skills