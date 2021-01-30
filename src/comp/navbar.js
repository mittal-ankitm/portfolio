import React,{useEffect,useState,useContext} from 'react'

import { Navbar, NavbarBrand, Nav, NavItem, NavbarToggler, Collapse} from 'reactstrap'

const Navb= (props)=>{
return(


<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" href="#exp">EXPERIENCE</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="#skills">SKILLS </a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="#proj">PROJECTS</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="#connect">CONNECT</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="#" href='https://drive.google.com/file/d/1xGttWd_c6F0181piCcwumwqEDrz3ALPx/view?usp=sharing' target='_blank' >
             <span id='res' style={{color:'black'}}>RESUME</span> 
            </a> 
            </li>
    </ul>
  </div>
</nav>


)

}

export default Navb