export const siteConfig = {
  name: 'MITM.life',
  title: 'MITM.life - Red Team Education & Research Platform',
  description: 'Advanced red team methodologies, man-in-the-middle attack research, and ethical hacking education for cybersecurity professionals worldwide.',
  url: 'https://mitm.life',
  author: 'MITM Research Team',
  keywords: ['red team', 'man-in-the-middle', 'MITM attacks', 'penetration testing', 'ethical hacking', 'cybersecurity education', 'network security'],
  
  social: {
    twitter: '@mitmlife',
    github: 'mitmlife',
  },
  
  analytics: {
    plausible: {
      domain: 'mitm.life',
    },
  },
  
  education: {
    affiliates: {
      disclaimer: 'Educational platform supporting security research through tool recommendations and resources.',
    },
    mission: {
      ethical: true,
      educational: true,
      research: true,
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