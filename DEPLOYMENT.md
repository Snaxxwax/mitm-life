# 🚀 Deployment Guide for mitm.life

This document outlines the complete deployment strategy and setup for the mitm.life OSINT blog project.

## 📋 Overview

The project uses a modern, secure CI/CD pipeline with automated deployments to Cloudflare Pages, comprehensive testing, and performance monitoring.

## 🏗️ Architecture

```
GitHub Repository
    ↓
GitHub Actions CI/CD Pipeline
    ├── Quality Checks (lint, typecheck, test)
    ├── Security Scanning (CodeQL, audit)
    ├── Build & Export (Next.js static build)
    ├── Performance Testing (Lighthouse)
    └── Deploy to Cloudflare Pages
```

## 🔧 Setup Instructions

### 1. Repository Setup

1. Push your code to a GitHub repository
2. Ensure the repository has the following structure:
   ```
   /
   ├── .github/workflows/ci.yml
   ├── next.config.mjs
   ├── package.json
   ├── _headers
   ├── _redirects
   └── src/
   ```

### 2. GitHub Secrets Configuration

Add the following secrets in your GitHub repository settings:

```
CLOUDFLARE_API_TOKEN=your_cloudflare_api_token
CLOUDFLARE_ACCOUNT_ID=your_cloudflare_account_id
CLOUDFLARE_ZONE_ID=your_cloudflare_zone_id
```

### 3. Cloudflare Pages Setup

1. **Create Cloudflare Pages Project:**
   - Go to Cloudflare Dashboard → Pages
   - Connect your GitHub repository
   - Set project name: `mitm-life`

2. **Build Configuration:**
   ```
   Build command: pnpm build
   Build output directory: out
   Root directory: /
   ```

3. **Environment Variables:**
   ```
   SITE_URL=https://mitm.life
   NEXT_PUBLIC_ANALYTICS_PROVIDER=plausible
   PLAUSIBLE_DOMAIN=mitm.life
   NEXT_PUBLIC_PAYMENTS_TEST_MODE=false
   NODE_ENV=production
   ```

### 4. Domain Configuration

1. **Custom Domain:**
   - Add custom domain `mitm.life` in Cloudflare Pages
   - Configure DNS records in Cloudflare DNS

2. **SSL Certificate:**
   - Enable "Always Use HTTPS"
   - Configure SSL/TLS encryption mode to "Full (strict)"

## 🔄 CI/CD Pipeline

### Pipeline Stages

1. **Quality Checks**
   - Type checking with TypeScript
   - Code linting with ESLint
   - Code formatting check with Prettier
   - Unit tests with Jest

2. **Security Scanning**
   - Dependency audit
   - CodeQL static analysis
   - Security vulnerability scanning

3. **Build & Export**
   - Content generation with Contentlayer
   - Next.js static build
   - RSS feed generation
   - Search index generation with Pagefind

4. **Performance Testing**
   - Lighthouse CI performance audits
   - Core Web Vitals monitoring
   - Accessibility testing

5. **Deployment**
   - Production deployment on `main` branch
   - Preview deployments for pull requests
   - Automatic cache purging

### Trigger Conditions

- **Production Deploy:** Push to `main` branch
- **Preview Deploy:** Pull request creation/update
- **Quality Checks:** All pushes and pull requests

## 📊 Monitoring & Alerts

### Health Monitoring

Run the health check script:
```bash
node scripts/health-check.js
```

This monitors:
- Site availability
- Response times
- Key endpoint functionality
- Error tracking

### Performance Monitoring

- Lighthouse CI reports in GitHub Actions
- Core Web Vitals tracking
- Bundle size monitoring
- Runtime performance metrics

### Alert Configuration

Configure webhooks in environment variables:
```bash
WEBHOOK_URL=https://hooks.slack.com/your-webhook-url
```

## 🚀 Deployment Commands

### Local Development
```bash
pnpm dev              # Start development server
pnpm build            # Build for production
pnpm preview          # Preview production build
```

### Testing
```bash
pnpm test             # Run tests
pnpm test:ci          # Run tests with coverage
pnpm lint             # Lint code
pnpm typecheck        # Type checking
```

### Build Analysis
```bash
pnpm build:analyze    # Bundle analysis
pnpm search:index     # Generate search index
```

## 🔒 Security Features

### Headers Configuration
- Content Security Policy (CSP)
- HTTP Strict Transport Security (HSTS)
- X-Frame-Options
- X-Content-Type-Options
- Referrer Policy

### Build Security
- Dependency vulnerability scanning
- Static code analysis
- Environment variable validation
- Secure asset handling

## 🎯 Performance Optimizations

### Static Generation
- Pre-rendered HTML pages
- Optimized images and assets
- CDN distribution via Cloudflare

### Caching Strategy
- Static assets: 1 year cache
- HTML pages: 5 minutes cache
- RSS feeds: 1 hour cache
- Search index: 24 hour cache

### Bundle Optimization
- Code splitting
- Tree shaking
- Minification
- Compression

## 🔧 Troubleshooting

### Common Issues

1. **Build Failures**
   - Check TypeScript errors
   - Verify environment variables
   - Review dependency compatibility

2. **Deployment Issues**
   - Verify Cloudflare API tokens
   - Check build output directory
   - Review custom domain configuration

3. **Performance Issues**
   - Run Lighthouse audit
   - Check bundle analyzer
   - Review image optimization

### Debug Commands
```bash
# Check build logs
pnpm build --debug

# Analyze bundle
pnpm build:analyze

# Run health check
node scripts/health-check.js

# Test lighthouse locally
npx lighthouse http://localhost:3000
```

## 📈 Scaling Considerations

### Traffic Handling
- Cloudflare CDN for global distribution
- Automatic scaling with Pages
- DDoS protection included

### Content Management
- Automated content builds
- Version control for all content
- Automated RSS feed generation

### Performance Monitoring
- Continuous Lighthouse audits
- Real User Monitoring (RUM)
- Core Web Vitals tracking

## 🎉 Post-Deployment Checklist

- [ ] Domain properly configured and SSL active
- [ ] All environment variables set correctly  
- [ ] Analytics tracking working
- [ ] Payment integration functional
- [ ] Search functionality working
- [ ] RSS feeds generating
- [ ] Redirects working correctly
- [ ] Health monitoring active
- [ ] Performance metrics tracking

## 📞 Support

For deployment issues or questions:
- Review GitHub Actions logs
- Check Cloudflare Pages dashboard
- Monitor site health with provided scripts
- Review performance metrics in Lighthouse CI

---

**Last Updated:** $(date)
**Environment:** Production
**Deployment Status:** ✅ Active