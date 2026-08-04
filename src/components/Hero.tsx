import React from 'react'

export const Hero: React.FC = () => {
  return (
    <header className="header" id="about">
      <div className="hero-content">
        {/* Top Title: DATA SCIENTIST */}
        <h1 className="ss1-hero-title" data-text="DATA SCIENTIST">DATA SCIENTIST</h1>

        {/* Central Card */}
        <div className="ss1-card">
          {/* Top Status */}
          <div className="ss1-status">
            <span className="ss1-dot"></span>
            <span className="ss1-status-text">📍 SAN BRUNO, CA &nbsp;|&nbsp; DATA SCIENTIST</span>
          </div>

          {/* Profile Image vivek.jpeg */}
          <div className="ss1-avatar-container">
            <img
              src="./vivek.jpeg"
              alt="Vivek Mara"
              className="ss1-avatar"
            />
          </div>

          {/* Card Header: VIVEK MARA */}
          <h2 className="ss1-role-title">VIVEK MARA</h2>

          {/* Subtitle / Paragraph */}
          <p className="ss1-description">
            Building scalable analytics solutions, cloud-native ML applications, and predictive modeling systems that turn complex data into strategic business impact.
          </p>

          {/* Quote Box */}
          <div className="ss1-quote-box">
            <p className="ss1-quote-text">
              "Transforming complex datasets into scalable machine learning applications and measurable business outcomes."
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}
