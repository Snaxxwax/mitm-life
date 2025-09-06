# MITM.life - Cybersecurity Blog Notes

This is a temporary notes file for the MITM.life cybersecurity blog project.

## Project Status

- ✅ Astro blog setup complete
- ✅ Content collections configured
- ✅ UI/UX components implemented
- ✅ Testing suite (unit tests + E2E)
- ✅ Code quality tools (ESLint, Prettier, TypeScript)
- 🚧 Cloudflare Pages deployment in progress

## Content Areas

- **Guides**: WiFi security fundamentals, penetration testing, WPA/WEP analysis
- **Tools**: Security assessment toolkits, red team tools
- **Research**: Advanced attack techniques, security frameworks
- **Resources**: Checklists, methodologies, best practices

## Configuration Examples

When setting up MCP servers or other integrations, always use environment variables for sensitive data:

```bash
# Example environment variables
export GITHUB_TOKEN="your_token_here"
export CLOUDFLARE_API_TOKEN="your_token_here"
export SUPABASE_ACCESS_TOKEN="your_token_here"
```

## Deployment Notes

- Uses GitHub Actions for CI/CD
- Cloudflare Pages for hosting
- Automated security scanning and testing
- Performance monitoring with Lighthouse
