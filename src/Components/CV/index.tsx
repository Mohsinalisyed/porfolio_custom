import React from 'react'
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import './style.scss'
import Button from '../ReuseComp/Button';
const CV = () => {
    const downloadPdf = () => {
        const input= document.getElementById('myImage') as HTMLElement; // replace with your image id
        html2canvas(input)
          .then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            pdf.addImage(imgData, 'PNG', 0, 0, 210, 297); // adjust size as needed
            pdf.save('myPdf.pdf');
          });
      };
  return (
    <div className='main-CV'>
        <div className='CV'>
            <h1> CV</h1>
            <div className='Cv-img'>
            <img id="myImage" src="/img/Cv.png"  className='img-fluid' alt="" style={{width:"100%", height:"auto"}}/>
           
            </div>
            <div className='pt-5'>
            <Button onClick={downloadPdf} strTitle='Download as PDF'></Button>
            </div>
        </div>
       </div>
  )
}

export default CV