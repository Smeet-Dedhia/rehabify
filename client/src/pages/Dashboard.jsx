import Navbar from "../components/Navbar";
import Img from '../assets/dashboard.png';

function Dashboard() {
  return (
    <div>
      <Navbar/>
      <div className="image flex justify-center">
			<img src={Img} />
			</div>
  
    </div>
  )
}

export default Dashboard