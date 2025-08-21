// Remove unused siteConfig import

export default function ToolsPage() {
  const toolCategories = [
    {
      name: "Network Analysis",
      description: "Tools for network reconnaissance and analysis",
      tools: [
        {
          name: "Shodan",
          description: "Search engine for Internet-connected devices and systems",
          category: "Network Discovery",
          pricing: "Free tier + Paid plans from $59/month",
          features: ["Device discovery", "Vulnerability scanning", "API access", "Export capabilities"],
          affiliate: true,
          rating: 4.8,
          url: "/tool/shodan"
        },
        {
          name: "Censys",
          description: "Internet scanning and attack surface management",
          category: "Attack Surface",
          pricing: "Free tier + Enterprise pricing",
          features: ["Certificate monitoring", "Host discovery", "Risk assessment", "Continuous monitoring"],
          affiliate: true,
          rating: 4.6,
          url: "/tool/censys"
        },
        {
          name: "Nmap",
          description: "Network discovery and security auditing utility",
          category: "Port Scanning",
          pricing: "Free and Open Source",
          features: ["Port scanning", "Service detection", "OS fingerprinting", "Scripting engine"],
          affiliate: false,
          rating: 4.9,
          url: "/tool/nmap"
        }
      ]
    },
    {
      name: "Social Media Intelligence",
      description: "OSINT tools for social media investigation",
      tools: [
        {
          name: "Social Searcher",
          description: "Real-time social media search and monitoring",
          category: "Social Monitoring",
          pricing: "Free tier + Pro from $49/month",
          features: ["Real-time search", "Sentiment analysis", "Export reports", "API access"],
          affiliate: true,
          rating: 4.3,
          url: "/tool/social-searcher"
        },
        {
          name: "Maltego",
          description: "Link analysis and data visualization platform",
          category: "Data Visualization",
          pricing: "Community (Free) + Commercial from $760/year",
          features: ["Entity mapping", "Transform library", "Collaboration tools", "Custom entities"],
          affiliate: true,
          rating: 4.7,
          url: "/tool/maltego"
        },
        {
          name: "TweetDeck",
          description: "Twitter management and monitoring dashboard",
          category: "Twitter Analysis",
          pricing: "Free (Twitter account required)",
          features: ["Multiple timelines", "Real-time updates", "Tweet scheduling", "Advanced filtering"],
          affiliate: false,
          rating: 4.1,
          url: "/tool/tweetdeck"
        }
      ]
    },
    {
      name: "Domain & Email Intelligence",
      description: "Investigation tools for domains, emails, and digital assets",
      tools: [
        {
          name: "WhoisXML API",
          description: "Comprehensive domain and IP intelligence",
          category: "Domain Intelligence",
          pricing: "Free tier + Plans from $99/month",
          features: ["WHOIS data", "DNS lookup", "IP geolocation", "Bulk processing"],
          affiliate: true,
          rating: 4.5,
          url: "/tool/whoisxml"
        },
        {
          name: "Hunter.io",
          description: "Email finder and verification service",
          category: "Email Intelligence",
          pricing: "Free tier + Plans from $49/month",
          features: ["Email finder", "Email verification", "Domain search", "API integration"],
          affiliate: true,
          rating: 4.4,
          url: "/tool/hunter"
        },
        {
          name: "VirusTotal",
          description: "File and URL analysis for malware detection",
          category: "Threat Analysis",
          pricing: "Free tier + Premium from $86/month",
          features: ["File scanning", "URL analysis", "API access", "Historical data"],
          affiliate: false,
          rating: 4.8,
          url: "/tool/virustotal"
        }
      ]
    }
  ];

  const allTools = toolCategories.flatMap(category => category.tools);
  // Affiliate tools filtering logic can be used for future monetization features
  // const affiliateTools = allTools.filter(tool => tool.affiliate);
  const freeTools = allTools.filter(tool => tool.pricing.toLowerCase().includes('free'));

  return (
    <div className="relative">
      {/* Header Section */}
      <section className="relative py-20 matrix-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center rounded-full bg-primary/10 border border-primary/20 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm">
              🛠️ Professional Tool Collection
            </div>
            <h1 className="mb-8 text-hero font-bold tracking-tight">
              Professional{' '}
              <span className="gradient-text">
                OSINT Tools
              </span>
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-xl text-muted-foreground leading-relaxed">
              Curated collection of open source intelligence tools used by cybersecurity professionals and researchers worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10 mb-20">
        <div className="mx-auto max-w-6xl">
          <div className="glass-card p-8 grid gap-8 md:grid-cols-3 text-center">
            <div className="group">
              <div className="text-3xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform">{allTools.length}</div>
              <div className="text-sm text-muted-foreground font-medium">Professional Tools</div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform">{freeTools.length}</div>
              <div className="text-sm text-muted-foreground font-medium">Free Tools Available</div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform">{toolCategories.length}</div>
              <div className="text-sm text-muted-foreground font-medium">Tool Categories</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter/Search Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="mx-auto max-w-6xl">
          <div className="cyber-card p-6">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              <div className="flex flex-wrap gap-3">
                <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium shadow-md hover:shadow-lg transition-all">All Tools</button>
                <button className="px-4 py-2 rounded-lg border border-primary/30 bg-background/50 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all">Free Only</button>
                <button className="px-4 py-2 rounded-lg border border-primary/30 bg-background/50 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all">Network</button>
                <button className="px-4 py-2 rounded-lg border border-primary/30 bg-background/50 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all">Social Media</button>
                <button className="px-4 py-2 rounded-lg border border-primary/30 bg-background/50 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all">Domain/Email</button>
              </div>
              <div className="relative">
                <input 
                  type="search" 
                  placeholder="Search tools..." 
                  className="pl-10 pr-4 py-2.5 w-64 border border-primary/30 rounded-lg bg-background/50 backdrop-blur-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all"
                />
                <svg className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tool Categories */}
      {toolCategories.map((category, categoryIndex) => (
        <section key={categoryIndex} className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12">
              <h2 className="text-display font-bold mb-4">{category.name}</h2>
              <p className="text-lg text-muted-foreground">{category.description}</p>
            </div>
            
            <div className="grid gap-8 lg:grid-cols-3">
            {category.tools.map((tool, toolIndex) => (
              <div key={toolIndex} className="tool-card">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-foreground">{tool.name}</h3>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                      {tool.category}
                    </span>
                  </div>
                  {tool.affiliate && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20">
                      🤝 Partner
                    </span>
                  )}
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">{tool.description}</p>

                <div className="mb-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">Rating:</span>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(tool.rating) ? 'text-yellow-400' : 'text-muted-foreground/30'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="text-sm text-muted-foreground ml-1 font-medium">({tool.rating})</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">Pricing:</span>
                    <span className="text-sm text-muted-foreground font-medium">{tool.pricing}</span>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-sm font-semibold mb-3 text-foreground">Key Features:</h4>
                  <ul className="space-y-2">
                    {tool.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3">
                  <a
                    href={tool.url}
                    className="cyber-button flex-1 text-center inline-flex items-center justify-center rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-lg focus-ring"
                  >
                    Learn More
                  </a>
                  {tool.affiliate && (
                    <a
                      href={`${tool.url}?ref=mitm`}
                      className="cyber-button inline-flex items-center justify-center rounded-xl border border-primary bg-background/50 backdrop-blur-sm px-4 py-3 text-sm font-semibold text-primary shadow-lg hover:bg-primary hover:text-primary-foreground focus-ring"
                    >
                      Get Started
                    </a>
                  )}
                </div>
              </div>
            ))}
            </div>
          </div>
        </section>
      ))}

      {/* Newsletter/Updates Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="mx-auto max-w-4xl">
          <div className="glass-card p-12 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-display font-bold mb-6">Stay Updated</h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                Get notified about new tools, updates, and OSINT methodologies delivered to your inbox.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-4 py-3 border border-primary/30 rounded-lg bg-background/50 backdrop-blur-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all"
                />
                <button className="cyber-button inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg focus-ring">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-blue-500/5 rounded-xl"></div>
          </div>
        </div>
      </section>

      {/* Affiliate Disclaimer */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-16">
        <div className="mx-auto max-w-4xl">
          <div className="cyber-card p-6 text-center border-l-4 border-l-primary">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">Transparency Notice:</span> Some tools featured may include affiliate partnerships that help fund our research operations. All recommendations are based on professional evaluation and practical experience.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}