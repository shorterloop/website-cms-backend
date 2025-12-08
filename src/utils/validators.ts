/**
 * Reusable validation functions for Payload CMS fields
 * Based on content schema specifications
 */

type ValidateResult = string | true

/**
 * Validates text length within min/max bounds
 * @param min - Minimum character count (optional)
 * @param max - Maximum character count (optional)
 */
export const textLength = (min?: number, max?: number) => {
  return (value: string | null | undefined): ValidateResult => {
    if (!value) return true // Let 'required' handle empty values
    if (min !== undefined && value.length < min) {
      return `Minimum ${min} characters required (currently ${value.length})`
    }
    if (max !== undefined && value.length > max) {
      return `Maximum ${max} characters allowed (currently ${value.length})`
    }
    return true
  }
}

/**
 * Validates that text contains at least one number/metric
 * Used for results, stats, and metric fields
 */
export const containsMetric = (value: string | null | undefined): ValidateResult => {
  if (!value) return true
  // Check for numbers, percentages, or time-related words
  const hasNumber = /\d/.test(value)
  const hasPercentage = /%/.test(value)
  const hasTimeframe = /\b(week|month|day|hour|quarter|Q[1-4]|year)\b/i.test(value)

  if (!hasNumber && !hasPercentage && !hasTimeframe) {
    return 'Must include a specific number, percentage, or timeframe (e.g., "40%", "3x", "6 weeks")'
  }
  return true
}

/**
 * Validates URL format
 * Accepts relative paths (/about) or full URLs (https://example.com)
 */
export const isValidUrl = (value: string | null | undefined): ValidateResult => {
  if (!value) return true

  // Allow relative paths starting with /
  if (value.startsWith('/')) return true

  // Allow anchor links
  if (value.startsWith('#')) return true

  // Validate full URLs
  try {
    new URL(value)
    return true
  } catch {
    return 'Must be a valid URL (e.g., /about or https://example.com)'
  }
}

/**
 * Validates slug format (lowercase, hyphens, no spaces)
 */
export const isValidSlug = (value: string | null | undefined): ValidateResult => {
  if (!value) return true

  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value)) {
    return 'Slug must be lowercase letters, numbers, and hyphens only (e.g., "about-us")'
  }
  return true
}

/**
 * Common field length presets based on schema specifications
 */
export const lengths = {
  eyebrow: { min: 5, max: 40 },
  headline: { min: 15, max: 80 },
  headlineShort: { min: 15, max: 60 },
  headlineLong: { min: 20, max: 100 },
  subheadline: { min: 30, max: 160 },
  description: { min: 40, max: 200 },
  descriptionLong: { min: 60, max: 400 },
  ctaLabel: { min: 10, max: 25 },
  ctaLabelShort: { min: 5, max: 20 },
  trustSignal: { min: 10, max: 40 },
  metaTitle: { min: 50, max: 60 },
  metaDescription: { min: 150, max: 160 },
  altText: { min: 20, max: 100 },
  quote: { min: 60, max: 250 },
  painPoint: { min: 15, max: 50 },
  painPointDetail: { min: 60, max: 200 },
  featureTitle: { min: 15, max: 50 },
  featureDescription: { min: 40, max: 150 },
  statValue: { min: 1, max: 10 },
  statLabel: { min: 15, max: 80 },
} as const

/**
 * Helper to create a length validator from presets
 */
export const validateLength = (preset: keyof typeof lengths) => {
  const { min, max } = lengths[preset]
  return textLength(min, max)
}
