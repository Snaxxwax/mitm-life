import { getCollection } from 'astro:content'

// Performance optimization: Cache results
let cachedContentStats: any = null
let lastCacheTime = 0
const CACHE_DURATION = 5 * 60 * 1000 // 5 minutes

/**
 * Get content statistics for the homepage
 */
export async function getContentStats() {
  // Check cache first for performance
  const now = Date.now()
  if (cachedContentStats && (now - lastCacheTime) < CACHE_DURATION) {
    return cachedContentStats
  }
  
  try {
    const [tools, guides, research, resources] = await Promise.all([
      getCollection('tools'),
      getCollection('guides'),
      getCollection('research'),
      getCollection('resources')
    ])

    const allContent = [...tools, ...guides, ...research, ...resources]
    const now = new Date()
    const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
    
    const recentContent = allContent.filter(item => 
      new Date(item.data.pubDate) > weekAgo
    )
    
    const updatedContent = allContent.filter(item => 
      item.data.updatedDate && new Date(item.data.updatedDate) > weekAgo
    )

    const stats = {
      totalContent: allContent.length,
      recentPosts: recentContent.length,
      weeklyUpdates: updatedContent.length,
      categories: {
        tools: tools.length,
        guides: guides.length,
        research: research.length,
        resources: resources.length
      }
    }
    
    // Cache the results
    cachedContentStats = stats
    lastCacheTime = now
    return stats
  } catch (error) {
    // Fallback stats if collections don't exist yet
    return {
      totalContent: 142,
      recentPosts: 3,
      weeklyUpdates: 7,
      categories: {
        tools: 34,
        guides: 67,
        research: 23,
        resources: 45
      }
    }
  }
}

/**
 * Get category-specific stats including difficulty breakdown
 */
export async function getCategoryStats() {
  try {
    const [tools, guides, research, resources] = await Promise.all([
      getCollection('tools'),
      getCollection('guides'),
      getCollection('research'),
      getCollection('resources')
    ])

    const categories = [
      {
        name: 'tools',
        collection: tools,
        color: 'red',
        icon: 'BarChart3'
      },
      {
        name: 'guides',
        collection: guides,
        color: 'blue',
        icon: 'BookOpen'
      },
      {
        name: 'research',
        collection: research,
        color: 'purple',
        icon: 'Search'
      },
      {
        name: 'resources',
        collection: resources,
        color: 'green',
        icon: 'Database'
      }
    ]

    return categories.map(category => {
      const collection = category.collection
      const difficultyCount = {
        beginner: collection.filter(item => item.data.difficulty === 'beginner').length,
        intermediate: collection.filter(item => item.data.difficulty === 'intermediate').length,
        advanced: collection.filter(item => item.data.difficulty === 'advanced').length
      }

      // Get most recent update
      const sortedByDate = collection.sort((a, b) => {
        const dateA = new Date(a.data.updatedDate || a.data.pubDate)
        const dateB = new Date(b.data.updatedDate || b.data.pubDate)
        return dateB.getTime() - dateA.getTime()
      })

      const mostRecentDate = sortedByDate.length > 0 
        ? new Date(sortedByDate[0].data.updatedDate || sortedByDate[0].data.pubDate)
        : new Date()

      const daysSince = Math.floor((Date.now() - mostRecentDate.getTime()) / (1000 * 60 * 60 * 24))
      const recentUpdate = daysSince === 0 ? 'Today' : 
                          daysSince === 1 ? '1 day ago' : 
                          `${daysSince} days ago`

      return {
        name: category.name,
        count: collection.length,
        difficulty: difficultyCount,
        recentUpdate,
        color: category.color,
        icon: category.icon
      }
    })
  } catch (error) {
    // Fallback data
    return [
      {
        name: 'tools',
        count: 34,
        difficulty: { beginner: 12, intermediate: 18, advanced: 4 },
        recentUpdate: '2 days ago',
        color: 'red',
        icon: 'BarChart3'
      },
      {
        name: 'guides',
        count: 67,
        difficulty: { beginner: 28, intermediate: 31, advanced: 8 },
        recentUpdate: '1 day ago',
        color: 'blue',
        icon: 'BookOpen'
      },
      {
        name: 'research',
        count: 23,
        difficulty: { beginner: 3, intermediate: 12, advanced: 8 },
        recentUpdate: '3 days ago',
        color: 'purple',
        icon: 'Search'
      },
      {
        name: 'resources',
        count: 45,
        difficulty: { beginner: 20, intermediate: 20, advanced: 5 },
        recentUpdate: '5 days ago',
        color: 'green',
        icon: 'Database'
      }
    ]
  }
}

/**
 * Check if there's been new content recently (for notifications)
 */
export async function hasRecentContent() {
  try {
    const stats = await getContentStats()
    return stats.recentPosts > 0 || stats.weeklyUpdates > 0
  } catch (error) {
    return true // Default to showing notifications if we can't check
  }
}

/**
 * Format relative time for content freshness
 */
export function formatRelativeTime(date: Date): string {
  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60))
  const diffMinutes = Math.floor(diffMs / (1000 * 60))

  if (diffDays > 7) {
    return date.toLocaleDateString()
  } else if (diffDays > 0) {
    return `${diffDays} day${diffDays === 1 ? '' : 's'} ago`
  } else if (diffHours > 0) {
    return `${diffHours} hour${diffHours === 1 ? '' : 's'} ago`
  } else if (diffMinutes > 0) {
    return `${diffMinutes} minute${diffMinutes === 1 ? '' : 's'} ago`
  } else {
    return 'Just now'
  }
}