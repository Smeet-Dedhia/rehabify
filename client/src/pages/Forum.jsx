import Navbar from "../components/Navbar"
import { useState } from "react";
import {IoSend} from 'react-icons/io5';
import { SyncRedactor } from 'redact-pii';

function Forum() {
  const [text, setText] = useState('');
  const redactor = new SyncRedactor();
  const [redactedText,setRedactedState]=useState();
  const [conv,setConv]=useState([]);

  const handleSubmit=async(e)=>{
    // const res=await fetch(`{http://127.0.0.1:8000/redact/${text}}`
    // ,{
    //   method:'gets',
    //   mode:'cors',
    //   headers:{
    //     'Content-Type':'application/json',
    //   },
    //   body:JSON.stringify(text),
    // }
    setRedactedState(redactor.redact(text));
    // setRedactedState(changed);
    // setConv.push(changed);
    
    
  }

    console.log(redactedText);
  

  return (
    <div>
    <Navbar/>
   

   
  <div className='flex flex-col justify-center items-center mt-10'>
  <div className="flex flex-col  bg-white rounded-lg forumContainer p-4">
   <textarea cols="80" rows="8"  placeholder="Enter message here" value={text}
              onChange={(e) => setText(e.target.value)} className='forumInput outline-none ' />
     <button onClick={handleSubmit} className='flex justify-end'>
      <p className="bg-[#F39D62] p-3 rounded hover:scale-90 transition-transform duration-200 ease-out"> <IoSend className='text-white text-lg'/></p>
     
     </button>
   </div>
  </div>




 {redactedText?<div className='p-14 m-12'>
 <div className='flex justify-center items-center bg-[#F39D62] text-md rounded-lg text-white p-4 h-40 w-96'>
   {redactedText}
  </div>
 </div>: ""}
    
    </div>
  )
}

export default Forum


