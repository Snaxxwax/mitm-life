'use client';

import { memo } from 'react';

interface ToolsStatsProps {
  totalTools: number;
  freeTools: number;
  favorites: number;
}

function ToolsStats({ totalTools, freeTools, favorites }: ToolsStatsProps) {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10 mb-12">
      <div className="mx-auto max-w-6xl">
        <div className="glass-card p-6 sm:p-8 grid gap-6 sm:gap-8 grid-cols-3 text-center">
          <div className="group">
            <div className="text-2xl sm:text-3xl font-bold text-primary mb-2 sm:mb-3 group-hover:scale-110 transition-transform">
              {totalTools}
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground font-medium">Professional Tools</div>
          </div>
          <div className="group">
            <div className="text-2xl sm:text-3xl font-bold text-primary mb-2 sm:mb-3 group-hover:scale-110 transition-transform">
              {freeTools}
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground font-medium">Free Tools</div>
          </div>
          <div className="group">
            <div className="text-2xl sm:text-3xl font-bold text-primary mb-2 sm:mb-3 group-hover:scale-110 transition-transform">
              {favorites}
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground font-medium">Favorites</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(ToolsStats);