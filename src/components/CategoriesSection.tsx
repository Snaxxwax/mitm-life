import React from 'react';
import { Badge } from './ui/badge';

interface Category {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  count: number;
  color: string;
}

// SVG Icon Components
const TargetIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <circle cx="12" cy="12" r="6"></circle>
    <circle cx="12" cy="12" r="2"></circle>
  </svg>
);

const UsersIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>
);

const ShieldIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const DatabaseIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
  </svg>
);

const SmartphoneIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
    <line x1="12" y1="18" x2="12.01" y2="18"></line>
  </svg>
);

const CloudIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
    />
  </svg>
);

const LockIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
    <circle cx="12" cy="16" r="1"></circle>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
  </svg>
);

const ZapIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"></polygon>
  </svg>
);

export const CategoriesSection: React.FC = () => {
  const categories: Category[] = [
    {
      name: 'Penetration Testing',
      icon: TargetIcon,
      count: 24,
      color: 'text-red-500',
    },
    {
      name: 'Social Engineering',
      icon: UsersIcon,
      count: 18,
      color: 'text-orange-500',
    },
    {
      name: 'Network Security',
      icon: ShieldIcon,
      count: 32,
      color: 'text-blue-500',
    },
    {
      name: 'Database Exploitation',
      icon: DatabaseIcon,
      count: 15,
      color: 'text-green-500',
    },
    {
      name: 'Mobile Security',
      icon: SmartphoneIcon,
      count: 12,
      color: 'text-purple-500',
    },
    {
      name: 'Cloud Security',
      icon: CloudIcon,
      count: 21,
      color: 'text-cyan-500',
    },
    {
      name: 'Cryptography',
      icon: LockIcon,
      count: 9,
      color: 'text-yellow-500',
    },
    {
      name: 'Zero-Day Exploits',
      icon: ZapIcon,
      count: 7,
      color: 'text-pink-500',
    },
  ];

  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            Explore Topics
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Dive deep into specific areas of red team operations and offensive
            security
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map(category => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.name}
                className="group cursor-pointer bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:border-red-500/20"
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="p-3 rounded-full bg-muted group-hover:bg-red-500/10 transition-colors">
                    <IconComponent
                      className={`h-6 w-6 ${category.color} group-hover:text-red-500 transition-colors`}
                    />
                  </div>
                  <h3 className="font-medium text-sm leading-tight text-card-foreground">
                    {category.name}
                  </h3>
                  <Badge variant="secondary" className="text-xs">
                    {category.count} articles
                  </Badge>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
