import React from 'react'
import PricingComponent from "../components/Pricing.js";
import HeroImage from "../components/HeroImage.js"

const Pricing = () => {
  return (
    <div>
        <HeroImage heading='PRICING.' text='Choose your trip.'/>
        <PricingComponent />
    </div>
  )
}

export default Pricing
