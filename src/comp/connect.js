import React,{useEffect,useState,useContext} from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Connect= (props)=>{

return(
<div style={{padding:'2%'}}>
    
  <a href='https://github.com/mittal-ankitm' target='_blank' ><GitHubIcon className='git' style={{ fontSize:props.size }} /></a>
  <a href='https://www.linkedin.com/in/mittal-ankitm/' target='_blank'><LinkedInIcon className='linked' style={{ fontSize:props.size }} /></a>
  <a href='mailto:mittal.ankitm@gmail.com' target='_blank'><EmailIcon className='mail' style={{ fontSize:props.size }} /></a>

</div>
)

}

export default Connect