import React from 'react'
import image from '../styles/assets/beach.jpg'

const Interests = () => {
  return (
    <div id="interests">
      <div className="section">
        <div className="container">
          <h1>Interests</h1>
          <div className="interests">
            <div className="interests-text">
              <div>
                <h3>Keeping fit</h3>
                <p>I cannot sit still, so I often try and find as many fun ways to keep myself moving and running around. I often go on walks, attend yoga classes and try as many different kinds of dance classes as possible! Recently I've tried Jazz and Heels dance classes for the first time. As an ex-gymnast (its not THAT impressive, I stopped at my prime when 10 years old), I've tried to learn some new skills, at the moment focusing on handstands and the splits!</p>
              </div>
              <div>
                <h3>Food</h3>
                <p>I adore cooking and baking, and anything to do with eating really... I'm constantly making a mess of my kitchen, and 9 times out of 10, it tastes amazing. Recently I've been experimenting with carrot and walnut cakes, and fresh risottos!</p>
              </div>
            </div>
            <div className="beach-img">
              <img src={image} alt="beach-yoga"/>
            </div>
          </div>

          {/* <p>placeholder for react carousel</p> */}
        </div>
      </div>

    </div>
  )
}

export default Interests
