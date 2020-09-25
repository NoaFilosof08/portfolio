import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

const Navbar = () => {
  return (
    <nav className="navbar is-fixed-top">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/#home" className="navbar-item" spy={true} smooth={true} duration={1000}>
          NF
          </Link>
          {/* <span onClick={this.handleToggle} className={`navbar-burger ${this.state.isOpen ? 'is-active' : ''}`}> */}
            {/* <span></span>
            <span></span>
            <span></span> */}
          {/* </span> */}
        </div>
        {/* <div className={`navbar-menu ${this.state.isOpen ? 'is-active' : ''}`}> */}
          <div className="navbar">
            <Link to="/#about" className="navbar-item" spy={true} smooth={true} duration={1000}>about</Link>
            <Link to="/#project" className="navbar-item" spy={true} smooth={true} duration={1000}>Projects</Link>
            <Link to="/#interests" className="navbar-item" spy={true} smooth={true} duration={1000}>Interests</Link>
            <Link to="/#contact" className="navbar-item" spy={true} smooth={true} duration={1000}>Contact</Link>
          </div>
        {/* </div> */}
      </div>
    </nav>
  )
}


export default Navbar
