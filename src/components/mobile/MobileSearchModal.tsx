'use client'

import { useState, useEffect, useRef } from 'react'
import { Search, Mic, X, Filter, Clock, TrendingUp } from 'lucide-react'

interface SearchResult {
  id: string
  name: string
  description: string
  category: string
  type: 'tool' | 'article' | 'technique'
  url: string
  rating?: number
}

interface MobileSearchModalProps {
  isOpen: boolean
  onClose: () => void
  onSearch?: (query: string) => void
  recentSearches?: string[]
  trendingSearches?: string[]
  searchResults?: SearchResult[]
  className?: string
}

export default function MobileSearchModal({ 
  isOpen, 
  onClose, 
  onSearch,
  recentSearches = ['Nmap', 'Burp Suite', 'MITM', 'Metasploit'],
  trendingSearches = ['WiFi Pineapple', 'Social Engineering', 'OSINT', 'C2 Framework'],
  searchResults = [],
  className = '' 
}: MobileSearchModalProps) {
  const [query, setQuery] = useState('')
  const [isListening, setIsListening] = useState(false)
  const [showFilters, setShowFilters] = useState(false)
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])
  const inputRef = useRef<HTMLInputElement>(null)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const recognitionRef = useRef<any>(null)

  const filters = [
    'Free Tools',
    'MITM Frameworks',
    'Network Scanning',
    'Web Testing',
    'Wireless Security',
    'Social Engineering',
    'Exploitation',
    'Beginner Friendly',
    'Open Source'
  ]

  useEffect(() => {
    if (isOpen) {
      // Focus input when modal opens
      setTimeout(() => inputRef.current?.focus(), 100)
      
      // Initialize speech recognition
      if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        recognitionRef.current = new (SpeechRecognition as any)();
        if (recognitionRef.current) {
          recognitionRef.current.continuous = false
          recognitionRef.current.interimResults = false
          recognitionRef.current.lang = 'en-US'

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          recognitionRef.current.onresult = (event: any) => {
            const transcript = event.results[0][0].transcript
            setQuery(transcript)
            onSearch?.(transcript)
            setIsListening(false)
          }

          recognitionRef.current.onerror = () => {
            setIsListening(false)
          }

          recognitionRef.current.onend = () => {
            setIsListening(false)
          }
        }
      }
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop()
      }
    }
  }, [isOpen, onSearch])

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery)
    onSearch?.(searchQuery)
  }

  const startVoiceSearch = () => {
    if (recognitionRef.current && !isListening) {
      setIsListening(true)
      recognitionRef.current.start()
      
      // Haptic feedback
      if (navigator.vibrate) {
        navigator.vibrate([50, 50, 50])
      }
    }
  }

  const toggleFilter = (filter: string) => {
    setSelectedFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    )
  }

  const clearSearch = () => {
    setQuery('')
    setSelectedFilters([])
    inputRef.current?.focus()
  }

  if (!isOpen) return null

  return (
    <div 
      className={`fixed inset-0 z-[120] bg-background/95 backdrop-blur-lg ${className}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="search-modal-title"
    >
      <div className="flex flex-col h-full safe-area-inset-top safe-area-inset-bottom">
        {/* Header */}
        <div className="flex items-center p-4 border-b border-border/20">
          <div className="flex-1 relative">
            <div className="relative">
              <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch(query)}
                placeholder="Search tools, techniques, articles..."
                className="w-full pl-10 pr-20 py-3 bg-card/50 border border-border/30 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all text-base"
                autoComplete="off"
                autoFocus
              />
              
              {/* Voice search button */}
              <button
                onClick={startVoiceSearch}
                className={`
                  absolute right-12 top-1/2 -translate-y-1/2 p-2 rounded-lg
                  transition-all duration-200 focus:outline-none
                  ${isListening 
                    ? 'bg-red-500 text-white animate-pulse' 
                    : 'bg-primary/10 text-primary hover:bg-primary/20'
                  }
                `}
                aria-label="Voice search"
                disabled={!recognitionRef.current}
              >
                <Mic size={16} />
              </button>
              
              {/* Clear button */}
              {query && (
                <button
                  onClick={clearSearch}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground transition-all"
                  aria-label="Clear search"
                >
                  <X size={14} />
                </button>
              )}
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="ml-3 p-3 rounded-xl bg-card/50 border border-border/30 hover:bg-card transition-all focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Close search"
          >
            <X size={20} />
          </button>
        </div>

        {/* Filters */}
        <div className="p-4 border-b border-border/20">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium text-foreground">Filters</h3>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-1 text-sm text-primary hover:text-primary/80 transition-colors"
            >
              <Filter size={14} />
              <span>{showFilters ? 'Hide' : 'Show'}</span>
            </button>
          </div>
          
          {showFilters && (
            <div className="flex flex-wrap gap-2">
              {filters.map(filter => (
                <button
                  key={filter}
                  onClick={() => toggleFilter(filter)}
                  className={`
                    px-3 py-1 rounded-full text-xs font-medium transition-all
                    ${selectedFilters.includes(filter)
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-card border border-border/30 text-muted-foreground hover:text-foreground'
                    }
                  `}
                >
                  {filter}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {query ? (
            /* Search Results */
            <div className="p-4">
              <h3 className="text-sm font-medium text-foreground mb-3">
                Search Results {searchResults.length > 0 && `(${searchResults.length})`}
              </h3>
              
              {searchResults.length > 0 ? (
                <div className="space-y-3">
                  {searchResults.map(result => (
                    <div
                      key={result.id}
                      className="p-4 rounded-xl bg-card/50 border border-border/20 hover:border-primary/30 transition-all cursor-pointer"
                      onClick={() => window.location.href = result.url}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-foreground truncate">{result.name}</h4>
                          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                            {result.description}
                          </p>
                          <div className="flex items-center space-x-3 mt-2">
                            <span className="text-xs px-2 py-1 rounded bg-primary/10 text-primary">
                              {result.category}
                            </span>
                            <span className="text-xs text-muted-foreground capitalize">
                              {result.type}
                            </span>
                          </div>
                        </div>
                        {result.rating && (
                          <div className="flex items-center space-x-1 ml-3">
                            <span className="text-yellow-400">★</span>
                            <span className="text-xs text-muted-foreground">{result.rating}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Search size={48} className="mx-auto text-muted-foreground/50 mb-3" />
                  <p className="text-muted-foreground">No results found for &quot;{query}&quot;</p>
                  <p className="text-sm text-muted-foreground/70 mt-1">
                    Try different keywords or remove filters
                  </p>
                </div>
              )}
            </div>
          ) : (
            /* Default state */
            <div className="p-4 space-y-6">
              {/* Recent Searches */}
              {recentSearches.length > 0 && (
                <div>
                  <div className="flex items-center space-x-2 mb-3">
                    <Clock size={16} className="text-muted-foreground" />
                    <h3 className="text-sm font-medium text-foreground">Recent Searches</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {recentSearches.map(search => (
                      <button
                        key={search}
                        onClick={() => handleSearch(search)}
                        className="px-3 py-2 rounded-lg bg-card/50 border border-border/20 text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all"
                      >
                        {search}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Trending Searches */}
              {trendingSearches.length > 0 && (
                <div>
                  <div className="flex items-center space-x-2 mb-3">
                    <TrendingUp size={16} className="text-muted-foreground" />
                    <h3 className="text-sm font-medium text-foreground">Trending</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {trendingSearches.map(search => (
                      <button
                        key={search}
                        onClick={() => handleSearch(search)}
                        className="px-3 py-2 rounded-lg bg-primary/10 border border-primary/20 text-sm text-primary hover:bg-primary/20 transition-all"
                      >
                        {search}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Search tips */}
              <div className="pt-4 border-t border-border/20">
                <h3 className="text-sm font-medium text-foreground mb-3">Search Tips</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• Use quotes for exact matches: &quot;social engineering&quot;</p>
                  <p>• Filter by category using the filter buttons above</p>
                  <p>• Try voice search with the microphone button</p>
                  <p>• Search for tools, techniques, or articles</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Voice search indicator */}
        {isListening && (
          <div className="absolute inset-x-0 bottom-0 bg-red-500/10 border-t border-red-500/20 p-4">
            <div className="flex items-center justify-center space-x-3">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
              <span className="text-sm text-red-400 font-medium">Listening...</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}