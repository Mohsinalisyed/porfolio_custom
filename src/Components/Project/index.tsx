import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import './style.scss'
const Project = () => {
  const slideImages = [
    {
      url: './img/scrt.jpg',
      caption: 'https://friendly-dragon-bfd3f3.netlify.app/',
      desc:'Secret Versa'
      
    },
    {
      url: './img/tidal.jpg',
      caption: 'https://rad-haupia-212d0b.netlify.app/trade',
      desc:'Tidal'
    },
    {
      url: './img/kwiktrust.jpg',
      caption: 'https://incandescent-pony-0cdbf5.netlify.app/',
      desc:'KwikTrust'
    },
  ];
  return (
    <div className='main-proj'>
        <div className='proj'>
         <h2>Project</h2>
        <div className=' container'>
        <Slide>
         {slideImages.map((slideImage, index)=> (
           
            <div key={index}>
            <h5 className='text-center' >Goto :<a href={slideImage.caption} className='pl-3'>{slideImage.caption}</a></h5>
              <div >
        <img src={slideImage.url} alt=''className='slide-sec' />
              </div>
              <div className='proj-desc' >
                <h1>
                   {slideImage.desc}
                </h1>
              </div>
            </div>
        
          ))} 
        </Slide>
        </div>

        </div>
        </div>
  )
}

export default Project