import React from 'react'
import webImage from '../images/photo-2.png'

function Home() {
  return (
    <div className="alert alert-info mt-5 container" role="alert">
      <img src="/images/photo-1.png" className='with-border-radius' width="150px" alt="My Photo" />
      <p>Hello my name is Ahmed. I am a Fullstack Web Developer.</p>
      <img src={webImage} style={{width: '100%'}} alt="Web" />
    </div>
  )
}

export default Home