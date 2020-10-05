import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import HashLinkObserver from 'react-hash-link'

import Home from './Components/Home'
import About from './Components/About'
import Project from './Components/Projects'
import Interests from './Components/Interests'
import Contact from './Components/Contact'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        {/* <Switch> */}
          <HashLinkObserver />
          <Home />
          <About />
          <Project />
          <Interests />
          <Contact />
        {/* </Switch> */}
      </BrowserRouter>

    </>

  )
}

export default App
