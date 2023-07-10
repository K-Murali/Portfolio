import React from 'react'
import Navbar from './componets/Navbar'
import Intro from './componets/Intro'
import About from './componets/About'
import Experience from './componets/Experience'
import Project from './componets/Project'
import Contactform from './componets/Contactform'
import Footer from './componets/Footer'

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Intro></Intro>
      <About></About>
      <Experience></Experience>
      <Project></Project>
      <Contactform></Contactform>
      <Footer></Footer>
    </div>
  )
}

export default App
