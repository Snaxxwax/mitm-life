import React from 'react';

interface CategoryStats {
  total: number;
  recent: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}

interface Category {
  title: string;
  description: string;
  icon: string;
  color: string;
  href: string;
  stats: CategoryStats;
}

export const CategoryGrid: React.FC = () => {
  const categories: Category[] = [
    {
      title: 'Security Tools',
      description:
        'Comprehensive collection of security analysis tools, scripts, and utilities for penetration testing and vulnerability assessment.',
      icon: '🛠️',
      color: 'red',
      href: '/tools',
      stats: {
        total: 23,
        recent: 3,
        difficulty: 'Intermediate',
      },
    },
    {
      title: 'Technical Guides',
      description:
        'Step-by-step tutorials covering advanced security concepts, implementation strategies, and best practices.',
      icon: '📚',
      color: 'blue',
      href: '/guides',
      stats: {
        total: 18,
        recent: 2,
        difficulty: 'Advanced',
      },
    },
    {
      title: 'Security Research',
      description:
        'Original research findings, threat analysis, vulnerability disclosures, and emerging security trends.',
      icon: '🔍',
      color: 'purple',
      href: '/research',
      stats: {
        total: 12,
        recent: 1,
        difficulty: 'Advanced',
      },
    },
    {
      title: 'Reference Resources',
      description:
        'Curated collection of security frameworks, compliance guides, and industry standards documentation.',
      icon: '📖',
      color: 'green',
      href: '/resources',
      stats: {
        total: 34,
        recent: 4,
        difficulty: 'Beginner',
      },
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      red: 'border-red-200 hover:border-red-300 hover:bg-red-50/50 text-red-600',
      blue: 'border-blue-200 hover:border-blue-300 hover:bg-blue-50/50 text-blue-600',
      purple:
        'border-purple-200 hover:border-purple-300 hover:bg-purple-50/50 text-purple-600',
      green:
        'border-green-200 hover:border-green-300 hover:bg-green-50/50 text-green-600',
    };
    return colors[color as keyof typeof colors] || colors.red;
  };

  const getDifficultyColor = (difficulty: string) => {
    const colors = {
      Beginner: 'text-green-600 bg-green-100',
      Intermediate: 'text-yellow-600 bg-yellow-100',
      Advanced: 'text-red-600 bg-red-100',
    };
    return colors[difficulty as keyof typeof colors] || colors['Beginner'];
  };

  return (
    <section className="py-16 bg-secondary/50 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Security Knowledge Base
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Access comprehensive cybersecurity resources organized by expertise
            level and use case. All content is regularly reviewed and updated by
            certified security professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`group bg-background border-2 rounded-lg p-6 transition-all duration-200 ${getColorClasses(category.color)}`}
            >
              <div className="text-center mb-4">
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {category.title}
                </h3>
              </div>

              <p className="text-sm text-muted-foreground mb-6 line-clamp-4">
                {category.description}
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">
                    Total Resources:
                  </span>
                  <span className="font-semibold text-foreground">
                    {category.stats.total}
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">
                    Recent Additions:
                  </span>
                  <span className="font-semibold text-foreground">
                    {category.stats.recent}
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">
                    Difficulty Level:
                  </span>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(category.stats.difficulty)}`}
                  >
                    {category.stats.difficulty}
                  </span>
                </div>
              </div>

              <a
                href={category.href}
                className={`block w-full text-center py-3 px-4 rounded-lg border-2 font-medium transition-all duration-200 ${getColorClasses(category.color)} bg-background hover:bg-white`}
              >
                Explore {category.title}
              </a>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="bg-background rounded-lg border border-border p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-foreground mb-2">87</div>
              <div className="text-sm text-muted-foreground">
                Total Resources
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground mb-2">10</div>
              <div className="text-sm text-muted-foreground">
                New This Month
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground mb-2">
                24/7
              </div>
              <div className="text-sm text-muted-foreground">
                Updated Coverage
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground mb-2">
                100%
              </div>
              <div className="text-sm text-muted-foreground">Peer Reviewed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
