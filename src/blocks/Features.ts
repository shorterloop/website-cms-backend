import type { Block } from 'payload'

export const Features: Block = {
  slug: 'features',
  labels: {
    singular: 'Features Grid',
    plural: 'Features Grids',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      admin: {
        description: 'Section heading (e.g., "Why choose us?")',
      },
    },
    {
      name: 'subheading',
      type: 'textarea',
      admin: {
        description: 'Optional intro text below the heading',
      },
    },
    {
      name: 'columns',
      type: 'select',
      defaultValue: '3',
      options: [
        { label: '2 Columns', value: '2' },
        { label: '3 Columns', value: '3' },
        { label: '4 Columns', value: '4' },
      ],
      admin: {
        description: 'Number of features per row on desktop',
      },
    },
    {
      name: 'features',
      type: 'array',
      required: true,
      minRows: 1,
      maxRows: 12,
      admin: {
        description: 'Add feature items to display in the grid',
      },
      fields: [
        {
          name: 'icon',
          type: 'text',
          admin: {
            description: 'Icon name (e.g., "check", "star", "shield") - we\'ll map these to actual icons',
          },
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          admin: {
            description: 'Or use a custom image instead of an icon',
          },
        },
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
        {
          name: 'link',
          type: 'text',
          admin: {
            description: 'Optional link for "Learn more"',
          },
        },
      ],
    },
    {
      name: 'backgroundColor',
      type: 'select',
      defaultValue: 'white',
      options: [
        { label: 'White', value: 'white' },
        { label: 'Light Gray', value: 'light-gray' },
        { label: 'Brand Light', value: 'brand-light' },
      ],
    },
  ],
}
