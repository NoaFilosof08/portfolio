import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

const Navbar = () => {
  return (
    // <nav className="navbar">
    //   <Link to="/" className="navbar-item">Home</Link>
    //   <Link to="/#about" className="navbar-item">About</Link>
    //   <Link to="/#project" className="navbar-item">Projects</Link>
    //   <Link to="/#interests" className="navbar-item">Interests</Link>
    //   <Link to="/#contact" className="navbar-item">Contact</Link>
    // </nav>

    <nav className="navbar">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
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
          <Link to="/#about" className="navbar-item">about</Link>
          <Link to="/#project" className="navbar-item">Projects</Link>
          <Link to="/#interests" className="navbar-item">Interests</Link>
          <Link to="/#contact" className="navbar-item">Contact</Link>
        </div>
      {/* </div> */}
    </div>
  </nav>
  )
}


export default Navbar
