'use client';

import { memo } from 'react';
import CategorySwiper from '@/components/mobile/CategorySwiper';

interface ToolsFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  filteredCount: number;
  onSearchClick: () => void;
}

function ToolsFilter({ 
  categories, 
  activeCategory, 
  onCategoryChange, 
  filteredCount,
  onSearchClick 
}: ToolsFilterProps) {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8">
      <div className="mx-auto max-w-6xl">
        <CategorySwiper 
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={onCategoryChange}
          className="mb-6"
        />
        
        {/* Desktop search bar */}
        <div className="hidden md:block">
          <div className="cyber-card p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <h3 className="text-sm font-medium text-foreground">Filter Tools:</h3>
                <span className="text-xs text-muted-foreground">
                  {filteredCount} {filteredCount === 1 ? 'tool' : 'tools'} found
                </span>
              </div>
              <div className="relative">
                <button
                  onClick={onSearchClick}
                  className="flex items-center space-x-2 pl-10 pr-4 py-2.5 w-64 border border-primary/30 rounded-lg bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-all text-left text-muted-foreground"
                >
                  <span>Search tools...</span>
                </button>
                <svg className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(ToolsFilter);