# MITM.life - Cybersecurity Blog

A content-first Astro site designed for cybersecurity professionals, featuring seamless Obsidian integration, GitHub deployment, and Cloudflare Pages hosting.

## 🚀 Features

- **Content-First Architecture**: Built with Astro for optimal performance and SEO
- **Obsidian Integration**: Write and manage content using Obsidian with automatic sync
- **Cybersecurity Focus**: Specialized categories for tools, guides, research, and resources
- **Modern Design**: Responsive, accessible design with cybersecurity aesthetics
- **GitHub Integration**: Version control and collaborative content management
- **Cloudflare Pages**: Fast, global deployment with automatic builds

## 📁 Project Structure

```
mitm-life-blog/
├── src/
│   ├── components/          # Reusable Astro components
│   ├── content/            # Astro content collections
│   │   ├── tools/          # Tools & Scripts content
│   │   ├── guides/         # Guides & How-Tos content
│   │   ├── research/       # Research & Analysis content
│   │   └── resources/      # Resources content
│   ├── layouts/            # Page layouts
│   ├── pages/              # Site pages and routing
│   └── styles/             # Global styles
├── obsidian-vault/         # Obsidian vault for content creation
│   ├── tools/              # Tools content (syncs to src/content/tools/)
│   ├── guides/             # Guides content (syncs to src/content/guides/)
│   ├── research/           # Research content (syncs to src/content/research/)
│   ├── resources/          # Resources content (syncs to src/content/resources/)
│   └── .obsidian/          # Obsidian configuration
├── sync-content.js         # Content synchronization script
└── package.json
```

## 🛠️ Setup & Installation

### Prerequisites

- Node.js 18+ and npm
- Git
- Obsidian (optional, for content creation)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mitm-life-blog
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Obsidian vault (optional)**
   - Open Obsidian
   - Open the `obsidian-vault` folder as a vault
   - Start creating content in the category folders

## 📝 Content Management

### Using Obsidian (Recommended)

1. **Open the Obsidian vault**
   - Launch Obsidian
   - Open the `obsidian-vault` folder as a vault

2. **Create content**
   - Write Markdown files in the appropriate category folders
   - Use frontmatter for metadata (title, description, tags, etc.)

3. **Sync content to Astro**
   ```bash
   npm run sync          # One-time sync
   npm run sync:watch    # Sync and watch for changes
   ```

### Manual Content Creation

You can also create content directly in the `src/content/` directories:

```markdown
---
title: "Your Content Title"
description: "Brief description of the content"
pubDate: "2025-08-27"
category: "tools"
tags: ["cybersecurity", "tools", "pentesting"]
---

Your content here...
```

### Content Categories

- **Tools & Scripts** (`/tools`): Security tools, scripts, and utilities
- **Guides & How-Tos** (`/guides`): Step-by-step tutorials and guides
- **Research & Analysis** (`/research`): Original research and threat analysis
- **Resources** (`/resources`): Curated links and reference materials

## 🚀 Development

### Local Development

```bash
npm run dev
```

Visit `http://localhost:4321` to see your site.

### Building for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🌐 Deployment

### GitHub Setup

1. **Initialize Git repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Connect to GitHub**
   ```bash
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

### Cloudflare Pages Deployment

1. **Connect to Cloudflare Pages**
   - Log in to Cloudflare Dashboard
   - Go to Pages → Create a project
   - Connect your GitHub repository

2. **Build Configuration**
   - Framework preset: `Astro`
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Root directory: `/` (leave empty)

3. **Environment Variables**
   - No special environment variables needed for basic setup

### Custom Domain Setup

1. **Add custom domain in Cloudflare Pages**
   - Go to your Pages project → Custom domains
   - Add `mitm.life` and `www.mitm.life`

2. **DNS Configuration**
   - Add CNAME records pointing to your Pages deployment

## 🔧 Customization

### Site Configuration

Edit `src/consts.ts` to customize:
- Site title and description
- Navigation categories
- Social media links

### Styling

- Global styles: `src/styles/global.css`
- Component styles: Scoped styles in `.astro` files
- Color scheme: Cybersecurity-themed dark blues and green accents

### Adding New Categories

1. **Add to navigation** in `src/consts.ts`
2. **Create content directory** in `src/content/`
3. **Create page** in `src/pages/`
4. **Update sync script** if using Obsidian

## 📚 Content Writing Tips

### Frontmatter Best Practices

```markdown
---
title: "Descriptive Title"
description: "SEO-friendly description (150-160 characters)"
pubDate: "2025-08-27"
category: "tools" # tools, guides, research, resources
tags: ["cybersecurity", "pentesting", "tools"]
difficulty: "intermediate" # beginner, intermediate, advanced
author: "Your Name"
---
```

### Obsidian Features

- **Internal Links**: Use `[[Link Text]]` for cross-references
- **Tags**: Use `#tag` for quick categorization
- **Templates**: Create templates for consistent formatting
- **Graph View**: Visualize content relationships

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

- **Documentation**: Check this README and inline comments
- **Issues**: Report bugs and feature requests on GitHub
- **Community**: Join cybersecurity discussions on Twitter [@mitmlife](https://twitter.com/mitmlife)

## 🔗 Links

- **Live Site**: [https://mitm.life](https://mitm.life)
- **GitHub**: [https://github.com/mitmlife](https://github.com/mitmlife)
- **Twitter**: [@mitmlife](https://twitter.com/mitmlife)

---

Built with ❤️ for the cybersecurity community
