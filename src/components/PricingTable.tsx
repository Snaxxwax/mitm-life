import { memo } from 'react';

interface PricingPlan {
  name: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  ctaText: string;
  href: string;
  popular?: boolean;
}

interface PricingTableProps {
  plans: PricingPlan[];
  title?: string;
  subtitle?: string;
}

export const PricingTable = memo(function PricingTable({
  plans,
  title = "Choose Your Plan",
  subtitle = "Select the perfect plan for your OSINT and cybersecurity needs"
}: PricingTableProps) {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-lg border bg-card p-8 shadow-sm ${
                plan.popular
                  ? 'border-primary ring-2 ring-primary/20'
                  : 'border-border'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary px-4 py-1 text-sm font-medium text-primary-foreground rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center">
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {plan.description}
                </p>
                <div className="mt-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-base text-muted-foreground">
                    /{plan.period}
                  </span>
                </div>
              </div>

              <ul className="mt-8 space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <svg
                      className="mr-3 h-5 w-5 text-green-500"
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
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <a
                  href={plan.href}
                  className={`inline-flex w-full items-center justify-center rounded-md px-4 py-2 text-sm font-medium shadow transition-colors ${
                    plan.popular
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                      : 'border border-input bg-background hover:bg-accent hover:text-accent-foreground'
                  }`}
                >
                  {plan.ctaText}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            All plans include our comprehensive legal compliance framework and ethical guidelines.
          </p>
        </div>
      </div>
    </section>
  );
});