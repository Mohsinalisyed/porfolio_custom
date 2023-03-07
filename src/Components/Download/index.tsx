import React from 'react'
import './style.scss'
import { Dots } from "react-activity";
import "react-activity/dist/library.css";
const Download = () => {
  return (
    <div className='main-download'>
        <div className='download'>
        <h1>Download</h1>
        <div className='loadersp'>
                 <Dots size={50} />
                 </div>
            </div>
            </div>
  )
}

export default Download