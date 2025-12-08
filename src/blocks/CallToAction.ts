import type { Block } from 'payload'

export const CallToAction: Block = {
  slug: 'cta',
  labels: {
    singular: 'Call to Action',
    plural: 'Calls to Action',
  },
  fields: [
    {
      name: 'style',
      type: 'select',
      defaultValue: 'banner',
      options: [
        { label: 'Full-width Banner', value: 'banner' },
        { label: 'Card', value: 'card' },
        { label: 'Minimal', value: 'minimal' },
      ],
      admin: {
        description: 'Visual style of the CTA section',
      },
    },
    {
      name: 'heading',
      type: 'text',
      required: true,
      admin: {
        description: 'Main CTA headline (e.g., "Ready to get started?")',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      admin: {
        description: 'Supporting text for the CTA',
      },
    },
    {
      name: 'buttons',
      type: 'array',
      required: true,
      minRows: 1,
      maxRows: 2,
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
          admin: {
            description: 'Button text (e.g., "Start Free Trial")',
          },
        },
        {
          name: 'link',
          type: 'text',
          required: true,
          admin: {
            description: 'URL or path for the button',
          },
        },
        {
          name: 'variant',
          type: 'select',
          defaultValue: 'primary',
          options: [
            { label: 'Primary', value: 'primary' },
            { label: 'Secondary', value: 'secondary' },
            { label: 'Outline', value: 'outline' },
          ],
        },
        {
          name: 'openInNewTab',
          type: 'checkbox',
          defaultValue: false,
          admin: {
            description: 'Open link in a new browser tab',
          },
        },
      ],
    },
    {
      name: 'backgroundColor',
      type: 'select',
      defaultValue: 'brand-primary',
      options: [
        { label: 'Brand Primary', value: 'brand-primary' },
        { label: 'Brand Secondary', value: 'brand-secondary' },
        { label: 'Dark', value: 'dark' },
        { label: 'Light', value: 'light' },
      ],
    },
  ],
}
