import React from 'react'
import { useForm } from "react-hook-form";
// import {TableData, TableExp} from '../ReuseComp/data';
import './style.scss'
import "react-activity/dist/library.css";

const Download = () => {
 
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data:any) => {
  
  };

  console.log(watch("example")); // watch input value by passing the name of it

  
    


  
  return (
    <div className='main-download'>
        <div className='download'>
        <h1>Download</h1>
          
        <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="test" {...register("example")} />
      
      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("exampleRequired", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" />
    </form>
            </div>
            </div>
  )
}

export default Download