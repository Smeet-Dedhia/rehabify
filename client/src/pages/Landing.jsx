import Footer from "../components/Landing/Footer"
import HeroSection from "../components/Landing/HeroSection"
import WhatProvide from "../components/Landing/WhatProvide"
import Whatrehabify from "../components/Landing/Whatrehabify"
import Navbar from "../components/Navbar"
function Landing() {
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