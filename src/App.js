import React, { useState } from 'react'
import Img from './see.jpeg';
import './App.css';

const App = () => {
  const[img,setimg]=useState(Img);
  const[load,setload]=useState(false);
  const [qrdata,setqrdata]=useState("");
  const[size,setsize]=useState(150);

function Qr_gen(){
setload(true);
try{
const url=`https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrdata)}&size=${size}x${size}`;
setimg(url);
}
catch(error){
  console.log("Error Occured!!!");
}
finally{
  setload(false);
}
}

  return (
    <div>
      <h1>QR CODE GENERATOR </h1>
      {load &&  <p>Please Wait!!!</p> }
     
      <img src={img} alt='qr-box'className='Qr-Image'></img>  
      <label className='input-label'>Data For QR Code</label>
      <input type="text" id="datainput" placeholder='Enter data for QR Code' onChange={(e)=>setqrdata(e.target.value)}></input>
       
       <label className='input-label'>
        ImageSize(e.g.,150)
       </label>
       <input type="text" id="sizeinput" placeholder='Enter the Image Size' onChange={(e)=>setsize(e.target.value)}></input>
       <button className='Genbutton' onClick={Qr_gen}>Generate QR-CODE</button>

       <button className='download' onClick ={()=>{
        const link=document.createElement("a");
        link.href=img;
        link.download="code.png";
        link.click();
       }}> Download Qr code 

       </button>
    </div>
  )
}

export default App