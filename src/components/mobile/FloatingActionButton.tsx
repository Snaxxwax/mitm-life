'use client'

import { useState, useEffect } from 'react'
import { Plus, Search, Heart, Share, Copy, Settings, Zap } from 'lucide-react'

interface FloatingActionButtonProps {
  onQuickAction?: (action: string) => void
  className?: string
}

export default function FloatingActionButton({ 
  onQuickAction, 
  className = '' 
}: FloatingActionButtonProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  // Hide/show FAB based on scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const actions = [
    { id: 'search', icon: Search, label: 'Quick Search', color: 'bg-blue-500' },
    { id: 'favorites', icon: Heart, label: 'Favorites', color: 'bg-red-500' },
    { id: 'share', icon: Share, label: 'Share Tool', color: 'bg-green-500' },
    { id: 'copy', icon: Copy, label: 'Copy Link', color: 'bg-purple-500' },
    { id: 'settings', icon: Settings, label: 'Quick Settings', color: 'bg-gray-500' }
  ]

  const handleActionClick = (actionId: string) => {
    onQuickAction?.(actionId)
    setIsExpanded(false)
    
    // Haptic feedback simulation
    if (navigator.vibrate) {
      navigator.vibrate(50)
    }
  }

  return (
    <div 
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      } ${className}`}
    >
      {/* Action buttons */}
      <div className="flex flex-col-reverse items-end space-y-reverse space-y-3 mb-3">
        {actions.map((action, index) => (
          <button
            key={action.id}
            onClick={() => handleActionClick(action.id)}
            className={`
              ${action.color} text-white w-12 h-12 rounded-full shadow-lg
              flex items-center justify-center transition-all duration-300
              transform hover:scale-110 active:scale-95 focus:outline-none
              focus:ring-2 focus:ring-primary focus:ring-offset-2
              ${isExpanded 
                ? 'translate-y-0 opacity-100 scale-100' 
                : 'translate-y-4 opacity-0 scale-75 pointer-events-none'
              }
            `}
            style={{ 
              transitionDelay: isExpanded ? `${index * 50}ms` : '0ms',
              backdropFilter: 'blur(10px)'
            }}
            aria-label={action.label}
          >
            <action.icon size={20} />
          </button>
        ))}
      </div>

      {/* Main FAB */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`
          bg-primary text-primary-foreground w-16 h-16 rounded-full shadow-2xl
          flex items-center justify-center transition-all duration-300
          transform hover:scale-110 active:scale-95 focus:outline-none
          focus:ring-2 focus:ring-primary focus:ring-offset-2
          relative overflow-hidden group
          ${isExpanded ? 'rotate-45' : 'rotate-0'}
        `}
        aria-label={isExpanded ? 'Close quick actions' : 'Open quick actions'}
        aria-expanded={isExpanded}
      >
        {/* Ripple effect */}
        <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-active:scale-100 transition-transform duration-200" />
        
        {/* Glow effect */}
        <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-20" />
        
        {/* Icon */}
        <div className="relative z-10">
          {isExpanded ? (
            <Plus size={24} className="transition-transform duration-300" />
          ) : (
            <Zap size={24} className="transition-transform duration-300" />
          )}
        </div>

        {/* Scanning line effect */}
        <div 
          className={`
            absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r 
            from-transparent via-white/50 to-transparent
            transition-all duration-1000
            ${isExpanded ? 'translate-y-16 opacity-0' : 'translate-y-8 opacity-100'}
          `}
        />
      </button>

      {/* Status indicator */}
      <div className="absolute -top-1 -right-1 w-4 h-4">
        <div className="w-full h-full bg-green-400 rounded-full animate-pulse" />
        <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-30" />
      </div>
    </div>
  )
}