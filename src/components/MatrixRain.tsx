'use client'

import { useEffect, useRef, useState } from 'react'

interface MatrixRainProps {
  density?: number
  speed?: number
  className?: string
  mobileOptimized?: boolean
}

export default function MatrixRain({ 
  density = 0.7, 
  speed = 1, 
  className = '',
  mobileOptimized = true
}: MatrixRainProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const characters = '01アカサタナハマヤラワ&#$%^&*()+=[]{}|;:,.<>?'
    
    // Mobile optimizations
    const mobileDensity = isMobile && mobileOptimized ? density * 0.5 : density
    const mobileCharSize = isMobile ? 10 : 16
    const spacing = isMobile ? 15 : 20
    const columns = Math.floor(container.offsetWidth / spacing)
    
    // Clear existing characters
    container.innerHTML = ''

    // Create matrix characters with mobile optimizations
    for (let i = 0; i < columns * mobileDensity; i++) {
      const char = document.createElement('div')
      char.className = 'matrix-char'
      char.textContent = characters[Math.floor(Math.random() * characters.length)]
      char.style.left = Math.random() * 100 + '%'
      char.style.animationDuration = (6 + Math.random() * 4) / speed + 's'
      char.style.animationDelay = -Math.random() * 8 + 's'
      
      // Mobile-optimized font sizing
      const fontSize = isMobile 
        ? mobileCharSize + Math.random() * 4 
        : 12 + Math.random() * 8
      char.style.fontSize = fontSize + 'px'
      
      // Vary opacity for depth (reduced on mobile for performance)
      const opacity = isMobile && mobileOptimized 
        ? 0.1 + Math.random() * 0.4
        : 0.2 + Math.random() * 0.6
      char.style.opacity = opacity.toString()
      
      // Performance optimization: use transform instead of left for animation
      if (mobileOptimized && isMobile) {
        char.style.willChange = 'transform, opacity'
        char.style.transform = `translateZ(0)` // Hardware acceleration
      }
      
      container.appendChild(char)
    }

    // Reduced update frequency on mobile for better performance
    const updateInterval = setInterval(() => {
      const chars = container.querySelectorAll('.matrix-char')
      const updateChance = isMobile && mobileOptimized ? 0.05 : 0.1
      
      chars.forEach((char) => {
        if (Math.random() < updateChance) {
          char.textContent = characters[Math.floor(Math.random() * characters.length)]
        }
      })
    }, isMobile && mobileOptimized ? 300 : 150)

    return () => {
      clearInterval(updateInterval)
    }
  }, [density, speed, isMobile, mobileOptimized])

  return (
    <div 
      ref={containerRef}
      className={`matrix-rain ${className} ${isMobile ? 'mobile-optimized' : ''}`}
      style={{ 
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        overflow: 'hidden',
        zIndex: 1,
        // Mobile performance optimizations
        ...(isMobile && mobileOptimized && {
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
          perspective: 1000,
          willChange: 'transform'
        })
      }}
    />
  )
}