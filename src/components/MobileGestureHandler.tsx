'use client'

import { useCallback, useRef, useState, useEffect } from 'react';

export interface GestureEvent {
  type: 'swipe' | 'tap' | 'longPress' | 'pinch';
  direction?: 'left' | 'right' | 'up' | 'down';
  distance?: number;
  duration?: number;
  force?: number;
  target: HTMLElement;
}

export interface MobileGestureHandlerProps {
  children: React.ReactNode;
  onSwipe?: (event: GestureEvent) => void;
  onTap?: (event: GestureEvent) => void;
  onLongPress?: (event: GestureEvent) => void;
  onPinch?: (event: GestureEvent) => void;
  swipeThreshold?: number;
  longPressThreshold?: number;
  tapTimeout?: number;
  className?: string;
}

interface TouchWithForce extends Touch {
  force: number;
}

export default function MobileGestureHandler({
  children,
  onSwipe,
  onTap,
  onLongPress,
  onPinch,
  swipeThreshold = 50,
  longPressThreshold = 500,
  tapTimeout = 300,
  className = '',
}: MobileGestureHandlerProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState<React.Touch | null>(null);
  const [touchStartTime, setTouchStartTime] = useState<number>(0);
  const [longPressTimer, setLongPressTimer] = useState<NodeJS.Timeout | null>(null);
  const [isLongPress, setIsLongPress] = useState(false);

  // Clear long press timer
  const clearLongPressTimer = useCallback(() => {
    if (longPressTimer) {
      clearTimeout(longPressTimer);
      setLongPressTimer(null);
    }
  }, [longPressTimer]);

  // Handle touch start
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    const touch = e.touches[0];
    setTouchStart(touch);
    setTouchStartTime(Date.now());
    setIsLongPress(false);

    // Start long press timer
    if (onLongPress) {
      const timer = setTimeout(() => {
        setIsLongPress(true);
        onLongPress({
          type: 'longPress',
          duration: Date.now() - touchStartTime,
          force: (touch as TouchWithForce).force || 1,
          target: e.target as HTMLElement,
        });
      }, longPressThreshold);
      setLongPressTimer(timer);
    }
  }, [onLongPress, longPressThreshold, touchStartTime]);

  // Handle touch move
  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    // Clear long press if user moves finger
    clearLongPressTimer();

    // Handle pinch gesture
    if (e.touches.length === 2 && onPinch) {
      e.preventDefault();
      const touch1 = e.touches[0];
      const touch2 = e.touches[1];
      const distance = Math.sqrt(
        Math.pow(touch2.clientX - touch1.clientX, 2) +
        Math.pow(touch2.clientY - touch1.clientY, 2)
      );

      onPinch({
        type: 'pinch',
        distance,
        target: e.target as HTMLElement,
      });
    }
  }, [clearLongPressTimer, onPinch]);

  // Handle touch end
  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    clearLongPressTimer();

    if (!touchStart || isLongPress) {
      setTouchStart(null);
      return;
    }

    const touch = e.changedTouches[0];
    const deltaX = touch.clientX - touchStart.clientX;
    const deltaY = touch.clientY - touchStart.clientY;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const duration = Date.now() - touchStartTime;

    // Determine if it's a swipe or tap
    if (distance > swipeThreshold && onSwipe) {
      // Determine swipe direction
      let direction: 'left' | 'right' | 'up' | 'down';
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        direction = deltaX > 0 ? 'right' : 'left';
      } else {
        direction = deltaY > 0 ? 'down' : 'up';
      }

      onSwipe({
        type: 'swipe',
        direction,
        distance,
        duration,
        target: e.target as HTMLElement,
      });
    } else if (distance <= swipeThreshold && duration < tapTimeout && onTap) {
      onTap({
        type: 'tap',
        duration,
        force: (touch as TouchWithForce).force || 1,
        target: e.target as HTMLElement,
      });
    }

    setTouchStart(null);
  }, [
    clearLongPressTimer,
    touchStart,
    isLongPress,
    touchStartTime,
    swipeThreshold,
    tapTimeout,
    onSwipe,
    onTap,
  ]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      clearLongPressTimer();
    };
  }, [clearLongPressTimer]);

  return (
    <div
      ref={elementRef}
      className={`touch-manipulation ${className}`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{
        touchAction: 'manipulation',
        WebkitTouchCallout: 'none',
        WebkitUserSelect: 'none',
        userSelect: 'none',
      }}
    >
      {children}
    </div>
  );
}

// Hook for easy gesture handling
export function useMobileGestures({
  onSwipe,
  onTap,
  onLongPress,
  swipeThreshold = 50,
  longPressThreshold = 500,
}: {
  onSwipe?: (direction: 'left' | 'right' | 'up' | 'down', distance: number) => void;
  onTap?: () => void;
  onLongPress?: () => void;
  swipeThreshold?: number;
  longPressThreshold?: number;
} = {}) {
  const handlers = {
    onSwipe: onSwipe ? (event: GestureEvent) => {
      if (event.direction && event.distance) {
        onSwipe(event.direction, event.distance);
      }
    } : undefined,
    onTap: onTap ? () => onTap() : undefined,
    onLongPress: onLongPress ? () => onLongPress() : undefined,
    swipeThreshold,
    longPressThreshold,
  };

  return handlers;
}

// Haptic feedback utility
export function triggerHapticFeedback(type: 'light' | 'medium' | 'heavy' | 'selection' = 'light') {
  if ('vibrate' in navigator) {
    const patterns = {
      light: [10],
      medium: [20],
      heavy: [30],
      selection: [5, 5, 5],
    };
    navigator.vibrate(patterns[type]);
  }
}