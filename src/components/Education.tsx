import React from 'react'

export const Education: React.FC = () => {
  return (
    <section className="section" id="education">
      <div className="container">
        <h2 className="section-title">EDUCATION</h2>
        <p className="section-subtitle">
          Academic foundation in management information systems, advanced analytics, and enterprise technology strategy.
        </p>

        <div className="card" style={{ padding: '2.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <h3 style={{ fontSize: '1.6rem', color: '#38bdf8', marginBottom: '0.4rem', fontFamily: "'Space Grotesk', sans-serif" }}>
                Master of Science in Management Information Systems
              </h3>
              <div style={{ fontSize: '1.25rem', fontWeight: 600, color: '#f8fafc', marginBottom: '0.3rem' }}>
                Southern Illinois University Edwardsville
              </div>
              <div style={{ fontSize: '0.95rem', color: '#94a3b8' }}>
                📍 Edwardsville, IL, United States
              </div>
            </div>
            <div style={{ background: 'rgba(56, 189, 248, 0.1)', border: '1px solid rgba(56, 189, 248, 0.3)', padding: '0.4rem 1.1rem', borderRadius: '20px', color: '#38bdf8', fontWeight: 700, fontSize: '0.9rem' }}>
              Aug 2022 – May 2024
            </div>
          </div>

          <p style={{ marginTop: '1.5rem', color: '#cbd5e1', lineHeight: '1.75', fontSize: '1.02rem' }}>
            Graduate coursework focused on enterprise data warehousing, predictive analytics, decision support systems, database design, software engineering management, and information systems strategy.
          </p>

          <div className="tech-stack" style={{ marginTop: '1.5rem' }}>
            {['DATA WAREHOUSING', 'PREDICTIVE ANALYTICS', 'INFORMATION SYSTEMS STRATEGY', 'ENTERPRISE ARCHITECTURE', 'DATABASE MANAGEMENT'].map((tag, idx) => (
              <span className="tech-tag" key={idx}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
