'use client'

import { useState, memo } from 'react'
import { Heart, Share, Copy, Star, ExternalLink, Shield, AlertTriangle } from 'lucide-react'
import type { Tool } from '@/types/tools'

interface MobileToolCardProps {
  tool: Tool
  onFavorite?: (toolId: string) => void
  onShare?: (tool: Tool) => void
  onCopy?: (url: string) => void
  isFavorited?: boolean
  className?: string
}

function MobileToolCard({ 
  tool, 
  onFavorite, 
  onShare, 
  onCopy,
  isFavorited = false,
  className = '' 
}: MobileToolCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | null>(null)
  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(null)

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart({
      x: e.touches[0].clientX,
      y: e.touches[0].clientY
    })
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStart) return

    const currentX = e.touches[0].clientX
    const currentY = e.touches[0].clientY
    const diffX = touchStart.x - currentX
    const diffY = touchStart.y - currentY

    // Only handle horizontal swipes
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
      setSwipeDirection(diffX > 0 ? 'left' : 'right')
    }
  }

  const handleTouchEnd = () => {
    if (swipeDirection === 'left') {
      onShare?.(tool)
    } else if (swipeDirection === 'right') {
      onFavorite?.(tool.name)
    }
    
    setSwipeDirection(null)
    setTouchStart(null)
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'beginner': return 'text-green-400 bg-green-400/10 border-green-400/20'
      case 'intermediate': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20'
      case 'advanced': return 'text-red-400 bg-red-400/10 border-red-400/20'
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/20'
    }
  }

  const getPricingColor = (pricing: string) => {
    return pricing.toLowerCase().includes('free') 
      ? 'text-green-400' 
      : 'text-blue-400'
  }

  return (
    <div 
      className={`
        relative tool-card transform transition-all duration-300 touch-manipulation
        ${swipeDirection === 'left' ? '-translate-x-4 scale-95' : ''}
        ${swipeDirection === 'right' ? 'translate-x-4 scale-95' : ''}
        ${className}
      `}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Swipe indicators */}
      <div className={`
        absolute left-4 top-1/2 -translate-y-1/2 z-10 transition-all duration-200
        ${swipeDirection === 'right' ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}
      `}>
        <div className="bg-red-500 text-white p-2 rounded-full">
          <Heart size={16} fill="white" />
        </div>
      </div>

      <div className={`
        absolute right-4 top-1/2 -translate-y-1/2 z-10 transition-all duration-200
        ${swipeDirection === 'left' ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}
      `}>
        <div className="bg-blue-500 text-white p-2 rounded-full">
          <Share size={16} />
        </div>
      </div>

      {/* Card content */}
      <div className="relative z-20 bg-card/95 backdrop-blur-sm rounded-xl">
        {/* Header */}
        <div className="flex items-start justify-between p-4 pb-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2 mb-2">
              <h3 className="text-lg font-bold text-foreground truncate">{tool.name}</h3>
              {tool.affiliate && (
                <span className="flex-shrink-0 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20">
                  Partner
                </span>
              )}
            </div>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
              {tool.category}
            </span>
          </div>
          
          {/* Quick actions */}
          <div className="flex items-center space-x-2 ml-3">
            <button
              onClick={() => onFavorite?.(tool.name)}
              className={`
                p-2 rounded-full transition-all duration-200 focus:outline-none
                focus:ring-2 focus:ring-primary focus:ring-offset-2
                ${isFavorited 
                  ? 'bg-red-500 text-white' 
                  : 'bg-gray-500/10 text-gray-400 hover:bg-red-500/10 hover:text-red-400'
                }
              `}
              aria-label={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
            >
              <Heart size={16} fill={isFavorited ? 'white' : 'none'} />
            </button>
            
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-2 rounded-full bg-gray-500/10 text-gray-400 hover:bg-primary/10 hover:text-primary transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label={isExpanded ? 'Show less' : 'Show more'}
            >
              <div className={`transform transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6,9 12,15 18,9" />
                </svg>
              </div>
            </button>
          </div>
        </div>

        {/* Description */}
        <div className="px-4 pb-3">
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
            {tool.description}
          </p>
        </div>

        {/* Quick stats */}
        <div className="px-4 pb-4 grid grid-cols-2 gap-3">
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">Rating:</span>
            <div className="flex items-center space-x-1">
              <Star size={12} className="text-yellow-400" fill="currentColor" />
              <span className="text-xs font-medium">{tool.rating}</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">Level:</span>
            <span className={`text-xs px-2 py-1 rounded-full border ${getDifficultyColor(tool.difficulty)}`}>
              {tool.difficulty}
            </span>
          </div>
        </div>

        {/* Expandable content */}
        <div className={`
          overflow-hidden transition-all duration-300 ease-in-out
          ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
        `}>
          <div className="px-4 pb-4 space-y-4">
            {/* Pricing */}
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Pricing:</span>
              <span className={`text-sm font-medium ${getPricingColor(tool.pricing)}`}>
                {tool.pricing}
              </span>
            </div>

            {/* Platforms */}
            <div>
              <span className="text-sm text-muted-foreground block mb-2">Platforms:</span>
              <div className="flex flex-wrap gap-1">
                {tool.platforms.map((platform, idx) => (
                  <span 
                    key={idx} 
                    className="text-xs bg-muted/50 text-muted-foreground px-2 py-1 rounded"
                  >
                    {platform}
                  </span>
                ))}
              </div>
            </div>

            {/* Key features */}
            <div>
              <span className="text-sm text-muted-foreground block mb-2">Key Features:</span>
              <div className="space-y-1">
                {tool.features.slice(0, 3).map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2 flex-shrink-0" />
                    <span className="text-muted-foreground text-xs">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="p-4 pt-0 flex space-x-3">
          <a
            href={tool.url}
            className="flex-1 cyber-button inline-flex items-center justify-center rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-lg focus-ring"
            aria-label={`Learn more about ${tool.name}`}
          >
            <ExternalLink size={16} className="mr-2" />
            Learn More
          </a>
          
          <button
            onClick={() => onCopy?.(tool.url)}
            className="quick-action"
            aria-label="Copy link"
          >
            <Copy size={16} />
          </button>
          
          <button
            onClick={() => onShare?.(tool)}
            className="quick-action"
            aria-label="Share tool"
          >
            <Share size={16} />
          </button>
        </div>

        {/* Security indicator */}
        <div className="absolute top-4 right-4">
          {tool.category.toLowerCase().includes('mitm') && (
            <div className="flex items-center space-x-1 text-yellow-400" title="Advanced tool - Use responsibly">
              <AlertTriangle size={12} />
            </div>
          )}
          {tool.pricing.toLowerCase().includes('free') && (
            <div className="flex items-center space-x-1 text-green-400 mt-1" title="Open source">
              <Shield size={12} />
            </div>
          )}
        </div>
      </div>

      {/* Swipe hint overlay */}
      <div className="absolute inset-x-0 bottom-0 text-center text-xs text-muted-foreground/50 py-1">
        ← Favorite • Share →
      </div>
    </div>
  )
}

export default memo(MobileToolCard);