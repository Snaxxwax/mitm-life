'use client';

import { memo, useCallback } from 'react';
import MobileToolCard from '@/components/mobile/MobileToolCard';
import type { Tool } from '@/types/tools';

interface ToolsGridProps {
  tools: Tool[];
  favorites: Set<string>;
  onFavorite: (toolName: string) => void;
  onShare: (tool: Tool) => void;
  onCopy: (url: string) => void;
}

function ToolsGrid({ tools, favorites, onFavorite, onShare, onCopy }: ToolsGridProps) {
  const handleFavorite = useCallback((toolName: string) => {
    onFavorite(toolName);
  }, [onFavorite]);

  const handleShare = useCallback((tool: Tool) => {
    onShare(tool);
  }, [onShare]);

  const handleCopy = useCallback((url: string) => {
    onCopy(url);
  }, [onCopy]);

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <MobileToolCard 
              key={tool.name}
              tool={tool}
              onFavorite={handleFavorite}
              onShare={handleShare}
              onCopy={handleCopy}
              isFavorited={favorites.has(tool.name)}
            />
          ))}
        </div>
        
        {tools.length === 0 && (
          <div className="text-center py-16">
            <div className="mx-auto w-24 h-24 bg-muted/20 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29.82-5.633 2.15M20.618 20.618A3 3 0 0119 21H5a3 3 0 01-3-3V6a3 3 0 013-3h14a3 3 0 013 3v11.618a.382.382 0 01-.382.382z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">No tools found</h3>
            <p className="text-muted-foreground">Try adjusting your search criteria or browse different categories.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default memo(ToolsGrid);