import React, { lazy, Suspense } from 'react';
import { Spinner } from 'react-activity';
import './style.scss';

const CompWrap = lazy(() => import('../ComponentWrap.tsx'));
const Home = lazy(() => import('../Home'));

const HeroSec = () => {
  return (
    <div className='main-hero'>
      <div className='hero'>
        <div className='hero-sidebar'>
        <Suspense fallback={<div ><Spinner size={30} color='black'/></div>}>
          <div className='profile-img'>
            <img src='img/myimg.jpg' className='img-fluid img-set' alt=''/>
          </div>
          </Suspense>
          <Suspense fallback={<div className='loader'><Spinner size={30} color='black'/></div>}>
            <Home/>
          </Suspense>
        </div>
        <div className='detail-sec'>
          <Suspense fallback={<div className='loader'><Spinner size={50} color='black'/></div>}>
            <CompWrap/>
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default HeroSec;