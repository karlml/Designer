import React, { ReactNode } from 'react';

interface RecommendationBubbleProps {
  icon?: ReactNode;
  title: string;
  description: string;
  backgroundColor?: string;
  iconBgColor?: string;
  iconColor?: string;
  textColor?: string;
  onClick?: () => void;
}

export function RecommendationBubble({
  icon,
  title,
  description,
  backgroundColor = 'var(--color-success-bg)',
  iconBgColor = 'var(--color-bg-secondary)',
  iconColor = 'var(--color-success-text)',
  textColor = 'var(--color-text-primary)',
  onClick,
}: RecommendationBubbleProps) {
  return (
    <div
      onClick={onClick}
      style={{
        backgroundColor,
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--space-lg)',
        cursor: onClick ? 'pointer' : 'default',
        maxWidth: '85%',
        marginLeft: 'auto',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: 'var(--space-md)',
        }}
      >
        {/* Icon container - 40px to match ListItem pattern */}
        {icon && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 40,
              height: 40,
              borderRadius: 'var(--radius-md)',
              backgroundColor: iconBgColor,
              color: iconColor,
              flexShrink: 0,
            }}
          >
            {icon}
          </div>
        )}
        <div style={{ flex: 1 }}>
          {/* Title - headline style: 17px, Semibold (600) */}
          <div
            style={{
              fontSize: 17,
              fontWeight: 600,
              color: textColor,
              marginBottom: 'var(--space-xs)',
            }}
          >
            {title}
          </div>
          {/* Description - body-small style: 15px, Regular (400) */}
          <p
            style={{
              fontSize: 15,
              fontWeight: 400,
              color: 'var(--color-text-secondary)',
              lineHeight: 1.4,
              margin: 0,
            }}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

interface RecommendationStackProps {
  children: ReactNode;
}

export function RecommendationStack({ children }: RecommendationStackProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-md)',
        padding: 'var(--space-lg)',
      }}
    >
      {children}
    </div>
  );
}
