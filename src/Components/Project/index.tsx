import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import './style.scss'
const Project = () => {
  const slideImages = [
    {
      url: '',
      caption: 'JobPortal',
      desc:'JobPortal allows you to book Quiz with employer , also add Video remuse module in that module you can send introductory video to employer that can help employer to shortlistcandidates some other module are add that are Free CV templates, International jobs.'
      
    },
    {
      url: '',
      caption: 'AFA Exchange',
      desc:'AFA Exchange is an investment company specialising in cryptocurrencies anddeveloping applications for financial markets. In short, they give advice on buying crypto.'
    },
    {
      url: '',
      caption: 'KwikTrust',
      desc:'Platform allows for easy, self-certified and third-party validation of files, with the resultsstored securely on a blockchain, creating an irrefutable record of activity. TheKwikTrust solution is faster, simpler, more secure and less expensive than competitors'
    },
  ];
  return (
    <div className='main-proj'>
        <div className='proj'>
         <h1>Project</h1>
        <div className=' container'>
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{  'backgroundImage': `url(${slideImage.url})` }} className='slide-sec' >
                <h3 className='grade' style={{color:"#4B535B"}}>{slideImage.caption}</h3>
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