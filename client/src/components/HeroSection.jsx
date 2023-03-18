import { Link } from "react-router-dom"
'../in'

function HeroSection() {
  return (
    <div className='flex justify-evenly items-center mt-10 py-10'>
        
        <div className='h-60 justify-around'>
            {/* quote  */}
            <p className='mb-4 text-6xl font-semibold max-w-lg'>Support, empower, overcome</p>

            {/* one-liner  */}
            <p className='max-w-sm mb-8'>Join our student-led groups dedicated to beat addiction, one day at a time</p>

            {/* get-started button */}
            <Link to='/biodata' className=' bg-[#F39D62] text-white py-2 px-5 font-semibold rounded-lg'>
                Get Started
            </Link>
        </div>
 

        {/* Image  */}
        <div className="h-80 w-60 bg-[#F39D62] rounded">

    
        </div>

    </div>
  )
}

export default HeroSection