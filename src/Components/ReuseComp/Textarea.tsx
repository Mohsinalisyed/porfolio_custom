import React from 'react'


    const TextareaField = (props:any) => {
        const { handleChange, label, name, value } = props;
  return (
    <>
             <div className="feild-sec">
            <label className="text-gray-500 text-sm" htmlFor={name}>{label}</label>
            <br></br>
            <textarea onChange={handleChange} name={name}  className="text-feild" value={value}></textarea>
          </div>
        
      </>
  )
}

export default TextareaField