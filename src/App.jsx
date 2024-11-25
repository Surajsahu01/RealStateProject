import React from 'react'

import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Testimonial from './components/Testimonial'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className=' scroll-smooth'>
      <Header/>
      <About/>
      <Projects/>
      <Testimonial/>
      <Contact/>
    </div>
  )
}

export default App