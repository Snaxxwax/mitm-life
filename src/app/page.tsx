import { siteConfig } from '../../site.config';

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="mx-auto max-w-4xl text-center">
        <h1 className="mb-6 text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Professional OSINT &{' '}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Cybersecurity
          </span>{' '}
          Research
        </h1>
        <p className="mx-auto mb-8 max-w-[700px] text-lg text-muted-foreground sm:text-xl">
          {siteConfig.description}
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <a
            href="/blog"
            className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            Explore Research
          </a>
          <a
            href="/services"
            className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Our Services
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="mx-auto mt-16 max-w-6xl">
        <h2 className="mb-8 text-center text-3xl font-bold">What We Offer</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 mx-auto">
              <svg
                className="h-8 w-8 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-semibold">OSINT Research</h3>
            <p className="text-muted-foreground">
              Advanced open source intelligence gathering and analysis using cutting-edge methodologies.
            </p>
          </div>
          <div className="text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 mx-auto">
              <svg
                className="h-8 w-8 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-semibold">Security Analysis</h3>
            <p className="text-muted-foreground">
              Comprehensive cybersecurity assessments and vulnerability research for enhanced protection.
            </p>
          </div>
          <div className="text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 mx-auto">
              <svg
                className="h-8 w-8 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-semibold">Training & Education</h3>
            <p className="text-muted-foreground">
              Professional training programs and educational resources for cybersecurity professionals.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto mt-16 max-w-4xl text-center">
        <div className="rounded-lg bg-muted p-8">
          <h2 className="mb-4 text-3xl font-bold">Ready to Get Started?</h2>
          <p className="mb-6 text-lg text-muted-foreground">
            Contact us to learn more about our professional OSINT and cybersecurity services.
          </p>
          <a
            href="/services"
            className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}