import React from 'react'
import "./About.css"


function About() {
  return (
    <div className="about-container" id='about'>
      <h2 className="about-text">About</h2>
        <p>This app helps you quickly check the current weather for any city. Simply search for a location to see the temperature, weather conditions, and other basic details in a clear and easy-to-read format.</p>
        <p>The interface is designed to be simple and smooth, making it easy to get the information you need without any confusion. The visuals may also change based on the weather, so you can instantly get a better sense of the conditions.</p>
        <p>Whether you’re planning your day or just curious about the weather, this app gives you fast and reliable updates in one place.</p>
        <div className='logo-up'><h4>~Ankur Bhardwaj </h4> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className='imgLogo'><path fill="currentColor" d="M557.7 64.9L363.5 139.6L365.8 110.3C366.8 97.5 353 88.8 341.8 95.2L165.3 197.4C102.6 233.7 64 300.6 64 373C64 485.1 154.9 576 267 576C339.4 576 406.3 537.4 442.6 474.7L544.8 298.3C551.3 287.2 542.6 273.3 529.7 274.3L500.4 276.6L575.1 82.4C575.7 80.9 576 79.2 576 77.6C576 70.1 570 64.1 562.5 64.1C560.8 64.1 559.2 64.4 557.7 65zM256 256C326.7 256 384 313.3 384 384C384 454.7 326.7 512 256 512C185.3 512 128 454.7 128 384C128 313.3 185.3 256 256 256zM256 352C256 334.3 241.7 320 224 320C206.3 320 192 334.3 192 352C192 369.7 206.3 384 224 384C241.7 384 256 369.7 256 352zM272 448C280.8 448 288 440.8 288 432C288 423.2 280.8 416 272 416C263.2 416 256 423.2 256 432C256 440.8 263.2 448 272 448z"/></svg></div>
    </div>
  )
}

export default About
