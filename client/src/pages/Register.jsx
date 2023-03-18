import { useState,useEffect } from 'react';
import  { Link, useNavigate } from 'react-router-dom';
import { registerRoute } from '../utils/apiRoutes';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

function Register() {
const navigate=useNavigate();

const [user,setUser]=useState();
const [values,setValues]=useState({
  username:"",
  email:"",
  password:"",
  confirmPassword:""
  })


  // useEffect(() => {
  //   const user=localStorage.getItem('userInfo');

  //   if(user){
  //     navigate('/');
  //   }
  // }, [])


const handleChange=(e)=>{
  setValues({...values, [e.target.name]:e.target.value});
  // console.log(values);
}

// console.log(values);

const toastCustomised={
  duration:2000,
  position:'top-center'
}

const handleSubmit= async (e)=>{
  e.preventDefault();
const { username,email,password}= values;

const { data }=await axios.post(registerRoute,{
  username,email,password
})

if(data.status===false){
  // console.log(data.message);
  toast.error(data.message,toastCustomised);
}

if(data.status===true){
  toast.success(`${username} registered successfully `)
  localStorage.setItem('userInfo',JSON.stringify(data));
      setTimeout(() => {
        navigate('/');
      }, 1000);
  console.log(data);
}
//  console.log(username);
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

     


     </div>

    <Toaster/>
    </div>
  )
}

export default Register