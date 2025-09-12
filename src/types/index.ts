// Content types for the blog
export interface BlogPost {
  title: string;
  description: string;
  pubDate: Date;
  category: 'tools' | 'guides' | 'research' | 'resources';
  tags: string[];
  slug: string;
  body: string;
}

export interface CategoryInfo {
  name: string;
  description: string;
  icon: string;
  count: number;
}

// Component prop types
export interface BlogCardProps {
  title: string;
  description: string;
  pubDate: Date;
  category: string;
  tags: string[];
  slug: string;
}

export interface HeaderProps {
  currentPath?: string;
}

export interface CategoryGridProps {
  categories: CategoryInfo[];
}

// Utility types
export type ContentCategory = 'tools' | 'guides' | 'research' | 'resources';

export interface NavigationItem {
  name: string;
  href: string;
  description?: string;
}

// Form types
export interface NewsletterFormData {
  email: string;
}

// Error types
export interface ApiError {
  message: string;
  code: string;
  details?: unknown;
}

// Environment types
export interface EnvironmentConfig {
  NODE_ENV: 'development' | 'production' | 'test';
  SITE_URL: string;
  NEWSLETTER_API_KEY?: string;
}
