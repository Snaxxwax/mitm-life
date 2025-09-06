# Deployment Guide

This guide walks you through deploying the MITM.life cybersecurity blog to GitHub and Cloudflare Pages.

## Prerequisites

- GitHub account
- Cloudflare account
- Domain name (mitm.life) configured in Cloudflare

## Step 1: GitHub Repository Setup

### 1.1 Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `mitm-life-blog` or similar
3. Set it to **Public** (required for free Cloudflare Pages)
4. Don't initialize with README (we already have one)

### 1.2 Connect Local Repository

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Initial commit
git commit -m "Initial commit: MITM.life cybersecurity blog"

# Add remote origin (replace with your repository URL)
git remote add origin https://github.com/yourusername/mitm-life-blog.git

# Push to GitHub
git push -u origin main
```

## Step 2: Cloudflare Pages Setup

### 2.1 Create Cloudflare Pages Project

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Navigate to **Pages** in the sidebar
3. Click **Create a project**
4. Choose **Connect to Git**
5. Select your GitHub repository (`mitm-life-blog`)

### 2.2 Configure Build Settings

- **Project name**: `mitm-life`
- **Production branch**: `main`
- **Framework preset**: `Astro`
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Root directory**: `/` (leave empty)

### 2.3 Environment Variables

No environment variables are required for the basic setup.

### 2.4 Advanced Settings (Optional)

- **Node.js version**: `18`
- **Build timeout**: `10 minutes`
- **Build image**: `v2` (latest)

## Step 3: GitHub Secrets Configuration

For the GitHub Actions workflow to work with Cloudflare Pages, you need to set up secrets:

### 3.1 Get Cloudflare API Token

1. Go to [Cloudflare API Tokens](https://dash.cloudflare.com/profile/api-tokens)
2. Click **Create Token**
3. Use **Custom token** template
4. Configure permissions:
   - **Account**: `Cloudflare Pages:Edit`
   - **Zone**: `Zone:Read` (for your domain)
5. Set **Account Resources**: Include your account
6. Set **Zone Resources**: Include `mitm.life`
7. Click **Continue to summary** and **Create Token**
8. Copy the token (you won't see it again)

### 3.2 Get Cloudflare Account ID

1. In Cloudflare Dashboard, go to the right sidebar
2. Copy your **Account ID**

### 3.3 Add GitHub Secrets

1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret** and add:
   - `CLOUDFLARE_API_TOKEN`: Your API token from step 3.1
   - `CLOUDFLARE_ACCOUNT_ID`: Your account ID from step 3.2

## Step 4: Custom Domain Configuration

### 4.1 Add Custom Domain to Pages

1. In Cloudflare Pages, go to your project
2. Navigate to **Custom domains** tab
3. Click **Set up a custom domain**
4. Enter `mitm.life`
5. Click **Continue**
6. Add `www.mitm.life` as well (optional)

### 4.2 DNS Configuration

The DNS should be automatically configured since your domain is already in Cloudflare. If not:

1. Go to **DNS** in Cloudflare Dashboard
2. Add CNAME records:
   - `mitm.life` → `mitm-life.pages.dev`
   - `www.mitm.life` → `mitm-life.pages.dev`

## Step 5: SSL/TLS Configuration

1. In Cloudflare Dashboard, go to **SSL/TLS**
2. Set encryption mode to **Full (strict)**
3. Enable **Always Use HTTPS**
4. Enable **Automatic HTTPS Rewrites**

## Step 6: Performance Optimization

### 6.1 Caching Rules

1. Go to **Rules** → **Page Rules**
2. Create rule for `mitm.life/*`:
   - **Cache Level**: Cache Everything
   - **Edge Cache TTL**: 1 month
   - **Browser Cache TTL**: 4 hours

### 6.2 Speed Optimizations

1. Go to **Speed** → **Optimization**
2. Enable:
   - **Auto Minify** (HTML, CSS, JS)
   - **Brotli** compression
   - **Early Hints**

## Step 7: Security Configuration

### 7.1 Security Headers

1. Go to **Rules** → **Transform Rules**
2. Create **HTTP Response Header Modification** rule:
   - **Rule name**: Security Headers
   - **When incoming requests match**: `hostname equals mitm.life`
   - **Then**: Add headers:
     - `X-Frame-Options`: `DENY`
     - `X-Content-Type-Options`: `nosniff`
     - `Referrer-Policy`: `strict-origin-when-cross-origin`
     - `Permissions-Policy`: `geolocation=(), microphone=(), camera=()`

### 7.2 Bot Protection

1. Go to **Security** → **Bots**
2. Enable **Bot Fight Mode** (free tier)

## Step 8: Analytics Setup

### 8.1 Cloudflare Analytics

1. Go to **Analytics & Logs** → **Web Analytics**
2. Enable **Web Analytics**
3. Add the tracking code to your site (optional, as Cloudflare provides server-side analytics)

### 8.2 Google Analytics (Optional)

Add Google Analytics tracking to `src/components/BaseHead.astro` if desired.

## Step 9: Testing Deployment

### 9.1 Trigger Deployment

1. Make a small change to your repository
2. Commit and push:
   ```bash
   git add .
   git commit -m "Test deployment"
   git push
   ```

### 9.2 Monitor Build

1. Check GitHub Actions tab for build status
2. Check Cloudflare Pages dashboard for deployment status
3. Visit `https://mitm.life` to verify the site is live

## Step 10: Content Management Workflow

### 10.1 Using Obsidian

1. Open the `obsidian-vault` folder in Obsidian
2. Create content in the appropriate category folders
3. Commit and push changes:
   ```bash
   npm run sync  # Sync content to Astro
   git add .
   git commit -m "Add new content"
   git push
   ```

### 10.2 Direct Content Creation

1. Create `.md` files in `src/content/` directories
2. Include proper frontmatter
3. Commit and push changes

## Troubleshooting

### Common Issues

1. **Build fails**: Check Node.js version compatibility
2. **Content not syncing**: Run `npm run sync` locally first
3. **Domain not working**: Check DNS propagation (can take up to 24 hours)
4. **SSL errors**: Ensure SSL/TLS mode is set to "Full (strict)"

### Build Logs

- **GitHub Actions**: Check the Actions tab in your repository
- **Cloudflare Pages**: Check the deployment logs in Pages dashboard

### Support

- **Astro**: [Astro Documentation](https://docs.astro.build)
- **Cloudflare Pages**: [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- **GitHub Actions**: [GitHub Actions Docs](https://docs.github.com/en/actions)

## Maintenance

### Regular Tasks

1. **Update dependencies**: `npm update` monthly
2. **Content backup**: Ensure Obsidian vault is backed up
3. **Security updates**: Monitor Cloudflare security recommendations
4. **Performance monitoring**: Check Core Web Vitals in Cloudflare Analytics

### Scaling

As your site grows, consider:
- **Cloudflare Pro plan** for advanced features
- **Custom caching strategies** for better performance
- **CDN optimization** for global content delivery

---

Your MITM.life cybersecurity blog is now ready for production! 🚀

