import React from "react";
interface Iprops{
    data:any
}
const DynamicTable:React.FC<Iprops>=({data})=>{

// get table column
 const column = Object.keys(data[0]);

 // get table heading data
 const ThData =()=>{
    
     return column.map((data)=>{
         return (<th key={data}>{data}</th>)
         
     })
     
 }

// get table row data
const tdData =() =>{
   
     return data.map((data:any)=>{
       return(
           <tr>
                {
                   column.map((v)=>{
                       return <td>{data[v]}</td>
                   })
                }
                <td>Download</td>
           </tr>
       )
     })
}


  return (
      <table className="table">
        <thead>
         <tr>
            {ThData()}
            <th>Download</th>
         </tr>
        </thead>
        <tbody>
        {tdData()}
        </tbody>
       </table>
  )
}
export default DynamicTable;