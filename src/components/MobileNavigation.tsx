'use client'

import { useState, useEffect } from 'react'

interface MobileNavigationProps {
  isOpen: boolean
  onToggle: () => void
}

export default function MobileNavigation({ isOpen, onToggle }: MobileNavigationProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!mounted) return null

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={onToggle}
        className="md:hidden relative z-[110] w-11 h-11 rounded-lg bg-background/80 backdrop-blur-sm border border-border/40 flex items-center justify-center touch-manipulation"
        aria-label="Toggle mobile menu"
        aria-expanded={isOpen}
      >
        <div className="w-6 h-6 flex flex-col justify-center items-center">
          <span
            className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${
              isOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${
              isOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'
            }`}
          />
        </div>
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[90] bg-background/95 backdrop-blur-md md:hidden"
          onClick={onToggle}
        >
          <div className="flex flex-col h-full pt-20 px-6">
            {/* Quick Actions */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                Quick Access
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="/tools"
                  className="mobile-nav-card group"
                  onClick={onToggle}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 11.172V5l-1-1z" />
                      </svg>
                    </div>
                    <span className="font-medium">Tools</span>
                  </div>
                </a>
                
                <a
                  href="/blog"
                  className="mobile-nav-card group"
                  onClick={onToggle}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                    </div>
                    <span className="font-medium">Research</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Main Navigation */}
            <div className="space-y-1 flex-1">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                Navigation
              </h3>
              
              <a
                href="/"
                className="mobile-nav-item"
                onClick={onToggle}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v3H8V5z" />
                </svg>
                <span>Home</span>
                <div className="ml-auto w-2 h-2 rounded-full bg-green-400 opacity-75"></div>
              </a>

              <a
                href="/tools"
                className="mobile-nav-item"
                onClick={onToggle}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 11.172V5l-1-1z" />
                </svg>
                <span>Red Team Arsenal</span>
                <div className="ml-auto text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full">18</div>
              </a>

              <a
                href="/blog"
                className="mobile-nav-item"
                onClick={onToggle}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
                <span>Research & Techniques</span>
              </a>

              <a
                href="/about"
                className="mobile-nav-item"
                onClick={onToggle}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>About & Mission</span>
              </a>
            </div>

            {/* Bottom Actions */}
            <div className="border-t border-border/40 pt-6 pb-8">
              <div className="grid grid-cols-1 gap-3">
                <button className="mobile-nav-action bg-primary/10 hover:bg-primary/20 text-primary">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <span>Search Tools</span>
                </button>
                
                <button className="mobile-nav-action bg-green-500/10 hover:bg-green-500/20 text-green-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <span>Offline Mode</span>
                </button>
              </div>

              {/* Status Indicator */}
              <div className="mt-4 flex items-center justify-center space-x-2 text-xs text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                <span>System Operational • Field Ready</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}