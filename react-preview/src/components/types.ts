/**
 * Withings "Soft Wellness" Design System
 * Shared Type Definitions
 */

export type CategoryType = 'activity' | 'body' | 'heart' | 'sleep' | 'success' | 'default';

export const categoryColors: Record<CategoryType, { bg: string; text: string }> = {
  activity: { bg: 'var(--color-activity-bg)', text: 'var(--color-activity-text)' },
  body: { bg: 'var(--color-body-bg)', text: 'var(--color-body-text)' },
  heart: { bg: 'var(--color-heart-bg)', text: 'var(--color-heart-text)' },
  sleep: { bg: 'var(--color-sleep-bg)', text: 'var(--color-sleep-text)' },
  success: { bg: 'var(--color-success-bg)', text: 'var(--color-success-text)' },
  default: { bg: 'var(--color-bg-elevated)', text: 'var(--color-text-secondary)' },
};
