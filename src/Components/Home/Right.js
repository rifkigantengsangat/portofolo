import React from 'react'
import{motion} from "framer-motion"
import "./Right.css"
import { Link } from 'react-router-dom'
import { useTypewriter } from 'react-simple-typewriter'
const Right = () => {
  const {text} = useTypewriter({
    words: ['Front End Developer', 'Designer'],
    loop: false,
    cursorStyle	: "_",
    typeSpeed : 150,
    delaySpeed: 2000,
    deleteSpeed : 100,
  
  })
  
  return (
    <div className="right">
        <motion.div className="container-right">
            <motion.h3 className="sapa"
            initial={{opacity:0,x:40,y:-50}}
            animate={{ opacity :1, x:0,y:0  }}
            transition ={{ delay:1 ,duration:2}}
            >Hello I'm</motion.h3>
            <motion.h1 className="nama" data-text="RADEN MUHAMAD RIFKI"
               initial={{opacity:0,x:100,y:-100}}
               animate={{ opacity :1, x:0,y:0  }}
               transition ={{ delay:1 ,duration:2}}
            >Raden Muhamad Rifki</motion.h1>
            <motion.h2 className='soft'
               initial={{opacity:0,x:10,y:50}}
               animate={{ opacity :1, x:0,y:0  }}
               transition ={{ delay:1 ,duration:2}}
            >A {' '}<span style={{ color:"red"}}>
               
              {text}
              </span> based in Bogor.</motion.h2>
            <motion.div  className='project'
            initial={{opacity:0,y:50}}
            animate={{ opacity :1, x:0,y:0  }}
            transition ={{ delay:2 ,duration:2}}
            >
              <div className="work">
                <Link to='/Work' className="see">See My Work</Link>
              </div>
               <div>
                <Link to='/Contact' className="see">Contact Me</Link>
              </div>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Right