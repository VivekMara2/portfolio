import React from 'react'

export const Navbar: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    if (targetId === 'home' || targetId === 'about') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      const navOffset = 90
      const elementPosition = targetElement.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - navOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <nav className="nav">
      <div className="nav-content">
        <div 
          className="logo"
          style={{ cursor: 'pointer' }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          VIVEK MARA
        </div>
        <ul className="nav-links">
          <li><a href="#home" onClick={(e) => handleNavClick(e, 'home')}>HOME</a></li>
          <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')}>ABOUT</a></li>
          <li><a href="#experience" onClick={(e) => handleNavClick(e, 'experience')}>EXPERIENCE</a></li>
          <li><a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>PROJECTS</a></li>
          <li><a href="#skills" onClick={(e) => handleNavClick(e, 'skills')}>SKILLS</a></li>
          <li><a href="#education" onClick={(e) => handleNavClick(e, 'education')}>EDUCATION</a></li>
          <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>CONTACT</a></li>
        </ul>
      </div>
    </nav>
  )
}
