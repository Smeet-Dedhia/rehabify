import React from 'react'

const Dastcomponent = ({question,id}) => {
	return (
		<div className='flex flex-col justify-center  items-center bg-[#F39D62] m-4 rounded-lg font-semibold text-2xl text-center text-white dastQuestionContainer '>
			<p>Q{id}. {question}</p>
			<p className='options flex justify-around w-60 mt-10'>
				<button className='bg-white py-1 px-6 rounded text-[#F39D62]'>Yes</button>
				<button className='bg-white py-1 px-6 rounded text-[#F39D62]'>No</button>
			</p>
		</div>
	)
}

export default Dastcomponent
