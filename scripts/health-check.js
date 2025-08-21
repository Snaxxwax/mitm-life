#!/usr/bin/env node

/**
 * Health Check Script for mitm.life
 * Monitors site availability, performance, and key metrics
 */

import https from 'https';
import fs from 'fs/promises';

const SITE_URL = process.env.SITE_URL || 'https://mitm.life';
const WEBHOOK_URL = process.env.WEBHOOK_URL; // For notifications (Slack/Discord/etc)

const endpoints = [
  '/',
  '/blog/',
  '/tools/',
  
  '/feed.xml',
  '/sitemap.xml'
];

async function checkEndpoint(path) {
  return new Promise((resolve) => {
    const url = `${SITE_URL}${path}`;
    const startTime = Date.now();
    
    https.get(url, (res) => {
      const responseTime = Date.now() - startTime;
      
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        resolve({
          path,
          url,
          status: res.statusCode,
          responseTime,
          headers: res.headers,
          bodySize: Buffer.byteLength(body, 'utf8'),
          success: res.statusCode >= 200 && res.statusCode < 400
        });
      });
    }).on('error', (err) => {
      resolve({
        path,
        url,
        status: 0,
        responseTime: Date.now() - startTime,
        error: err.message,
        success: false
      });
    });
  });
}

async function performHealthCheck() {
  console.log(`🏥 Health check starting for ${SITE_URL}...`);
  
  const results = await Promise.all(endpoints.map(checkEndpoint));
  
  const summary = {
    timestamp: new Date().toISOString(),
    site: SITE_URL,
    totalEndpoints: results.length,
    successfulEndpoints: results.filter(r => r.success).length,
    failedEndpoints: results.filter(r => !r.success).length,
    averageResponseTime: Math.round(results.reduce((acc, r) => acc + r.responseTime, 0) / results.length),
    results: results
  };
  
  // Log results
  console.log('\n📊 Health Check Results:');
  console.log(`✅ Successful: ${summary.successfulEndpoints}/${summary.totalEndpoints}`);
  console.log(`⚠️ Failed: ${summary.failedEndpoints}/${summary.totalEndpoints}`);
  console.log(`⏱️ Average Response Time: ${summary.averageResponseTime}ms`);
  
  results.forEach(result => {
    const icon = result.success ? '✅' : '❌';
    console.log(`${icon} ${result.path} - ${result.status} (${result.responseTime}ms)`);
    if (!result.success && result.error) {
      console.log(`   Error: ${result.error}`);
    }
  });
  
  // Save results to file
  const logFile = `health-check-${new Date().toISOString().split('T')[0]}.json`;
  await fs.writeFile(logFile, JSON.stringify(summary, null, 2));
  console.log(`\n📄 Results saved to ${logFile}`);
  
  // Send alert if there are failures
  if (summary.failedEndpoints > 0) {
    await sendAlert(summary);
  }
  
  // Exit with error code if any endpoint failed
  process.exit(summary.failedEndpoints > 0 ? 1 : 0);
}

async function sendAlert(summary) {
  if (!WEBHOOK_URL) {
    console.log('⚠️ No webhook URL configured for alerts');
    return;
  }
  
  const message = {
    text: `🚨 Health Check Alert - ${SITE_URL}`,
    attachments: [{
      color: 'danger',
      fields: [
        {
          title: 'Failed Endpoints',
          value: summary.failedEndpoints.toString(),
          short: true
        },
        {
          title: 'Total Endpoints',
          value: summary.totalEndpoints.toString(),
          short: true
        },
        {
          title: 'Average Response Time',
          value: `${summary.averageResponseTime}ms`,
          short: true
        },
        {
          title: 'Failed URLs',
          value: summary.results
            .filter(r => !r.success)
            .map(r => `• ${r.path} (${r.status || 'Error'})`)
            .join('\\n'),
          short: false
        }
      ],
      timestamp: summary.timestamp
    }]
  };
  
  try {
    // Send webhook notification (implementation depends on your webhook service)
    console.log('📢 Sending alert notification...');
    // Webhook implementation would go here
  } catch (error) {
    console.error('Failed to send alert:', error.message);
  }
}

// Performance monitoring for key metrics
async function checkPerformanceMetrics() {
  console.log('📈 Checking performance metrics...');
  
  const metrics = {
    loadTime: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    cumulativeLayoutShift: 0
  };
  
  // This would integrate with Lighthouse CI or similar tools
  // For now, we'll just do basic response time monitoring
  
  return metrics;
}

// Run health check
performHealthCheck().catch(console.error);