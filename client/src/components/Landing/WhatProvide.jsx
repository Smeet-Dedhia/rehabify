import Whatprovidesub from "./Whatprovidesub"
let featuresarray = ["Personalized communities",
"Gamified progress tracking",
"Professional support",
"Counselling resources"]
function WhatProvide() {
  return (
    <div>
			<h1 className="text-3xl font-bold">What do we provide?</h1>
			&nbsp;&nbsp;&nbsp;

			<div className="flex flex-rows space-x-5">
			
					{featuresarray.map((text) => <Whatprovidesub text={text} />)}
			
			</div>
		</div>
  )
}

export default WhatProvide