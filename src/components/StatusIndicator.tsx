'use client'

interface StatusIndicatorProps {
  status: 'online' | 'secure' | 'scanning' | 'processing'
  label: string
  className?: string
}

export default function StatusIndicator({ 
  status, 
  label, 
  className = '' 
}: StatusIndicatorProps) {
  const getStatusConfig = () => {
    switch (status) {
      case 'online':
        return {
          color: 'bg-green-400',
          textColor: 'text-green-400',
          icon: '●'
        }
      case 'secure':
        return {
          color: 'bg-blue-400',
          textColor: 'text-blue-400',
          icon: '🛡'
        }
      case 'scanning':
        return {
          color: 'bg-yellow-400',
          textColor: 'text-yellow-400',
          icon: '⚡'
        }
      case 'processing':
        return {
          color: 'bg-primary',
          textColor: 'text-primary',
          icon: '⟳'
        }
      default:
        return {
          color: 'bg-gray-400',
          textColor: 'text-gray-400',
          icon: '●'
        }
    }
  }

  const config = getStatusConfig()

  return (
    <div className={`flex items-center gap-2 text-sm ${className}`}>
      <div className={`status-indicator w-2 h-2 rounded-full ${config.color}`}></div>
      <span className={`font-medium ${config.textColor}`}>
        {config.icon} {label}
      </span>
    </div>
  )
}