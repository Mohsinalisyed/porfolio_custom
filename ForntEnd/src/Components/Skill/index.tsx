import React from 'react'
import './style.scss'
import {useInView} from  'react-intersection-observer'

const Skill = () => {
  const {ref,inView}=useInView({
    threshold:0
  })
  return (
    <div className='main-skill'>
      <div className='skill'>
            <h1>Skill</h1>
            <div className="grid-container">
              <div className='item'>
              <label>Html 5</label>
               <div className="progress" >
                <div className="progress-bar  bg-secondary"
                 id={inView?'html':''} role="progressbar"
                 ref={ref}
                  style={{width:"80%"}}>
                   80%
                </div>
              </div>
               </div>
               <div className='item'>
               <label>CSS3</label>
                 <div className="progress" >
                <div className="progress-bar ' bg-primary" 
                id={inView?'css':''} role="progressbar"
                ref={ref}
                 style={{width:"75%"}}>
                   75%
                </div>
              </div>
              </div>
               <div className='item'>
               <label>JavaScript</label>
               <div className="progress" >
                <div className="progress-bar  bg-warning" 
                id ={inView?'js':''} 
                role="progressbar" 
                ref={ref}
                style={{width:"70%"}}>
                   70%
                </div>
              </div>
               </div>
               <div className='item'>
               <label>Bootstrap</label>
               <div className="progress" >
                <div className="progress-bar  bg-success" 
                id={inView?'bs':''} role="progressbar" 
                ref={ref}
                style={{width:"80%"}}>
                   80%
                </div>
              </div>
               </div>
               <div className='item'>
               <label>TypeScript</label>
               <div className="progress" >
                <div className="progress-bar  bg-danger"
                 id={inView?'ts':''}
                 ref={ref}
                 role="progressbar" style={{width:"65%"}}>
                   65%
                </div>
              </div>
               </div>
              
           </div>
        
       </div>
    </div>
  )
}

export default Skill