import Dastcomponent from "../components/Dastcomponent";
import { Link } from "react-router-dom";

const dastQuestions=[
	{
		id:1,
		question:"Have you used drugs other than those required for medical reasons?",
		optionYes:true,
		optionNo:false
	},
	{
		id:2,
		question:"Do you abuse more than one drug at a time?",
		optionYes:true,
		optionNo:false
	},
	{
		id:3,
		question:"Are you always able to stop using drugs when you want to?",
		optionYes:true,
		optionNo:false
	},
	{
		id:4,
		question:"Have you had \"blackouts\" or \"flashbacks\" as a result of drug use?",
		optionYes:true,
		optionNo:false
	},
	{
		id:5,
		question:"Do you ever feel bad or guilty about your drug use?",
		optionYes:true,
		optionNo:false
	},
	{
		id:6,
		question:"Does your spouse (or parents) ever complain about your involvement with drugs?",
		optionYes:true,
		optionNo:false
	},{
		id:7,
		question:"Have you neglected your family because of your use of drugs?",
		optionYes:true,
		optionNo:false
	},
	{
		id:8,
		question:"Have you engaged in illegal activities in order to obtain drugs?",
		optionYes:true,
		optionNo:false
	},
	{
		id:9,
		question:" Have you ever experienced withdrawal symptoms (felt sick) when you stopped taking drugs?",
		optionYes:true,
		optionNo:false
	},
	{
		id:10,
		question:"Have you had medical problems as a result of your drug use?",
		options:true,
		// optionNo:false
	}
]

function DAST() {
  return (
		<div className='flex flex-col justify-center items-center py-10'>
		<p className='font-bold text-4xl text-[#F39D62] mt-4'>DAST Test</p>
		{dastQuestions.map((item) => <Dastcomponent question={item.question} id={item.id} />)}

		<Link to='/dashboard' className='bg-white text-black mt-4 drop-shadow-md py-2 px-8 rounded-md text-lg font-semibold'>Done</Link>
		</div>
    
  )
}

export default DAST