import React, { Component } from 'react'
import { HashLink as Link } from 'react-router-hash-link'

export default class Navbar extends Component {
  render() {
    return (
      // <div ref={this.wrapperRef} className="icon">
        <nav className="navbar is-fixed-top home">
          <div className="container">

              <div className="navbar home">
                <Link to="/#about" className="navbar-item" spy={true} smooth={true} duration={1000} >about</Link>
                <Link to="/#project" className="navbar-item" spy={true} smooth={true} duration={1000}>projects</Link>
                <Link to="/#home" className="navbar-item" spy={true} smooth={true} duration={1000}>NF</Link>
                <Link to="/#interests" className="navbar-item" spy={true} smooth={true} duration={1000}>interests</Link>
                <Link to="/#contact" className="navbar-item" spy={true} smooth={true} duration={1000}>contact</Link>
              </div>

          </div>
        </nav>
      // </div>
    )
  }
}


// export default Navbar
