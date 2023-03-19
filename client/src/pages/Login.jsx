import { useState,useEffect } from 'react';
import  { Link, useNavigate } from 'react-router-dom';
import { loginRoute } from '../utils/apiRoutes';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';

function Login() {
  const navigate=useNavigate();

  const [values,setValues]=useState({
  username:"",
  password:""
  });
  
  // to redirect to chat page if user already logged in and in local storage
  // useEffect(()=>{
  // if(localStorage.getItem('user')){
  //     navigate('/');
  // }
  // },[])
  
  const handleChange=(e)=>{
  setValues({...values, [e.target.name]:e.target.value});
  // console.log(values);
  }

  const toastCustomised={
    duration:2000,
    position:'top-center'
  }
  
  
  // const handleSubmit= async (e)=>{
  //   e.preventDefault();
    
  //     const { username,password}= values;
  //     const { data } =await axios.post(loginRoute,{
  //       username,
  //       password
  //     });
  
  //     if(data.status=== false){
  //       toast.error(data.message, toastCustomised);
  //     }
      
  //     if(data.status===true){
  //       toast.success(`welcome back ${username} `)
  //       localStorage.setItem('user',JSON.stringify(data.user));
  //       setTimeout(() => {
  //         navigate('/');
  //       }, 1000);
        
  //     }
  // }

const handleSubmit= async (e)=>{
    e.preventDefault();
  const { username,password}= values;
  
  const { data }=await axios.post(loginRoute,{
    username,password
  })

      if(data.status=== false){
        toast.error(data.message,toastCustomised);
      }

  
  if(data.status===true){
    localStorage.setItem('userInfo',JSON.stringify(data));
    navigate('/');
      
    // console.log(data);
  }
  //  console.log(username);
  }

  return (
    <div className='h-screen flex justify-center items-center bg-[#F39D62] text-white'>
     
    <div className='formContainerLogin flex flex-col justify-evenly bg-[#F2F3F2] rounded-2xl'>
     
     {/* register content  */}
     <div className='flex flex-col items-center'>
     <p className='text-2xl font-semibold text-[#F39D62]'>User Login</p>
     <div className='flex flex-col items-center text-xs font-light text-[#6F6F6F] mt-2'>
       <p>Welcome back, Enter your details to login</p>
       <p>to your account</p>
     </div>
     </div>


     {/* form section  */}
     <form onSubmit={(e)=>handleSubmit(e)} className='flex flex-col justify-around items-center h-52'>
     <div>
     <input type="text" placeholder='Username' name='username' onChange={(e)=> handleChange(e)} className='pr-28 pl-6 py-2 rounded-md text-md font-light bg-[#E7E7E7] text-zinc-700 outline-none' />
     </div>
      
     <div>
     <input type="text" placeholder='Enter Pasword' name='password' onChange={(e)=> handleChange(e)} className='pr-28 pl-6 py-2 rounded-md text-md font-light bg-[#E7E7E7] text-zinc-700 outline-none' />
     </div>

     <button onClick={handleSubmit}  className='register bg-[#F39D62] text-white py-1.5 px-4 rounded-md font-semibold mt-2'>Login</button>
   
     </form>

     <p className='text-sm font-normal flex justify-center text-[#3F3F3F]'>Don't have an account? 
       <Link to='/register' className='font-semibold text-[#F39D62]'>&nbsp; Register </Link>
     </p>


    </div>

    <Toaster/>
   </div>
  )
}

export default Login