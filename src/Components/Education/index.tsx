import React from 'react'
import Card from '../Card'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import './style.scss'
const Education = () => {
  return (
    <div className='main-edu'>
        <div className='edu'>
            <h1>Education</h1>
            <div className="container bootstrap snippets bootdeys">
    <div className="row">
        <div className="col-md-4 col-sm-12 content-card">
        
        <AnimationOnScroll animateIn="animate__bounceIn">
        <Card
        institution='University Of Lahore Islamabad Campus'
        field='BSCS'
        degree={`BS Computer Science`}
        grade='Grade A'
        startDate='Sep-2018'
        endDate='July-2022'

        />
       </AnimationOnScroll>
        </div> 
        <div className="col-md-4 col-sm-12 content-card">
        <AnimationOnScroll animateIn="animate__bounceIn">
  
             <Card
        field='ICS'
        institution='Punjab Group Of College Rawalpindi'
        degree='Intermediate'
        startDate='July-2016'
        endDate='Aug-2018'
        grade='Grade B'
        />
       </AnimationOnScroll>
        </div> 
        <div className="col-md-4 col-sm-12 content-card">
        <AnimationOnScroll animateIn="animate__bounceIn">
        <Card 
        field='CS'
        institution='Islamabad Modal College Boys Humak'
        degree='Matriculation'
        startDate='April-2014'
        endDate='June-2016'
        grade='Grade B'
        />
       </AnimationOnScroll>
        </div> 
    </div>
    </div>
            
           
            
            
        </div>
    </div>
  )
}

export default Education