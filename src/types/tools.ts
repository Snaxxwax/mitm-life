export interface Tool {
  name: string;
  description: string;
  category: string;
  pricing: string;
  features: string[];
  affiliate: boolean;
  rating: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  platforms: string[];
  url: string;
}

export interface ToolCategory {
  name: string;
  description: string;
  tools: Tool[];
}

export interface SearchResult {
  id: string;
  name: string;
  description: string;
  category: string;
  type: 'tool' | 'article' | 'technique';
  url: string;
  rating?: number;
}

export type DifficultyLevel = Tool['difficulty'];
export type PlatformType = 'Linux' | 'Windows' | 'macOS' | 'Android' | 'iOS' | 'Web' | 'Cloud';