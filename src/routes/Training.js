import React from 'react'
import Navbar from "../components/Navbar.js"
import Footer from "../components/Footer.js"
import TrainingComponent from "../components/Training.js"
import HeroImage from "../components/HeroImage.js"

const Training = () => {
  return (
    <div>
              <Navbar/>
        <HeroImage heading='TRAINING.' text='Pre-Flight & In-Flight Training.'/>
        <TrainingComponent/>
        <Footer/>
    </div>
  )
}

export default Training
