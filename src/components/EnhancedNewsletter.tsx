import React, { useState } from 'react';

interface NewsletterBenefit {
  title: string;
  description: string;
}

export const EnhancedNewsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const benefits: NewsletterBenefit[] = [
    {
      title: 'Weekly Threat Intelligence',
      description: 'Curated analysis of emerging threats and vulnerabilities',
    },
    {
      title: 'Exclusive Security Tools',
      description:
        'Early access to new tools and utilities before public release',
    },
    {
      title: 'Industry Insights',
      description: 'Expert commentary on security trends and best practices',
    },
    {
      title: 'Professional Network',
      description: 'Connect with 15,000+ security professionals worldwide',
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitted(true);
    setIsSubmitting(false);
    setEmail('');
  };

  if (isSubmitted) {
    return (
      <section className="py-16 bg-background border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Welcome to Our Security Community
              </h3>
              <p className="text-muted-foreground">
                You&apos;ve successfully subscribed to our professional
                newsletter. Check your email for confirmation and your first
                security briefing.
              </p>
            </div>
            <button
              onClick={() => setIsSubmitted(false)}
              className="text-red-600 hover:text-red-700 font-medium"
            >
              Subscribe Another Email
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-secondary/30 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Professional Security Intelligence
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join thousands of security professionals who rely on our weekly
                briefings for actionable threat intelligence and industry
                insights.
              </p>

              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center mt-0.5">
                      <svg
                        className="w-3 h-3 text-red-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">
                        {benefit.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-sm text-muted-foreground">
                <p className="mb-2">
                  <strong>15,000+ security professionals</strong> trust our
                  insights
                </p>
                <p>
                  Unsubscribe at any time • No spam • Privacy-first approach
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="bg-background rounded-lg border border-border p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
                Subscribe to Security Briefings
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Professional Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="your.email@company.com"
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || !email}
                  className="w-full bg-red-700 hover:bg-red-800 disabled:bg-gray-400 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200"
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe Now'}
                </button>

                <p className="text-xs text-muted-foreground text-center">
                  By subscribing, you agree to receive weekly security
                  briefings. We respect your privacy and never share your
                  information.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
