import React from 'react'
import intro from '../styles/assets/Intro-page.png'
import intro2 from '../styles/assets/intro-page-proj2.png'
import home from '../styles/assets/home-page.png'
import splash from '../styles/assets/Splash-page.png'

const Project = () => {
  return (
    <div id="project" className="section">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects">
          <div className="project-img">
            <img src={intro} alt="intro-page"></img>
          </div>
          <div className="project-text">
            <h3>RuPaul's Space Invaders</h3>
            <p>For my first project as part of the SEI course, we were tasked with creating a VanillaJS game.This was a solo task which was assigned after 3 weeks of coding, with one week to complete. My game uses the basic arcade game - space invaders - format. The player is RuPaul and the aliens are Michelle Visage. Listen out for your instructions after you hit play!</p>
            <div className="icons-wrap">
              <i className="devicon-github-plain-wordmark smol-icons"></i>
              <i className="devicon-javascript-plain smol-icons"></i>
              <i className="devicon-html5-plain-wordmark smol-icons"></i>
              <i className="devicon-css3-plain-wordmark colored smol-icons"></i>
            </div>
            <div className="buttons">
              <button className="button"><a href="https://github.com/NoaFilosof08/SEI-project-1" target="_blank" rel="noopener noreferrer">Link to Repo</a></button>
              <button className="button"><a href="https://noafilosof08.github.io/SEI-project-1/" target="_blank" rel="noopener noreferrer">Link to Game</a></button>
            </div>
          </div>
        </div>
        <div className="projects">
          <div className="project-text">
            <h3>Dwitanic</h3>
            <p>After learning ReactJs for a week, we got tasked with a React-a-thon for our second project. 48 hours of pair-coding, the brief was to mount any third-party API onto a React app in any way we wished. We decided to build a fun game based around The US Office. A random quote will be generated and you have to guess who said it.</p>
            <div className="icons-wrap">
              <i className="devicon-react-original-wordmark colored smol-icons"></i>
              <i className="devicon-sass-original colored smol-icons"></i>
              <i className="devicon-yarn-plain-wordmark colored smol-icons"></i>
              <i className="devicon-github-plain-wordmark colored smol-icons"></i>
              <i className="devicon-javascript-plain smol-icons"></i>
            </div>
            <div className="buttons">
              <button className="button"><a href="https://github.com/NoaFilosof08/SEI-project-2" target="_blank" rel="noopener noreferrer">Link to Repo</a></button>
              <button className="button"><a href="https://the-us-office-hof.netlify.app/" target="_blank" rel="noopener noreferrer">Link to Game</a></button>
            </div>
          </div>
          <div className="project-img">
            <img src={intro2} alt="dwitanic"></img>
          </div>
        </div>
        <div className="projects">
          <div className="project-img">
            <img src={home} alt="gigme"></img>
          </div>
          <div className="project-text">
            <h3>GigMe</h3>
            <p>My first Full-Stack MERN app. This was group project and our brief was to create a full-stack app creating our own restAPI and mounting this data using ReactJS on the frontend. We wanted to create an app which we would use ourselves. We all love music and thought it would be great to have one place where we could filter local gigs by genre, with the added bonus of finding other people to go with. And with that, GigMe was built.</p>
            <div className="icons-wrap">
              <i className="devicon-react-original-wordmark colored smol-icons"></i>
              <i className="devicon-sass-original colored smol-icons"></i>
              <i className="devicon-yarn-plain-wordmark colored smol-icons"></i>
              <i className="devicon-github-plain-wordmark colored smol-icons"></i>
              <i className="devicon-javascript-plain smol-icons"></i>
              <i className="devicon-mongodb-plain-wordmark colored smol-icons"></i>
              <i className="devicon-nodejs-plain-wordmark colored smol-icons"></i>
              <i className="devicon-npm-original-wordmark colored smol-icons"></i>
              <i className="devicon-express-original-wordmark colored smol-icons"></i>
              <i className="devicon-heroku-original-wordmark smol-icons"></i>
            </div>
            <div className="buttons">
              <button className="button"><a href="https://github.com/NoaFilosof08/GigMe" target="_blank" rel="noopener noreferrer">Link to Repo</a></button>
              <button className="button"><a href="https://gigme-sei.herokuapp.com/" target="_blank" rel="noopener noreferrer">Link to Site</a></button>
            </div>
          </div>
        </div>
        <div className="projects">
          <div className="project-text">
            <h3>Artly</h3>
            <p>Artly was curated as a result of wanted to elevate women and non-binary people who loved creating art. Artly was the final project in my SEI course and I decided to work as a pair. We really complemented each others working style and had the same vision. This is a full-stack app with Django on the backend and ReactJS on the front. We used a number of additional libraries to elevate the app such as react-carousel.</p>
            <div className="icons-wrap">
              <i className="devicon-react-original-wordmark colored smol-icons"></i>
              <i className="devicon-sass-original colored smol-icons"></i>
              <i className="devicon-yarn-plain-wordmark colored smol-icons"></i>
              <i className="devicon-github-plain-wordmark colored smol-icons"></i>
              <i className="devicon-javascript-plain smol-icons"></i>
              <i className="devicon-django-plain-wordmark colored smol-icons"></i>
              <i className="devicon-postgresql-plain-wordmark colored smol-icons"></i>
              <i className="devicon-heroku-original-wordmark smol-icons"></i>
            </div>
            <div className="buttons">
              <button className="button"><a href="https://github.com/NoaFilosof08/sei-project-4" target="_blank" rel="noopener noreferrer">Link to Repo</a></button>
              <button className="button"><a href="https://artly-seir4.herokuapp.com/" target="_blank" rel="noopener noreferrer">Link to Site</a></button>
            </div>
          </div>
          <div className="project-img">
            <img src={splash} alt="artly"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
