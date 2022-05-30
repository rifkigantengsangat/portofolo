import React from 'react'
import './SideBar.css'
import {motion} from "framer-motion"
import {BsInstagram,BsGithub,BsFacebook} from "react-icons/bs"
import {FaTiktok} from "react-icons/fa"
const SideBar = () => {
  return (
    <motion.div className="sidebar"
    initial={{  x:-50,opacity:0 }}
    animate={{ x:0 ,opacity: 1 }}
    transition={{  duration: 2 }}
    >
     <div className="container-sosial">
         <div>
         <a href='https://www.instagram.com/radenmrifky/'><BsInstagram style={{color: 'white',fontSize:"26px"}}/></a>
         </div>
         <div>
         <a href='https://www.instagram.com/radenmrifky/'><BsGithub style={{color: 'white',fontSize:"26px"}}/></a>
         </div>
         <div>
         <a href='https://www.instagram.com/radenmrifky/'><BsFacebook style={{color: 'white',fontSize:"26px"}}/></a>
         </div>
         <div>
         <a href='https://www.instagram.com/radenmrifky/'><FaTiktok style={{color: 'white',fontSize:"26px"}}/></a>
         </div>

     </div>
    </motion.div>
  )
}

export default SideBar