import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-red-950/20 via-background to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="bg-red-500/10 text-red-400 px-3 py-1 rounded-full text-sm border border-red-500/20">
                Featured Article
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-foreground">
              Advanced Persistence Techniques in Modern Networks
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Explore cutting-edge methods for maintaining long-term access in enterprise environments. 
              Learn about fileless malware, living-off-the-land techniques, and advanced evasion strategies.
            </p>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>Marcus Chen</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Aug 24, 2025</span>
              </div>
            </div>
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center">
              Read Full Article
              <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden border border-border/50">
              <img 
                src="https://images.unsplash.com/photo-1724219616919-aab943e7b00d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwaGFja2VyJTIwY29tcHV0ZXJ8ZW58MXx8fHwxNzU2MjAwMjgzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Cybersecurity and hacking"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};