import React, { ReactNode } from 'react';

interface CategoryPillProps {
  icon: ReactNode;
  label: string;
  iconBgColor?: string;
  iconColor?: string;
  onClick?: () => void;
  isSelected?: boolean;
}

export function CategoryPill({
  icon,
  label,
  iconBgColor = 'var(--color-bg-elevated)',
  iconColor = 'var(--color-text-secondary)',
  onClick,
  isSelected = false,
}: CategoryPillProps) {
  return (
    <button
      onClick={onClick}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--space-sm)',
        padding: '8px 16px 8px 8px',
        borderRadius: 'var(--radius-full)',
        backgroundColor: isSelected ? 'var(--color-bg-elevated)' : 'var(--color-bg-secondary)',
        border: '1px solid var(--color-border-subtle)',
        cursor: 'pointer',
        transition: 'all var(--duration-fast) var(--ease-default)',
        whiteSpace: 'nowrap',
      }}
    >
      {/* Icon container - 36px to be proportional for pill style (between 32 and 40) */}
      <span
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 36,
          height: 36,
          borderRadius: 'var(--radius-full)',
          backgroundColor: iconBgColor,
          color: iconColor,
          flexShrink: 0,
        }}
      >
        {icon}
      </span>
      {/* Label - body-small style: 15px, Regular (400) */}
      <span
        style={{
          fontSize: 15,
          fontWeight: 400,
          color: 'var(--color-text-primary)',
        }}
      >
        {label}
      </span>
    </button>
  );
}

interface CategoryPillScrollProps {
  children: ReactNode;
}

export function CategoryPillScroll({ children }: CategoryPillScrollProps) {
  return (
    <div
      style={{
        display: 'flex',
        gap: 'var(--space-sm)',
        overflowX: 'auto',
        padding: 'var(--space-sm) var(--space-xl)',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
      }}
    >
      {children}
    </div>
  );
}
