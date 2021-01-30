import React,{useEffect,useState,useContext} from 'react'
import { Transition } from 'react-transition-group';

const Card= (props)=>{
const [listOfImages,setlist] =useState([])

const importAll=(r) =>{
    return r.keys().map(r);
  }
useEffect(()=>{
    let listOfImage = importAll(require.context('../images/skills/', false, /\.(png|jpg|jpeg|svg)$/));
    setlist(listOfImage)
    console.log(listOfImages)
},[])
return(
<div className='skilldiv'>
    <div className='d-flex justify-content-center'><h1 id='skills'>Skills</h1></div>
<div className='sk'>
              {
                    listOfImages.map(
                      (image) =>    {
                      return <img src={image.default} className='skimg' alt="info"  height='100px' width='100px' />

                      }
                    )
              }
          </div>


</div>
)

}

export default Card