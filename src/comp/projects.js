import React,{useEffect,useState,useContext} from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import {Link,useHistory} from 'react-router-dom'
import {projdata} from './projectdata';


const Projects= (props)=>{

return(
<div className='projectdiv'>
    <div className='d-flex justify-content-center'><h1 id='proj'>Projects</h1></div>
    <div class="proj">
{
    projdata.map(item=>{
        return(
            <div className='card'><a href={item.link} target='_blank' >
                <img className='card-image-top imgpro' src={require('../images/project/'+item.img).default} />
            <div className='card-body'>
                <h5 className='card-title'>{item.name}</h5>
                <div style={{fontSize:'90%'}}>{item.desc}</div>
                <div style={{fontWeight:'bolder',paddingTop:'2%'}}>Tech Stack : {item.tech}</div>
               <div> <GitHubIcon className='git' style={{ fontSize:'20px' }} /></div>
            </div></a>
        </div>
        )
    })
}
</div>
</div>
)

}

export default Projects