import React,{useEffect,useState,useContext} from 'react';
import {expdata} from './expdata';
import AttachmentIcon from '@material-ui/icons/Attachment';

const Experience= (props)=>{

return(
    <div className='expdiv' style={{paddingTop:'2%',paddingBottom:'2%'}}>
<div className='container'>
<div className='row'>
    <div className='col-md-3 col-lg-3 col-xl-3'  style={{display:'flex',justifyContent:'center'}}><h1 id='exp'>Experience</h1></div>
    <div className='expgroup col-md-8 col-lg-8 col-xl-8'>
{
    expdata.map(item=>{
        return(
        <div className='expcard'>
            
            <a href={item.link} target='_blank' >
            <div className="exptitle">
                <h5 className=''>{item.name}</h5>
                <h6 style={{color:'yellowgreen'}}> {item.duration}</h6>
            </div>
            <div className='expbody'>
                <div>{item.desc}</div>
                <div>{item.descdetail}</div>
                <div style={{padding:'2%',color:'yellowgreen'}}>Tech Stack : {item.tech}</div>
                <div> <AttachmentIcon className='git' style={{ fontSize:'200%',color:'white',border:'2px white solid' }} /></div>
            </div>
            <div className='d-flex justify-content-center'>
                <img className='expimg' src={require('../images/exp/'+item.img1).default} />
                <img className='expimg' src={require('../images/exp/'+item.img2).default} />
            </div></a>
        </div>
        )
    })
}
</div>
</div></div></div>
)

}

export default Experience