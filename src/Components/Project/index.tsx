import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import './style.scss'
const Project = () => {
  const slideImages = [
    {
      url: './img/scrt.jpg',
      caption: 'https://friendly-dragon-bfd3f3.netlify.app/',
      desc:'JobPortal allows you to book Quiz with employer , also add Video remuse module in that module you can send introductory video to employer that can help employer to shortlistcandidates some other module are add that are Free CV templates, International jobs.'
      
    },
    {
      url: './img/tidal.jpg',
      caption: 'https://rad-haupia-212d0b.netlify.app/trade',
      desc:'AFA Exchange is an investment company specialising in cryptocurrencies anddeveloping applications for financial markets. In short, they give advice on buying crypto.'
    },
    {
      url: './img/kwiktrust.jpg',
      caption: 'https://incandescent-pony-0cdbf5.netlify.app/',
      desc:'Platform allows for easy, self-certified and third-party validation of files, with the resultsstored securely on a blockchain, creating an irrefutable record of activity. TheKwikTrust solution is faster, simpler, more secure and less expensive than competitors'
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
                <p>
                   {slideImage.desc}
                </p>
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