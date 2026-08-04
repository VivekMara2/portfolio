import React from 'react'

export const Footer: React.FC = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <h3>LET'S CONNECT</h3>
        <p style={{ fontSize: '1.1rem', color: '#94a3b8', marginBottom: '2rem' }}>
          Open to opportunities in Data Science, Machine Learning Engineering, Cloud Analytics, and Production AI/LLM Systems.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginBottom: '2.5rem', color: '#38bdf8', fontWeight: 600 }}>
          <div>✉️ <a href="mailto:Vivekr5345@gmail.com" style={{ color: '#38bdf8', textDecoration: 'none' }}>Vivekr5345@gmail.com</a></div>
          <div>📞 <a href="tel:+16188039485" style={{ color: '#38bdf8', textDecoration: 'none' }}>+1 618 803 9485</a></div>
          <div>📍 San Bruno, CA, United States</div>
        </div>

        <div className="social-links">
          <a href="mailto:Vivekr5345@gmail.com" className="social-btn">
            ✉️ EMAIL ME
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-btn">
            🔗 LINKEDIN
          </a>
          <a href="tel:+16188039485" className="social-btn">
            📞 CALL DIRECTLY
          </a>
        </div>

        <div style={{ marginTop: '3.5rem', color: '#64748b', fontSize: '0.9rem' }}>
          © {new Date().getFullYear()} Vivek Mara. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
