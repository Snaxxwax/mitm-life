#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔍 Starting content validation...');

const issues = [];

function addIssue(type, file, message, severity = 'warn') {
  issues.push({ type, file, message, severity });
}

// function runCommand(command, description, required = true) {
//   console.log(`\n${description}...`);
//   try {
//     const output = execSync(command, { encoding: 'utf8', stdio: 'pipe' });
//     console.log(`✅ ${description} - OK`);
//     return output;
//   } catch (error) {
//     const severity = required ? 'error' : 'warn';
//     addIssue('command', 'system', `${description} failed: ${error.message}`, severity);
//     console.log(`${required ? '❌' : '⚠️'} ${description} - ${error.message}`);
//     return null;
//   }
// }

function validateMarkdownFiles() {
  console.log('\n📝 Validating Markdown files...');

  const markdownFiles = [];

  function findMarkdownFiles(dir) {
    if (!fs.existsSync(dir)) return;

    const items = fs.readdirSync(dir);
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);

      if (
        stat.isDirectory() &&
        !item.startsWith('.') &&
        item !== 'node_modules'
      ) {
        findMarkdownFiles(fullPath);
      } else if (item.endsWith('.md') || item.endsWith('.mdx')) {
        markdownFiles.push(fullPath);
      }
    });
  }

  // Look for markdown files in common locations
  ['obsidian-vault', 'src/content', 'src/pages', '.'].forEach(dir => {
    findMarkdownFiles(dir);
  });

  console.log(`Found ${markdownFiles.length} Markdown files`);

  markdownFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');

    // Check for frontmatter
    if (file.includes('content/') && !content.startsWith('---')) {
      addIssue('frontmatter', file, 'Missing frontmatter', 'error');
    }

    // Check for required frontmatter fields
    if (content.startsWith('---')) {
      const frontmatterEnd = content.indexOf('---', 3);
      if (frontmatterEnd !== -1) {
        const frontmatter = content.substring(3, frontmatterEnd);

        if (!frontmatter.includes('title:')) {
          addIssue(
            'frontmatter',
            file,
            'Missing title in frontmatter',
            'error'
          );
        }
        if (!frontmatter.includes('description:')) {
          addIssue(
            'frontmatter',
            file,
            'Missing description in frontmatter',
            'error'
          );
        }
        if (file.includes('content/') && !frontmatter.includes('pubDate:')) {
          addIssue(
            'frontmatter',
            file,
            'Missing pubDate in frontmatter',
            'error'
          );
        }
      }
    }

    // Check for broken internal links
    const internalLinks = content.match(/\[([^\]]+)\]\(([^)]+)\)/g);
    if (internalLinks) {
      internalLinks.forEach(link => {
        const match = link.match(/\[([^\]]+)\]\(([^)]+)\)/);
        if (match && match[2].startsWith('/')) {
          // Check if internal link exists (basic check)
          const linkPath = match[2];
          if (!linkPath.startsWith('/http') && !linkPath.includes('#')) {
            addIssue(
              'link',
              file,
              `Potential broken internal link: ${link}`,
              'warn'
            );
          }
        }
      });
    }

    // Check for empty content
    const contentWithoutFrontmatter = content.replace(/^---[\s\S]*?---\s*/, '');
    if (contentWithoutFrontmatter.trim().length < 100) {
      addIssue(
        'content',
        file,
        'Content is very short (< 100 characters)',
        'warn'
      );
    }
  });
}

function validateHTMLOutput() {
  console.log('\n🌐 Validating HTML output...');

  const distPath = path.join(process.cwd(), 'dist');
  if (!fs.existsSync(distPath)) {
    addIssue(
      'build',
      'system',
      'No dist folder found - run build first',
      'error'
    );
    return;
  }

  const htmlFiles = [];

  function findHTMLFiles(dir) {
    const items = fs.readdirSync(dir);
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        findHTMLFiles(fullPath);
      } else if (item.endsWith('.html')) {
        htmlFiles.push(fullPath);
      }
    });
  }

  findHTMLFiles(distPath);

  console.log(`Found ${htmlFiles.length} HTML files to validate`);

  // Run HTMLHint on each file
  htmlFiles.slice(0, 5).forEach(file => {
    // Limit to first 5 files to avoid spam
    try {
      execSync(`npx htmlhint "${file}"`, { stdio: 'pipe' });
    } catch (_error) {
      addIssue('html', file, 'HTML validation issues found', 'warn');
    }
  });
}

function checkImageOptimization() {
  console.log('\n🖼️ Checking image optimization...');

  const publicPath = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicPath)) {
    return;
  }

  const imageFiles = [];

  function findImages(dir) {
    const items = fs.readdirSync(dir);
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        findImages(fullPath);
      } else if (/\.(jpg|jpeg|png|gif|webp)$/i.test(item)) {
        imageFiles.push({ path: fullPath, size: stat.size });
      }
    });
  }

  findImages(publicPath);

  const largeImages = imageFiles.filter(img => img.size > 500 * 1024); // > 500KB
  largeImages.forEach(img => {
    const sizeKB = Math.round(img.size / 1024);
    addIssue(
      'image',
      img.path,
      `Large image file (${sizeKB}KB) - consider optimization`,
      'warn'
    );
  });

  console.log(
    `Checked ${imageFiles.length} images, found ${largeImages.length} large files`
  );
}

function printReport() {
  console.log('\n📊 Content Validation Report');
  console.log('='.repeat(50));

  const errors = issues.filter(i => i.severity === 'error');
  const warnings = issues.filter(i => i.severity === 'warn');

  console.log(`❌ Errors: ${errors.length}`);
  console.log(`⚠️ Warnings: ${warnings.length}`);
  console.log(`✅ Total issues: ${issues.length}`);

  if (errors.length > 0) {
    console.log('\n❌ Errors (must fix):');
    errors.forEach(issue => {
      console.log(`  • [${issue.type}] ${issue.file}: ${issue.message}`);
    });
  }

  if (warnings.length > 0) {
    console.log('\n⚠️ Warnings (should fix):');
    warnings.forEach(issue => {
      console.log(`  • [${issue.type}] ${issue.file}: ${issue.message}`);
    });
  }

  return errors.length === 0;
}

function main() {
  try {
    // Validate markdown content
    validateMarkdownFiles();

    // Validate HTML output
    validateHTMLOutput();

    // Check image optimization
    checkImageOptimization();

    // Print final report
    const success = printReport();

    if (success) {
      console.log('\n🎉 Content validation completed with no critical errors!');
      process.exit(0);
    } else {
      console.log(
        '\n💥 Content validation found critical errors. Please fix them.'
      );
      process.exit(1);
    }
  } catch (error) {
    console.error('❌ Content validation failed:', error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}
