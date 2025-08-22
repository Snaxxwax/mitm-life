'use client'

import { useState, useEffect, useCallback, lazy, Suspense } from 'react';
import { siteConfig } from '../../site.config';
import Search from './Search';
import { rafThrottle, createBatteryTypeGuard, type BatteryManager } from '@/utils/performance';

// Lazy load mobile components
const MobileNavigation = lazy(() => import('./MobileNavigation'));
const MobilePerformanceMonitor = lazy(() => import('./MobilePerformanceMonitor'));

interface ClientLayoutProps {
  children: React.ReactNode;
}


export default function ClientLayout({ children }: ClientLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isOnline, setIsOnline] = useState(true);
  const [batteryLevel, setBatteryLevel] = useState<number | null>(null);

  // Mobile-first scroll detection for header effects (optimized)
  useEffect(() => {
    const handleScroll = rafThrottle(() => {
      setIsScrolled(window.scrollY > 10);
    });

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Network status monitoring for field operations
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Battery API for field operations awareness (type-safe)
  useEffect(() => {
    const isBatterySupported = createBatteryTypeGuard();
    
    if (isBatterySupported(navigator)) {
      navigator.getBattery().then((battery: BatteryManager) => {
        setBatteryLevel(battery.level);
        
        const updateBatteryLevel = () => setBatteryLevel(battery.level);
        battery.addEventListener('levelchange', updateBatteryLevel);
        
        return () => battery.removeEventListener('levelchange', updateBatteryLevel);
      }).catch(() => {
        // Battery API not supported or permission denied
      });
    }
  }, []);

  // Service Worker registration for offline capabilities
  useEffect(() => {
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('SW registered:', registration);
          
          // Check for updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  // New version available
                  if (confirm('New version available. Reload to update?')) {
                    window.location.reload();
                  }
                }
              });
            }
          });
        })
        .catch((error) => {
          console.warn('SW registration failed:', error);
        });
    }
  }, []);

  // Touch gesture handling for mobile navigation
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    // Swipe right to open menu, left to close (from edge only)
    if (isRightSwipe && !isMobileMenuOpen && touchStart < 50) {
      setIsMobileMenuOpen(true);
    } else if (isLeftSwipe && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [touchStart, touchEnd, isMobileMenuOpen]);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }, [isMobileMenuOpen]);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen]);

  return (
    <div 
      className="relative flex min-h-screen flex-col touch-manipulation"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Mobile-First Header */}
      <header className={`sticky top-0 z-[100] w-full border-b border-border/40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-lg shadow-lg' 
          : 'bg-background/80 backdrop-blur-md'
      }`}>
        <div className="container mx-auto flex h-14 sm:h-16 items-center justify-between px-4 sm:px-6">
          {/* Mobile Logo - Optimized for thumb zone */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2 group touch-manipulation haptic-feedback" aria-label="MITM.life Home">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center transition-transform duration-200 group-hover:scale-105 group-active:scale-95">
                <span className="text-primary-foreground font-bold text-sm sm:text-base">M</span>
              </div>
              <span className="hidden xs:inline-block font-bold text-lg sm:text-xl bg-gradient-to-r from-primary to-green-400 bg-clip-text text-transparent">
                {siteConfig.name}
              </span>
            </a>
          </div>

          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden md:flex flex-1 items-center justify-between space-x-4 ml-8">
            <div className="flex-1 max-w-sm">
              <Search />
            </div>
            <nav className="flex items-center space-x-6">
              <a
                href="/blog"
                className="text-sm font-medium transition-all duration-200 hover:text-primary hover:scale-105 focus-ring rounded-md px-3 py-2 touch-manipulation"
              >
                Research
              </a>
              <a
                href="/tools"
                className="text-sm font-medium transition-all duration-200 hover:text-primary hover:scale-105 focus-ring rounded-md px-3 py-2 touch-manipulation"
              >
                Arsenal
              </a>
              <a
                href="/about"
                className="text-sm font-medium transition-all duration-200 hover:text-primary hover:scale-105 focus-ring rounded-md px-3 py-2 touch-manipulation"
              >
                Mission
              </a>
            </nav>
          </div>

          {/* Mobile Actions - Right side thumb zone */}
          <div className="flex items-center space-x-2 md:hidden">
            {/* Field Status Indicator */}
            <div className="flex items-center space-x-2">
              {/* Network Status */}
              <div className={`w-2 h-2 rounded-full ${isOnline ? 'bg-green-400' : 'bg-red-400'} animate-pulse`} title={isOnline ? 'Online' : 'Offline'} />
              
              {/* Battery Level (if available) */}
              {batteryLevel !== null && (
                <div className={`text-xs ${batteryLevel < 0.2 ? 'text-red-400' : batteryLevel < 0.5 ? 'text-yellow-400' : 'text-green-400'}`}>
                  {Math.round(batteryLevel * 100)}%
                </div>
              )}
            </div>

            {/* Mobile Search Button */}
            <button 
              className="quick-action haptic-feedback"
              aria-label="Search"
              onClick={() => {
                // TODO: Implement mobile search modal
                console.log('Mobile search clicked');
              }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            
            {/* Mobile Menu Toggle */}
            <Suspense fallback={<div className="w-6 h-6" />}>
              <MobileNavigation 
                isOpen={isMobileMenuOpen} 
                onToggle={toggleMobileMenu} 
              />
            </Suspense>
          </div>
        </div>
      </header>

      {/* Main Content with mobile-first spacing */}
      <main className="flex-1 relative safe-area-inset-bottom">
        {children}
      </main>

      {/* Mobile-Optimized Footer */}
      <footer className="border-t border-border/40 bg-card/50 backdrop-blur-sm safe-area-inset-bottom">
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
          {/* Mobile-first footer layout */}
          <div className="grid gap-6 sm:gap-8 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">M</span>
                </div>
                <span className="font-bold text-lg bg-gradient-to-r from-primary to-green-400 bg-clip-text text-transparent">
                  {siteConfig.name}
                </span>
              </div>
              
              <div className="flex items-center gap-4 mb-4 sm:mb-0">
                <div className="field-status operational">
                  <div className="status-indicator w-2 h-2 rounded-full bg-green-400"></div>
                  <span className="terminal-text">Field Operational</span>
                </div>
              </div>

              {/* Mobile Quick Actions */}
              <div className="flex sm:hidden mt-4 space-x-3">
                <a 
                  href="/tools" 
                  className="flex-1 py-3 px-4 bg-primary/10 hover:bg-primary/20 rounded-lg text-center text-sm font-medium transition-colors touch-manipulation haptic-feedback"
                >
                  Tools
                </a>
                <a 
                  href="/blog" 
                  className="flex-1 py-3 px-4 bg-primary/10 hover:bg-primary/20 rounded-lg text-center text-sm font-medium transition-colors touch-manipulation haptic-feedback"
                >
                  Research
                </a>
              </div>
            </div>
            
            <div className="hidden sm:block">
              <h3 className="font-semibold mb-4 text-foreground">Arsenal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/tools" className="hover:text-primary transition-colors touch-manipulation">Red Team Tools</a></li>
                <li><a href="/blog" className="hover:text-primary transition-colors touch-manipulation">Techniques</a></li>
                <li><a href="/about" className="hover:text-primary transition-colors touch-manipulation">Mission</a></li>
              </ul>
            </div>

            <div className="hidden md:block">
              <h3 className="font-semibold mb-4 text-foreground">Field Ops</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <span className={`${isOnline ? 'text-green-400' : 'text-red-400'}`}>
                    • {isOnline ? 'Network Ready' : 'Offline Mode'}
                  </span>
                </li>
                <li><span className="text-green-400">• Stealth Capable</span></li>
                <li><span className="text-green-400">• Secure Comms</span></li>
              </ul>
            </div>
          </div>
          
          {/* Mobile-optimized bottom section */}
          <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-border/40 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
              <p>© 2025 {siteConfig.name}</p>
              <div className="flex items-center gap-4">
                <a href="/privacy" className="hover:text-primary transition-colors touch-manipulation">Privacy</a>
                <a href="/terms" className="hover:text-primary transition-colors touch-manipulation">Terms</a>
              </div>
            </div>
            <div className="trust-badge scan-effect">
              <span className="text-xs font-medium">🛡️ Ethical Operations</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Performance Monitor for Field Operations */}
      <Suspense fallback={null}>
        <MobilePerformanceMonitor 
          onMetricsUpdate={(metrics) => {
            // Update battery level state
            setBatteryLevel(metrics.batteryLevel);
            
            // Update online status
            setIsOnline(metrics.isOnline);
            
            // Log performance metrics in development
            if (process.env.NODE_ENV === 'development') {
              console.log('Field Metrics:', metrics);
            }
          }}
          showDebugInfo={process.env.NODE_ENV === 'development'}
        />
      </Suspense>
    </div>
  );
}