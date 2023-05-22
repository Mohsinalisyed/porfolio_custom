import React from 'react'
import './style.scss'
const InputFeild = (props:any) => {
    const { handleChange, label, name, type, value } = props;
  return (
    <div className="feild-sec">
      <label className="" htmlFor={name}>{label}</label>
      <br></br>
      <input className="input-feild" type={type} onChange={handleChange} value={value} name={name} required />
    </div>
  )
}

export default InputFeild