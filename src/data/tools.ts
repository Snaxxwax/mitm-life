import type { ToolCategory } from '@/types/tools';

export const toolCategories: ToolCategory[] = [
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

// Utility functions for working with tools data
export const getAllTools = () => {
  return toolCategories.flatMap(category => category.tools);
};

export const getToolsByCategory = (categoryName: string) => {
  const category = toolCategories.find(cat => cat.name === categoryName);
  return category ? category.tools : [];
};

export const getCategoryNames = () => {
  return toolCategories.map(category => category.name);
};

export const getToolsByDifficulty = (difficulty: string) => {
  return getAllTools().filter(tool => tool.difficulty === difficulty);
};

export const getAffiliateTools = () => {
  return getAllTools().filter(tool => tool.affiliate);
};

export const getFreeTools = () => {
  return getAllTools().filter(tool => tool.pricing.toLowerCase().includes('free'));
};