# GEMINI.md

## Project Overview

This project is a high-performance OSINT (Open Source Intelligence) cybersecurity blog platform named "mitm.life". It is built with Next.js 14 and TypeScript, and it's designed for defensive security research and education. The platform features a comprehensive blog system with MDX content, integrated monetization features for OSINT services, and a strong focus on performance, security, and legal compliance.

The key technologies used are:

*   **Framework**: Next.js 14 (with App Router)
*   **Language**: TypeScript
*   **Styling**: Tailwind CSS
*   **Content**: Contentlayer with MDX (Markdown with React components)
*   **Package Manager**: pnpm
*   **Testing**: Jest and React Testing Library
*   **Deployment**: Cloudflare Pages (configured for static export)

The architecture is based on a static site generation (SSG) model, which ensures fast loading times and a high level of security. Content is managed through Markdown/MDX files in the `content` directory, and Contentlayer processes these files into a type-safe API that can be used in the application.

## Building and Running

The following commands are available to build, run, and test the project. They are defined in the `scripts` section of the `package.json` file.

*   **Install dependencies**:
    ```bash
    pnpm install
    ```

*   **Run the development server**:
    ```bash
    pnpm dev
    ```

*   **Build the project for production**:
    ```bash
    pnpm build
    ```

*   **Run the production server**:
    ```bash
    pnpm start
    ```

*   **Run tests**:
    ```bash
    pnpm test
    ```

*   **Lint and format code**:
    ```bash
    pnpm lint
    pnpm format
    ```

## Development Conventions

*   **Package Manager**: The project uses `pnpm` as the package manager. It is recommended to use `pnpm` for all dependency management.
*   **Code Style**: The project uses ESLint and Prettier to enforce a consistent code style. It is recommended to run `pnpm lint` and `pnpm format` before committing any changes.
*   **Content Management**: All content is managed through Markdown/MDX files in the `content` directory. Contentlayer is used to process this content, and the schemas for the different content types are defined in `contentlayer.config.ts`.
*   **Configuration**: Site-wide configuration is centralized in `site.config.ts`. This file should be used to manage the site name, title, description, and other global settings.
*   **Styling**: The project uses Tailwind CSS for styling. The configuration is in `tailwind.config.ts`, and global styles are in `src/app/globals.css`.
*   **Testing**: The project uses Jest and React Testing Library for testing. Test files are located in `__tests__` directories alongside the components they are testing.
*   **Deployment**: The project is configured for static export and deployment to Cloudflare Pages. The `_headers` file contains the security headers for the deployment.
