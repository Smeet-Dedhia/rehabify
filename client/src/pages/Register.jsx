import { useState,useEffect } from 'react';
import  { Link, useNavigate } from 'react-router-dom';

function Register() {
const navigate=useNavigate();


const handleChange=(e)=>{
//event handling 
}




const handleSubmit= async (e)=>{
 
}



const handleValidation=(e)=>{
}


  return (
    <div className='h-screen flex justify-center items-center bg-[#F39D62] text-white'>
     
     <div className='formContainer flex flex-col justify-evenly bg-[#F2F3F2] rounded-2xl'>
      
      {/* register content  */}
      <div className='flex flex-col items-center'>
      <p className='text-2xl font-semibold text-[#F39D62]'>User Register</p>
      <div className='flex flex-col items-center text-xs font-light text-zinc-400 mt-2'>
        <p>Welcome, Enter your details to sign in</p>
        <p>to your account</p>
      </div>
      </div>


      {/* form section  */}
      <form onSubmit={(e)=>handleSubmit(e)} className='flex flex-col justify-around items-center h-72'>
      <div>
      <input type="text" placeholder='Username' name='username' onChange={(e)=> handleChange(e)} className='pr-28 pl-6 py-2 rounded-md text-md font-light bg-[#E7E7E7] outline-none' />
      </div>
       
      <div>
      <input type='email' placeholder='Enter Email' name='email' onChange={(e)=> handleChange(e)} className='pr-28 pl-6 py-2 rounded-md text-md font-light bg-[#E7E7E7] outline-none' />
      </div>

      <div>
      <input type="text" placeholder='Enter Pasword' name='password' onChange={(e)=> handleChange(e)} className='pr-28 pl-6 py-2 rounded-md text-md font-light bg-[#E7E7E7] outline-none' />
      </div>
      
      <div>
      <input type="text" placeholder='Confirm Password' name='confirmPassword' onChange={(e)=> handleChange(e)} className='pr-28 pl-6 py-2 rounded-md text-md font-light bg-[#E7E7E7] outline-none' />
      </div>

      <button onClick={handleSubmit} className='register bg-[#F39D62] text-white py-1.5 rounded-md font-semibold mt-2'>Register</button>
    
      </form>

      <p className='text-sm font-normal text-[#3F3F3F] flex justify-center'>Have an account? 
        <Link to='/login' className='font-semibold text-[#F39D62]'>&nbsp; Login </Link>
      </p>

      {/* <Avatar name={values.username} rounded={true} size="50" className="rounded-3xl" /> */}


     </div>

    </div>
  )
}

export default Register