import React from 'react';


interface TrendHeaderProps {
  value: string;
  isPositive?: boolean;
}

export function TrendHeader({ value, isPositive }: TrendHeaderProps) {
  return (
    <div style={{ marginBottom: 'var(--space-lg)' }}>
      <div
        style={{
          fontSize: 13,
          fontWeight: 600,
          letterSpacing: 1,
          color: 'var(--color-text-secondary)',
          textTransform: 'uppercase',
          marginBottom: 'var(--space-xs)',
        }}
      >
        Trend
      </div>
      <div
        style={{
          fontSize: 28,
          fontWeight: 700,
          color: 'var(--color-text-primary)',
        }}
      >
        {value}
      </div>
    </div>
  );
}
