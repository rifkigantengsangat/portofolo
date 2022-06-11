import React from 'react'
import Work from '../Components/Work/Work'
import Home from '../Components/Home/Home'
import About from '../Components/About/About';
import Contact from '../Components/Contact/Contact'
import { AnimatePresence,motion } from 'framer-motion';
import { Routes,Route,useLocation } from 'react-router-dom';
const AnimationRoute = () => {
    const location = useLocation()
  return (
    <AnimatePresence>
          <Routes location={location} key={location.pathname}>
      <Route exact path ='/' element={<Home/>}/>
      <Route path= "About" element = {<About />} />
      <Route path= "Work" element = {<Work />} />
      <Route path= "Contact" element = {<Contact />} />
    </Routes>
    </AnimatePresence>
  )
}

export default AnimationRoute