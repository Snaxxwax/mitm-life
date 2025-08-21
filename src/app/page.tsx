import { siteConfig } from '../../site.config';
import MatrixRain from '../components/MatrixRain';
import StatusIndicator from '../components/StatusIndicator';

export default function HomePage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center matrix-bg">
        <MatrixRain density={0.5} speed={0.8} />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-5xl text-center">
            <div className="mb-6 inline-flex items-center rounded-full bg-primary/10 border border-primary/20 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm scan-effect">
              <StatusIndicator status="secure" label="" className="mr-2" />
              Trusted by 500+ cybersecurity professionals
            </div>
            <h1 className="mb-8 text-hero font-bold tracking-tight">
              Professional OSINT &{' '}
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
                href="/services"
                className="cyber-button-enhanced inline-flex h-14 items-center justify-center rounded-xl bg-primary px-8 text-base font-semibold text-primary-foreground shadow-lg focus-ring"
              >
                Get Started - From $199
              </a>
              <a
                href="/tools"
                className="cyber-button-enhanced inline-flex h-14 items-center justify-center rounded-xl border border-primary bg-background/50 backdrop-blur-sm px-8 text-base font-semibold text-primary shadow-lg hover:bg-primary hover:text-primary-foreground focus-ring"
              >
                Explore Tools
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground stagger-fade-in">
              <StatusIndicator status="online" label="48-hour delivery" />
              <StatusIndicator status="secure" label="Ethical & legal compliance" />
              <StatusIndicator status="processing" label="4.9/5 client rating" />
            </div>
          </div>
        </div>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/0 to-background pointer-events-none"></div>
      </section>

      {/* Trust Indicators */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
        <div className="mx-auto max-w-6xl">
          <div className="glass-card-enhanced p-8 grid gap-8 md:grid-cols-4 text-center scan-effect">
            <div className="group data-flow">
              <div className="text-4xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform terminal-text">500+</div>
              <div className="text-sm text-muted-foreground font-medium">Investigations Completed</div>
            </div>
            <div className="group data-flow">
              <div className="text-4xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform terminal-text">48hr</div>
              <div className="text-sm text-muted-foreground font-medium">Average Delivery</div>
            </div>
            <div className="group data-flow">
              <div className="text-4xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform terminal-text">4.9★</div>
              <div className="text-sm text-muted-foreground font-medium">Client Satisfaction</div>
            </div>
            <div className="group data-flow">
              <div className="text-4xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform terminal-text">100%</div>
              <div className="text-sm text-muted-foreground font-medium">Legal Compliance</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="mx-auto mt-16 max-w-6xl">
        <h2 className="mb-12 text-center text-3xl font-bold">Professional OSINT Services</h2>
        <div className="grid gap-8 lg:grid-cols-3 stagger-fade-in">
          <div className="tool-card text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 mx-auto scan-effect">
              <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-semibold">Basic Intelligence</h3>
            <div className="text-2xl font-bold text-primary mb-2 terminal-text">$199</div>
            <p className="text-muted-foreground mb-4">
              Essential digital investigation for small businesses and due diligence.
            </p>
            <ul className="text-sm text-left space-y-1 mb-6">
              <li>• Social media analysis</li>
              <li>• Public records search</li>
              <li>• Domain investigation</li>
              <li>• 48-hour delivery</li>
            </ul>
            <a href="/services" className="cyber-button-enhanced inline-flex w-full items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent focus-ring">
              Learn More
            </a>
          </div>
          
          <div className="tool-card text-center border-2 border-primary shadow-lg scale-105 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium trust-badge">Most Popular</span>
            </div>
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 mx-auto scan-effect">
              <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-semibold">Comprehensive Dossier</h3>
            <div className="text-2xl font-bold text-primary mb-2 terminal-text">$799</div>
            <p className="text-muted-foreground mb-4">
              Advanced research for corporate security and compliance needs.
            </p>
            <ul className="text-sm text-left space-y-1 mb-6">
              <li>• Deep social media analysis</li>
              <li>• Financial records investigation</li>
              <li>• Network mapping</li>
              <li>• Executive summary</li>
            </ul>
            <a href="/services" className="cyber-button-enhanced inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 focus-ring">
              Get Started
            </a>
          </div>
          
          <div className="tool-card text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 mx-auto scan-effect">
              <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-semibold">Custom Investigation</h3>
            <div className="text-2xl font-bold text-primary mb-2 terminal-text">$1,499+</div>
            <p className="text-muted-foreground mb-4">
              Enterprise-level solution with tailored methodology and briefings.
            </p>
            <ul className="text-sm text-left space-y-1 mb-6">
              <li>• Custom investigation scope</li>
              <li>• Advanced threat intelligence</li>
              <li>• Executive briefing</li>
              <li>• Ongoing monitoring</li>
            </ul>
            <a href="/services" className="cyber-button-enhanced inline-flex w-full items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent focus-ring">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="mx-auto mt-16 max-w-6xl">
        <h2 className="mb-12 text-center text-3xl font-bold">Trusted by Security Professionals</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-lg bg-muted/50 p-6">
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => <span key={i}>⭐</span>)}
                </div>
              </div>
              <p className="text-muted-foreground italic mb-4">
                &ldquo;mitm.life delivered comprehensive OSINT analysis that helped us identify potential security threats before they became critical. Their methodology is thorough and professional.&rdquo;
              </p>
              <div className="text-sm">
                <div className="font-semibold">Sarah Chen</div>
                <div className="text-muted-foreground">CISO, TechCorp Financial</div>
              </div>
            </div>
          </div>
          
          <div className="rounded-lg bg-muted/50 p-6">
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => <span key={i}>⭐</span>)}
                </div>
              </div>
              <p className="text-muted-foreground italic mb-4">
                &ldquo;Fast, accurate, and ethically conducted investigations. The reports are detailed yet accessible, perfect for executive briefings and compliance documentation.&rdquo;
              </p>
              <div className="text-sm">
                <div className="font-semibold">Marcus Rodriguez</div>
                <div className="text-muted-foreground">Security Analyst, Defense Systems Inc</div>
              </div>
            </div>
          </div>
        </div>
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

      {/* CTA Section */}
      <section className="mx-auto mt-16 max-w-4xl text-center">
        <div className="rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 p-8 border">
          <h2 className="mb-4 text-3xl font-bold">Start Your Investigation Today</h2>
          <p className="mb-6 text-lg text-muted-foreground">
            Join 500+ cybersecurity professionals who trust our OSINT expertise. Fast delivery, ethical methods, professional results.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="/services"
              className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              View Services & Pricing
            </a>
            <a
              href="/tools"
              className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Explore OSINT Tools
            </a>
          </div>
          <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <StatusIndicator status="processing" label="Starting at $199" />
            <StatusIndicator status="online" label="48-hour delivery" />
            <StatusIndicator status="secure" label="Ethical & legal compliance" />
          </div>
        </div>
      </section>
    </div>
  );
}