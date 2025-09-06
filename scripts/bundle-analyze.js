#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('📦 Running bundle analysis...');

function runCommand(command, description) {
  console.log(`\n${description}...`);
  try {
    const output = execSync(command, { encoding: 'utf8', stdio: 'inherit' });
    console.log(`✅ ${description} completed`);
    return output;
  } catch (error) {
    console.error(`❌ ${description} failed:`, error.message);
    throw error;
  }
}

function analyzeBundleSize() {
  const distPath = path.join(process.cwd(), 'dist');
  
  if (!fs.existsSync(distPath)) {
    console.log('❌ dist folder not found. Running build first...');
    runCommand('npm run build', 'Building project');
  }
  
  console.log('\n📊 Analyzing bundle size...');
  
  // Get all JS files in dist
  const files = [];
  
  function walkDir(dir) {
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        walkDir(fullPath);
      } else if (item.endsWith('.js') || item.endsWith('.css')) {
        const size = stat.size;
        const relativePath = path.relative(distPath, fullPath);
        files.push({ path: relativePath, size });
      }
    });
  }
  
  walkDir(distPath);
  
  // Sort by size
  files.sort((a, b) => b.size - a.size);
  
  console.log('\n📋 Bundle Analysis Results:');
  console.log('=' .repeat(60));
  
  let totalSize = 0;
  files.forEach(file => {
    const sizeKB = (file.size / 1024).toFixed(2);
    const sizeMB = file.size > 1024 * 1024 ? `(${(file.size / (1024 * 1024)).toFixed(2)} MB)` : '';
    console.log(`${file.path.padEnd(40)} ${sizeKB.padStart(8)} KB ${sizeMB}`);
    totalSize += file.size;
  });
  
  console.log('=' .repeat(60));
  const totalKB = (totalSize / 1024).toFixed(2);
  const totalMB = totalSize > 1024 * 1024 ? `(${(totalSize / (1024 * 1024)).toFixed(2)} MB)` : '';
  console.log(`${'Total'.padEnd(40)} ${totalKB.padStart(8)} KB ${totalMB}`);
  
  // Recommendations
  console.log('\n💡 Bundle Optimization Recommendations:');
  
  const largeFiles = files.filter(f => f.size > 100 * 1024); // > 100KB
  if (largeFiles.length > 0) {
    console.log(`⚠️  Found ${largeFiles.length} large files (>100KB):`);
    largeFiles.forEach(file => {
      console.log(`   • ${file.path} - Consider code splitting or compression`);
    });
  }
  
  if (totalSize > 1024 * 1024) { // > 1MB
    console.log('⚠️  Total bundle size is over 1MB - consider optimization strategies');
  }
  
  const jsFiles = files.filter(f => f.path.endsWith('.js'));
  const cssFiles = files.filter(f => f.path.endsWith('.css'));
  
  console.log(`\n📈 Summary:`);
  console.log(`   JavaScript files: ${jsFiles.length} (${(jsFiles.reduce((sum, f) => sum + f.size, 0) / 1024).toFixed(2)} KB)`);
  console.log(`   CSS files: ${cssFiles.length} (${(cssFiles.reduce((sum, f) => sum + f.size, 0) / 1024).toFixed(2)} KB)`);
}

function main() {
  try {
    analyzeBundleSize();
    
    console.log('\n🎉 Bundle analysis completed!');
    console.log('📝 Review the results above for optimization opportunities.');
  } catch (error) {
    console.error('❌ Bundle analysis failed:', error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}