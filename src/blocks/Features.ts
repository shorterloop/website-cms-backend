import type { Block } from 'payload'
import { textLength, isValidUrl } from '../utils/validators'

export const Features: Block = {
  slug: 'features',
  labels: {
    singular: 'Features Grid',
    plural: 'Features Grids',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      admin: {
        description: 'Small text above heading (5-30 chars). e.g., "Why Choose Us"',
      },
      validate: textLength(5, 30),
    },
    {
      name: 'heading',
      type: 'text',
      admin: {
        description: 'Section heading (15-60 chars). e.g., "Everything You Need, Nothing You Don\'t"',
      },
      validate: textLength(15, 60),
    },
    {
      name: 'subheading',
      type: 'textarea',
      admin: {
        description: 'Intro text below heading (30-120 chars)',
      },
      validate: textLength(30, 120),
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
      minRows: 2,
      maxRows: 12,
      admin: {
        description: 'Feature items (2-12)',
      },
      fields: [
        {
          name: 'icon',
          type: 'select',
          options: [
            { label: 'Check', value: 'check' },
            { label: 'Star', value: 'star' },
            { label: 'Shield', value: 'shield' },
            { label: 'Lightning', value: 'lightning' },
            { label: 'Chart', value: 'chart' },
            { label: 'Users', value: 'users' },
            { label: 'Target', value: 'target' },
            { label: 'Puzzle', value: 'puzzle' },
            { label: 'Layers', value: 'layers' },
            { label: 'Compass', value: 'compass' },
            { label: 'Inbox', value: 'inbox' },
            { label: 'Signal', value: 'signal' },
          ],
          admin: {
            description: 'Icon from approved set',
          },
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          admin: {
            description: 'Custom image instead of icon (optional)',
          },
        },
        {
          name: 'title',
          type: 'text',
          required: true,
          admin: {
            description: 'Feature title (10-50 chars)',
          },
          validate: textLength(10, 50),
        },
        {
          name: 'tagline',
          type: 'text',
          admin: {
            description: 'One-line value prop (15-60 chars). e.g., "Turn noise into signal"',
          },
          validate: textLength(15, 60),
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          admin: {
            description: 'Feature description (40-150 chars)',
          },
          validate: textLength(40, 150),
        },
        {
          name: 'link',
          type: 'text',
          admin: {
            description: 'Optional "Learn more" link URL',
          },
          validate: isValidUrl,
        },
        {
          name: 'linkText',
          type: 'text',
          admin: {
            description: 'Link text (10-25 chars). e.g., "Explore →"',
            condition: (data, siblingData) => Boolean(siblingData?.link),
          },
          validate: textLength(10, 25),
        },
      ],
    },
    {
      name: 'backgroundColor',
      type: 'select',
      defaultValue: 'default',
      options: [
        { label: 'Default (Page)', value: 'default' },
        { label: 'Light Gray', value: 'light-gray' },
        { label: 'Brand Light', value: 'brand-light' },
      ],
      admin: {
        description: 'Section background color',
      },
    },
  ],
}
