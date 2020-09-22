import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './Components/Home'
import About from './Components/About'
import Project from './Components/Projects'
import Interests from './Components/Interests'
import Contact from './Components/Contact'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/project" component={Project} />
          <Route path="/interests" component={Interests} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </main>
    </BrowserRouter>
  )
}

export default App
