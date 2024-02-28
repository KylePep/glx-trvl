import React from 'react'
import Navbar from "../components/Navbar.js"
import Footer from "../components/Footer.js"
import Form from "../components/Form.js"
import HeroImage from "../components/HeroImage.js"

const Contact = () => {
  return (
    <div>
        <Navbar/>
        <HeroImage heading='CONTACT.' text='Contact GLX Travel'/>
        <Form/>
        <Footer/>
    </div>
  )
}

export default Contact
