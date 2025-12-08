import type { Block } from 'payload'
import { textLength, isValidUrl } from '../utils/validators'

export const CallToAction: Block = {
  slug: 'cta',
  labels: {
    singular: 'Call to Action',
    plural: 'Calls to Action',
  },
  fields: [
    {
      name: 'variant',
      type: 'select',
      defaultValue: 'standard',
      options: [
        { label: 'Standard', value: 'standard' },
        { label: 'Final (Ember/Brand)', value: 'final' },
        { label: 'Mid-Page (Compact)', value: 'mid' },
      ],
      admin: {
        description: 'Visual style. Use "Final" for page-ending CTAs, "Mid-Page" for inline CTAs.',
      },
    },
    {
      name: 'showLogoMark',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Display large logo mark above headline (recommended for Final variant)',
        condition: (data, siblingData) => siblingData?.variant === 'final',
      },
    },
    {
      name: 'headline',
      type: 'text',
      required: true,
      admin: {
        description: 'CTA headline (15-60 chars). e.g., "Build Products Customers Actually Want"',
      },
      validate: textLength(15, 60),
    },
    {
      name: 'subheadline',
      type: 'textarea',
      admin: {
        description: 'Supporting text (30-100 chars). e.g., "Start with evidence. Ship with confidence."',
      },
      validate: textLength(30, 100),
    },
    {
      type: 'row',
      fields: [
        {
          name: 'primaryCtaText',
          type: 'text',
          required: true,
          admin: {
            description: 'Primary button (10-25 chars). e.g., "Start Free Trial"',
            width: '50%',
          },
          validate: textLength(10, 25),
        },
        {
          name: 'primaryCtaUrl',
          type: 'text',
          required: true,
          admin: {
            description: 'Primary button URL',
            width: '50%',
          },
          validate: isValidUrl,
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'secondaryCtaText',
          type: 'text',
          admin: {
            description: 'Secondary button (10-25 chars). e.g., "Book a Demo"',
            width: '50%',
          },
          validate: textLength(10, 25),
        },
        {
          name: 'secondaryCtaUrl',
          type: 'text',
          admin: {
            description: 'Secondary button URL',
            width: '50%',
          },
          validate: isValidUrl,
        },
      ],
    },
    {
      name: 'trustSignals',
      type: 'array',
      label: 'Trust Signals',
      minRows: 0,
      maxRows: 5,
      admin: {
        description: 'Friction reducers below buttons (3-5 recommended). e.g., "No credit card required"',
      },
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
          admin: {
            description: '10-40 characters',
          },
          validate: textLength(10, 40),
        },
      ],
    },
    {
      name: 'backgroundColor',
      type: 'select',
      defaultValue: 'default',
      options: [
        { label: 'Default (Page)', value: 'default' },
        { label: 'Brand Primary (Ember)', value: 'brand-primary' },
        { label: 'Brand Secondary', value: 'brand-secondary' },
        { label: 'Dark', value: 'dark' },
        { label: 'Light', value: 'light' },
      ],
      admin: {
        description: 'Background color. Use "Brand Primary" for final CTAs.',
      },
    },
  ],
}
