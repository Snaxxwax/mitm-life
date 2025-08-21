import { Metadata } from 'next';
import { siteConfig } from '../../site.config';
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
      <body className="min-h-screen bg-white font-sans antialiased">
        <div className="relative flex min-h-screen flex-col">
          <header className="sticky top-0 z-40 w-full border-b bg-white">
            <div className="container mx-auto flex h-16 items-center space-x-4 px-4 sm:px-6 lg:px-8">
              <div className="flex gap-6 md:gap-10">
                <a href="/" className="flex items-center space-x-2">
                  <span className="inline-block font-bold text-xl">
                    {siteConfig.name}
                  </span>
                </a>
              </div>
              <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                <nav className="flex items-center space-x-6">
                  <a
                    href="/blog"
                    className="text-sm font-medium transition-colors hover:text-primary"
                  >
                    Blog
                  </a>
                  <a
                    href="/tools"
                    className="text-sm font-medium transition-colors hover:text-primary"
                  >
                    Tools
                  </a>
                  <a
                    href="/services"
                    className="text-sm font-medium transition-colors hover:text-primary"
                  >
                    Services
                  </a>
                  <a
                    href="/about"
                    className="text-sm font-medium transition-colors hover:text-primary"
                  >
                    About
                  </a>
                </nav>
              </div>
            </div>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="border-t py-6 md:py-0">
            <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:h-24 md:flex-row sm:px-6 lg:px-8">
              <div className="flex flex-col items-center gap-2 md:flex-row md:gap-4">
                <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                  © 2025 {siteConfig.name}. All rights reserved.
                </p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <a href="/privacy" className="hover:text-primary transition-colors">
                    Privacy Policy
                  </a>
                  <a href="/terms" className="hover:text-primary transition-colors">
                    Terms of Service
                  </a>
                </div>
              </div>
              <p className="text-center text-sm text-muted-foreground md:text-left">
                This site contains affiliate links. We may earn a commission when you make a purchase.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}