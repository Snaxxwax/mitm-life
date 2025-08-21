// Remove unused siteConfig import

export default function ServicesPage() {
  const services = [
    {
      name: "Basic Intelligence",
      price: "$199",
      delivery: "48 hours",
      description: "Essential digital investigation for small businesses and individuals",
      features: [
        "Basic social media analysis",
        "Public records search",
        "Domain and IP investigation",
        "Standard report format",
        "Email delivery"
      ],
      ideal: "Small businesses, personal investigations",
      cta: "Get Started",
      popular: false
    },
    {
      name: "Comprehensive Dossier",
      price: "$799",
      delivery: "72 hours",
      description: "Advanced research for corporate security and due diligence",
      features: [
        "Deep social media analysis",
        "Financial records investigation",
        "Network mapping and connections",
        "Professional report with visualizations",
        "Secure portal delivery",
        "Executive summary included"
      ],
      ideal: "Corporate security teams, legal firms",
      cta: "Choose Pro",
      popular: true
    },
    {
      name: "Custom Investigation",
      price: "$1,499+",
      delivery: "Flexible",
      description: "Enterprise-level solution with tailored methodology",
      features: [
        "Custom investigation scope",
        "Advanced threat intelligence",
        "Multi-source verification",
        "Executive briefing presentation",
        "Ongoing monitoring options",
        "Legal compliance documentation"
      ],
      ideal: "Enterprise organizations, government agencies",
      cta: "Contact Us",
      popular: false
    }
  ];

  return (
    <div className="relative">
      {/* Header Section */}
      <section className="relative py-20 matrix-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center rounded-full bg-primary/10 border border-primary/20 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm">
              🔍 Professional Intelligence Services
            </div>
            <h1 className="mb-8 text-hero font-bold tracking-tight">
              Professional{' '}
              <span className="gradient-text">
                OSINT Services
              </span>
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-xl text-muted-foreground leading-relaxed">
              Comprehensive open source intelligence research conducted by certified professionals using ethical methodologies.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10 mb-20">
        <div className="mx-auto max-w-6xl">
          <div className="glass-card p-8 grid gap-8 md:grid-cols-3 text-center">
            <div className="group">
              <div className="text-3xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform">500+</div>
              <div className="text-sm text-muted-foreground font-medium">Investigations Completed</div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform">48hr</div>
              <div className="text-sm text-muted-foreground font-medium">Average Delivery Time</div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform">100%</div>
              <div className="text-sm text-muted-foreground font-medium">Ethical & Legal Compliance</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-3">
            {services.map((service, index) => (
              <div key={index} className={`pricing-card ${service.popular ? 'featured' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-primary to-green-400 text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">{service.name}</h3>
                  <div className="text-4xl font-bold text-primary mb-2">{service.price}</div>
                  <div className="text-sm text-muted-foreground font-medium">Delivered in {service.delivery}</div>
                </div>

                <p className="text-muted-foreground mb-8 text-center leading-relaxed">{service.description}</p>

                <ul className="space-y-4 mb-10">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                        <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="text-center mb-8 p-4 rounded-lg bg-muted/50">
                  <div className="text-sm text-muted-foreground mb-1">Ideal for:</div>
                  <div className="text-sm font-semibold text-foreground">{service.ideal}</div>
                </div>

                <button className={`cyber-button w-full rounded-xl px-6 py-3 text-base font-semibold transition-all focus-ring ${
                  service.popular 
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'border border-primary bg-background/50 backdrop-blur-sm text-primary hover:bg-primary hover:text-primary-foreground shadow-lg'
                }`}>
                  {service.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-display font-bold mb-6">Our Investigation Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Systematic methodology ensuring thorough, ethical, and legally compliant investigations.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-4">
            <div className="cyber-card p-6 text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <span className="text-primary font-bold text-xl">1</span>
              </div>
              <h3 className="font-bold mb-3 text-foreground">Scope Definition</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">We clearly define investigation parameters and legal boundaries</p>
            </div>
            <div className="cyber-card p-6 text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <span className="text-primary font-bold text-xl">2</span>
              </div>
              <h3 className="font-bold mb-3 text-foreground">Data Collection</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Systematic gathering from public sources using professional tools</p>
            </div>
            <div className="cyber-card p-6 text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <span className="text-primary font-bold text-xl">3</span>
              </div>
              <h3 className="font-bold mb-3 text-foreground">Analysis & Verification</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Cross-reference and validate findings with multiple sources</p>
            </div>
            <div className="cyber-card p-6 text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <span className="text-primary font-bold text-xl">4</span>
              </div>
              <h3 className="font-bold mb-3 text-foreground">Report Delivery</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Professional documentation with actionable insights</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mx-auto max-w-4xl mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="border-b pb-6">
            <h3 className="font-semibold mb-2">Is OSINT research legal?</h3>
            <p className="text-muted-foreground">Yes, our research is conducted entirely using publicly available information and adheres to all applicable laws and ethical guidelines.</p>
          </div>
          <div className="border-b pb-6">
            <h3 className="font-semibold mb-2">How do you ensure data accuracy?</h3>
            <p className="text-muted-foreground">We use multiple source verification, cross-reference findings, and clearly indicate confidence levels for all information in our reports.</p>
          </div>
          <div className="border-b pb-6">
            <h3 className="font-semibold mb-2">What if I need a rush investigation?</h3>
            <p className="text-muted-foreground">We offer expedited services for urgent matters. Contact us to discuss timeline and pricing for priority investigations.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="mx-auto max-w-4xl">
          <div className="glass-card p-12 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-display font-bold mb-6">Ready to Start Your Investigation?</h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                Contact our team to discuss your specific requirements and get a custom quote.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <a
                  href="/contact"
                  className="cyber-button-enhanced inline-flex h-14 items-center justify-center rounded-xl bg-primary px-10 text-base font-semibold text-primary-foreground shadow-xl focus-ring"
                >
                  Get Started Today
                </a>
                <a
                  href="/blog/osint-methodology"
                  className="cyber-button-enhanced inline-flex h-14 items-center justify-center rounded-xl border border-primary bg-background/50 backdrop-blur-sm px-10 text-base font-semibold text-primary shadow-xl hover:bg-primary hover:text-primary-foreground focus-ring"
                >
                  Learn About Our Methods
                </a>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-blue-500/5 rounded-xl"></div>
          </div>
        </div>
      </section>

      {/* Legal Disclaimer */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-16">
        <div className="mx-auto max-w-4xl">
          <div className="cyber-card p-6 text-center border-l-4 border-l-yellow-400">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">⚠️ Legal Notice:</span> All OSINT services are provided for defensive cybersecurity purposes, due diligence, and legitimate business needs. We do not conduct investigations for illegal purposes or harassment.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}