'use client'

import { useEffect, useState, useCallback, useMemo, memo } from 'react';
import { debounce, rafThrottle, createBatteryTypeGuard } from '@/utils/performance';

interface PerformanceMetrics {
  batteryLevel: number | null;
  batteryCharging: boolean | null;
  networkType: string;
  effectiveType: string;
  downlink: number | null;
  rtt: number | null;
  isOnline: boolean;
  memoryUsage: number | null;
  deviceMemory: number | null;
  cpuCores: number;
  orientation: string;
  screenSize: { width: number; height: number };
  pixelRatio: number;
  platform: string;
  lastUpdate: number;
}

interface MobilePerformanceMonitorProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  updateInterval?: number;
  showDebugInfo?: boolean;
}


interface NetworkInformation extends EventTarget {
  readonly type: string;
  readonly effectiveType: string;
  readonly downlink: number;
  readonly rtt: number;
}

interface NavigatorWithConnection extends Navigator {
  readonly connection: NetworkInformation;
  readonly mozConnection: NetworkInformation;
  readonly webkitConnection: NetworkInformation;
}

interface PerformanceWithMemory extends Performance {
  readonly memory: {
    readonly usedJSHeapSize: number;
    readonly totalJSHeapSize: number;
    readonly jsHeapSizeLimit: number;
  };
}

interface NavigatorWithDeviceMemory extends Navigator {
  readonly deviceMemory: number;
}

function MobilePerformanceMonitor({
  onMetricsUpdate,
  updateInterval = 5000,
  showDebugInfo = false,
}: MobilePerformanceMonitorProps) {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isLowPowerMode, setIsLowPowerMode] = useState(false);

  // Debounced localStorage save to prevent excessive writes
  const debouncedSave = useMemo(
    () => debounce((metrics: unknown) => {
      localStorage.setItem('fieldMetrics', JSON.stringify(metrics));
    }, 2000),
    []
  );

  // Collect performance metrics
  const collectMetrics = useCallback(async (): Promise<PerformanceMetrics> => {
    const metrics: PerformanceMetrics = {
      batteryLevel: null,
      batteryCharging: null,
      networkType: 'unknown',
      effectiveType: 'unknown',
      downlink: null,
      rtt: null,
      isOnline: navigator.onLine,
      memoryUsage: null,
      deviceMemory: null,
      cpuCores: navigator.hardwareConcurrency || 1,
      orientation: screen.orientation?.type || 'unknown',
      screenSize: {
        width: window.screen.width,
        height: window.screen.height,
      },
      pixelRatio: window.devicePixelRatio || 1,
      platform: navigator.platform || 'unknown',
      lastUpdate: Date.now(),
    };

    // Battery API (type-safe)
    try {
      const isBatterySupported = createBatteryTypeGuard();
      if (isBatterySupported(navigator)) {
        const battery = await navigator.getBattery();
        metrics.batteryLevel = battery.level;
        metrics.batteryCharging = battery.charging;
      }
    } catch (error) {
      console.warn('Battery API not available:', error);
    }

    // Network Information API
    try {
      const connection = (navigator as NavigatorWithConnection).connection || 
                        (navigator as NavigatorWithConnection).mozConnection || 
                        (navigator as NavigatorWithConnection).webkitConnection;
      
      if (connection) {
        metrics.networkType = connection.type || 'unknown';
        metrics.effectiveType = connection.effectiveType || 'unknown';
        metrics.downlink = connection.downlink || null;
        metrics.rtt = connection.rtt || null;
      }
    } catch (error) {
      console.warn('Network Information API not available:', error);
    }

    // Memory API
    try {
      if ('memory' in performance) {
        const memory = (performance as PerformanceWithMemory).memory;
        metrics.memoryUsage = memory.usedJSHeapSize / memory.totalJSHeapSize;
      }
      
      if ('deviceMemory' in navigator) {
        metrics.deviceMemory = (navigator as NavigatorWithDeviceMemory).deviceMemory;
      }
    } catch (error) {
      console.warn('Memory API not available:', error);
    }

    return metrics;
  }, []);

  // Update metrics periodically
  useEffect(() => {
    const updateMetrics = async () => {
      try {
        const newMetrics = await collectMetrics();
        setMetrics(newMetrics);
        
        // Check for low power conditions
        const lowPower = 
          (newMetrics.batteryLevel !== null && newMetrics.batteryLevel < 0.2) ||
          (newMetrics.memoryUsage !== null && newMetrics.memoryUsage > 0.8) ||
          newMetrics.effectiveType === 'slow-2g';
        
        setIsLowPowerMode(lowPower);
        
        // Notify parent component
        if (onMetricsUpdate) {
          onMetricsUpdate(newMetrics);
        }
        
        // Store metrics for offline access (debounced)
        debouncedSave(newMetrics);
      } catch (error) {
        console.warn('Failed to update metrics:', error);
      }
    };

    // Initial update
    updateMetrics();

    // Set up periodic updates
    const interval = setInterval(updateMetrics, updateInterval);

    return () => clearInterval(interval);
  }, [collectMetrics, onMetricsUpdate, updateInterval, debouncedSave]);

  // Handle orientation change (throttled)
  useEffect(() => {
    const handleOrientationChange = rafThrottle(async () => {
      // Small delay for orientation to settle
      setTimeout(async () => {
        const newMetrics = await collectMetrics();
        setMetrics(newMetrics);
      }, 100);
    });

    window.addEventListener('orientationchange', handleOrientationChange, { passive: true });
    return () => window.removeEventListener('orientationchange', handleOrientationChange);
  }, [collectMetrics]);

  // Apply performance optimizations based on conditions
  useEffect(() => {
    if (isLowPowerMode) {
      // Reduce animation performance
      document.documentElement.style.setProperty('--animation-duration', '0.1s');
      document.documentElement.classList.add('low-power-mode');
      
      // Notify service worker to reduce background activity
      if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
        navigator.serviceWorker.controller.postMessage({
          type: 'LOW_POWER_MODE',
          enabled: true
        });
      }
    } else {
      document.documentElement.style.removeProperty('--animation-duration');
      document.documentElement.classList.remove('low-power-mode');
      
      if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
        navigator.serviceWorker.controller.postMessage({
          type: 'LOW_POWER_MODE',
          enabled: false
        });
      }
    }
  }, [isLowPowerMode]);

  // Debug info display
  if (showDebugInfo && metrics) {
    return (
      <div className="fixed bottom-4 right-4 z-50 bg-black/80 text-white p-3 rounded-lg text-xs font-mono max-w-xs">
        <div className="font-bold mb-2 text-primary">Field Metrics</div>
        <div className="space-y-1">
          <div>🔋 {metrics.batteryLevel ? `${Math.round(metrics.batteryLevel * 100)}%` : 'N/A'}</div>
          <div>📶 {metrics.effectiveType} ({metrics.networkType})</div>
          <div>💾 {metrics.memoryUsage ? `${Math.round(metrics.memoryUsage * 100)}%` : 'N/A'}</div>
          <div>🌐 {metrics.isOnline ? 'Online' : 'Offline'}</div>
          <div>📱 {metrics.orientation}</div>
          <div>⚡ {isLowPowerMode ? 'Power Save' : 'Normal'}</div>
        </div>
      </div>
    );
  }

  return null;
}

