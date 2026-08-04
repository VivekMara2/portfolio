import React, { useEffect, useRef } from 'react'

export const MatrixBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationInterval: number

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const characters = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン'@#$%&*+-=!?<>^~|/\\'abcdefghijklmnopqrstuvwxyz0123456789"
    const charArray = characters.split("")

    const fontSize = 14
    let columns = Math.floor(canvas.width / fontSize)
    let drops: number[] = new Array(columns).fill(1)

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = '#00ffff'
      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const text = charArray[Math.floor(Math.random() * charArray.length)]
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    animationInterval = window.setInterval(draw, 35)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      clearInterval(animationInterval)
    }
  }, [])

  return <canvas ref={canvasRef} className="matrix" />
}
