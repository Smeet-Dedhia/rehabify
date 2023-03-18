import Navbar from "../components/Navbar"
import { useState } from "react";

function Forum() {
  const [text, setText] = useState('');

  const handleSubmit=async(e)=>{
    const res=await fetch(`{http://127.0.0.1:8000/redact/${text}}`
    ,{
      method:'gets',
      mode:'cors',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify(text),
    }
    )

    console.log(res);
  }
  return (
    <div>
    <Navbar/>
    Forum  

    <input type="text" placeholder="Text here" value={text}
              onChange={(e) => setText(e.target.value)} />

    <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Forum