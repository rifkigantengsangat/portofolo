import React,{useState,useEffect} from 'react'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import {BiAlignJustify} from 'react-icons/bi'
import "./Navbar.css"
const Navbar = () => {

const [showNavbar, setShowNavbar] = useState("ul")

const navToggle = ()=>{
  showNavbar === "ul" ? setShowNavbar("ul ul-active") : setShowNavbar("ul")
}


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
         
           <motion.h1 className="judul"
           initial={{  opacity: 0}}
           animate={{opacity: 1}}
           transition={{ delay:1.5 ,type: 'tween' }}
           >RmR</motion.h1>
        </motion.div>
       
       
            <ul className={showNavbar}
             initial={{ y:-250, opacity: 0  }}
             animate={{y :0 , opacity: 1}}
             transition={{  duration: 2,opacity:1 }}>
                <NavLink to="/" className='link' style={navLinkStyle} >Home</NavLink>
                <NavLink to="/About" className="link"style={navLinkStyle}>About</NavLink>
                <NavLink to="/Work" className="link"style={navLinkStyle}>Work</NavLink>
                <NavLink to="/Contact" className="link"style={navLinkStyle}>Contact</NavLink>
               
            </ul>
          
       
      
        <div onClick={navToggle} >
        <BiAlignJustify className='icons' />
        </div>
    </motion.div>
 
  )
}

export default Navbar