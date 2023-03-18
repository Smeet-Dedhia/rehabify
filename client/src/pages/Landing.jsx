import Footer from "../components/Landing/Footer"
import HeroSection from "../components/Landing/HeroSection"
import WhatProvide from "../components/Landing/WhatProvide"
import Whatrehabify from "../components/Landing/Whatrehabify"
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Landing() {
  const navigate=useNavigate();
  // useEffect(() => {
  //   const user=localStorage.getItem('userInfo');

  //   if(user){
  //     navigate('/');
  //   }
  // }, [])
  return (
    <div>
      <Navbar/>
      <HeroSection/>
			<Whatrehabify />
      <WhatProvide/>
      <Footer/>
    </div>
  )
}

export default Landing