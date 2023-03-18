import React from 'react'

const Dastcomponent = ({questiontext}) => {
	return (
		<div class="bg-[#F8F3EC]">
			<h1 class="text-center mx-4 space-y-2 text-[#F39D62]">DAST TEST</h1>

			<div class="w-80 bg-[#F39D62] text-white flex flex-col justify-center items-center" >
				<h3>{questiontext}</h3>
				<button>Yes</button>
				<button>No</button>
			</div>

			<button>Next</button>
		</div>
	)
}

export default Dastcomponent
