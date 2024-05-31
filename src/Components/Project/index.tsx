import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import './style.scss'
const Project = () => {
  const slideImages = [
    {
      url: 'https://d3q5ph1a1lg1pd.cloudfront.net/1710925782277-8d2c5fc3-86c5-48ce-ad3d-d2439a562d0c.png',
      caption: 'https://thetote.io/',
      desc:'TOTE'
      
    },
    {
      url: 'https://d3q5ph1a1lg1pd.cloudfront.net/1710926275464-352058bb-5214-4044-8cf6-f91ef1adfab0.png',
      caption: 'https://www.gamesfi.live/',
      desc:'Gamesfi'
    },
    {
      url: 'https://d3q5ph1a1lg1pd.cloudfront.net/1710927711050-9d28665f-59ce-4fb6-990d-82164340f614.png',
      caption: 'https://kwiktrust.com/',
      desc:'KwikSign'
    },
    {
      url: 'https://d3q5ph1a1lg1pd.cloudfront.net/1710927253000-de2a9fc6-e8e4-4ff1-beac-8c7c3c9a73ce.png',
      caption: 'https://www.metastadium.io/',
      desc: 'U-Meta'
    }, 
   
    {
      url: 'https://d3q5ph1a1lg1pd.cloudfront.net/1710927935409-9075699a-46c5-432f-ad6e-c0f7cfdadece.png',
      caption: 'https://www.pixelpaddle.com/',
      desc: 'Pixel Paddle'
    },
    {
      url: 'https://d3q5ph1a1lg1pd.cloudfront.net/1713354708406-b42ba0fd-6114-4384-90d9-754c71921c01.png',
      caption: 'https://e-buy-online.netlify.app/',
      desc: 'Ecommerce (in progress)'
    },
    {
      url: 'https://d3q5ph1a1lg1pd.cloudfront.net/1713354879897-9a31e00a-d24a-499d-9dc7-551d58b13d51.png',
      caption: 'https://mohsinalisyed-portfolio.netlify.app/',
      desc: 'Portfolio'
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
             <h5 className='text-center' >Visit :<a href={slideImage.caption} className='pl-3' target="_blank" rel="noreferrer">{slideImage.caption}</a></h5>
              <div >
               <img src={slideImage.url} alt=''className='slide-sec' />
              </div>
              <div className='proj-desc' >
                <h1 style={{fontSize:"32px"}}>
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