export default memo(MobilePerformanceMonitor);

// Hook for accessing performance metrics
export function usePerformanceMetrics() {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isLowPowerMode, setIsLowPowerMode] = useState(false);

  useEffect(() => {
    // Load cached metrics
    try {
      const cached = localStorage.getItem('fieldMetrics');
      if (cached) {
        const parsedMetrics = JSON.parse(cached);
        setMetrics(parsedMetrics);
        
        // Check if metrics indicate low power conditions
        const lowPower = 
          (parsedMetrics.batteryLevel !== null && parsedMetrics.batteryLevel < 0.2) ||
          (parsedMetrics.memoryUsage !== null && parsedMetrics.memoryUsage > 0.8) ||
          parsedMetrics.effectiveType === 'slow-2g';
        
        setIsLowPowerMode(lowPower);
      }
    } catch (error) {
      console.warn('Failed to load cached metrics:', error);
    }

    // Listen for metric updates
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'fieldMetrics' && e.newValue) {
        try {
          const newMetrics = JSON.parse(e.newValue);
          setMetrics(newMetrics);
        } catch (error) {
          console.warn('Failed to parse updated metrics:', error);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return { metrics, isLowPowerMode };
}

// Utility function to get network quality
export function getNetworkQuality(metrics: PerformanceMetrics | null): 'excellent' | 'good' | 'fair' | 'poor' | 'offline' {
  if (!metrics || !metrics.isOnline) return 'offline';
  
  const { effectiveType, downlink, rtt } = metrics;
  
  if (effectiveType === '4g' && (downlink || 0) > 10 && (rtt || 1000) < 100) {
    return 'excellent';
  } else if (effectiveType === '4g' || (effectiveType === '3g' && (downlink || 0) > 1)) {
    return 'good';
  } else if (effectiveType === '3g' || effectiveType === '2g') {
    return 'fair';
  } else {
    return 'poor';
  }
}

// Utility function to get battery status
export function getBatteryStatus(metrics: PerformanceMetrics | null): 'critical' | 'low' | 'good' | 'unknown' {
  if (!metrics || metrics.batteryLevel === null) return 'unknown';
  
  if (metrics.batteryLevel < 0.1) return 'critical';
  if (metrics.batteryLevel < 0.2) return 'low';
  return 'good';
}
