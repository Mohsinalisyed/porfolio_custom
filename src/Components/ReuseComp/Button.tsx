import React from 'react'
interface Props{
  onClick?:()=>void,
  strTitle?:string
}
const Button:React.FC<Props> = ({strTitle,onClick}) => {
  
  return (
       <div className='from-btn'>
       <button type="submit" className='btn-comp' onClick={onClick}>
            {strTitle}
      
        </button> 
        
          
    </div>
  )
}

export default Button