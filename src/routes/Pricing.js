import React from 'react'
import Navbar from "../components/Navbar.js"
import PricingComponent from "../components/Pricing.js";
import Footer from "../components/Footer.js"
import HeroImage from "../components/HeroImage.js"

const Pricing = () => {
  return (
    <div>
        <Navbar/>
        <HeroImage heading='PRICING.' text='Choose your trip.'/>
        <PricingComponent />
        <Footer/>
    </div>
  )
}

export default Pricing
