import React from 'react'
import ht from '../assets/experience/html.png'
import css from '../assets/experience/css.png'
import js from '../assets/experience/javascript.png'
import rt from '../assets/experience/react.png'
import ts from '../assets/experience/tailwind.png'
import cpp from '../assets/experience/c++.png'
//  data-aos="fade-up"
// data-aos-anchor-placement="top-bottom"
const Experience = () => {
  return (
    <div name='experience' data-aos="fade-up" data-aos-duration='1000'  className= 'container mx-auto md:mt-24 mt-16 '>
      <div>
        
      </div>
      <h1 className=' text-center text-3xl  font-bold '>Experience</h1>
      <p className='text-center mt-12 text-lg font-semibold'>Technologies that I am currently working</p>
        <div className='container  m-5 md:flex mx-auto flex flex-wrap md:gap-10 justify-center items-center '>
       <div>
         <img  className=' w-20 h-20 m-5' src={ht}></img>
         <h1 className='text-center  text-lg font-semibold'>HTML </h1>
       </div>
       <div>
         <img className=' w-20 h-20 m-5'src={css}></img>
         <h1 className='text-center text-lg font-semibold'>CSS </h1>
       </div>
       <div>
         <img className=' w-20 h-20 m-5' src={js}></img>
         <h1 className='text-center text-lg font-semibold'>Javascript </h1>
       </div>
 
       <div>
         <img   className=' w-20 h-20 m-5' src={ts}></img>
         <h1 className='text-center text-lg font-semibold'>Tailwind</h1>
       </div>
       <div>
         <img className=' w-20 h-20 m-5' src={rt}></img>
         <h1 className='text-center text-lg font-semibold'>React </h1>
       </div>
       <div>
         <img className=' w-20  h-20 m-5' src={cpp}></img>
         <h1 className='text-center text-lg font-semibold'>Cpp</h1>
       </div>

        </div>
           </div>
  )
} 

export default Experience
