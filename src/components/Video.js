import React from 'react'
import { Link } from "react-router-dom"
import './VideoStyles.css'

// @ts-ignore
import spaceVideo from '../assets/space.mp4'

const Video = () => {
  return (
    <div className='hero'>
      <video autoPlay loop muted id="video">
        <source src={spaceVideo} type="video/mp4"/>
      </video>
      <div className='content'>
        <h1>Galaxy. Travel.</h1>
        <p>Worlds first civilian space travel.</p>
      <div>
        <Link to='/pricing' className='btn btn-light'> Launch</Link>
        <Link to='/training' className='btn'> Training</Link>
      </div>
      </div>
    </div>
  )
}

export default Video
