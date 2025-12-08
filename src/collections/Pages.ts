import type { CollectionConfig } from 'payload'
import {
  Hero,
  CallToAction,
  RichContent,
  SocialProof,
  Features,
  TextContent,
} from '../blocks'
import { textLength, isValidSlug } from '../utils/validators'

export const Pages: CollectionConfig = {
  slug: 'pages',
  labels: {
    singular: 'Page',
    plural: 'Pages',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'status', 'updatedAt'],
    description: 'Create and manage website pages with flexible block-based layouts',
    listSearchableFields: ['title', 'slug'],
    group: 'Content',
  },
  access: {
    read: () => true, // Public read access for frontend
  },
  versions: {
    drafts: {
      autosave: {
        interval: 300, // Autosave every 5 minutes
      },
    },
  },
  fields: [
    // Page basics
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
              admin: {
                description: 'Page title (20-100 chars) - displayed in browser tab and as the main heading',
              },
              validate: textLength(20, 100),
            },
            {
              name: 'slug',
              type: 'text',
              required: true,
              unique: true,
              index: true,
              admin: {
                description: 'URL-friendly identifier (e.g., "about-us" creates /about-us)',
                position: 'sidebar',
              },
              hooks: {
                beforeValidate: [
                  ({ value, data }) => {
                    // Auto-generate slug from title if not provided
                    if (!value && data?.title) {
                      return data.title
                        .toLowerCase()
                        .replace(/[^a-z0-9]+/g, '-')
                        .replace(/^-|-$/g, '')
                    }
                    return value
                  },
                ],
              },
            },
            {
              name: 'layout',
              type: 'blocks',
              required: true,
              minRows: 1,
              blocks: [Hero, RichContent, CallToAction, SocialProof, Features, TextContent],
              admin: {
                description: 'Build your page by adding content blocks',
              },
            },
          ],
        },
        {
          label: 'SEO',
          fields: [
            {
              name: 'meta',
              type: 'group',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  admin: {
                    description:
                      'SEO title (50-60 chars) - if empty, page title will be used',
                  },
                  validate: textLength(50, 60),
                },
                {
                  name: 'description',
                  type: 'textarea',
                  admin: {
                    description:
                      'Meta description for search engines (150-160 chars)',
                  },
                  validate: textLength(150, 160),
                },
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  admin: {
                    description: 'Image for social media sharing (Open Graph / Twitter Card)',
                  },
                },
                {
                  name: 'noIndex',
                  type: 'checkbox',
                  defaultValue: false,
                  admin: {
                    description: 'Hide this page from search engines',
                  },
                },
              ],
            },
          ],
        },
        {
          label: 'Settings',
          fields: [
            {
              name: 'status',
              type: 'select',
              defaultValue: 'draft',
              options: [
                { label: 'Draft', value: 'draft' },
                { label: 'Published', value: 'published' },
                { label: 'Archived', value: 'archived' },
              ],
              admin: {
                position: 'sidebar',
                description: 'Page visibility status',
              },
            },
            {
              name: 'publishedAt',
              type: 'date',
              admin: {
                position: 'sidebar',
                description: 'When this page should go live',
                date: {
                  pickerAppearance: 'dayAndTime',
                },
                condition: (data) => data?.status === 'published',
              },
            },
            {
              name: 'template',
              type: 'select',
              defaultValue: 'default',
              options: [
                { label: 'Default', value: 'default' },
                { label: 'Full Width', value: 'full-width' },
                { label: 'Sidebar', value: 'sidebar' },
                { label: 'Landing Page', value: 'landing' },
              ],
              admin: {
                description: 'Page layout template',
              },
            },
          ],
        },
      ],
    },
  ],
}
