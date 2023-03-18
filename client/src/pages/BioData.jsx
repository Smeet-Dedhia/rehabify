import { Link } from 'react-router-dom';
import '../index.css'

function BioData() {
  return (
    <div className='flex flex-col py-10 items-center bg-[#F39D62] text-white h-full'>
      <p className='text-4xl font-semibold text-white'>Welcome Prajna!</p>

      {/* questions  */}
      <div className='flex flex-col items-center'>

       <div className='mt-4 py-4'>
       <div className='flex flex-col py-2'>
          <p className='font-medium text-lg mb-2'>What's your fullname?</p>
          <input type="text" placeholder="Prajna Prabhu" className='rounded-lg py-1.5 px-6 outline-none text-gray-500 inputField'/>
       </div>

       <div className='flex flex-col py-2'>
          <p className='font-medium text-lg mb-2'>What's your age?</p>
          <input type="text" placeholder="20" className='rounded-lg py-1.5 px-6 outline-none text-gray-500  inputField'/>
       </div>

       <div className='flex flex-col py-2'>
          <p className='font-medium text-lg mb-2'>What's your Blood group?</p>
          <input type="text" placeholder="B+" className='rounded-lg py-1.5 px-6 outline-none text-gray-500 inputField'/>
       </div>

       <div className='flex flex-col py-2'>
          <p className='font-medium text-lg mb-2'>What's your Height & Weight?</p>
         <div className='flex justify-between heightWeight'>
         <input type="text" placeholder="in cm" className='rounded-lg w-1/3 py-1.5 px-6 outline-none text-gray-500 inputFieldHalf'/>
          <input type="text" placeholder="in kg" className='rounded-lg w-1/3 py-1.5 px-6 outline-none text-gray-500 inputFieldHalf'/>
         </div>
       </div>

       <div className='flex flex-col py-2'>
          <p className='font-medium text-lg mb-2'>What's your College?</p>
          <input type="text" placeholder="IIT Delhi" className='rounded-lg py-1.5 px-6 outline-none text-gray-500 inputField'/>
       </div>

       <div className='flex flex-col py-2'>
          <p className='font-medium text-lg mb-2'>What's your City?</p>
          <input type="text" placeholder="Delhi" className='rounded-lg py-1.5 px-6 outline-none text-gray-500 inputField'/>
       </div>       

       </div>

       <Link to='/dast' className='bg-white text-[#F39D62] text-md font-bold py-1 px-4 rounded'>
        Submit
      </Link>
      


      </div>
    </div>
  )
}

export default BioData