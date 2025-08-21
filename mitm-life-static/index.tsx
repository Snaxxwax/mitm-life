import React, { useEffect, useRef } from 'react';
import './styles.css';

// Matrix Rain Effect Component
const MatrixRain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+-=[]{}|;:,.<>?';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00ff00';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = characters[Math.floor(Math.random() * characters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 opacity-20"
      style={{ pointerEvents: 'none' }}
    />
  );
};

// Statistic Component
const StatCard: React.FC<{ number: string; label: string; description: string }> = ({
  number,
  label,
  description,
}) => (
  <div className="bg-gray-900/50 backdrop-blur-sm border border-green-500/20 rounded-lg p-6 text-center transform hover:scale-105 transition-all duration-300">
    <div className="text-3xl font-bold text-green-400 mb-2">{number}</div>
    <div className="text-lg font-semibold text-white mb-1">{label}</div>
    <div className="text-sm text-gray-300">{description}</div>
  </div>
);

// Research Area Component
const ResearchArea: React.FC<{
  title: string;
  description: string;
  techniques: string[];
  icon: string;
}> = ({ title, description, techniques, icon }) => (
  <div className="bg-gray-900/50 backdrop-blur-sm border border-green-500/20 rounded-lg p-6 hover:border-green-400/40 transition-all duration-300">
    <div className="flex items-center mb-4">
      <span className="text-2xl mr-3">{icon}</span>
      <h3 className="text-xl font-bold text-white">{title}</h3>
    </div>
    <p className="text-gray-300 mb-4">{description}</p>
    <div className="space-y-2">
      {techniques.map((technique, index) => (
        <div key={index} className="flex items-center text-sm text-green-400">
          <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
          {technique}
        </div>
      ))}
    </div>
    <div className="mt-4">
      <span className="text-green-400 font-semibold">Free Educational Content</span>
    </div>
  </div>
);

// Testimonial Component
const TestimonialCard: React.FC<{
  quote: string;
  author: string;
  role: string;
  organization: string;
}> = ({ quote, author, role, organization }) => (
  <div className="bg-gray-900/50 backdrop-blur-sm border border-green-500/20 rounded-lg p-6">
    <div className="text-gray-300 mb-4 italic">"{quote}"</div>
    <div className="text-white font-semibold">{author}</div>
    <div className="text-green-400 text-sm">{role}</div>
    <div className="text-gray-400 text-sm">{organization}</div>
  </div>
);

