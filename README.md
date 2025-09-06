# mitm.life - Cybersecurity Blog

[![Build Status](https://img.shields.io/github/actions/workflow/status/your-org/mitm/ci.yml?branch=main)](https://github.com/your-org/mitm/actions)
[![Lighthouse Score](https://img.shields.io/badge/Lighthouse-90%2B-brightgreen)](https://developers.google.com/web/tools/lighthouse)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A modern cybersecurity blog built with [Astro](https://astro.build) featuring seamless Obsidian integration for content management.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd mitm
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up Git hooks**

   ```bash
   npm run prepare
   ```

4. **Start development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:4321](http://localhost:4321) to view the site.

## 📁 Project Structure

```
mitm/
├── .husky/                 # Git hooks for quality assurance
├── obsidian-vault/         # Obsidian content (primary authoring)
├── scripts/                # Maintenance and automation scripts
├── src/
│   ├── components/         # React components
│   ├── pages/              # Astro pages and routing
│   ├── styles/             # CSS and styling
│   ├── utils/              # Utility functions
│   └── types/              # TypeScript type definitions
├── CLAUDE.md               # AI assistant configuration
├── PROJECT_MEMORY.md       # Living log of decisions/todos
├── PROJECT_SUMMARY.md      # High-level project snapshot
├── astro.config.mjs        # Astro configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## 🛠️ Development Commands

### Essential Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run check` - Run Astro type checking

### Quality Assurance

- `npm run lint` - Check code quality with ESLint
- `npm run lint:fix` - Auto-fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run type-check` - Run TypeScript checks

### Testing

- `npm run test` - Run unit tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Generate test coverage report
- `npm run e2e` - Run end-to-end tests

### Maintenance

- `npm run audit` - Security audit
- `npm run update-deps` - Update dependencies safely
- `npm run health-check` - Comprehensive project health check

### Performance & Content

- `npm run lighthouse` - Performance audit
- `npm run bundle-analyze` - Analyze bundle size
- `npm run content-check` - Validate content quality
- `npm run link-check` - Check for broken links

## 🎯 Content Management

### Obsidian Integration

Content is authored in the `obsidian-vault/` directory using Obsidian. The system automatically syncs changes to the Astro site.

#### Content Categories

- `tools/` - Security tools and scripts
- `guides/` - Step-by-step tutorials
- `research/` - Original research and analysis
- `resources/` - Curated reference materials

#### Required Frontmatter

```yaml
---
title: 'Your Post Title'
description: 'Brief description for SEO and previews'
pubDate: 2024-01-15
category: tools # or guides, research, resources
tags: ['security', 'tutorial']
---
```

### Content Workflow

1. **Write** in Obsidian with proper frontmatter
2. **Validate** with `npm run content-check`
3. **Test** locally with `npm run dev`
4. **Build** and verify with `npm run build`
5. **Deploy** after all checks pass

### Example Content

- [Memory Forensics with Volatility](./src/pages/guides/memory-forensics.md)
- [APT Cloud Infrastructure Analysis](./src/pages/research/apt-cloud.md)

## 🔧 Git Workflow

### Automated Quality Gates

Git hooks automatically enforce quality standards:

- **Pre-commit**: Runs linting, formatting, type checking, and tests
- **Pre-push**: Runs build and security audit
- **Commit-msg**: Enforces conventional commit format

### Commit Message Format

```
<type>[optional scope]: <description>

Types: feat, fix, docs, style, refactor, test, chore, perf, ci, build
```

Examples:

- `feat: add user authentication system`
- `fix(ui): resolve mobile navigation issue`
- `docs: update installation guide`

## 🚦 Quality Standards

### Code Quality

- **ESLint**: Enforces consistent code style and catches errors
- **Prettier**: Automatic code formatting
- **TypeScript**: Strict type checking with comprehensive configuration
- **Test Coverage**: Minimum 80% coverage required

### Performance Requirements

- Lighthouse score >90 for all categories
- Core Web Vitals compliance
- Bundle size monitoring with alerts for >10% increases
- Image optimization for all assets

### Security Standards

- Regular dependency audits with `npm audit`
- No hardcoded secrets or API keys
- HTTPS enforcement in production
- Content Security Policy implementation

## 🏥 Maintenance

### Regular Health Checks

Run comprehensive health checks:

```bash
npm run health-check
```

### Dependency Updates

Safely update dependencies:

```bash
npm run update-deps
```

### Performance Monitoring

Monitor and analyze performance:

```bash
npm run lighthouse
npm run bundle-analyze
```

## 🔍 Troubleshooting

### Common Issues

**Development Server Won't Start**

```bash
# Clear cache and restart
rm -rf .astro node_modules/.cache
npm install
npm run dev
```

**Build Failures**

```bash
# Run diagnostics
npm run type-check
npm run lint
npm run health-check
```

**Content Sync Issues**

```bash
# Validate content structure
npm run content-check
npm run link-check
```

### Getting Help

1. Check the [CLAUDE.md](./CLAUDE.md) file for AI assistant guidance
2. Review [PROJECT_MEMORY.md](./PROJECT_MEMORY.md) for current decisions and todos
3. Run `npm run health-check` for automated diagnostics
4. Review recent commits for breaking changes
5. Check the development server logs for specific errors

## 🤖 AI Assistant Integration

This project is optimized for use with Claude Code. See [CLAUDE.md](./CLAUDE.md) for:

- Development workflow guidelines
- Context priming instructions
- Task management best practices
- Troubleshooting guides

Also see [PROJECT_MEMORY.md](./PROJECT_MEMORY.md) for current project state.

## 📈 Performance Metrics

The project maintains strict performance standards:

- **Build Time**: < 30 seconds for full build
- **Dev Server**: Hot reload < 500ms
- **Lighthouse Scores**: >90 for all categories
- **Bundle Size**: Monitored with automatic alerts
- **Test Coverage**: Minimum 80% across all modules

## 🔐 Security

Security is built into every layer:

- Automated vulnerability scanning with `npm audit`
- Git hooks prevent committing secrets
- Content validation prevents XSS
- Regular dependency updates
- HTTPS-only in production

---

## 📄 License

This project is licensed under the MIT License. See LICENSE file for details.

## 🙏 Acknowledgments

- Built with [Astro](https://astro.build)
- Content management via [Obsidian](https://obsidian.md)
- Performance monitoring with [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- Quality assurance powered by comprehensive tooling
