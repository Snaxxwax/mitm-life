'use client'

import { siteConfig } from '../../site.config'

export default function HomePage() {
  const techniques = [
    {
      title: 'Advanced OSINT Techniques',
      description: 'Master social media intelligence gathering and digital footprint analysis',
      category: 'Intelligence',
      readTime: '5 min read',
      url: '/blog/social-media-osint',
    },
    {
      title: 'Domain Investigation Methods',
      description: 'Comprehensive domain and infrastructure reconnaissance methodologies',
      category: 'Reconnaissance',
      readTime: '8 min read',
      url: '/blog/domain-investigation',
    },
    {
      title: 'Essential Red Team Arsenal',
      description: 'Updated toolkit for modern cybersecurity professionals',
      category: 'Tools',
      readTime: '6 min read',
      url: '/blog/osint-tools-2025',
    },
  ]

  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            {siteConfig.name}
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            {siteConfig.description}
          </p>
          <div className="space-x-4">
            <a href="/blog" className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
              Explore Research
            </a>
            <a href="/tools" className="inline-flex items-center justify-center rounded-md border border-input bg-transparent px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
              Explore Tools
            </a>
          </div>
        </div>
      </section>
      <section id="features" className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Latest Research & Insights</h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Explore the latest techniques and methodologies in cybersecurity research.
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          {techniques.map((technique, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg border bg-background p-2">
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <div className="space-y-2">
                  <h3 className="font-bold">{technique.title}</h3>
                  <p className="text-sm text-muted-foreground">{technique.description}</p>
                </div>
                <a href={technique.url} className="text-sm font-medium text-primary hover:underline">
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}