// Main Homepage Component
const Homepage: React.FC = () => {
  const researchAreas = [
    {
      title: "Network Reconnaissance",
      description: "Advanced techniques for network discovery, port scanning, and service enumeration used in professional penetration testing.",
      techniques: [
        "Active & Passive Reconnaissance",
        "Advanced Port Scanning Techniques",
        "Service Fingerprinting Methods",
        "Network Topology Mapping"
      ],
      icon: "🌐"
    },
    {
      title: "Man-in-the-Middle Attacks",
      description: "Comprehensive research on MITM attack vectors, detection methods, and defensive countermeasures for cybersecurity professionals.",
      techniques: [
        "ARP Spoofing & Poisoning",
        "SSL/TLS Interception Techniques",
        "DNS Hijacking Methods",
        "Wireless MITM Attacks"
      ],
      icon: "🔄"
    },
    {
      title: "Web Application Testing",
      description: "Modern web application security testing frameworks and methodologies for identifying and exploiting vulnerabilities.",
      techniques: [
        "SQL Injection Techniques",
        "Cross-Site Scripting (XSS)",
        "Authentication Bypass Methods",
        "API Security Testing"
      ],
      icon: "🕸️"
    },
    {
      title: "Wireless Security Assessment",
      description: "Cutting-edge wireless security research covering WiFi, Bluetooth, and emerging wireless protocols.",
      techniques: [
        "WPA/WPA2/WPA3 Attacks",
        "Bluetooth Security Analysis",
        "IoT Device Exploitation",
        "Radio Frequency Analysis"
      ],
      icon: "📡"
    },
    {
      title: "Social Engineering Research",
      description: "Psychological manipulation techniques and human factor security research for awareness and defensive training.",
      techniques: [
        "Phishing Campaign Development",
        "Pretexting Methodologies",
        "Physical Security Bypasses",
        "Human Psychology Exploitation"
      ],
      icon: "🎭"
    },
    {
      title: "Advanced Red Team Tactics",
      description: "Enterprise-level red team methodologies focusing on advanced persistent threat simulation and defense evasion.",
      techniques: [
        "Living Off The Land Techniques",
        "Defense Evasion Methods",
        "Lateral Movement Strategies",
        "Command & Control Channels"
      ],
      icon: "⚔️"
    }
  ];

  const testimonials = [
    {
      quote: "The MITM attack research content has revolutionized our cybersecurity training program. Our team's understanding of network security vulnerabilities has improved dramatically.",
      author: "Dr. Sarah Chen",
      role: "Cybersecurity Professor",
      organization: "MIT Security Research Lab"
    },
    {
      quote: "This educational platform provides the most comprehensive red team methodologies I've encountered. Essential resource for any serious security professional.",
      author: "Marcus Rodriguez",
      role: "Senior Penetration Tester",
      organization: "FireEye Red Team"
    },
    {
      quote: "The ethical approach to teaching advanced attack techniques has helped us build better defensive strategies. Invaluable for our security team development.",
      author: "Jennifer Thompson",
      role: "CISO",
      organization: "Fortune 500 Financial Services"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <MatrixRain />
      
      {/* Navigation */}
      <nav className="relative z-10 bg-black/80 backdrop-blur-sm border-b border-green-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-green-400">MITM.LIFE</span>
              <span className="text-sm text-gray-400">Red Team Research</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#research" className="text-gray-300 hover:text-green-400 transition-colors">Research Areas</a>
              <a href="#methodologies" className="text-gray-300 hover:text-green-400 transition-colors">Methodologies</a>
              <a href="#community" className="text-gray-300 hover:text-green-400 transition-colors">Community</a>
              <a href="#about" className="text-gray-300 hover:text-green-400 transition-colors">About</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Red Team Engagements & Cybersecurity Research
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Advanced man-in-the-middle attack research, red team methodologies, and ethical hacking education 
            for cybersecurity professionals and security researchers worldwide.
          </p>
          <p className="text-lg text-gray-400 mb-10">
            Comprehensive educational resources covering network infiltration techniques, 
            MITM attack vectors, and defensive countermeasures - all focused on ethical research and professional development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Explore Research Areas
            </button>
            <button className="border border-green-500 text-green-400 hover:bg-green-500 hover:text-black font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Join Research Community
            </button>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              number="500+"
              label="Attack Techniques"
              description="Documented methodologies"
            />
            <StatCard
              number="300+"
              label="Security Researchers"
              description="Active community members"
            />
            <StatCard
              number="50+"
              label="MITM Methodologies"
              description="Research frameworks"
            />
            <StatCard
              number="100%"
              label="Ethical Research"
              description="Legal compliance focus"
            />
          </div>
        </div>
      </section>

      {/* Research Areas Section */}
      <section id="research" className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Research Areas</h2>
            <p className="text-xl text-gray-300">
              Comprehensive cybersecurity research covering advanced attack techniques and defensive methodologies
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchAreas.map((area, index) => (
              <ResearchArea key={index} {...area} />
            ))}
          </div>
        </div>
      </section>

      {/* Educational Impact Section */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Educational Impact</h2>
          <p className="text-xl text-gray-300 mb-8">
            Empowering cybersecurity professionals with ethical red team education and research-driven methodologies
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">Universities</div>
              <div className="text-gray-300">Academic partnerships for cybersecurity curriculum development</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">Enterprises</div>
              <div className="text-gray-300">Corporate security team training and red team exercises</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">Researchers</div>
              <div className="text-gray-300">Independent security researchers and bug bounty hunters</div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Testimonials */}
      <section id="community" className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Research Community</h2>
            <p className="text-xl text-gray-300">
              Trusted by security professionals and educators worldwide
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Start Your Red Team Journey</h2>
          <p className="text-xl text-gray-300 mb-8">
            Access comprehensive educational resources, join our research community, and advance your cybersecurity expertise
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Access Free Research Content
            </button>
            <button className="border border-green-500 text-green-400 hover:bg-green-500 hover:text-black font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Join Security Community
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-black/80 border-t border-green-500/20 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold text-green-400 mb-4">MITM.LIFE</h3>
              <p className="text-gray-400 text-sm">
                Premier red team education and cybersecurity research platform focused on ethical hacking methodologies.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Research Areas</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>MITM Attack Research</li>
                <li>Network Reconnaissance</li>
                <li>Web Application Testing</li>
                <li>Wireless Security</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Community</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Security Researchers</li>
                <li>Educational Partnerships</li>
                <li>Research Publications</li>
                <li>Conference Presentations</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal & Ethics</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Ethical Research Guidelines</li>
                <li>Legal Compliance</li>
                <li>Responsible Disclosure</li>
                <li>Educational Use Only</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-green-500/20 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 MITM.LIFE - Red Team Education & Cybersecurity Research. All content for educational purposes only.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;