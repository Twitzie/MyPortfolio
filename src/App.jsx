import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import twtIcon from './assets/twt.png'
import navIcon from './assets/nav1.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <img src={twtIcon} alt="twt" />
            <span>twt</span>
          </div>
          <ul className="nav-menu">
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#projects">PROJECTS</a></li>
            <li><a href="#skills">SKILLS</a></li>
            <li><a href="#extra">EXTRA</a></li>
          </ul>
          <button className="nav-button">
            Let's Connect! <img src={navIcon} alt="icon" />
          </button>
        </div>
      </nav>
      <section id="hero">
        <div className="hero-content">
          <p className="hero-greeting">Hi! I am</p>
          <h1 className="hero-name">
            TWEETIE<br />
            ZAPANTA
          </h1>
          <div className="hero-line"></div>
          <p className="hero-description">
            I am currently a 3rd year student studying<br />
            <span className="hero-course">BS in Computer Engineering</span> at<br />
            <span className="hero-school">Cebu Institute of Technology - University.</span>
          </p>
          <div className="hero-line"></div>
        </div>
      </section>
    </>
  )
}

export default App
