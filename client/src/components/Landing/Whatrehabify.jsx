import React from 'react'
// import '../index.css';
import d from '../../assets/d.jpeg';

const Whatrehabify = () => {
	return (
		<div className="flex flex-col justify-center items-center mt-24 pt-24">
			<div className="w-10/12 bg-[#F39D62]  p-20 rounded whatisrehabify">
				<h1 className="text-white text-3xl font-bold">What is Rehabify?</h1>
				

				<div className='flex justify-between'>
				<div className="text-white font-regular mt-4 py-4 w-2/3">
					<h3>We are an organization dedicated to help students overcome substance abuse. We create specialized communities to help you beat addiction.</h3>
					&nbsp;&nbsp;

					<h3>Drug addiction can have serious mental and physical health implications. Reclaim control of your life by joining our student groups.</h3>
					&nbsp;&nbsp;
						
					<h3>We help you stay on track with out gamified progress tracker and enable you to empower others with your journey. Get started today.</h3>
				</div>


			<div className=''>
			<img src={d} alt="" className='h-60' />
			</div>



				</div>
			</div>




		</div>
	)
}

export default Whatrehabify
