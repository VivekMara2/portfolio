import React from 'react'
import { CustomCursor } from './components/CustomCursor'
import { MatrixBackground } from './components/MatrixBackground'
import { ParticleBackground } from './components/ParticleBackground'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Education } from './components/Education'
import { Footer } from './components/Footer'
import './index.css'

export const App: React.FC = () => {
  return (
    <div className="portfolio-app" id="home">
      <CustomCursor />
      <MatrixBackground />
      <ParticleBackground />
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Footer />
    </div>
  )
}

export default App
