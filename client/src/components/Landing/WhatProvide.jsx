import Whatprovidesub from "./Whatprovidesub";
import {FaUserFriends} from 'react-icons/fa';
import {RiGamepadFill} from 'react-icons/ri';
import {BiSupport} from 'react-icons/bi';
import {GrResources} from 'react-icons/gr';

const  featuresarray = [
	{
		id:1,
		text:"Personalized Communities",
		logo:<FaUserFriends/>,
		path:'/forum'
	},
	{
		id:2,
		text:"Gamified Progress Tracking",
		logo:<RiGamepadFill/>,
		path:'/dashboard'
	},
	{
		id:3,
		text:"Professional Support",
		logo:<BiSupport/>,
		path:'/support'
	},
	{
		id:4,
		text:"Counselling Resources",
		logo:<GrResources/>,
		path:'/dashboard'
	}

]

function WhatProvide() {
  return (
    <div className='mt-20 py-20'>
		

			<h1 className="text-3xl font-bold ml-14 pl-16">What do we provide?</h1>
		
			
		<div className="flex space-x-12 justify-center mt-10 p-10  ">
		
				{featuresarray.map((item) => <Whatprovidesub text={item.text} logo={item.logo} path={item.path} />)}
		
		</div>
		
		</div>
  )
}

export default WhatProvide