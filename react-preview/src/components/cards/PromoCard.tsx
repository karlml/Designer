import React, { ReactNode } from 'react';
import { ChevronRight } from 'lucide-react';
import { Card } from '../layout/Card';


interface PromoCardProps {
  badge?: ReactNode;
  title: string;
  description: string;
  linkText: string;
  onLinkClick?: () => void;
}

export function PromoCard({ badge, title, description, linkText, onLinkClick }: PromoCardProps) {
  return (
    <Card>
      <div style={{ padding: 'var(--space-lg)' }}>
        {badge && <div style={{ marginBottom: 'var(--space-md)' }}>{badge}</div>}
        <h3
          style={{
            fontSize: 20,
            fontWeight: 700,
            color: 'var(--color-text-primary)',
            marginBottom: 'var(--space-sm)',
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontSize: 15,
            color: 'var(--color-text-secondary)',
            lineHeight: 1.5,
            margin: 0,
          }}
        >
          {description}
        </p>
      </div>
      <button
        onClick={onLinkClick}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          background: 'none',
          border: 'none',
          borderTop: '1px solid var(--color-border-separator)',
          cursor: 'pointer',
          padding: 'var(--space-lg)',
        }}
      >
        <span style={{ fontSize: 17, fontWeight: 500, color: 'var(--color-text-primary)' }}>
          {linkText}
        </span>
        <ChevronRight size={20} color="var(--color-text-tertiary)" />
      </button>
    </Card>
  );
}
