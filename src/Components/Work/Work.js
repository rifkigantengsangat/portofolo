import React from 'react'
import "./Work.css"
import {motion} from 'framer-motion'
import {data} from './WorkData'

const Work = () => {
  return (
    <motion.div className='container-about'
    initial={{width:0,opacity: 0 }}
    animate={{width:"90%",opacity:1}}
    exit ={{x : -window.innerWidth  ,transition : {duration : 0.5}}}
    >
    <div className="mywork">
      <h1 className='text-work'>My Work</h1>
    </div>
    <div className="work-container">
     {data.map((e)=>{
        return(
          <div className='card'>
          <div className="work-item" key={e.id}>
            <img src={e.gambar} alt={e.nama}/>
            <div className="work-item-text">
            <h1>{e.nama}</h1>
            <a href={e.link} target="_blank" className='link-google'>See Project</a>
              </div>

          </div>  
          </div>
        )
     })}

      </div>
      </motion.div>
  )
}

export default Work