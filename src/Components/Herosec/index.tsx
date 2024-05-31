import React, { lazy, Suspense } from 'react';
import { Spinner } from 'react-activity';
import './style.scss';

const CompWrap = lazy(() => import('../ComponentWrap.tsx'));
const HeroSec = () => {
  return (
    <div className='main-hero'>
      <div className='hero'>
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