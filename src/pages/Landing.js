import React from 'react'
import main from '../assets/images/undraw_job_hunt_re_q203.svg'
import Logo from '../components/logo'
import Wrapper from '../assets/wrappers/LandingPage'


const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
        <h1>Job <span>tracking</span> app</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis porta commodo. Donec elit odio, congue non euismod et, ullamcorper ut lacus. Nulla pharetra dignissim augue. Proin dictum ultricies suscipit. Sed quis sagittis nisi, ut dignissim urna.</p>
        <button className="btn btn-hero">Login/Register</button>
      </div>
      <div className="jobHunt"><img src={main} alt='job hunt' className='img main-img' /></div>
      </div>
    </Wrapper>
  )
}

export default Landing