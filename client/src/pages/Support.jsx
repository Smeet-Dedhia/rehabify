import Navbar from "../components/Navbar"


function VideoCall() {
const supportDetails=[
    {
        id:1,
        name:"ABC Hospitals",
        email:'abc@gmail.com',
        phone:1234567890
    },
    {
        id:2,
        name:"Professional Help",
        email:'helo@rehabify.com',
        phone:12555567890
    },

]
  return (
    <div>
        <Navbar/>
        
    <div className='flex flex-col justify-center items-center mt-5 py-5'>
        <p className='text-3xl font-bold text-[#F39D62]'>Resources</p>

        <div className='mt-4 py-4'>
        <p className='text-lg font-semibold text-black' >Contact Details</p>

        <div className='flex justify-center text-center'>
        {supportDetails.map((item) => <div className='flex flex-col  jsutify-between bg-[#F39D62] text-lg font-semibold text-[#F8F3EC] w-80 h-40 p-8 m-2'>
        <p>{item.name}</p>
        <div>
        <p>{item.email}</p>
        <p>{item.phone}</p>
        </div>
        </div>)}
        </div>

        </div>

    </div>
  

    </div>
  )
}

export default VideoCall