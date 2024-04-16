import React from 'react';
import './style.scss'
interface EducationProps {
  institution?: string;
  degree?: string;
  field?: string;
  startDate?: string;
  grade?:string;
  endDate?: string;

  
}

const Card: React.FC<EducationProps> = ({ institution, degree, field, startDate, endDate ,grade}) => {
  return (
   
      <div className="card-big-shadow">
      <div className="card card-just-text" data-background="color" data-color="brown" data-radius="none">
          <div className="content">
              <h6 className="category">{degree}</h6>
              <p>{field}</p>
              <h5 className="title">{institution}</h5>
              <h5 className='grade'>{grade}</h5>
              <p className="description"><span>{startDate}</span><span>{endDate}</span></p>
          </div>
      </div> 
  </div>


  );
};
export default Card;