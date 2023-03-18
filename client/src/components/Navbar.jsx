import { Link } from "react-router-dom";
import {RiDashboardLine,RiChat1Line} from 'react-icons/ri';
import Avatar from 'react-avatar';
import { useState,useEffect } from "react";


function Navbar() {
const [user,setUser]=useState(undefined);

useEffect( ()=>{
    (async () => {
      if(!localStorage.getItem("user")){
        navigate('/login');
        }else{
          setUser(await JSON.parse(localStorage.getItem('user')));
        }
    })();
  },[]);
  
// console.log(user.username);

  return (
    <div className='flex justify-around h-20 items-center'>

        {/* logo  */}
        <Link to='/' className='flex font-semibold text-2xl'>
        <p>Rehab</p><p className='text-[#F39D62]'>ify</p>
        </Link>

        {/* nav-links  */}
        <div className='flex justify-around  w-80 font-semibold'>
            <Link to='/dashboard' className='flex items-center hover:underline decoration-orange-400 text-center decoration-2 active:underline underline-offset-8 rounded-full cursor-pointer hover:font-bold capitalize hover:scale-110 transition-transform duration-200 ease-out'>
                <RiDashboardLine className='text-lg' />
                <p className='ml-2'>Dashboard</p>
               
            </Link>

            <Link to='/forum' className='flex items-center hover:underline decoration-orange-400 text-center decoration-2 active:underline underline-offset-8 rounded-full cursor-pointer hover:font-bold capitalize hover:scale-110 transition-transform duration-200 ease-out'>
                <RiChat1Line className='text-lg'/>
                <p className='ml-2'>Forum</p>
            </Link>
        </div>

        {/* profile or login  */}
        {/* {localStorage.getItem('user')?  */}
          {/* <Avatar name={user.username} rounded={true} size="50" className="rounded-3xl" />: */}
        <Link to='/login' className='bg-[#F39D62] px-4 py-1 text-white rounded font-semibold hover:scale-110 transition-transform duration-200 ease-out'>
            Login
        </Link>
        {/* } */}

    </div>
  )
}

export default Navbar