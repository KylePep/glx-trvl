import React from 'react'
import TrainingComponent from "../components/Training.js"
import HeroImage from "../components/HeroImage.js"

const Training = () => {
  return (
    <div>
        <HeroImage heading='TRAINING.' text='Pre-Flight & In-Flight Training.'/>
        <TrainingComponent/>
    </div>
  )
}

export default Training
