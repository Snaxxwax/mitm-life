#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔍 Starting dependency update process...');

function runCommand(command, description) {
  console.log(`\n📋 ${description}`);
  try {
    execSync(command, { stdio: 'inherit' });
    console.log(`✅ ${description} completed successfully`);
  } catch (error) {
    console.error(`❌ ${description} failed:`, error.message);
    process.exit(1);
  }
}

function checkPackageJson() {
  const packagePath = path.join(process.cwd(), 'package.json');
  if (!fs.existsSync(packagePath)) {
    console.error('❌ package.json not found');
    process.exit(1);
  }
  
  const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
  const depCount = Object.keys(packageJson.dependencies || {}).length;
  const devDepCount = Object.keys(packageJson.devDependencies || {}).length;
  
  console.log(`📦 Found ${depCount} dependencies and ${devDepCount} dev dependencies`);
  return packageJson;
}

function main() {
  // Check package.json exists
  const packageJson = checkPackageJson();
  
  // Run security audit first
  runCommand('npm audit --audit-level moderate', 'Running security audit');
  
  // Check for outdated packages
  runCommand('npm outdated', 'Checking for outdated packages');
  
  // Update dependencies
  runCommand('npm update', 'Updating dependencies');
  
  // Run security audit fix for non-breaking changes
  runCommand('npm audit fix', 'Applying security fixes');
  
  // Verify installation
  runCommand('npm install', 'Verifying installation');
  
  // Run tests to ensure nothing broke
  if (packageJson.scripts && packageJson.scripts.test) {
    runCommand('npm test', 'Running tests to verify updates');
  }
  
  // Type check if available
  if (packageJson.scripts && packageJson.scripts['type-check']) {
    runCommand('npm run type-check', 'Running type checks');
  }
  
  // Build to ensure everything still works
  if (packageJson.scripts && packageJson.scripts.build) {
    runCommand('npm run build', 'Testing build process');
  }
  
  console.log('\n🎉 Dependency update process completed successfully!');
  console.log('📝 Review the changes and commit if everything looks good.');
}

if (require.main === module) {
  main();
}