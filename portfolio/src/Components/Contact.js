import React from 'react'
// import { Link } from 'react-router-dom'

class Contact extends React.Component {
  render() {
    return (
      <div id="contact">
        <div className="section footer">
          <div className="container">
            <h1 className="contact-title">Get in Touch!</h1>
            <div className="list">
              <ul>
                <li><a href="https://github.com/NoaFilosof08" target="_blank" rel="noopener noreferrer"><i className="devicon-github-plain colored icon-small"></i></a></li>

                <li><a href="https://www.linkedin.com/in/noa-filosof/" target="_blank" rel="noopener noreferrer"><i className="devicon-linkedin-plain icon-small"></i></a></li>

                <li><span><u>noafilosof@hotmail.co.uk</u></span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact
