# Monitoring & Analytics Setup Guide
## mitm.life Production Monitoring Configuration

**Date:** August 20, 2025  
**Project:** mitm.life OSINT Blog  
**Purpose:** Comprehensive monitoring, analytics, and health check configuration

---

## 📊 Analytics Configuration

### Plausible Analytics (Recommended)

**Privacy-focused analytics with GDPR compliance**

#### Setup Steps:

1. **Account Creation**
   ```
   1. Sign up at https://plausible.io
   2. Add mitm.life as a site
   3. Configure goals and events
   4. Get tracking script
   ```

2. **Environment Variables**
   ```env
   NEXT_PUBLIC_PLAUSIBLE_DOMAIN=mitm.life
   NEXT_PUBLIC_PLAUSIBLE_API_HOST=plausible.io
   ```

3. **Tracking Script Integration**
   ```html
   <!-- Add to layout.tsx head -->
   <script defer data-domain="mitm.life" src="https://plausible.io/js/plausible.js"></script>
   ```

4. **Custom Events Setup**
   ```javascript
   // Track affiliate link clicks
   plausible('Affiliate Click', {props: {tool: 'vpn-service'}})
   
   // Track service inquiries
   plausible('Service Inquiry', {props: {plan: 'basic-scan'}})
   
   // Track legal page views
   plausible('Legal Page View', {props: {page: 'privacy-policy'}})
   ```

### Alternative: Umami Analytics

**Self-hosted analytics option**

#### Setup Steps:

1. **Self-Hosting**
   ```bash
   # Deploy Umami on Vercel/Railway
   git clone https://github.com/umami-software/umami.git
   # Follow deployment instructions
   ```

2. **Configuration**
   ```env
   NEXT_PUBLIC_UMAMI_WEBSITE_ID=your-website-id
   NEXT_PUBLIC_UMAMI_URL=https://your-umami-instance.com
   ```

---

## 🔍 Search Engine Optimization

### Google Search Console

#### Setup Process:

1. **Property Addition**
   ```
   1. Go to https://search.google.com/search-console
   2. Add property: mitm.life
   3. Verify ownership via DNS TXT record
   4. Submit sitemap: https://mitm.life/sitemap.xml
   ```

2. **DNS Verification Record**
   ```
   Type: TXT
   Name: @
   Value: google-site-verification=your-verification-code
   ```

3. **Sitemap Submission**
   ```
   Primary Sitemap: https://mitm.life/sitemap.xml
   RSS Feed: https://mitm.life/feed.xml
   ```

### Bing Webmaster Tools

#### Setup Process:

1. **Account Setup**
   ```
   1. Go to https://www.bing.com/webmasters
   2. Add site: mitm.life
   3. Verify via DNS or file upload
   4. Submit sitemap
   ```

---

## 📈 Performance Monitoring

### Core Web Vitals Tracking

#### Lighthouse CI Integration

1. **GitHub Actions Setup**
   ```yaml
   # .github/workflows/lighthouse.yml
   name: Lighthouse CI
   on:
     push:
       branches: [main]
     pull_request:
       branches: [main]
   
   jobs:
     lighthouse:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
           with:
             node-version: 18
         - name: Install dependencies
           run: pnpm install
         - name: Build
           run: pnpm build
         - name: Run Lighthouse CI
           run: npx @lhci/cli@0.12.x autorun
   ```

2. **Lighthouse Configuration**
   ```javascript
   // lighthouserc.js
   module.exports = {
     ci: {
       collect: {
         staticDistDir: './out',
         numberOfRuns: 3,
         url: [
           'http://localhost/index.html',
           'http://localhost/privacy/index.html',
           'http://localhost/terms/index.html'
         ]
       },
       assert: {
         preset: 'lighthouse:recommended',
         assertions: {
           'categories:performance': ['error', {minScore: 0.9}],
           'categories:accessibility': ['error', {minScore: 1.0}],
           'categories:best-practices': ['error', {minScore: 1.0}],
           'categories:seo': ['error', {minScore: 0.9}]
         }
       }
     }
   };
   ```

#### Real User Monitoring (RUM)

1. **Web Vitals Library**
   ```javascript
   // lib/web-vitals.js
   import {getCLS, getFID, getFCP, getLCP, getTTFB} from 'web-vitals';
   
   function sendToAnalytics(metric) {
     // Send to your analytics service
     if (typeof plausible !== 'undefined') {
       plausible('Web Vitals', {
         props: {
           metric: metric.name,
           value: metric.value,
           rating: metric.rating
         }
       });
     }
   }
   
   getCLS(sendToAnalytics);
   getFID(sendToAnalytics);
   getFCP(sendToAnalytics);
   getLCP(sendToAnalytics);
   getTTFB(sendToAnalytics);
   ```

