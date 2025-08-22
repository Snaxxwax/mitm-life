'use client'

import { useEffect, useState } from 'react'

interface LoadingStateProps {
  message?: string
  type?: 'scanning' | 'processing' | 'analyzing' | 'connecting'
  duration?: number
  className?: string
}

const steps = {
  scanning: [
    'Initializing scan protocols...',
    'Gathering intelligence data...',
    'Analyzing threat vectors...',
    'Compiling security report...'
  ],
  processing: [
    'Processing request...',
    'Validating parameters...',
    'Executing analysis...',
    'Generating results...'
  ],
  analyzing: [
    'Analyzing data patterns...',
    'Cross-referencing sources...',
    'Validating findings...',
    'Preparing insights...'
  ],
  connecting: [
    'Establishing secure connection...',
    'Authenticating credentials...',
    'Synchronizing data...',
    'Connection established...'
  ]
}

export default function LoadingState({ 
  message = 'Processing request',
  type = 'processing',
  duration = 3000,
  className = ''
}: LoadingStateProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [dots, setDots] = useState('')

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps[type].length)
    }, duration / steps[type].length)

    const dotInterval = setInterval(() => {
      setDots((prev) => {
        if (prev.length >= 3) return ''
        return prev + '.'
      })
    }, 500)

    return () => {
      clearInterval(stepInterval)
      clearInterval(dotInterval)
    }
  }, [type, duration])

  return (
    <div className={`flex flex-col items-center space-y-4 ${className}`}>
      {/* Main loading animation */}
      <div className="relative">
        <div className="w-12 h-12 border-2 border-primary/20 rounded-full"></div>
        <div className="absolute top-0 left-0 w-12 h-12 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
        
        {/* Scanning effect overlay */}
        <div className="absolute inset-0 rounded-full overflow-hidden">
          <div className="scan-effect w-full h-full"></div>
        </div>
      </div>

      {/* Terminal-style text */}
      <div className="text-center space-y-2">
        <div className="terminal-text text-sm text-primary font-mono">
          <span className="text-primary">&gt;</span> {steps[type][currentStep]}{dots}
          <span className="terminal-cursor"></span>
        </div>
        {message && (
          <div className="text-xs text-muted-foreground">
            {message}
          </div>
        )}
      </div>

      {/* Progress indicators */}
      <div className="flex space-x-1">
        {steps[type].map((_, index) => (
          <div
            key={index}
            className={`w-2 h-1 rounded-full transition-all duration-300 ${
              index <= currentStep
                ? 'bg-primary data-flow'
                : 'bg-primary/20'
            }`}
          />
        ))}
      </div>
    </div>
  )
}