import React, { ReactNode } from 'react';


interface CategoryCardProps {
  icon: ReactNode;
  label: string;
  count?: number;
  onClick?: () => void;
}

export function CategoryCard({ icon, label, count, onClick }: CategoryCardProps) {
  return (
    <div
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-md)',
        backgroundColor: 'var(--color-bg-secondary)',
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--space-lg)',
        cursor: onClick ? 'pointer' : 'default',
      }}
    >
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: 'var(--radius-md)',
          backgroundColor: 'var(--color-bg-elevated)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--color-text-primary)',
        }}
      >
        {icon}
      </div>
      <div>
        <div style={{ fontSize: 17, fontWeight: 500, color: 'var(--color-text-primary)' }}>{label}</div>
        {count !== undefined && (
          <div style={{ fontSize: 15, color: 'var(--color-text-tertiary)' }}>x{count}</div>
        )}
      </div>
    </div>
  );
}
