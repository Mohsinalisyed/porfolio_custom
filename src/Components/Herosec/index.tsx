import React from 'react'
import './style.scss'
import CompWrap from '../ComponentWrap.tsx';
import Home from '../Home';
const HeroSec = () => {
  return (
    <>
    <div className='main-hero'>
        <div className='hero'>
            <div className='hero-sidebar'>
              <div className='profile-img'>
                 {/* <img src='img/myimg.jpg' className='img-fluid img-set' alt=''/> */}
             </div>
              <Home/>
            </div>
            <div className='detail-sec'>
            <CompWrap/>

            </div>
        </div>
    </div>
   
    </>
  )
}

export default HeroSec