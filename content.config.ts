import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { ObsidianMdLoader, ObsidianDocumentSchema } from 'astro-loader-obsidian';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
		}),
});

// Cybersecurity content collections with Obsidian integration
const obsidianContentSchema = ({ image }) =>
	ObsidianDocumentSchema.extend({
		// Keep your custom cybersecurity-specific fields
		category: z.string(),
		difficulty: z.enum(['beginner', 'intermediate', 'advanced']).optional(),
		readTime: z.string().optional(),
		heroImage: image().optional(),
	});

const tools = defineCollection({
	loader: ObsidianMdLoader({
		base: 'obsidian-vault/tools',
		url: 'tools',
	}),
	schema: obsidianContentSchema,
});

const guides = defineCollection({
	loader: ObsidianMdLoader({
		base: 'obsidian-vault/guides',
		url: 'guides',
	}),
	schema: obsidianContentSchema,
});

const research = defineCollection({
	loader: ObsidianMdLoader({
		base: 'obsidian-vault/research',
		url: 'research',
	}),
	schema: obsidianContentSchema,
});

const resources = defineCollection({
	loader: ObsidianMdLoader({
		base: 'obsidian-vault/resources',
		url: 'resources',
	}),
	schema: obsidianContentSchema,
});

export const collections = { blog, tools, guides, research, resources };
