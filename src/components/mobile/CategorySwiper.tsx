'use client'

import { useState, useRef, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface CategorySwiperProps {
  categories: string[]
  activeCategory: string
  onCategoryChange: (category: string) => void
  className?: string
}

export default function CategorySwiper({ 
  categories, 
  activeCategory, 
  onCategoryChange,
  className = '' 
}: CategorySwiperProps) {
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const checkScrollability = () => {
    if (!scrollContainerRef.current) return
    
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
    setCanScrollLeft(scrollLeft > 0)
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1)
  }

  useEffect(() => {
    checkScrollability()
    window.addEventListener('resize', checkScrollability)
    return () => window.removeEventListener('resize', checkScrollability)
  }, [])

  const scrollToCategory = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return
    
    const container = scrollContainerRef.current
    const scrollAmount = container.clientWidth * 0.7
    
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    })
    
    // Update scroll indicators after animation
    setTimeout(checkScrollability, 300)
  }

  const handleCategoryClick = (category: string) => {
    onCategoryChange(category)
    
    // Haptic feedback
    if (navigator.vibrate) {
      navigator.vibrate(30)
    }
  }

  return (
    <div className={`relative ${className}`}>
      {/* Left scroll button */}
      <button
        onClick={() => scrollToCategory('left')}
        className={`
          absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 
          rounded-full bg-background/80 backdrop-blur-sm border border-border/50
          flex items-center justify-center transition-all duration-200
          focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
          ${canScrollLeft 
            ? 'opacity-100 pointer-events-auto hover:bg-background shadow-lg' 
            : 'opacity-0 pointer-events-none'
          }
        `}
        aria-label="Scroll categories left"
      >
        <ChevronLeft size={16} />
      </button>

      {/* Right scroll button */}
      <button
        onClick={() => scrollToCategory('right')}
        className={`
          absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 
          rounded-full bg-background/80 backdrop-blur-sm border border-border/50
          flex items-center justify-center transition-all duration-200
          focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
          ${canScrollRight 
            ? 'opacity-100 pointer-events-auto hover:bg-background shadow-lg' 
            : 'opacity-0 pointer-events-none'
          }
        `}
        aria-label="Scroll categories right"
      >
        <ChevronRight size={16} />
      </button>

      {/* Categories container */}
      <div
        ref={scrollContainerRef}
        className="scroll-container flex space-x-3 overflow-x-auto px-8 py-2 scrollbar-hide"
        onScroll={checkScrollability}
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {categories.map((category, index) => {
          const isActive = category === activeCategory
          
          return (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`
                flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium
                transition-all duration-300 touch-manipulation
                focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
                relative overflow-hidden min-w-max
                ${isActive
                  ? 'bg-primary text-primary-foreground shadow-lg scale-105 border border-primary/30'
                  : 'bg-background/50 text-muted-foreground hover:bg-primary/10 hover:text-primary border border-border/30'
                }
              `}
              style={{
                animationDelay: `${index * 50}ms`
              }}
              aria-pressed={isActive}
            >
              {/* Active indicator line */}
              <div className={`
                absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300
                ${isActive ? 'w-full' : 'w-0'}
              `} />
              
              {/* Scanning effect */}
              {isActive && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" />
              )}
              
              <span className="relative z-10">{category}</span>
            </button>
          )
        })}
      </div>

      {/* Gradient fades */}
      <div className={`
        absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent pointer-events-none
        ${canScrollLeft ? 'opacity-100' : 'opacity-0'}
        transition-opacity duration-200
      `} />
      
      <div className={`
        absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent pointer-events-none
        ${canScrollRight ? 'opacity-100' : 'opacity-0'}
        transition-opacity duration-200
      `} />

      {/* Scroll indicators */}
      <div className="flex justify-center space-x-1 mt-3">
        {categories.map((_, index) => (
          <div
            key={index}
            className={`
              w-1.5 h-1.5 rounded-full transition-all duration-200
              ${categories[index] === activeCategory 
                ? 'bg-primary scale-125' 
                : 'bg-muted-foreground/30'
              }
            `}
          />
        ))}
      </div>
    </div>
  )
}