// Remove unused siteConfig import

export default function ToolsPage() {
  const toolCategories = [
    {
      name: "Network Reconnaissance & Scanning",
      description: "Essential tools for network discovery, port scanning, and host enumeration",
      tools: [
        {
          name: "Nmap",
          description: "The industry standard for network discovery and security auditing",
          category: "Port Scanning",
          pricing: "Free and Open Source",
          features: ["Port scanning", "Service detection", "OS fingerprinting", "NSE scripting engine"],
          affiliate: false,
          rating: 4.9,
          difficulty: "Beginner",
          platforms: ["Linux", "Windows", "macOS"],
          url: "/tool/nmap"
        },
        {
          name: "Masscan",
          description: "High-speed port scanner capable of scanning the entire Internet",
          category: "Port Scanning",
          pricing: "Free and Open Source",
          features: ["Ultra-fast scanning", "Asynchronous transmission", "Custom packet crafting", "Banner grabbing"],
          affiliate: false,
          rating: 4.7,
          difficulty: "Intermediate",
          platforms: ["Linux", "Windows", "macOS"],
          url: "/tool/masscan"
        },
        {
          name: "Rustscan",
          description: "Modern port scanner built for speed and efficiency",
          category: "Port Scanning",
          pricing: "Free and Open Source",
          features: ["Adaptive learning", "Nmap integration", "Custom scripting", "IPv6 support"],
          affiliate: false,
          rating: 4.6,
          difficulty: "Beginner",
          platforms: ["Linux", "Windows", "macOS"],
          url: "/tool/rustscan"
        }
      ]
    },
    {
      name: "Man-in-the-Middle Attack Frameworks",
      description: "Professional MITM tools for network interception and traffic analysis",
      tools: [
        {
          name: "Ettercap",
          description: "Comprehensive MITM framework for network protocol analysis",
          category: "MITM Framework",
          pricing: "Free and Open Source",
          features: ["ARP poisoning", "DNS spoofing", "SSL stripping", "Plugin architecture"],
          affiliate: false,
          rating: 4.5,
          difficulty: "Intermediate",
          platforms: ["Linux", "Windows", "macOS"],
          url: "/tool/ettercap"
        },
        {
          name: "Bettercap",
          description: "Modern network reconnaissance and MITM attack framework",
          category: "MITM Framework",
          pricing: "Free and Open Source",
          features: ["WiFi handshake capture", "Bluetooth LE attacks", "Web UI", "REST API"],
          affiliate: false,
          rating: 4.8,
          difficulty: "Advanced",
          platforms: ["Linux", "Windows", "macOS"],
          url: "/tool/bettercap"
        },
        {
          name: "MITMproxy",
          description: "Interactive HTTPS proxy for penetration testers and developers",
          category: "MITM Framework",
          pricing: "Free and Open Source",
          features: ["SSL certificate generation", "HTTP/2 support", "Python scripting", "Web interface"],
          affiliate: false,
          rating: 4.7,
          difficulty: "Intermediate",
          platforms: ["Linux", "Windows", "macOS"],
          url: "/tool/mitmproxy"
        }
      ]
    },
    {
      name: "Web Application Testing Suite",
      description: "Comprehensive tools for web application security assessment",
      tools: [
        {
          name: "Burp Suite",
          description: "Leading web application security testing platform",
          category: "Web Testing",
          pricing: "Community (Free) + Professional from $399/year",
          features: ["Proxy interception", "Active/passive scanning", "Intruder attacks", "Extension marketplace"],
          affiliate: true,
          rating: 4.9,
          difficulty: "Intermediate",
          platforms: ["Linux", "Windows", "macOS"],
          url: "/tool/burpsuite"
        },
        {
          name: "OWASP ZAP",
          description: "Free and open source web application security scanner",
          category: "Web Testing",
          pricing: "Free and Open Source",
          features: ["Automated scanning", "Manual testing tools", "API testing", "Fuzzing capabilities"],
          affiliate: false,
          rating: 4.6,
          difficulty: "Beginner",
          platforms: ["Linux", "Windows", "macOS"],
          url: "/tool/zap"
        },
        {
          name: "Gobuster",
          description: "Fast directory and file brute-forcing tool",
          category: "Web Testing",
          pricing: "Free and Open Source",
          features: ["Directory brute-forcing", "DNS subdomain enumeration", "Virtual host discovery", "Multi-threading"],
          affiliate: false,
          rating: 4.5,
          difficulty: "Beginner",
          platforms: ["Linux", "Windows", "macOS"],
          url: "/tool/gobuster"
        }
      ]
    },
    {
      name: "Wireless Security Assessment",
      description: "Tools for wireless network security testing and assessment",
      tools: [
        {
          name: "Aircrack-ng",
          description: "Complete suite of tools for WiFi network security assessment",
          category: "Wireless Testing",
          pricing: "Free and Open Source",
          features: ["WEP/WPA cracking", "Packet capture", "Deauthentication attacks", "Handshake capture"],
          affiliate: false,
          rating: 4.8,
          difficulty: "Intermediate",
          platforms: ["Linux", "Windows", "macOS"],
          url: "/tool/aircrack"
        },
        {
          name: "WiFi Pineapple",
          description: "Professional WiFi auditing platform for penetration testing",
          category: "Wireless Testing",
          pricing: "Hardware from $199 + Free firmware",
          features: ["Evil twin attacks", "Captive portals", "PineAP suite", "Module ecosystem"],
          affiliate: true,
          rating: 4.7,
          difficulty: "Advanced",
          platforms: ["Linux"],
          url: "/tool/pineapple"
        },
        {
          name: "Kismet",
          description: "Wireless network detector and intrusion detection system",
          category: "Wireless Testing",
          pricing: "Free and Open Source",
          features: ["802.11 monitoring", "Bluetooth detection", "Device tracking", "Web interface"],
          affiliate: false,
          rating: 4.4,
          difficulty: "Intermediate",
          platforms: ["Linux", "macOS"],
          url: "/tool/kismet"
        }
      ]
    },
    {
      name: "Payload Development & Delivery",
      description: "Tools for creating and delivering exploitation payloads",
      tools: [
        {
          name: "Metasploit Framework",
          description: "World's most used penetration testing framework",
          category: "Exploitation",
          pricing: "Community (Free) + Pro from $15,000/year",
          features: ["Exploit database", "Payload generation", "Post-exploitation", "Evasion modules"],
          affiliate: true,
          rating: 4.9,
          difficulty: "Advanced",
          platforms: ["Linux", "Windows", "macOS"],
          url: "/tool/metasploit"
        },
        {
          name: "Covenant",
          description: "Modern C2 framework for red team operations",
          category: "C2 Framework",
          pricing: "Free and Open Source",
          features: ["Web-based interface", ".NET payloads", "HTTP/HTTPS comms", "Collaborative features"],
          affiliate: false,
          rating: 4.6,
          difficulty: "Advanced",
          platforms: ["Linux", "Windows"],
          url: "/tool/covenant"
        },
        {
          name: "Empire/Starkiller",
          description: "PowerShell and Python post-exploitation framework",
          category: "C2 Framework",
          pricing: "Free and Open Source",
          features: ["PowerShell agents", "Python agents", "GUI interface", "Module library"],
          affiliate: false,
          rating: 4.5,
          difficulty: "Advanced",
          platforms: ["Linux", "Windows", "macOS"],
          url: "/tool/empire"
        }
      ]
    },
    {
      name: "Social Engineering Platforms",
      description: "Tools for social engineering assessments and awareness training",
      tools: [
        {
          name: "Social Engineer Toolkit",
          description: "Comprehensive framework for social engineering assessments",
          category: "Social Engineering",
          pricing: "Free and Open Source",
          features: ["Phishing campaigns", "Credential harvesting", "SMS phishing", "Website cloning"],
          affiliate: false,
          rating: 4.7,
          difficulty: "Intermediate",
          platforms: ["Linux", "Windows", "macOS"],
          url: "/tool/set"
        },
        {
          name: "GoPhish",
          description: "Open-source phishing toolkit for security awareness training",
          category: "Social Engineering",
          pricing: "Free and Open Source",
          features: ["Campaign management", "Email templates", "Landing pages", "Detailed reporting"],
          affiliate: false,
          rating: 4.6,
          difficulty: "Beginner",
          platforms: ["Linux", "Windows", "macOS"],
          url: "/tool/gophish"
        },
        {
          name: "King Phisher",
          description: "Professional phishing campaign toolkit",
          category: "Social Engineering",
          pricing: "Free and Open Source",
          features: ["Campaign tracking", "Plugin architecture", "GeoIP targeting", "Advanced analytics"],
          affiliate: false,
          rating: 4.4,
          difficulty: "Intermediate",
          platforms: ["Linux"],
          url: "/tool/kingphisher"
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
                Red Team Arsenal
              </span>
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-xl text-muted-foreground leading-relaxed">
              Comprehensive collection of ethical hacking and penetration testing tools for cybersecurity professionals and security researchers.
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
                <button className="px-4 py-2 rounded-lg border border-primary/30 bg-background/50 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all">MITM</button>
                <button className="px-4 py-2 rounded-lg border border-primary/30 bg-background/50 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all">Web Testing</button>
                <button className="px-4 py-2 rounded-lg border border-primary/30 bg-background/50 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all">Wireless</button>
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
                    <span className="text-sm font-medium text-foreground">Difficulty:</span>
                    <span className={`text-sm font-medium px-2 py-1 rounded ${
                      tool.difficulty === 'Beginner' ? 'bg-green-500/10 text-green-400' :
                      tool.difficulty === 'Intermediate' ? 'bg-yellow-500/10 text-yellow-400' :
                      'bg-red-500/10 text-red-400'
                    }`}>{tool.difficulty}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">Platforms:</span>
                    <div className="flex gap-1">
                      {tool.platforms.map((platform, idx) => (
                        <span key={idx} className="text-xs bg-muted/50 text-muted-foreground px-2 py-1 rounded">
                          {platform}
                        </span>
                      ))}
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
                Get notified about new red team tools, techniques, and ethical hacking methodologies delivered to your inbox.
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
              <span className="font-semibold text-foreground">Legal Disclaimer:</span> All tools listed are for educational purposes and authorized penetration testing only. Users are responsible for ensuring compliance with applicable laws and obtaining proper authorization before using these tools. Some tools may include affiliate partnerships that help fund our educational content.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}