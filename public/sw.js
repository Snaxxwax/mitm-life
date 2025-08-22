// MITM.life Service Worker - Red Team Field Operations
const CACHE_NAME = 'mitm-life-v1.0.0';
const OFFLINE_URL = '/offline';

// Critical resources for field operations
const CRITICAL_RESOURCES = [
  '/',
  '/tools',
  '/blog',
  '/about',
  '/offline',
  '/manifest.json',
  '/_next/static/css/app/layout.css',
  '/_next/static/chunks/webpack.js',
  '/_next/static/chunks/main.js',
  '/_next/static/chunks/pages/_app.js',
];

// Tool data that should be available offline
const TOOL_CACHE_PATTERNS = [
  /^\/api\/tools/,
  /^\/tools\/.*/,
  /^\/blog\/.*/,
];

// Install event - cache critical resources
self.addEventListener('install', (event) => {
  console.log('[SW] Installing service worker for field operations');
  
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      
      try {
        await cache.addAll(CRITICAL_RESOURCES);
        console.log('[SW] Critical resources cached for offline access');
      } catch (error) {
        console.warn('[SW] Failed to cache some critical resources:', error);
        
        // Cache resources individually to avoid failing on 404s
        for (const resource of CRITICAL_RESOURCES) {
          try {
            await cache.add(resource);
          } catch (err) {
            console.warn(`[SW] Failed to cache ${resource}:`, err);
          }
        }
      }
      
      // Skip waiting to activate immediately
      self.skipWaiting();
    })()
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating service worker');
  
  event.waitUntil(
    (async () => {
      // Clean up old caches
      const cacheNames = await caches.keys();
      await Promise.all(
        cacheNames
          .filter(cacheName => cacheName !== CACHE_NAME)
          .map(cacheName => {
            console.log('[SW] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          })
      );
      
      // Take control of all pages
      self.clients.claim();
    })()
  );
});

// Fetch event - implement cache strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Skip non-GET requests
  if (request.method !== 'GET') return;
  
  // Skip Chrome extensions and other protocols
  if (!url.protocol.startsWith('http')) return;
  
  event.respondWith(handleFetch(request));
});

async function handleFetch(request) {
  const url = new URL(request.url);
  
  try {
    // Network-first strategy for API calls and dynamic content
    if (isApiRequest(url) || isDynamicContent(url)) {
      return await networkFirstStrategy(request);
    }
    
    // Cache-first strategy for static assets
    if (isStaticAsset(url)) {
      return await cacheFirstStrategy(request);
    }
    
    // Stale-while-revalidate for HTML pages
    return await staleWhileRevalidateStrategy(request);
    
  } catch (error) {
    console.warn('[SW] Fetch failed:', error);
    
    // Return offline page for navigation requests
    if (request.mode === 'navigate') {
      const cache = await caches.open(CACHE_NAME);
      return await cache.match(OFFLINE_URL) || new Response('Offline');
    }
    
    throw error;
  }
}

// Cache strategies
async function networkFirstStrategy(request) {
  try {
    const response = await fetch(request);
    
    if (response.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone());
    }
    
    return response;
  } catch (error) {
    const cache = await caches.open(CACHE_NAME);
    const cachedResponse = await cache.match(request);
    
    if (cachedResponse) {
      return cachedResponse;
    }
    
    throw error;
  }
}

async function cacheFirstStrategy(request) {
  const cache = await caches.open(CACHE_NAME);
  const cachedResponse = await cache.match(request);
  
  if (cachedResponse) {
    return cachedResponse;
  }
  
  const response = await fetch(request);
  
  if (response.ok) {
    cache.put(request, response.clone());
  }
  
  return response;
}

async function staleWhileRevalidateStrategy(request) {
  const cache = await caches.open(CACHE_NAME);
  const cachedResponse = await cache.match(request);
  
  const fetchPromise = fetch(request).then(response => {
    if (response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  }).catch(() => {
    // Network failed, return cached version if available
    return cachedResponse;
  });
  
  return cachedResponse || await fetchPromise;
}

// Helper functions
function isApiRequest(url) {
  return url.pathname.startsWith('/api/');
}

function isDynamicContent(url) {
  return TOOL_CACHE_PATTERNS.some(pattern => pattern.test(url.pathname));
}

function isStaticAsset(url) {
  const staticExtensions = ['.js', '.css', '.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg', '.ico', '.woff', '.woff2'];
  return staticExtensions.some(ext => url.pathname.endsWith(ext)) || 
         url.pathname.startsWith('/_next/static/');
}

// Background sync for critical data
self.addEventListener('sync', (event) => {
  console.log('[SW] Background sync triggered:', event.tag);
  
  if (event.tag === 'sync-tools-data') {
    event.waitUntil(syncToolsData());
  }
});

async function syncToolsData() {
  try {
    console.log('[SW] Syncing tools data in background');
    
    // Fetch and cache latest tools data
    const response = await fetch('/api/tools');
    if (response.ok) {
      const cache = await caches.open(CACHE_NAME);
      await cache.put('/api/tools', response.clone());
      console.log('[SW] Tools data synced successfully');
    }
  } catch (error) {
    console.warn('[SW] Failed to sync tools data:', error);
  }
}

// Push notifications for field alerts
self.addEventListener('push', (event) => {
  const options = {
    title: 'MITM.life Field Alert',
    body: event.data ? event.data.text() : 'Field operation update available',
    icon: '/icons/icon-192x192.png',
    badge: '/icons/badge-72x72.png',
    tag: 'field-alert',
    data: {
      timestamp: Date.now(),
      url: '/'
    },
    actions: [
      {
        action: 'view',
        title: 'View Update',
        icon: '/icons/view-action.png'
      },
      {
        action: 'dismiss',
        title: 'Dismiss',
        icon: '/icons/dismiss-action.png'
      }
    ]
  };
  
  event.waitUntil(
    self.registration.showNotification('MITM.life', options)
  );
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  if (event.action === 'view') {
    event.waitUntil(
      clients.openWindow(event.notification.data.url || '/')
    );
  }
});

// Message handling for client communication
self.addEventListener('message', (event) => {
  const { type, payload } = event.data;
  
  switch (type) {
    case 'CACHE_TOOL':
      event.waitUntil(cacheTool(payload));
      break;
    case 'GET_CACHE_STATUS':
      event.waitUntil(getCacheStatus().then(status => {
        event.ports[0].postMessage(status);
      }));
      break;
    case 'CLEAR_CACHE':
      event.waitUntil(clearCache());
      break;
  }
});

async function cacheTool(toolData) {
  try {
    const cache = await caches.open(CACHE_NAME);
    const response = new Response(JSON.stringify(toolData), {
      headers: { 'Content-Type': 'application/json' }
    });
    await cache.put(`/tools/${toolData.id}`, response);
    console.log('[SW] Tool cached for offline access:', toolData.id);
  } catch (error) {
    console.warn('[SW] Failed to cache tool:', error);
  }
}

async function getCacheStatus() {
  try {
    const cache = await caches.open(CACHE_NAME);
    const keys = await cache.keys();
    
    return {
      size: keys.length,
      resources: keys.map(request => request.url),
      lastUpdated: Date.now()
    };
  } catch (error) {
    return { error: error.message };
  }
}

async function clearCache() {
  try {
    await caches.delete(CACHE_NAME);
    console.log('[SW] Cache cleared for fresh start');
  } catch (error) {
    console.warn('[SW] Failed to clear cache:', error);
  }
}

console.log('[SW] MITM.life service worker loaded - Ready for field operations');