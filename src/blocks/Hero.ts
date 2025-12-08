import type { Block } from 'payload'
import { textLength, isValidUrl } from '../utils/validators'

export const Hero: Block = {
  slug: 'hero',
  labels: {
    singular: 'Hero Section',
    plural: 'Hero Sections',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      admin: {
        description: 'Small text above headline (10-40 chars). e.g., "Discovery-First Product Management"',
      },
      validate: textLength(10, 40),
    },
    {
      name: 'headline',
      type: 'text',
      required: true,
      admin: {
        description: 'Main headline (20-60 chars). One sentence. Action-oriented. No jargon.',
      },
      validate: textLength(20, 60),
    },
    {
      name: 'headlineEmphasis',
      type: 'text',
      admin: {
        description: 'Word to highlight in brand color (3-20 chars). Must appear in headline.',
      },
      validate: textLength(3, 20),
    },
    {
      name: 'subheadline',
      type: 'textarea',
      required: true,
      admin: {
        description: 'Supporting text (40-160 chars). Expands on headline. Plain English value prop.',
      },
      validate: textLength(40, 160),
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
      type: 'row',
      fields: [
        {
          name: 'primaryCtaText',
          type: 'text',
          required: true,
          admin: {
            description: 'Primary button text (10-25 chars). e.g., "Start Free Trial"',
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
            description: 'Secondary button text (10-25 chars). e.g., "See How It Works"',
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
      name: 'trustNote',
      type: 'text',
      admin: {
        description: 'Trust signal below CTAs (10-40 chars). e.g., "No credit card required"',
      },
      validate: textLength(10, 40),
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
