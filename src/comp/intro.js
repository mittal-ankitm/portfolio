import React,{useEffect,useState,useContext} from 'react'
import TypeWriterEffect from 'react-typewriter-effect';
import Typewriter from 'typewriter-effect';
import bgimg from '../images/bg.jpg'
import Connect from './connect';
const Intro= ()=>{

return(

<div>
<header className="masthead" style={{ backgroundImage: `url(${bgimg})` }}>
  <div className="container h-100">
    <div className="row h-100 align-items-center">
      <div className="col-12 text-center" style={{color:'white'}}>
        
      <div><h1>Hello,</h1> </div>
<div>I am <h1 style={{display:'inline'}}>Ankit Mittal</h1></div>
<div style={{fontSize:'20px',paddingTop:'2%'}}><Typewriter
  options={{
    strings: ['Student at IIIT Gwalior','Full Stack Developer'],
    autoStart: true,
    loop: true,
  }}
/>
      </div>
      <Connect size='50' />


      </div>
    </div>
  </div>
</header>
</div>
)

}

export default Intro