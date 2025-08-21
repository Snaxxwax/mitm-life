import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import readingTime from 'reading-time';

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `posts/**/*.{md,mdx}`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    date: {
      type: 'date',
      required: true,
    },
    published: {
      type: 'boolean',
      default: true,
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
      default: [],
    },
    category: {
      type: 'string',
      required: false,
    },
    image: {
      type: 'string',
      required: false,
    },
    author: {
      type: 'string',
      default: 'MITM Team',
    },
    featured: {
      type: 'boolean',
      default: false,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/blog/${post._raw.flattenedPath.replace('posts/', '')}`,
    },
    slug: {
      type: 'string',
      resolve: (post) => post._raw.flattenedPath.replace('posts/', ''),
    },
    readingTime: {
      type: 'json',
      resolve: (post) => readingTime(post.body.raw),
    },
  },
}));

const Page = defineDocumentType(() => ({
  name: 'Page',
  filePathPattern: `pages/**/*.{md,mdx}`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    published: {
      type: 'boolean',
      default: true,
    },
    publishedAt: {
      type: 'date',
      required: false,
    },
    updatedAt: {
      type: 'date',
      required: false,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (page) => `/${page._raw.flattenedPath.replace('pages/', '')}`,
    },
    slug: {
      type: 'string',
      resolve: (page) => page._raw.flattenedPath.replace('pages/', ''),
    },
  },
}));

export default makeSource({
  disableImportAliasWarning: true,
  contentDirPath: './content',
  documentTypes: [Post, Page],
  mdx: {
    remarkPlugins: [remarkGfm, remarkMath],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode as any,
        {
          theme: 'github-dark',
          keepBackground: false,
        },
      ],
      [
        rehypeAutolinkHeadings as any,
        {
          properties: {
            className: ['subheading-anchor'],
            ariaLabel: 'Link to section',
          },
        },
      ],
      rehypeKatex as any,
    ],
  },
});