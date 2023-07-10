import React from 'react'
import {FaFacebookF,FaInstagram,FaLinkedin,FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
      <footer className=" footer fixed  w-full bottom-0 p-1 md:p-4 bg-neutral text-neutral-content">
  
  <div className=" gap-3  flex  items-center  justify-center ">
    <p className=' text-lg'>follow me on</p>
    <a target='blank' href="https://www.facebook.com/profile.php?id=100057321445061"><FaFacebookF  style={{width:'1.3rem',height:'1.3rem'}}></FaFacebookF></a>
   <a  target='blank' href='https://instagram.com/murali._.ka/'><FaInstagram style={{width:'1.3rem',height:'1.3rem'}}></FaInstagram></a>
  <a target='blank' href="https://www.linkedin.com/in/muralidhar-k-79a7b7227/"> <FaLinkedin   style={{width:'1.3rem',height:'1.3rem'}}></FaLinkedin></a>
   <a  target='blank'  href='https://github.com/K-Murali?tab=repositories'><FaGithub style={{width:'1.3rem',height:'1.3rem'}}></FaGithub></a>
  
  </div>
</footer>
    </div>
  )
}

export default Footer
