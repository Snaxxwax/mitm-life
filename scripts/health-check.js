#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const _path = require('path');

console.log('🏥 Running comprehensive health check...');

const checks = [];

function addCheck(name, status, message = '', details = '') {
  checks.push({ name, status, message, details });
}

function runCheck(command, description, required = true) {
  console.log(`\n🔍 ${description}...`);
  try {
    const output = execSync(command, { encoding: 'utf8', stdio: 'pipe' });
    addCheck(description, 'pass', 'OK', output.trim());
    console.log(`✅ ${description} - OK`);
    return true;
  } catch (error) {
    const status = required ? 'fail' : 'warn';
    addCheck(description, status, error.message, error.stdout || '');
    console.log(`${required ? '❌' : '⚠️'} ${description} - ${error.message}`);
    return false;
  }
}

function checkFile(filePath, description, required = true) {
  const exists = fs.existsSync(filePath);
  const status = exists ? 'pass' : required ? 'fail' : 'warn';
  addCheck(description, status, exists ? 'File exists' : 'File missing');
  console.log(
    `${exists ? '✅' : required ? '❌' : '⚠️'} ${description} - ${exists ? 'OK' : 'Missing'}`
  );
  return exists;
}

function printSummary() {
  console.log('\n📊 Health Check Summary');
  console.log('='.repeat(50));

  const passed = checks.filter(c => c.status === 'pass').length;
  const failed = checks.filter(c => c.status === 'fail').length;
  const warnings = checks.filter(c => c.status === 'warn').length;

  console.log(`✅ Passed: ${passed}`);
  console.log(`❌ Failed: ${failed}`);
  console.log(`⚠️ Warnings: ${warnings}`);

  if (failed > 0) {
    console.log('\n❌ Failed Checks:');
    checks
      .filter(c => c.status === 'fail')
      .forEach(check => {
        console.log(`  • ${check.name}: ${check.message}`);
      });
  }

  if (warnings > 0) {
    console.log('\n⚠️ Warnings:');
    checks
      .filter(c => c.status === 'warn')
      .forEach(check => {
        console.log(`  • ${check.name}: ${check.message}`);
      });
  }

  return failed === 0;
}

function main() {
  console.log('Starting health check...\n');

  // Check required files
  checkFile('package.json', 'Package.json exists');
  checkFile('tsconfig.json', 'TypeScript config exists');
  checkFile('astro.config.mjs', 'Astro config exists');
  checkFile('.prettierrc', 'Prettier config exists');
  checkFile('eslint.config.mjs', 'ESLint config exists');
  checkFile('CLAUDE.md', 'Claude config exists');

  // Check optional files
  checkFile('README.md', 'README exists', false);
  checkFile('.env.example', 'Environment example exists', false);
  checkFile('vitest.config.ts', 'Vitest config exists', false);

  // Check dependencies
  runCheck('npm ls', 'Dependencies are installed');

  // Run linting
  runCheck('npm run lint', 'Code linting passes');

  // Check formatting
  runCheck('npm run format:check', 'Code formatting is correct');

  // Run type checking
  runCheck('npm run type-check', 'TypeScript type checking passes');

  // Run tests
  runCheck('npm run test', 'Tests pass', false);

  // Try building
  runCheck('npm run build', 'Build succeeds');

  // Security audit
  runCheck('npm audit --audit-level moderate', 'Security audit passes', false);

  // Git status
  runCheck('git status --porcelain', 'Git working directory status', false);

  const success = printSummary();

  if (success) {
    console.log('\n🎉 All critical health checks passed!');
    process.exit(0);
  } else {
    console.log(
      '\n💥 Some critical health checks failed. Please review and fix.'
    );
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}