---

## 🛡️ Security Monitoring

### Security Headers Monitoring

#### Header Validation Service

1. **Automated Checks**
   ```bash
   # Daily header check script
   #!/bin/bash
   curl -I https://mitm.life | grep -E "(X-Frame-Options|X-XSS-Protection|Content-Security-Policy|Strict-Transport-Security)" > /tmp/headers.txt
   
   # Alert if headers missing
   if ! grep -q "X-Frame-Options: DENY" /tmp/headers.txt; then
     echo "ALERT: X-Frame-Options header missing!"
   fi
   ```

2. **SSL/TLS Monitoring**
   ```bash
   # Certificate expiration check
   echo | openssl s_client -connect mitm.life:443 2>/dev/null | openssl x509 -noout -dates
   ```

### Content Security Policy Monitoring

#### CSP Violation Reporting

1. **Report URI Setup**
   ```
   Content-Security-Policy: default-src 'self'; report-uri https://your-csp-report-endpoint.com/report
   ```

2. **Violation Handler**
   ```javascript
   // CSP violation endpoint
   app.post('/csp-report', (req, res) => {
     const violation = req.body;
     console.log('CSP Violation:', violation);
     // Send alert to monitoring system
     res.status(204).end();
   });
   ```

---

## 🚨 Uptime & Availability Monitoring

### Uptime Robot Configuration

#### Basic Setup:

1. **Monitor Creation**
   ```
   Monitor Type: HTTPS
   URL: https://mitm.life
   Interval: 5 minutes
   Alert Contacts: admin@mitm.life
   ```

2. **Multiple Endpoint Monitoring**
   ```
   - https://mitm.life (Homepage)
   - https://mitm.life/privacy (Legal Pages)
   - https://mitm.life/terms (Terms of Service)
   - https://mitm.life/about (About Page)
   ```

### Cloudflare Analytics

#### Built-in Monitoring:

1. **Access Cloudflare Dashboard**
   - Navigate to Analytics & Logs
   - Configure alerts for:
     - Traffic anomalies
     - Error rate spikes
     - Performance degradation

2. **Alert Configuration**
   ```
   Traffic Drop: > 50% decrease
   Error Rate: > 5% 4xx/5xx errors
   Response Time: > 5 seconds average
   ```

---

## 📧 Error Tracking & Logging

### Browser Error Monitoring

#### Sentry Integration (Optional)

1. **Setup**
   ```bash
   pnpm add @sentry/nextjs
   ```

2. **Configuration**
   ```javascript
   // sentry.client.config.js
   import * as Sentry from '@sentry/nextjs';
   
   Sentry.init({
     dsn: 'your-sentry-dsn',
     environment: 'production',
     tracesSampleRate: 0.1,
   });
   ```

### Server Log Monitoring

#### Cloudflare Logs Access

1. **Log Fields**
   ```
   - Client IP
   - Request method and path
   - Response status code
   - Response time
   - User agent
   - Referrer
   ```

2. **Log Analysis Queries**
   ```
   # High error rates
   status >= 400
   
   # Slow requests
   edgeResponseTime > 5000
   
   # Bot traffic
   userAgent contains "bot"
   ```

---

## 🎯 Conversion Tracking

### Goal Tracking Setup

#### Plausible Goals:

1. **Service Page Views**
   ```
   Goal: Visit /services
   Type: Page view
   ```

2. **Affiliate Link Clicks**
   ```
   Goal: Affiliate Click
   Type: Custom event
   Trigger: Click on .affiliate-link
   ```

3. **Contact Form Submissions**
   ```
   Goal: Contact Submission
   Type: Custom event
   Trigger: Form submit success
   ```

#### Custom Event Implementation:

```javascript
// Track affiliate clicks
document.addEventListener('click', (event) => {
  if (event.target.matches('.affiliate-link')) {
    plausible('Affiliate Click', {
      props: {
        service: event.target.dataset.service,
        position: event.target.dataset.position
      }
    });
  }
});

// Track service inquiries
function trackServiceInquiry(serviceName) {
  plausible('Service Inquiry', {
    props: {
      service: serviceName,
      timestamp: new Date().toISOString()
    }
  });
}
```

---

## 📱 Social Media Monitoring

### Social Mentions Tracking

#### Google Alerts Setup:

1. **Alert Queries**
   ```
   "mitm.life"
   "mitm life" OSINT
   "man in the middle intelligence"
   ```

2. **Social Platform Monitoring**
   ```
   Twitter: @mitmlife mentions
   LinkedIn: Company page engagement
   Reddit: r/OSINT mentions
   ```

#### Social Analytics:

1. **Twitter Analytics**
   - Track profile visits
   - Monitor tweet engagement
   - Measure follower growth

