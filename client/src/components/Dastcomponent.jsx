import React from 'react'

const Dastcomponent = ({questiontext}) => {
	return (
		<div class="bg-[#F8F3EC]">
			<h1 class="text-center mx-4 space-y-2 text-[#F39D62]">DAST TEST</h1>

			<div class="bg-[#F39D62] text-white w-80" >
				<h3>{questiontext}</h3>
				<div class="flex flex-row">
					<button class="bg-white text-black">Yes</button>
					<button class="bg-white text-black">No</button>
				</div>
				
			</div>

			<button>Next</button>
		</div>
	)
}

export default Dastcomponent
