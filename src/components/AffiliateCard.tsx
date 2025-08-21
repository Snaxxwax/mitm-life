import { memo } from 'react';

interface AffiliateCardProps {
  title: string;
  description: string;
  price?: string;
  originalPrice?: string;
  ctaText: string;
  href: string;
  features?: string[];
  badge?: string;
}

export const AffiliateCard = memo(function AffiliateCard({
  title,
  description,
  price,
  originalPrice,
  ctaText,
  href,
  features = [],
  badge,
}: AffiliateCardProps) {
  return (
    <div className="relative rounded-lg border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
      {badge && (
        <div className="absolute -top-2 left-4">
          <span className="bg-primary px-2 py-1 text-xs font-medium text-primary-foreground rounded">
            {badge}
          </span>
        </div>
      )}
      
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        </div>

        {price && (
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold">{price}</span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {originalPrice}
              </span>
            )}
          </div>
        )}

        {features.length > 0 && (
          <ul className="space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-sm">
                <svg
                  className="mr-2 h-4 w-4 text-green-500"
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
                {feature}
              </li>
            ))}
          </ul>
        )}

        <a
          href={href}
          className="inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          target="_blank"
          rel="noopener noreferrer"
        >
          {ctaText}
        </a>
      </div>
      
      <div className="mt-4 rounded border-l-4 border-amber-400 bg-amber-50 p-3 dark:bg-amber-950/20">
        <p className="text-xs font-medium text-amber-800 dark:text-amber-200">
          📢 <strong>PAID AFFILIATE LINK:</strong> We earn a commission when you purchase through this link at no extra cost to you. This supports our research and content creation.
        </p>
      </div>
    </div>
  );
});