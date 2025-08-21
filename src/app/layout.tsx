import { Metadata } from 'next';
import { siteConfig } from '../../site.config';
import Search from '../components/Search';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.author,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    creator: siteConfig.social.twitter,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="min-h-screen bg-background font-sans antialiased dark">
        <div className="relative flex min-h-screen flex-col">
          <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center space-x-4 px-4 sm:px-6 lg:px-8">
              <div className="flex gap-6 md:gap-10">
                <a href="/" className="flex items-center space-x-2 group">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-sm">M</span>
                  </div>
                  <span className="inline-block font-bold text-xl bg-gradient-to-r from-primary to-green-400 bg-clip-text text-transparent">
                    {siteConfig.name}
                  </span>
                </a>
              </div>
              <div className="flex flex-1 items-center justify-between space-x-4">
                <div className="hidden md:block flex-1 max-w-sm">
                  <Search />
                </div>
                <nav className="flex items-center space-x-6">
                  <a
                    href="/blog"
                    className="text-sm font-medium transition-all duration-200 hover:text-primary hover:scale-105 focus-ring rounded-md px-2 py-1"
                  >
                    Blog
                  </a>
                  <a
                    href="/tools"
                    className="text-sm font-medium transition-all duration-200 hover:text-primary hover:scale-105 focus-ring rounded-md px-2 py-1"
                  >
                    Tools
                  </a>
                  
                  <a
                    href="/about"
                    className="text-sm font-medium transition-all duration-200 hover:text-primary hover:scale-105 focus-ring rounded-md px-2 py-1"
                  >
                    About
                  </a>
                </nav>
              </div>
            </div>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="border-t border-border/40 bg-card/50 backdrop-blur-sm">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="grid gap-8 md:grid-cols-4">
                <div className="md:col-span-2">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-sm">M</span>
                    </div>
                    <span className="font-bold text-lg bg-gradient-to-r from-primary to-green-400 bg-clip-text text-transparent">
                      {siteConfig.name}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="status-indicator w-2 h-2 rounded-full bg-green-400"></div>
                      <span className="terminal-text">System Operational</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-4 text-foreground">Resources</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li><a href="/tools" className="hover:text-primary transition-colors">OSINT Tools</a></li>
                    <li><a href="/blog" className="hover:text-primary transition-colors">Research Blog</a></li>
                    <li><a href="/about" className="hover:text-primary transition-colors">About Us</a></li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">
                  <p>© 2025 {siteConfig.name}. All rights reserved.</p>
                  <div className="flex items-center gap-4">
                    <a href="/privacy" className="hover:text-primary transition-colors">Privacy</a>
                    <a href="/terms" className="hover:text-primary transition-colors">Terms</a>
                  </div>
                </div>
                <div className="trust-badge scan-effect">
                  <span className="text-xs font-medium">🛡️ Ethical & Legal Compliance</span>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}