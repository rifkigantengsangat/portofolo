import React from 'react'
import "./About.css"
import Logo from '../Assets/rifki.jpg'
import { motion } from 'framer-motion'
import ProgressBar from 'react-animated-progress-bar';
import {HiSpeakerphone} from 'react-icons/hi'
import {BsQuestionLg,BsCodeSlash} from 'react-icons/bs'
import {FaCrown,FaBookReader,FaSwimmer} from 'react-icons/fa'
import {RiTeamLine} from 'react-icons/ri'
import {AiFillWarning} from 'react-icons/ai'
import {GiAlarmClock} from 'react-icons/gi'
import {MdOutlineTimer} from 'react-icons/md'
import {BiFootball} from 'react-icons/bi'
import {IoGameControllerSharp} from 'react-icons/io5'
import {SiYourtraveldottv} from 'react-icons/si'
const About = () => {
  return (
    <motion.div className='container-about'
    initial={{width:0,opacity: 0 }}
    animate={{width:"90%",opacity:1}}
    exit ={{x : -window.innerWidth  ,transition : {duration : 0.5}}}
    >
      <div className="about-me">
        <h1 className="abot">About Me</h1>
      </div>
      <div className="desc">
        <div className="images">
          <img src={Logo} alt="logo" className='gambar' />
        </div>
        <div className="text">
          <h1>Front End Developer</h1>
          <p> am a self-taught software developer with well developed skills in frontend software development and have concluded various Certifications and Projects in my areas of interest. I'm very passionate in writing clean code & always ready to learn. I work well in a team but also on my own as I love to set myself goals which I will achieve.</p>
        </div>
      </div>
    <div className="skil">
    <div className="about-me">
        <h1 className="abot">Programming Skills</h1>
      </div>
      <div className="skill">
      <div className="left-skill">
        <div className="html">
        <h1 style={{ color: 'white',fontSize:"26px"}}>HTML
      <ProgressBar
        width="400px"
        height="10px"
        rect
        fontColor="red"
        percentage="89"
        rectPadding="1px"
        rectBorderRadius="20px"
        defColor ="red"
        trackPathColor="transparent"
        bgColor="red"
        trackBorderColor="red"
      
      />
      </h1>
        </div>
    <div className="css">
    <h1 style={{ color: 'white',fontSize:"26px"}}>CSS
      <ProgressBar
        width="400px"
        height="10px"
        rect
        fontColor="red"
        percentage="86"
        rectPadding="1px"
        rectBorderRadius="20px"
        defColor ="red"
        trackPathColor="transparent"
        bgColor="red"
        trackBorderColor="red"
      />
      </h1>
    </div>
    

      </div>
      <div className="right-skill">
      <div className="html">
        <h1 style={{ color: 'white',fontSize:"26px"}}>JAVASCRIPT
      <ProgressBar
        width="400px"
        height="10px"
        rect
        fontColor="red"
        percentage="79"
        rectPadding="1px"
        rectBorderRadius="20px"
        defColor ="red"
        trackPathColor="transparent"
        bgColor="red"
        trackBorderColor="red"
      />
      </h1>
        </div>
    <div className="css">
    <h1 style={{ color: 'white',fontSize:"26px"}}>REACT JS
      <ProgressBar
        width="400px"
        height="10px"
        rect
        fontColor="red"
        percentage="74"
        rectPadding="1px"
        rectBorderRadius="20px"
        defColor ="red"
        trackPathColor="transparent"
        bgColor="red"
        trackBorderColor="red"
      />
      </h1>
    </div>

      </div>
      </div>
   
    
    </div>
    <div className="inter">
    <div className="about-me">
        <h1 className="abot">InterPersonal Skills</h1>
      </div>
      <div className="container-inter">
      <div className="speaker-container">
        <div className="speaker-icon">
        <HiSpeakerphone style={{ color:"purple", fontSize:"30px" }}/>
        </div>
    <div className="speaker-text">
    <h3>Communication</h3>
    </div>
     
      </div>
      <div className="speaker-container">
        <div className="speaker-icon">
        <BsQuestionLg style={{ color:"#ff7f50", fontSize:"30px" }}/>
        </div>
    <div className="speaker-text">
    <h3>Decision Making</h3>
    </div>
     
      </div>
      <div className="speaker-container">
        <div className="speaker-icon">
        <FaCrown style={{ color:"gold", fontSize:"30px" }}/>
        </div>
    <div className="speaker-text">
    <h3>Leadership</h3>
    </div>
     
      </div>
      <div className="speaker-container">
        <div className="speaker-icon">
        <RiTeamLine style={{ color:"#ff1493", fontSize:"30px" }}/>
        </div>
    <div className="speaker-text">
    <h3>Teamwork</h3>
    </div>
     
      </div>
      <div className="speaker-container">
        <div className="speaker-icon">
        <AiFillWarning style={{ color:"red", fontSize:"30px" }}/>
        </div>
    <div className="speaker-text">
    <h3>Problem Solving</h3>
    </div>
     
      </div>
      <div className="speaker-container">
        <div className="speaker-icon">
        <GiAlarmClock style={{ color:"#6495ed", fontSize:"30px" }}/>
        </div>
    <div className="speaker-text">
    <h3>Time Management</h3>
    </div>
     
      </div>
      <div className="speaker-container">
        <div className="speaker-icon">
        <MdOutlineTimer style={{ color:"#00ffff", fontSize:"30px" }}/>
        </div>
    <div className="speaker-text">
    <h3>Punctuality</h3>
    </div>
     
      </div>
      </div>
     
    </div>
    <div className="interest">
    <div className="about-me">
        <h1 className="abot">Interests</h1>
      </div>
      <div className="container-interest">
     <div className="interest-icon-text">
    <div className="icon-interest">
    <BsCodeSlash style={{ color:"#ff1493",fontSize:"30px" }}/>
    </div>
    <div className="text-inter">
   <h3>Coding</h3>
    </div>
     </div>
     <div className="interest-icon-text">
    <div className="icon-interest">
    <IoGameControllerSharp style={{ color:"#008b8b",fontSize:"30px" }}/>
    </div>
    <div className="text-inter">
   <h3>Gaming</h3>
    </div>
     </div>
     <div className="interest-icon-text">
    <div className="icon-interest">
    <FaBookReader style={{ color:"orange",fontSize:"30px" }}/>
    </div>
    <div className="text-inter">
   <h3>Reading</h3>
    </div>
     </div>
     <div className="interest-icon-text">
    <div className="icon-interest">
    <SiYourtraveldottv style={{ color:"grey",fontSize:"30px" }}/>
    </div>
    <div className="text-inter">
   <h3>Travelling</h3>
    </div>
     </div>
     <div className="interest-icon-text">
    <div className="icon-interest">
    <BiFootball style={{ color:"red",fontSize:"30px" }}/>
    </div>
    <div className="text-inter">
   <h3>Football</h3>
    </div>
     </div>
     <div className="interest-icon-text">
    <div className="icon-interest">
    <FaSwimmer style={{ color:"blue",fontSize:"30px" }}/>
    </div>
    <div className="text-inter">
   <h3>Swimming</h3>
    </div>
     </div>
      </div>
    </div>
    <div className="container-techno">

    </div>

    </motion.div>
    
  )
}

export default About