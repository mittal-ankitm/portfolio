import React,{useEffect,useState,useContext} from 'react'

import Connect from './connect';

const Footer= ()=>{

return(
<div className='footer'>
    <div className='foottext' id='connect'>Let's Connect</div>
    <Connect size='50' />
</div>
)

}

export default Footer