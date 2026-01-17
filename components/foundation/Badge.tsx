import React, { ReactNode } from 'react';


interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'success' | 'activity' | 'body' | 'heart' | 'sleep';
  icon?: ReactNode;
  showDot?: boolean;
}

export function Badge({ children, variant = 'default', icon, showDot = false }: BadgeProps) {
  const colors: Record<string, { bg: string; text: string }> = {
    default: { bg: 'var(--color-bg-secondary)', text: 'var(--color-text-primary)' },
    success: { bg: 'var(--color-success-bg)', text: 'var(--color-success-text)' },
    activity: { bg: 'var(--color-activity-bg)', text: 'var(--color-activity-text)' },
    body: { bg: 'var(--color-body-bg)', text: 'var(--color-body-text)' },
    heart: { bg: 'var(--color-heart-bg)', text: 'var(--color-heart-text)' },
    sleep: { bg: 'var(--color-sleep-bg)', text: 'var(--color-sleep-text)' },
  };

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        padding: '8px 12px',
        borderRadius: 'var(--radius-full)',
        backgroundColor: colors[variant].bg,
        color: colors[variant].text,
        fontSize: 13,
        fontWeight: 600,
        boxShadow: variant === 'default' ? 'var(--shadow-md)' : 'none',
      }}
    >
      {showDot && (
        <span
          style={{
            width: 6,
            height: 6,
            borderRadius: 'var(--radius-full)',
            backgroundColor: 'currentColor',
          }}
        />
      )}
      {icon}
      {children}
    </span>
  );
}
