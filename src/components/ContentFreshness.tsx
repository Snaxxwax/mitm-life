import React from 'react';

interface ContentStats {
  newPosts: number;
  weeklyUpdates: number;
  totalContent: number;
  lastUpdate: string;
}

export const ContentFreshness: React.FC = () => {
  const stats: ContentStats = {
    newPosts: 3,
    weeklyUpdates: 7,
    totalContent: 42,
    lastUpdate: 'Today',
  };

  return (
    <section className="py-16 bg-secondary/50 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Latest Updates
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay informed with our latest security research, tools, and
            analysis. All content is regularly updated to reflect current threat
            landscapes.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-background rounded-lg border border-border">
            <div className="text-3xl font-bold text-red-500 mb-2">
              {stats.newPosts}
            </div>
            <div className="text-sm text-muted-foreground">New This Week</div>
          </div>

          <div className="text-center p-6 bg-background rounded-lg border border-border">
            <div className="text-3xl font-bold text-blue-500 mb-2">
              {stats.weeklyUpdates}
            </div>
            <div className="text-sm text-muted-foreground">Weekly Updates</div>
          </div>

          <div className="text-center p-6 bg-background rounded-lg border border-border">
            <div className="text-3xl font-bold text-green-500 mb-2">
              {stats.totalContent}
            </div>
            <div className="text-sm text-muted-foreground">Total Resources</div>
          </div>

          <div className="text-center p-6 bg-background rounded-lg border border-border">
            <div className="text-sm font-semibold text-foreground mb-2">
              Last Update
            </div>
            <div className="text-sm text-muted-foreground">
              {stats.lastUpdate}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
