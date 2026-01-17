import React, { ReactNode } from 'react';


interface SectionHeaderProps {
  title: string;
  action?: ReactNode;
  badge?: string;
}

export function SectionHeader({ title, action, badge }: SectionHeaderProps) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 'var(--space-lg)',
      }}
    >
      <h2 style={{ fontSize: 22, fontWeight: 700, letterSpacing: -0.2 }}>{title}</h2>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)' }}>
        {badge && (
          <span
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: 'var(--color-text-secondary)',
              padding: '4px 10px',
              borderRadius: 'var(--radius-full)',
              border: '1px solid var(--color-border-separator)',
            }}
          >
            {badge}
          </span>
        )}
        {action}
      </div>
    </div>
  );
}
