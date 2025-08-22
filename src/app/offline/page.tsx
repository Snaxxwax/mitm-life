'use client'

import { useEffect, useState } from 'react';

interface CachedTool {
  slug?: string;
  id?: string;
  name?: string;
  category?: string;
}

export default function OfflinePage() {
  const [isOnline, setIsOnline] = useState(false);
  const [cachedTools, setCachedTools] = useState<CachedTool[]>([]);
  const [lastSync, setLastSync] = useState<string>('');

  useEffect(() => {
    // Check online status
    setIsOnline(navigator.onLine);

    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  useEffect(() => {
    // Load cached data
    loadCachedData();
  }, []);

  const loadCachedData = async () => {
    try {
      if ('serviceWorker' in navigator && 'caches' in window) {
        const cache = await caches.open('mitm-life-v1.0.0');
        const cachedResponse = await cache.match('/api/tools');
        
        if (cachedResponse) {
          const tools = await cachedResponse.json() as CachedTool[];
          setCachedTools(tools.slice(0, 6)); // Show first 6 tools
        }

        // Get last sync time from localStorage
        const lastSyncTime = localStorage.getItem('lastSyncTime');
        if (lastSyncTime) {
          setLastSync(new Date(lastSyncTime).toLocaleString());
        }
      }
    } catch (error) {
      console.warn('Failed to load cached data:', error);
    }
  };

  const retryConnection = () => {
    window.location.reload();
  };

  const goHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      <div className="max-w-md w-full text-center">
        {/* Offline Status */}
        <div className="mb-8">
          <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
            isOnline ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
          }`}>
            {isOnline ? (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
              </svg>
            ) : (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-12.728 12.728m0-12.728l12.728 12.728" />
              </svg>
            )}
          </div>
          
          <h1 className="text-2xl font-bold mb-2">
            {isOnline ? 'Connection Restored' : 'Offline Mode'}
          </h1>
          
          <p className="text-muted-foreground mb-4">
            {isOnline 
              ? 'Your connection has been restored. You can now access all features.'
              : 'No network connection detected. Operating in field mode with cached data.'
            }
          </p>

          {lastSync && (
            <p className="text-xs text-muted-foreground">
              Last sync: {lastSync}
            </p>
          )}
        </div>

        {/* Cached Tools */}
        {cachedTools.length > 0 && (
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4 text-primary">Available Tools (Cached)</h2>
            <div className="grid grid-cols-2 gap-3">
              {cachedTools.map((tool: CachedTool, index) => (
                <a
                  key={index}
                  href={`/tools/${tool.slug || tool.id}`}
                  className="p-3 rounded-lg border border-border/40 hover:border-primary/40 transition-colors text-left"
                >
                  <div className="text-sm font-medium">{tool.name || `Tool ${index + 1}`}</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {tool.category || 'General'}
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Field Operations Status */}
        <div className="mb-8 p-4 rounded-lg bg-card/50 border border-border/40">
          <h3 className="font-semibold mb-3 text-primary">Field Operations Status</h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-between">
              <span>Cached Tools</span>
              <span className="text-green-400">{cachedTools.length} available</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Offline Mode</span>
              <span className="text-green-400">Active</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Stealth Capable</span>
              <span className="text-green-400">Ready</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          {isOnline ? (
            <button
              onClick={goHome}
              className="w-full py-3 px-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-colors touch-manipulation"
            >
              Return to Full Mode
            </button>
          ) : (
            <button
              onClick={retryConnection}
              className="w-full py-3 px-4 bg-primary/20 hover:bg-primary/30 text-primary rounded-lg font-medium transition-colors touch-manipulation"
            >
              Retry Connection
            </button>
          )}
          
          <button
            onClick={() => window.history.back()}
            className="w-full py-3 px-4 bg-card hover:bg-card/80 border border-border/40 rounded-lg font-medium transition-colors touch-manipulation"
          >
            Go Back
          </button>
        </div>

        {/* Offline Tips */}
        <div className="mt-8 p-4 rounded-lg bg-muted/20 border border-border/20">
          <h4 className="font-medium mb-2 text-sm">Offline Field Tips</h4>
          <ul className="text-xs text-muted-foreground space-y-1 text-left">
            <li>• Cached tools remain fully functional</li>
            <li>• Data will sync when connection returns</li>
            <li>• Use cached research for reference</li>
            <li>• Battery conservation mode active</li>
          </ul>
        </div>
      </div>
    </div>
  );
}