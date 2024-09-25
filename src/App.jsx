import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TopBar from './components/TopBar'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'

import Events from './components/Events'
import Press from './components/Press'
import Gallery from './components/Gallery'
import Socials from './components/Socials'
import Footer from './components/Footer'
function App() {

  return (
    <>
      <TopBar />
      <Navbar />
      <Hero />
      <About/>
      <Events/>
<Press/>
<Gallery/>
<Socials/>
<Footer/>
    </>
  )
}

export default App
