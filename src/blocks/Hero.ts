import type { Block } from 'payload'

export const Hero: Block = {
  slug: 'hero',
  labels: {
    singular: 'Hero Section',
    plural: 'Hero Sections',
  },
  imageURL: '/api/media/file/hero-block-preview.png',
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      admin: {
        description: 'The main headline for this section',
      },
    },
    {
      name: 'subheading',
      type: 'textarea',
      admin: {
        description: 'Supporting text that appears below the heading',
      },
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Optional background image for the hero section',
      },
    },
    {
      name: 'ctaButtons',
      type: 'array',
      label: 'Call to Action Buttons',
      maxRows: 2,
      admin: {
        description: 'Add up to 2 CTA buttons',
      },
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'link',
          type: 'text',
          required: true,
          admin: {
            description: 'URL or path (e.g., /contact or https://example.com)',
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
      ],
    },
    {
      name: 'alignment',
      type: 'select',
      defaultValue: 'center',
      options: [
        { label: 'Left', value: 'left' },
        { label: 'Center', value: 'center' },
        { label: 'Right', value: 'right' },
      ],
      admin: {
        description: 'Text alignment for the hero content',
      },
    },
  ],
}
