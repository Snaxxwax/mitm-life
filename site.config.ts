export const siteConfig = {
  name: 'MITM.life',
  title: 'MITM.life - OSINT & Cybersecurity Research Blog',
  description: 'Professional OSINT research, cybersecurity insights, and ethical hacking methodologies. Expert analysis of digital investigations and security trends.',
  url: 'https://mitm.life',
  author: 'MITM Team',
  keywords: ['OSINT', 'cybersecurity', 'digital investigations', 'ethical hacking', 'security research'],
  
  social: {
    twitter: '@mitmlife',
    github: 'mitmlife',
  },
  
  analytics: {
    plausible: {
      domain: 'mitm.life',
    },
  },
  
  monetization: {
    affiliates: {
      disclaimer: 'This site contains affiliate links. We may earn a commission when you make a purchase.',
    },
    services: {
      consulting: true,
      training: true,
    },
  },
  
  // SEO and performance
  seo: {
    openGraph: {
      type: 'website',
      locale: 'en_US',
      siteName: 'MITM.life',
    },
    twitter: {
      card: 'summary_large_image',
      creator: '@mitmlife',
    },
  },
};

export type SiteConfig = typeof siteConfig;