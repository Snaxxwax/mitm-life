'use client'

import { useState, useEffect } from 'react'

export default function Search() {
  const [query, setQuery] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [isSearching, setIsSearching] = useState(false)
  const [terminalText, setTerminalText] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      setIsSearching(true)
      // Simulate terminal-style search feedback
      setTimeout(() => {
        setIsSearching(false)
        console.log('Searching for:', query)
        setIsOpen(false)
      }, 800)
    }
  }

  // Terminal typing effect for placeholder
  useEffect(() => {
    const messages = [
      'Search OSINT resources...',
      'Query threat intelligence...',
      'Find security tools...',
      'Browse methodologies...'
    ]
    let messageIndex = 0
    let charIndex = 0
    let isDeleting = false
    
    const typeEffect = () => {
      const currentMessage = messages[messageIndex]
      
      if (!isDeleting) {
        setTerminalText(currentMessage.substring(0, charIndex + 1))
        charIndex++
        
        if (charIndex === currentMessage.length) {
          setTimeout(() => { isDeleting = true }, 2000)
        }
      } else {
        setTerminalText(currentMessage.substring(0, charIndex - 1))
        charIndex--
        
        if (charIndex === 0) {
          isDeleting = false
          messageIndex = (messageIndex + 1) % messages.length
        }
      }
    }
    
    const timer = setInterval(typeEffect, isDeleting ? 50 : 100)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative">
      <form onSubmit={handleSearch} className="relative">
        <input
          type="search"
          placeholder={query ? 'Search OSINT resources...' : terminalText}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsOpen(true)}
          onBlur={() => setTimeout(() => setIsOpen(false), 200)}
          className="input-enhanced w-full pl-10 pr-12 py-2.5 text-sm border border-border rounded-lg bg-background/50 backdrop-blur-sm placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all font-mono"
        />
        {isSearching && (
          <div className="absolute right-3 top-2.5">
            <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        <svg 
          className={`absolute left-3 top-2.5 h-4 w-4 transition-colors duration-200 ${
            isSearching ? 'text-primary animate-pulse' : 'text-muted-foreground'
          }`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
          />
        </svg>
      </form>

      {/* Enhanced Search Results Dropdown */}
      {isOpen && query && (
        <div className="glass-card-enhanced absolute top-full left-0 right-0 mt-2 bg-card/95 border border-border rounded-lg shadow-xl backdrop-blur-md z-[110] overflow-hidden">
          <div className="scan-effect p-4">
            <div className="text-sm text-muted-foreground mb-3 font-mono">
              <span className="text-primary">&gt;</span> Searching for &quot;{query}&quot;
              <span className="terminal-cursor"></span>
            </div>
            <div className="stagger-fade-in space-y-1">
              <a href="/blog" className="data-flow group block p-3 rounded-md hover:bg-accent/50 transition-all duration-300 border border-transparent hover:border-primary/20">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-sm group-hover:text-primary transition-colors">Blog Posts</div>
                    <div className="text-xs text-muted-foreground">OSINT methodologies and guides</div>
                  </div>
                  <div className="text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">[ENTER]</div>
                </div>
              </a>
              <a href="/tools" className="data-flow group block p-3 rounded-md hover:bg-accent/50 transition-all duration-300 border border-transparent hover:border-primary/20">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-sm group-hover:text-primary transition-colors">Tools & Resources</div>
                    <div className="text-xs text-muted-foreground">Professional OSINT tools</div>
                  </div>
                  <div className="text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">[ENTER]</div>
                </div>
              </a>
              
            </div>
          </div>
        </div>
      )}
    </div>
  )
}