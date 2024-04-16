import React from 'react'
import { Spinner } from 'react-activity'
interface Props{
  onClick?:()=>void,
  strTitle?:string,
  loading?:boolean,
}
const Button:React.FC<Props> = ({strTitle,onClick,loading}) => {
  
  return (
       <div className='from-btn'>
       <button type="submit" className='btn-comp' onClick={onClick}>
            {!loading ?strTitle :<Spinner size={20}/>}
        </button> 
        
          
    </div>
  )
}

export default Button