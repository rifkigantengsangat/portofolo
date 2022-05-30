import React from 'react'
import './Home.css'
import Right from './Right'
import SideBar from './SideBar'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <motion.div className="container-home"
    initial={{width:0}}
    animate={{width:"100%"}}
    exit ={{x : -window.innerWidth  ,transition : {duration : 0.5}}}
    >
        <SideBar/>
        <Right/>
    </motion.div>
  )
}

export default Home