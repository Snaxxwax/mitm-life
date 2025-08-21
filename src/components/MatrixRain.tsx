'use client'

import { useEffect, useRef } from 'react'

interface MatrixRainProps {
  density?: number
  speed?: number
  className?: string
}

export default function MatrixRain({ 
  density = 0.7, 
  speed = 1, 
  className = '' 
}: MatrixRainProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const characters = '01アカサタナハマヤラワ&#$%^&*()+=[]{}|;:,.<>?'
    const columns = Math.floor(container.offsetWidth / 20)
    
    // Clear existing characters
    container.innerHTML = ''

    // Create matrix characters
    for (let i = 0; i < columns * density; i++) {
      const char = document.createElement('div')
      char.className = 'matrix-char'
      char.textContent = characters[Math.floor(Math.random() * characters.length)]
      char.style.left = Math.random() * 100 + '%'
      char.style.animationDuration = (6 + Math.random() * 4) / speed + 's'
      char.style.animationDelay = -Math.random() * 8 + 's'
      char.style.fontSize = (12 + Math.random() * 8) + 'px'
      
      // Vary opacity for depth
      char.style.opacity = (0.2 + Math.random() * 0.6).toString()
      
      container.appendChild(char)
    }

    // Periodically update characters
    const updateInterval = setInterval(() => {
      const chars = container.querySelectorAll('.matrix-char')
      chars.forEach((char) => {
        if (Math.random() < 0.1) {
          char.textContent = characters[Math.floor(Math.random() * characters.length)]
        }
      })
    }, 150)

    return () => {
      clearInterval(updateInterval)
    }
  }, [density, speed])

  return (
    <div 
      ref={containerRef}
      className={`matrix-rain ${className}`}
      style={{ 
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        overflow: 'hidden',
        zIndex: 1
      }}
    />
  )
}