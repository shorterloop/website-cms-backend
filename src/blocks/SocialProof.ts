import type { Block } from 'payload'
import { textLength } from '../utils/validators'

export const SocialProof: Block = {
  slug: 'socialProof',
  labels: {
    singular: 'Social Proof',
    plural: 'Social Proofs',
  },
  fields: [
    {
      name: 'variant',
      type: 'select',
      defaultValue: 'quotes',
      options: [
        { label: 'Testimonial Quotes', value: 'quotes' },
        { label: 'Metric Highlights', value: 'metrics' },
        { label: 'Logo Wall', value: 'logos' },
      ],
      admin: {
        description: 'Type of social proof to display',
      },
    },
    {
      name: 'headline',
      type: 'text',
      admin: {
        description: 'Section headline (15-60 chars). e.g., "Teams Who\'ve Made the Shift"',
      },
      validate: textLength(15, 60),
    },
    {
      name: 'subheadline',
      type: 'textarea',
      admin: {
        description: 'Optional intro text (30-120 chars)',
      },
      validate: textLength(30, 120),
    },

    // Quotes variant
    {
      name: 'quotes',
      type: 'array',
      label: 'Testimonials',
      minRows: 1,
      maxRows: 4,
      admin: {
        description: 'Customer testimonials (1-4). Quality over quantity.',
        condition: (data, siblingData) => siblingData?.variant === 'quotes',
      },
      fields: [
        {
          name: 'quote',
          type: 'textarea',
          required: true,
          admin: {
            description: 'The testimonial text (60-250 chars). Must include specific outcome.',
          },
          validate: textLength(60, 250),
        },
        {
          name: 'authorName',
          type: 'text',
          required: true,
          admin: {
            description: 'Full name (5-50 chars)',
          },
          validate: textLength(5, 50),
        },
        {
          name: 'authorTitle',
          type: 'text',
          required: true,
          admin: {
            description: 'Role and company (10-60 chars). e.g., "VP Product at Acme Corp"',
          },
          validate: textLength(10, 60),
        },
        {
          name: 'authorImage',
          type: 'upload',
          relationTo: 'media',
          admin: {
            description: 'Headshot photo (increases trust significantly)',
          },
        },
        {
          name: 'companyLogo',
          type: 'upload',
          relationTo: 'media',
          admin: {
            description: 'Company logo (optional)',
          },
        },
        {
          name: 'rating',
          type: 'number',
          min: 1,
          max: 5,
          admin: {
            description: 'Star rating 1-5 (optional)',
          },
        },
      ],
    },

    // Metrics variant
    {
      name: 'metrics',
      type: 'array',
      label: 'Key Metrics',
      minRows: 2,
      maxRows: 4,
      admin: {
        description: 'Headline metrics (2-4)',
        condition: (data, siblingData) => siblingData?.variant === 'metrics',
      },
      fields: [
        {
          name: 'value',
          type: 'text',
          required: true,
          admin: {
            description: 'The metric value (1-15 chars). e.g., "40%", "3x", "12 weeks"',
          },
          validate: textLength(1, 15),
        },
        {
          name: 'label',
          type: 'text',
          required: true,
          admin: {
            description: 'What it measures (15-60 chars). e.g., "reduction in roadmap debates"',
          },
          validate: textLength(15, 60),
        },
        {
          name: 'context',
          type: 'text',
          admin: {
            description: 'Optional context (20-80 chars). e.g., "average across all customers"',
          },
          validate: textLength(20, 80),
        },
      ],
    },

    // Logos variant
    {
      name: 'logos',
      type: 'array',
      label: 'Company Logos',
      minRows: 3,
      maxRows: 12,
      admin: {
        description: 'Company logos (3-12). Grayscale preferred.',
        condition: (data, siblingData) => siblingData?.variant === 'logos',
      },
      fields: [
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
          required: true,
          admin: {
            description: 'Company logo',
          },
        },
        {
          name: 'companyName',
          type: 'text',
          required: true,
          admin: {
            description: 'Company name for accessibility (5-40 chars)',
          },
          validate: textLength(5, 40),
        },
        {
          name: 'url',
          type: 'text',
          admin: {
            description: 'Optional link to case study or website',
          },
        },
      ],
    },

    {
      name: 'layout',
      type: 'select',
      defaultValue: 'grid',
      options: [
        { label: 'Grid', value: 'grid' },
        { label: 'Carousel', value: 'carousel' },
        { label: 'Stacked', value: 'stacked' },
      ],
      admin: {
        description: 'How items are displayed',
      },
    },
    {
      name: 'backgroundColor',
      type: 'select',
      defaultValue: 'default',
      options: [
        { label: 'Default (Page)', value: 'default' },
        { label: 'Light Gray', value: 'light-gray' },
        { label: 'Dark', value: 'dark' },
      ],
      admin: {
        description: 'Section background color',
      },
    },
  ],
}
