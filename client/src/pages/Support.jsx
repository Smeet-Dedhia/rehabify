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

const freeAvail=[
    {
        id:1,
        day:"Monday",
        freeSlots:["8:00 AM","10:00 AM","2:00 PM","4:00 PM","6:00 PM", "7:00 PM"],
        date:"20 Mar"
    },
    {
        id:2,
        day:"Tuesday",
        freeSlots:["8:00 AM","10:00 AM","2:00 PM","4:00 PM"],
        date:"21 Mar"
    },
    {
        id:3,
        day:"Wenesday",
        freeSlots:["8:00 AM","10:00 AM","2:00 PM",],
        date:"22 Mar"
    },
    {
        id:4,
        day:"Thursday",
        freeSlots:["10:00 AM","2:00 PM","4:00 PM"],
        date:"22 Mar"
    },
    {
        id:5,
        day:"Friday",
        freeSlots:["8:00 AM","10:00 AM","2:00 PM","4:00 PM"],
        date:"22 Mar"
    },
    {
        id:6,
        day:"Saturday",
        freeSlots:["8:00 AM","10:00 AM","2:00 PM","4:00 PM"],
        date:"22 Mar"
    }
]

const handleSubmit=()=>{

}
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


    {/* book a call  */}
  <div className='flex flex-col justify-center items-center pb-10'>
    <div className='bg-white rounded-lg drop-shadow-md bookACall'>

    <div className='flex justify-around' >
    {freeAvail.map((slot) => (
        <div className="flex flex-col p-6 m-4">
            <div className='flex flex-col justify-center items-center'>
                <p className='text-xl font-bold text-[#F39D62]'>{slot.day}</p>
                <p className='text-md font-medium text-zinc-400'>{slot.date}</p>
            </div>

            {/* slots  */}
            {/* <button> */}
            <div className='flex flex-col justify-evenly  mt-4 py-4 schedule h-auto'>
                {slot.freeSlots.map((time)=>(
                <button onClick={handleSubmit} className='bg-[#F9ECDA] m-1 my-4  px-4 py-2 text-sm rounded-md text-[#F39D62] font-semibold hover:scale-110 transition-transform duration-200 ease-out hover:font-bold'>
                    {time}
                </button>
                ))}
            </div>
        </div>
      ))}
    </div>


    </div>
  </div>

    </div>
  )
}

export default VideoCall