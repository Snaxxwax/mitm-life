'use client'

import { useState, useEffect, useMemo } from 'react'
import FloatingActionButton from '@/components/mobile/FloatingActionButton'
import MobileSearchModal from '@/components/mobile/MobileSearchModal'
import CategorySwiper from '@/components/mobile/CategorySwiper'
import MobileToolCard from '@/components/mobile/MobileToolCard'
import { toolCategories, getAllTools, getCategoryNames } from '@/data/tools'
import type { Tool } from '@/types/tools'


export default function ToolsPage() {
  const [activeCategory, setActiveCategory] = useState('All Tools')
  const [searchModalOpen, setSearchModalOpen] = useState(false)
  const [favorites, setFavorites] = useState<string[]>([])
  const [filteredTools, setFilteredTools] = useState<Tool[]>([])
  // Load favorites from localStorage
  useEffect(() => {
    const savedFavorites = localStorage.getItem('tool-favorites')
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites))
    }
  }, [])

  const allTools = useMemo(() => getAllTools(), []);
  const freeTools = useMemo(() => allTools.filter(tool => tool.pricing.toLowerCase().includes('free')), [allTools]);
  
  const categories = useMemo(() => ['All Tools', ...getCategoryNames().map(cat => cat.split(' ')[0])], []);

  // Filter tools based on active category
  useEffect(() => {
    if (activeCategory === 'All Tools') {
      setFilteredTools(allTools)
    } else if (activeCategory === 'Favorites') {
      setFilteredTools(allTools.filter(tool => favorites.includes(tool.name)))
    } else {
      const filtered = allTools.filter(tool => 
        tool.category.toLowerCase().includes(activeCategory.toLowerCase()) ||
        toolCategories.find(cat => 
          cat.name.toLowerCase().includes(activeCategory.toLowerCase()) &&
          cat.tools.some(t => t.name === tool.name)
        )
      )
      setFilteredTools(filtered)
    }
  }, [activeCategory, allTools, favorites]);

  const handleQuickAction = (action: string) => {
    switch (action) {
      case 'search':
        setSearchModalOpen(true)
        break
      case 'favorites':
        setActiveCategory('Favorites')
        setFilteredTools(allTools.filter(tool => favorites.includes(tool.name)))
        break
      case 'share':
        if (navigator.share) {
          navigator.share({
            title: 'Red Team Tools - MITM.life',
            text: 'Professional cybersecurity tools and frameworks',
            url: window.location.href
          })
        }
        break
      case 'copy':
        navigator.clipboard.writeText(window.location.href)
        break
      default:
        console.log('Quick action:', action)
    }
  }

  const handleFavorite = (toolName: string) => {
    const newFavorites = favorites.includes(toolName)
      ? favorites.filter(name => name !== toolName)
      : [...favorites, toolName]
    
    setFavorites(newFavorites)
    localStorage.setItem('tool-favorites', JSON.stringify(newFavorites))
    
    // Haptic feedback
    if (navigator.vibrate) {
      navigator.vibrate(50)
    }
  }

  const handleShareTool = (tool: Tool) => {
    if (navigator.share) {
      navigator.share({
        title: tool.name,
        text: tool.description,
        url: `${window.location.origin}${tool.url}`
      })
    }
  }

  const handleCopyToolLink = (url: string) => {
    navigator.clipboard.writeText(`${window.location.origin}${url}`)
    // Could show a toast notification here
  }

  return (
    <div className="relative">
      {/* Header Section */}
      <section className="relative py-16 sm:py-20 matrix-bg safe-area-inset-top">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center rounded-full bg-primary/10 border border-primary/20 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm">
              <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse" />
              Professional Tool Collection
            </div>
            <h1 className="mb-8 text-hero font-bold tracking-tight">
              Professional{' '}
              <span className="gradient-text block sm:inline">
                Red Team Arsenal
              </span>
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Comprehensive collection of ethical hacking and penetration testing tools for cybersecurity professionals.
            </p>
            
            {/* Mobile search trigger */}
            <button
              onClick={() => setSearchModalOpen(true)}
              className="md:hidden w-full max-w-sm mx-auto mobile-nav-action bg-card/50 border border-border/30 text-muted-foreground hover:text-foreground hover:border-primary/30 mb-6"
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Search tools, techniques...
            </button>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10 mb-12">
        <div className="mx-auto max-w-6xl">
          <div className="glass-card p-6 sm:p-8 grid gap-6 sm:gap-8 grid-cols-3 text-center">
            <div className="group">
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-2 sm:mb-3 group-hover:scale-110 transition-transform">{allTools.length}</div>
              <div className="text-xs sm:text-sm text-muted-foreground font-medium">Professional Tools</div>
            </div>
            <div className="group">
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-2 sm:mb-3 group-hover:scale-110 transition-transform">{freeTools.length}</div>
              <div className="text-xs sm:text-sm text-muted-foreground font-medium">Free Tools</div>
            </div>
            <div className="group">
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-2 sm:mb-3 group-hover:scale-110 transition-transform">{favorites.length}</div>
              <div className="text-xs sm:text-sm text-muted-foreground font-medium">Favorites</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Category Swiper */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="mx-auto max-w-6xl">
          <CategorySwiper 
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            className="mb-6"
          />
          
          {/* Desktop search bar */}
          <div className="hidden md:block">
            <div className="cyber-card p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <h3 className="text-sm font-medium text-foreground">Filter Tools:</h3>
                  <span className="text-xs text-muted-foreground">
                    {filteredTools.length} {filteredTools.length === 1 ? 'tool' : 'tools'} found
                  </span>
                </div>
                <div className="relative">
                  <button
                    onClick={() => setSearchModalOpen(true)}
                    className="flex items-center space-x-2 pl-10 pr-4 py-2.5 w-64 border border-primary/30 rounded-lg bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-all text-left text-muted-foreground"
                  >
                    <span>Search tools...</span>
                  </button>
                  <svg className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Tool Cards */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="mx-auto max-w-7xl">
          {/* Active category info */}
          <div className="mb-8">
            <h2 className="text-display font-bold mb-2">
              {activeCategory === 'All Tools' ? 'All Tools' : activeCategory}
            </h2>
            <p className="text-muted-foreground">
              {activeCategory === 'All Tools' 
                ? `${filteredTools.length} professional cybersecurity tools`
                : activeCategory === 'Favorites'
                ? `${filteredTools.length} favorite tools`
                : `${filteredTools.length} tools in ${activeCategory}`
              }
            </p>
          </div>
          
          {/* Mobile tool grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredTools.length > 0 ? (
              filteredTools.map((tool, index) => (
                <MobileToolCard
                  key={`${tool.name}-${index}`}
                  tool={tool}
                  onFavorite={handleFavorite}
                  onShare={handleShareTool}
                  onCopy={handleCopyToolLink}
                  isFavorited={favorites.includes(tool.name)}
                  className="stagger-fade-in"
                />
              ))
            ) : (
              <div className="col-span-full text-center py-16">
                <div className="w-16 h-16 bg-muted/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-foreground mb-2">No tools found</h3>
                <p className="text-muted-foreground mb-6">
                  {activeCategory === 'Favorites' 
                    ? 'You haven\'t favorited any tools yet. Tap the heart icon on tools to save them here.'
                    : `No tools found in ${activeCategory}. Try a different category or search term.`
                  }
                </p>
                <button
                  onClick={() => {
                    setActiveCategory('All Tools')
                    setSearchModalOpen(true)
                  }}
                  className="cyber-button bg-primary text-primary-foreground px-6 py-3 rounded-lg"
                >
                  Browse All Tools
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter/Updates Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="mx-auto max-w-4xl">
          <div className="glass-card p-12 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-display font-bold mb-6">Stay Updated</h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                Get notified about new red team tools, techniques, and ethical hacking methodologies delivered to your inbox.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-4 py-3 border border-primary/30 rounded-lg bg-background/50 backdrop-blur-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all"
                />
                <button className="cyber-button inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg focus-ring">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-blue-500/5 rounded-xl"></div>
          </div>
        </div>
      </section>

      {/* Search Modal */}
      <MobileSearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onSearch={(query) => {
          // Implement search logic here
          console.log('Searching for:', query)
        }}
        searchResults={[]} // Add actual search results
      />
      
      {/* Floating Action Button - Development only */}
      {process.env.NODE_ENV === 'development' && (
        <FloatingActionButton onQuickAction={handleQuickAction} />
      )}
      
      {/* Affiliate Disclaimer */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-16 safe-area-inset-bottom">
        <div className="mx-auto max-w-4xl">
          <div className="cyber-card p-4 sm:p-6 text-center border-l-4 border-l-primary">
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">Legal Disclaimer:</span> All tools listed are for educational purposes and authorized penetration testing only. Users are responsible for ensuring compliance with applicable laws and obtaining proper authorization before using these tools. Some tools may include affiliate partnerships that help fund our educational content.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}