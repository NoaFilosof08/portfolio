import React from 'react'
// import { HashLink as Link } from 'react-router-hash-link'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/project">Projects</Link>
      <Link to="/interests">Interests</Link>
      <Link to="/contact">Contact</Link>
    </>
  )
}


export default Navbar
