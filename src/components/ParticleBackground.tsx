import React from 'react'

export const ParticleBackground: React.FC = () => {
  const particles = Array.from({ length: 45 }).map((_, i) => {
    const size = Math.random() * 4 + 2
    const style: React.CSSProperties = {
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      width: `${size}px`,
      height: `${size}px`,
      animationDelay: `${Math.random() * 6}s`,
      animationDuration: `${Math.random() * 4 + 4}s`
    }
    return <div key={i} className="particle" style={style} />
  })

  return <div className="particles">{particles}</div>
}
