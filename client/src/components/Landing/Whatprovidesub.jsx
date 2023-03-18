import { Link } from "react-router-dom";

const Whatprovidesub = ({text,logo,path}) => {
	return (
			<Link to={path} className='flex flex-col justify-center items-center rounded-lg bg-white provideCards hover:drop-shadow-lg text-center hover:cursor-pointer hover:scale-110 transition-transform duration-200 ease-out'>
			<p className='text-3xl'>{logo}</p>
			<p className=' pt-2'>{text}</p>
			</Link>
	)
}

export default Whatprovidesub
