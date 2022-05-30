import React,{useState,useEffect} from 'react'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"
const Navbar = () => {




  const navLinkStyle = ({isActive})=>{
    return{
      fontWeight: isActive ? 'bold' : '300',
      color : isActive ? "red" : "white"
    }
  }
  return (

    <motion.div className="container"
   initial={{  y:-50,opacity:0 }}
    animate={{ y:0 ,opacity: 1 }}
    transition={{  duration: 2 }}
  
    >
        <motion.div className="logo"
        initial={{ y:-250, opacity: 0  }}
        animate={{y :0 , opacity: 1}}
        transition={{  duration: 2,opacity:1 }}
        
        >
           <motion.h1 class="judul"
           initial={{  opacity: 0}}
           animate={{opacity: 1}}
           transition={{ delay:1.5 ,type: 'tween' }}
           >RmR</motion.h1>
        </motion.div>
        <motion.div className="navbar"
         initial={{ y:-250, opacity: 0  }}
         animate={{y :0 , opacity: 1}}
         transition={{  duration: 2,opacity:1 }}
        >
            <ul className="ul">
                <NavLink to="/" className='link' style={navLinkStyle} >Home</NavLink>
                <NavLink to="/About" className="link"style={navLinkStyle}>About</NavLink>
                <NavLink to="/Work" className="link"style={navLinkStyle}>Work</NavLink>
                <NavLink to="/Contact" className="link"style={navLinkStyle}>Contact</NavLink>
            </ul>
       
        </motion.div>
    </motion.div>
 
  )
}

export default Navbar