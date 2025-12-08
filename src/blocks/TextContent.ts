import type { Block } from 'payload'

export const TextContent: Block = {
  slug: 'textContent',
  labels: {
    singular: 'Text Content',
    plural: 'Text Contents',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      admin: {
        description: 'Optional section heading',
      },
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      admin: {
        description: 'The main content area - supports rich text formatting',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Optional image to accompany the text',
      },
    },
    {
      name: 'imagePosition',
      type: 'select',
      defaultValue: 'right',
      options: [
        { label: 'Left of text', value: 'left' },
        { label: 'Right of text', value: 'right' },
        { label: 'Above text', value: 'above' },
        { label: 'Below text', value: 'below' },
      ],
      admin: {
        condition: (data, siblingData) => Boolean(siblingData?.image),
        description: 'Where the image appears relative to the text',
      },
    },
    {
      name: 'backgroundColor',
      type: 'select',
      defaultValue: 'white',
      options: [
        { label: 'White', value: 'white' },
        { label: 'Light Gray', value: 'light-gray' },
        { label: 'Brand Primary', value: 'brand-primary' },
        { label: 'Brand Secondary', value: 'brand-secondary' },
      ],
      admin: {
        description: 'Background color for this section',
      },
    },
  ],
}
