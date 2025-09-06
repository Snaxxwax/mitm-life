import React from 'react';

interface Credential {
  name: string;
  organization: string;
  icon: string;
}

interface Metric {
  value: string;
  label: string;
}

export const TrustSignals: React.FC = () => {
  const credentials: Credential[] = [
    {
      name: 'CISSP',
      organization: '(ISC)² Certified',
      icon: '🛡️',
    },
    {
      name: 'CVE Contributor',
      organization: 'MITRE Corporation',
      icon: '🔍',
    },
    {
      name: 'Security Research',
      organization: 'Published Author',
      icon: '📚',
    },
  ];

  const metrics: Metric[] = [
    { value: '15K+', label: 'Security Professionals' },
    { value: '50+', label: 'Enterprise Clients' },
    { value: '99.9%', label: 'Uptime Reliability' },
  ];

  return (
    <section className="py-16 bg-background border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Trusted by Security Professionals
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our research and analysis is backed by industry certifications and
            trusted by cybersecurity teams at Fortune 500 companies worldwide.
          </p>
        </div>

        {/* Credentials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
          {credentials.map((credential, index) => (
            <div
              key={index}
              className="text-center p-6 bg-secondary/30 rounded-lg border border-border"
            >
              <div className="text-4xl mb-4">{credential.icon}</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {credential.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {credential.organization}
              </p>
            </div>
          ))}
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-red-500 mb-2">
                {metric.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Featured In */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground mb-8">
            Featured in leading security publications
          </p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-sm font-semibold">Dark Reading</div>
            <div className="text-sm font-semibold">InfoSec Magazine</div>
            <div className="text-sm font-semibold">Security Week</div>
            <div className="text-sm font-semibold">CSO Online</div>
          </div>
        </div>
      </div>
    </section>
  );
};
