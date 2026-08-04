import React, { useEffect, useRef } from 'react'

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null)
  const trailRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    let mouseX = 0
    let mouseY = 0
    const trailX: number[] = new Array(15).fill(0)
    const trailY: number[] = new Array(15).fill(0)
    let animationFrameId: number

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY

      if (cursorRef.current) {
        cursorRef.current.style.left = `${mouseX}px`
        cursorRef.current.style.top = `${mouseY}px`
      }
    }

    const updateTrail = () => {
      for (let i = trailX.length - 1; i > 0; i--) {
        trailX[i] = trailX[i - 1]
        trailY[i] = trailY[i - 1]
      }
      trailX[0] = mouseX
      trailY[0] = mouseY

      trailRefs.current.forEach((trail, index) => {
        if (trail) {
          trail.style.left = `${trailX[index]}px`
          trail.style.top = `${trailY[index]}px`
          trail.style.opacity = `${(15 - index) / 15}`
        }
      })

      animationFrameId = requestAnimationFrame(updateTrail)
    }

    window.addEventListener('mousemove', handleMouseMove)
    animationFrameId = requestAnimationFrame(updateTrail)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      {Array.from({ length: 15 }).map((_, i) => (
        <div
          key={i}
          ref={(el) => { trailRefs.current[i] = el }}
          className="cursor-trail"
        />
      ))}
    </>
  )
}
