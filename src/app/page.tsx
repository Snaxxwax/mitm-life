import { siteConfig } from '../../site.config';
import MatrixRain from '../components/MatrixRain';

export default function HomePage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center matrix-bg">
        <MatrixRain density={0.5} speed={0.8} />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-5xl text-center">
            <h1 className="mb-8 text-hero font-bold tracking-tight">
              Red Team Engagements &{' '}
              <span className="gradient-text">
                Cybersecurity
              </span>{' '}
              Research
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-xl text-muted-foreground leading-relaxed">
              {siteConfig.description}
            </p>
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a
                href="/blog"
                className="cyber-button-enhanced inline-flex h-14 items-center justify-center rounded-xl bg-primary px-8 text-base font-semibold text-primary-foreground shadow-lg focus-ring"
              >
                Explore Research
              </a>
              <a
                href="/tools"
                className="cyber-button-enhanced inline-flex h-14 items-center justify-center rounded-xl border border-primary bg-background/50 backdrop-blur-sm px-8 text-base font-semibold text-primary shadow-lg hover:bg-primary hover:text-primary-foreground focus-ring"
              >
                Explore Tools
              </a>
            </div>
          </div>
        </div>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/0 to-background pointer-events-none"></div>
      </section>

      {/* Latest Blog Posts */}
      <section className="mx-auto mt-16 max-w-6xl">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Latest Research & Insights</h2>
          <a href="/blog" className="text-primary hover:underline">View all posts →</a>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
            <div className="text-sm text-muted-foreground mb-2">OSINT • 5 min read</div>
            <h3 className="text-lg font-semibold mb-2">Advanced Social Media OSINT Techniques</h3>
            <p className="text-muted-foreground text-sm mb-4">Discover professional methodologies for ethical social media intelligence gathering...</p>
            <a href="/blog/social-media-osint" className="text-primary text-sm hover:underline">Read more →</a>
          </article>
          
          <article className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
            <div className="text-sm text-muted-foreground mb-2">Security • 8 min read</div>
            <h3 className="text-lg font-semibold mb-2">Domain Investigation Methodologies</h3>
            <p className="text-muted-foreground text-sm mb-4">Comprehensive guide to investigating domains, subdomains, and digital infrastructure...</p>
            <a href="/blog/domain-investigation" className="text-primary text-sm hover:underline">Read more →</a>
          </article>
          
          <article className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
            <div className="text-sm text-muted-foreground mb-2">Tools • 6 min read</div>
            <h3 className="text-lg font-semibold mb-2">Essential OSINT Tools for 2025</h3>
            <p className="text-muted-foreground text-sm mb-4">Updated toolkit for modern cybersecurity professionals and researchers...</p>
            <a href="/blog/osint-tools-2025" className="text-primary text-sm hover:underline">Read more →</a>
          </article>
        </div>
      </section>
    </div>
  );
}
