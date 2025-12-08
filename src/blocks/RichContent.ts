import type { Block } from 'payload'
import { textLength } from '../utils/validators'

export const RichContent: Block = {
  slug: 'richContent',
  labels: {
    singular: 'Rich Content',
    plural: 'Rich Contents',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      admin: {
        description: 'Small text above heading (5-30 chars). e.g., "Our Approach"',
      },
      validate: textLength(5, 30),
    },
    {
      name: 'heading',
      type: 'text',
      admin: {
        description: 'Section heading (15-80 chars)',
      },
      validate: textLength(15, 80),
    },
    {
      name: 'subheading',
      type: 'textarea',
      admin: {
        description: 'Text below heading (30-160 chars)',
      },
      validate: textLength(30, 160),
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      admin: {
        description: 'Main content area - supports rich text formatting, links, and embedded media',
      },
    },
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Optional image or media to accompany the content',
      },
    },
    {
      name: 'mediaAlt',
      type: 'text',
      admin: {
        description: 'Accessibility description for the media (20-100 chars)',
        condition: (data, siblingData) => Boolean(siblingData?.media),
      },
      validate: textLength(20, 100),
    },
    {
      name: 'mediaPosition',
      type: 'select',
      defaultValue: 'below',
      options: [
        { label: 'Above content', value: 'above' },
        { label: 'Below content', value: 'below' },
        { label: 'Left of content', value: 'left' },
        { label: 'Right of content', value: 'right' },
      ],
      admin: {
        description: 'Where the media appears relative to the text',
        condition: (data, siblingData) => Boolean(siblingData?.media),
      },
    },
    {
      name: 'layout',
      type: 'select',
      defaultValue: 'contained',
      options: [
        { label: 'Contained (max-width)', value: 'contained' },
        { label: 'Full Width', value: 'full' },
        { label: 'Narrow (reading width)', value: 'narrow' },
      ],
      admin: {
        description: 'Content width setting',
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
        { label: 'Brand Light', value: 'brand-light' },
      ],
      admin: {
        description: 'Section background color',
      },
    },
    {
      name: 'textAlign',
      type: 'select',
      defaultValue: 'left',
      options: [
        { label: 'Left', value: 'left' },
        { label: 'Center', value: 'center' },
      ],
      admin: {
        description: 'Text alignment (heading and content)',
      },
    },
  ],
}
