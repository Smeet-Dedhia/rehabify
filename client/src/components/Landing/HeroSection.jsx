import { Link } from "react-router-dom"
'../in'

function HeroSection() {
	return (
		<div className='flex justify-around items-center mt-12 py-12'>

			<div className='h-96 w-96 justify-around'>
				{/* quote  */}
				<p className='mb-4 text-6xl font-semibold max-w-lg'>Support, empower, overcome</p>

				{/* one-liner  */}
				<p className='max-w-sm mb-8'>Join our student-led groups dedicated to beat addiction, one day at a time</p>

				{/* get-started button */}
				<Link to='/biodata' className=' bg-[#F39D62] text-white py-3 px-6 font-semibold rounded-lg'>
					Get Started
				</Link>
			</div>


			{/* Image  */}
			<div className='h-64'>
				<iframe
					width="500"
					height="250	"
					src={`https://www.youtube.com/embed/2E6vZt_DC5I`}
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
					title="Embedded youtube"
				/>
			</div>


		</div>
	)
}

export default HeroSection