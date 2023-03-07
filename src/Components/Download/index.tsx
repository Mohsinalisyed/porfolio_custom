import React from 'react'
import {TableData, TableExp} from '../ReuseComp/data';
import './style.scss'
import "react-activity/dist/library.css";
import DynamicTable from '../ReuseComp/Table';
const Download = () => {
  return (
    <div className='main-download'>
        <div className='download'>
        <h1>Download</h1>
        
                <DynamicTable data={TableData}/>
                <DynamicTable data={TableExp}/>
            </div>
            </div>
  )
}

export default Download