2. **LinkedIn Analytics**
   - Page views and unique visitors
   - Post engagement rates
   - Follower demographics

---

## 🔧 Health Check Implementation

### Automated Health Checks

#### Health Check Endpoint:

```javascript
// pages/api/health.js
export default function handler(req, res) {
  const healthCheck = {
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    status: 'OK',
    checks: {
      database: checkDatabase(),
      external_apis: checkAPIs(),
      static_assets: checkAssets()
    }
  };

  res.status(200).json(healthCheck);
}
```

#### Monitoring Script:

```bash
#!/bin/bash
# health-monitor.sh

SITE_URL="https://mitm.life"
ALERT_EMAIL="admin@mitm.life"

# Check main site
if ! curl -f -s $SITE_URL > /dev/null; then
  echo "ALERT: $SITE_URL is down!" | mail -s "Site Down Alert" $ALERT_EMAIL
fi

# Check critical pages
for page in "/privacy" "/terms" "/about"; do
  if ! curl -f -s "$SITE_URL$page" > /dev/null; then
    echo "ALERT: $SITE_URL$page is not accessible!" | mail -s "Page Error Alert" $ALERT_EMAIL
  fi
done
```

---

## 📊 Monitoring Dashboard

### Metrics to Track

#### Technical Metrics:
- **Uptime**: 99.9% target
- **Page Load Time**: < 2s average
- **Core Web Vitals**: All green
- **Error Rate**: < 0.1%
- **Security Score**: A+ grade

#### Business Metrics:
- **Unique Visitors**: Daily/Monthly
- **Page Views**: Top performing content
- **Conversion Rate**: Services/Affiliate
- **Bounce Rate**: < 60%
- **Session Duration**: > 2 minutes

#### Legal Compliance Metrics:
- **Privacy Policy Views**: Track engagement
- **Terms Acceptance**: Monitor clicks
- **GDPR Requests**: Response time
- **Affiliate Disclosures**: Visibility

### Dashboard Tools

#### Grafana Dashboard (Advanced):

```json
{
  "dashboard": {
    "title": "MITM.life Production Metrics",
    "panels": [
      {
        "title": "Site Uptime",
        "type": "stat",
        "targets": [{
          "expr": "up{job=\"mitm-life\"}"
        }]
      },
      {
        "title": "Response Times",
        "type": "graph",
        "targets": [{
          "expr": "http_request_duration_seconds"
        }]
      }
    ]
  }
}
```

---

## 🚨 Alert Configuration

### Alert Thresholds

#### Critical Alerts (Immediate):
- Site down: > 1 minute
- Error rate: > 5%
- Response time: > 10 seconds
- SSL certificate expiring: < 7 days

#### Warning Alerts (Within 1 hour):
- Performance degradation: > 20%
- Traffic anomalies: > 50% change
- High error rate: > 1%
- Slow response: > 5 seconds

#### Info Alerts (Daily digest):
- Traffic reports
- Performance summaries
- SEO ranking changes
- Social media mentions

### Notification Channels

1. **Email Alerts**
   ```
   Primary: admin@mitm.life
   Secondary: tech@mitm.life
   Emergency: ceo@mitm.life
   ```

2. **Slack Integration**
   ```
   Channel: #mitm-alerts
   Webhook: https://hooks.slack.com/your-webhook
   ```

3. **SMS Alerts (Critical Only)**
   ```
   Service: Twilio/AWS SNS
   Numbers: Primary and backup contacts
   ```

---

## 📋 Monitoring Checklist

### Daily Checks:
- [ ] Site accessibility test
- [ ] Performance metrics review
- [ ] Error log review
- [ ] Analytics data review
- [ ] Social media monitoring

### Weekly Checks:
- [ ] Security headers validation
- [ ] SSL certificate status
- [ ] Content freshness review
- [ ] Competitor analysis
- [ ] Backup verification

### Monthly Checks:
- [ ] Full security audit
- [ ] Performance optimization review
- [ ] Legal compliance check
- [ ] Analytics goal assessment
- [ ] Monitoring system health

---

## 🛠 Troubleshooting Guide

### Common Issues:

#### Analytics Not Tracking:
1. Check script integration
2. Verify domain configuration
3. Test in incognito mode
4. Check ad blockers impact

#### Performance Degradation:
1. Run Lighthouse audit
2. Check Core Web Vitals
3. Analyze server logs
4. Review recent changes

#### High Error Rates:
1. Check error logs
2. Test critical paths
3. Verify DNS resolution
4. Check CDN status

---

**Monitoring Setup Guide Prepared By:** Technical Team  
**Document Version:** 1.0  
**Date:** August 20, 2025  
**Next Review:** September 20, 2025

---

*This monitoring configuration ensures comprehensive visibility into the health, performance, and success of the mitm.life platform.*