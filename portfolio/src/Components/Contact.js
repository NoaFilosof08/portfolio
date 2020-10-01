import React from 'react'

const Contact = () => {
  return (
    <div id="contact">
      <div className="section">
        <div className="container">
          <h1>Contact Page</h1>
          <div className="tabs is-centered is-boxed is-medium">
            <ul>
              <li className="is-active"><span>Email</span></li>
              <li><span>GitHub</span></li>
              <li><span>LinkedIn</span></li>
              {/* <li><span>Email</span></li> */}
            </ul>

          </div>
        </div>
      </div>

      <p>noafilosof@hotmail.co.uk</p>
      <p>https://github.com/NoaFilosof08</p>
      <p>https://www.linkedin.com/in/noa-filosof/</p>
    </div>
  )
}

export default Contact
