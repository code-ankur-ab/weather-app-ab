import React from 'react'
import './Home.css'
import Navbar from '../Components/Navbar'
import WeatherData from '../Components/WeatherData'
import About from '../Components/About'
import Footer from '../Components/Footer'

function Home() {
  return (
   <div className="home-container">
         <div className="home-nav"> <Navbar /></div>
         <WeatherData />
         <About />
         <Footer />
    </div>    
  )
}

export default Home
