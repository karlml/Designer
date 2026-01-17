import React, { ReactNode } from 'react';
import { CategoryType, categoryColors } from '../types';


interface CardProps {
  children: ReactNode;
  category?: CategoryType;
  shadow?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

export function Card({ children, category = 'default', shadow = false, padding = 'lg', onClick }: CardProps) {
  const paddings = {
    none: 0,
    sm: 'var(--space-md)',
    md: 'var(--space-lg)',
    lg: 'var(--space-xl)',
  };

  const bg = category === 'default' ? 'var(--color-bg-secondary)' : categoryColors[category].bg;
  const color = category === 'default' ? 'inherit' : categoryColors[category].text;

  return (
    <div
      onClick={onClick}
      style={{
        backgroundColor: bg,
        color: color,
        borderRadius: 'var(--radius-lg)',
        padding: paddings[padding],
        boxShadow: shadow ? 'var(--shadow-sm)' : 'none',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'transform 150ms ease',
        overflow: 'hidden',
      }}
    >
      {children}
    </div>
  );
}
