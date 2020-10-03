import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

const Navbar = () => {
  return (
    <nav className="navbar is-fixed-top">
      <div className="container">

          <div className="navbar">
            <Link to="/#about" className="navbar-item" spy={true} smooth={true} duration={1000}>about</Link>
            <Link to="/#project" className="navbar-item" spy={true} smooth={true} duration={1000}>projects</Link>
            <Link to="/#home" className="navbar-item" spy={true} smooth={true} duration={1000}>NF</Link>
            <Link to="/#interests" className="navbar-item" spy={true} smooth={true} duration={1000}>interests</Link>
            <Link to="/#contact" className="navbar-item" spy={true} smooth={true} duration={1000}>contact</Link>
          </div>

      </div>
    </nav>
  )
}


export default Navbar
