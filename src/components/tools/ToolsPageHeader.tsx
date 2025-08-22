'use client';

import { memo } from 'react';

interface ToolsPageHeaderProps {
  onSearchClick: () => void;
}

function ToolsPageHeader({ onSearchClick }: ToolsPageHeaderProps) {
  return (
    <section className="relative py-16 sm:py-20 matrix-bg safe-area-inset-top">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center rounded-full bg-primary/10 border border-primary/20 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm">
            <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse" />
            Professional Tool Collection
          </div>
          <h1 className="mb-8 text-hero font-bold tracking-tight">
            Professional{' '}
            <span className="gradient-text block sm:inline">
              Red Team Arsenal
            </span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg sm:text-xl text-muted-foreground leading-relaxed">
            Comprehensive collection of ethical hacking and penetration testing tools for cybersecurity professionals.
          </p>
          
          {/* Mobile search trigger */}
          <button
            onClick={onSearchClick}
            className="md:hidden w-full max-w-sm mx-auto mobile-nav-action bg-card/50 border border-border/30 text-muted-foreground hover:text-foreground hover:border-primary/30 mb-6"
          >
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            Search tools, techniques...
          </button>
        </div>
      </div>
    </section>
  );
}

export default memo(ToolsPageHeader);